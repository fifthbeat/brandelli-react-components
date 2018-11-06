import * as React from "react";
import { Wrap } from "./styles";

interface IProps {
  content: object[];
  footer?: string;
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
