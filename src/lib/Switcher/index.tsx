import * as React from "react";
import { Item, Switcher } from "./styles";

interface Props {
  /** Generate the content of the radio switcher.*/
  content: object[];
  /** Append some text at the bottom */
  footer?: string;
  /** Append some text at the top */
  header?: string;
  /** Save index of active element */
  action?: any;
  /** Default active element */
  elementActive?: number;
}
interface State {
  /** Define the active scope */
  radio: boolean[];
  /** Default element active */
  activeDefault: number;
}

export default class extends React.Component<Props, State> {
  public static getDerivedStateFromProps(props: any, state: any) {
    if (props.elementActive !== state.activeDefault) {
      const newRadio = state.radio;
      for (let i = 0; i < state.radio.length; i++) {
        if (props.elementActive == i) {
          state.radio[i] = true;
        } else {
          state.radio[i] = false;
        }
      }
      return { radio: newRadio, activeDefault: props.elementActive };
    }
    return { radio: [true] };
  }
  public readonly state: State = {
    radio: [true],
    activeDefault: 0
  };

  public componentDidMount() {
    this.createRadio();
  }

  public render() {
    const { content, footer, header } = this.props;
    console.log(this.state.radio);
    return (
      <Switcher>
        {header && <header>{header}</header>}
        <ul>{content && this.renderTimespanElm(content)}</ul>
        {footer && <footer>{footer}</footer>}
      </Switcher>
    );
  }

  private createRadio = () => {
    const { content } = this.props;
    const { radio } = this.state;
    for (
      let i = radio.length;
      i < this.renderTimespanElm(content).length;
      i++
    ) {
      radio.push(false);
    }
    return radio;
  };

  private selectItem = (index: number) => {
    const { radio } = this.state;
    const newRadio = radio;
    for (let i = 0; i < radio.length; i++) {
      if (index == i) {
        radio[i] = true;
      } else {
        radio[i] = false;
      }
    }
    this.setState({ radio: newRadio });
    this.props.action(index);
  };

  private renderTimespanElm = (data: object[]) =>
    data.map((d: any, index: number) => (
      <Item
        onClick={() => this.selectItem(index)}
        active={this.state.radio[index]}
        key={d.id}
      >
        {d.label}
      </Item>
    ));
}
