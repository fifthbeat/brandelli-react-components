import * as React from "react";
import { Item, Switcher } from "./styles";

interface Props {
  /** Generate the content of the radio switcher.*/
  content: object[];
  /** Append some text at the bottom */
  footer?: string;
  /** Append some text at the top */
  header?: string;
}
interface State {
  /** Define the active scope */
  radio: boolean[];
}

export default class extends React.Component<Props, State> {
  public readonly state: State = {
    radio: [false, true, false, false]
  };

  public render() {
    const { content, footer, header } = this.props;
    return (
      <Switcher>
        {header && <header>{header}</header>}
        <ul>{content && this.renderTimespanElm(content)}</ul>
        {footer && <footer>{footer}</footer>}
      </Switcher>
    );
  }

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
