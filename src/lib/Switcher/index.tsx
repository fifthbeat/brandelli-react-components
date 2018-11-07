import * as React from "react";
import { Switcher } from "./styles";

interface SwitcherProps {
  /** Generate the content of the radio switcher.*/
  content: object[];
  /** Append some text at the bottom */
  footer?: string;
  /** Append some text at the top */
  header?: string;
}

export default class extends React.Component<SwitcherProps, {}> {
  constructor(props: SwitcherProps) {
    super(props);
    this.state = {};
  }

  public renderTimespanElm = (data: object[]) =>
    data.map((d: any) => <li key={d.id}>{d.label}</li>);

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
}
