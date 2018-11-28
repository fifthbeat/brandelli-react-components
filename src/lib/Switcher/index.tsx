import "normalize.css";
import * as React from "react";
import {Item, Switcher} from "./styles";

interface Props {
  /** Generate the content of the radio switcher. */
  content: { id: string; label: string; index: number }[];
  /** Append some text at the bottom */
  footer?: string;
  /** Append some text at the top */
  header?: string;
  /** Save index of active element */
  action: (index: number) => void;
  /** Default active element */
  elementActive?: number;
  /** Define the custom class name to give at component */
  customClass?: string | undefined;
}
interface State {
  /** Default element active */
  activeDefault: number;
  /** Define the active scope */
  radio: boolean[] | null;
}

export default class extends React.Component<Props, State> {
  static getDerivedStateFromProps(props: Props, state: State): State {
    if (
      state.radio &&
      props.elementActive &&
      props.elementActive !== state.activeDefault
    ) {
      const newRadio: boolean[] = state.radio.map(
        (d: boolean, i: number) => props.elementActive === i
      );
      return {
        ...state,
        activeDefault: props.elementActive,
        radio: [...newRadio]
      };
    }
    return {
      ...state
    };
  }
  readonly state: State = {
    activeDefault: 0,
    radio: null
  };

  componentDidMount() {
    this.setState({radio: this.createRadio(this.props.content)});
  }

  createRadio(
    content: { id: string; label: string; index: number }[]
  ): boolean[] {
    const newRadio: boolean[] = [];
    content.forEach(() => {
      newRadio.push(false);
    });
    newRadio[this.state.activeDefault] = true;
    return [...newRadio];
  }

  selectItem(index: number): void {
    const newRadio: boolean[] = this.createRadio(this.props.content);
    // STEP: populate the
    for (let i = 0; i < newRadio.length; i++) {
      if (index === i) {
        newRadio[i] = true;
      } else {
        newRadio[i] = false;
      }
    }
    this.setState({radio: newRadio});
    this.props.action(index);
  }

  renderTimespanElm(
    data: Array<{ id: string; label: string; index: number }>,
    customClass?: string
  ): JSX.Element[] {
    return data.map((d: any, index: number) => (
      <Item
        onClick={(event: React.MouseEvent<HTMLLIElement>): void =>
          this.selectItem(index)
        }
        active={this.state.radio && this.state.radio[index]}
        key={d.id}
        customClass={customClass}
      >
        {d.label}
      </Item>
    ));
  }

  render(): JSX.Element {
    const {content, footer, header, customClass} = this.props;
    return (
      <Switcher>
        {header && <header>{header}</header>}
        <ul>
          {content &&
            this.state.radio &&
            this.renderTimespanElm(content, customClass)}
        </ul>
        {footer && <footer>{footer}</footer>}
      </Switcher>
    );
  }
}
