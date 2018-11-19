import "normalize.css";
import * as React from "react";
import { Item, Switcher } from "./styles";

interface Props {
  /** Generate the content of the radio switcher.*/
  content: Array<{ id: number; label: string }>;
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
  radio: boolean[];
}

export default class extends React.Component<Props, State> {
  public readonly state: State = {
    activeDefault: 0,
    radio: [true, false, false]
  };

  public componentDidMount() {
    this.createRadio();
  }

  public static getDerivedStateFromProps(props: Props, state: State): State {
    if (props.elementActive && props.elementActive !== state.activeDefault) {
      const newRadio = state.radio;
      for (let i = 0; i < state.radio.length; i++) {
        if (props.elementActive === i) {
          state.radio[i] = true;
        } else {
          state.radio[i] = false;
        }
      }
      return {
        ...state,
        radio: newRadio,
        activeDefault: props.elementActive
      };
    }
    return {
      ...state
    };
  }

  public createRadio(): boolean[] {
    const { content } = this.props;
    const { radio } = this.state;
    for (let i = radio.length; i < content.length; i++) {
      radio.push(false);
    }
    return radio;
  }

  public selectItem(index: number): void {
    const newRadio: boolean[] = [...this.state.radio];
    // STEP: populate the
    for (let i = 0; i < newRadio.length; i++) {
      if (index === i) {
        newRadio[i] = true;
      } else {
        newRadio[i] = false;
      }
    }
    this.setState({ radio: newRadio });
    this.props.action(index);
  }

  public renderTimespanElm(
    data: Array<{ id: number; label: string }>,
    customClass?: string
  ): JSX.Element[] {
    return data.map((d: any, index: number) => (
      <Item
        onClick={(event: React.MouseEvent<HTMLLIElement>): void =>
          this.selectItem(index)
        }
        active={this.state.radio[index]}
        key={d.id}
        customClass={customClass}
      >
        {d.label}
      </Item>
    ));
  }

  public render(): JSX.Element {
    const { content, footer, header, customClass } = this.props;
    // console.log(this.state.radio);
    return (
      <Switcher>
        {header && <header>{header}</header>}
        <ul>{content && this.renderTimespanElm(content, customClass)}</ul>
        {footer && <footer>{footer}</footer>}
      </Switcher>
    );
  }
}
