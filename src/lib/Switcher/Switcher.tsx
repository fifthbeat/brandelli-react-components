import * as React from "react";
import { Wrap } from "./styles";

interface IProps {
  /** Generate the content of the radio switcher */
  content: object[];
  /** Append some text at the bottom */
  footer?: string;
  /** Append some text at the top */
  header?: string;
}

class Switcher extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public renderTimespanElm = (data: object[]) =>
    data.map((d: any) => <li key={d.id}>{d.label}</li>);

  public render() {
    const { content, footer, header } = this.props;
    return (
      <Wrap>
        {header && <header>{header}</header>}
        <ul>{content && this.renderTimespanElm(content)}</ul>
        {footer && <footer>{footer}</footer>}
      </Wrap>
    );
  }
}

export default Switcher;
