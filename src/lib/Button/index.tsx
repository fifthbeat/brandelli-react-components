import * as React from "react";
import { Wrap } from "./styles";

interface IProps {}

class Button extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <Wrap>Ciao</Wrap>;
  }
}

export default Button;
