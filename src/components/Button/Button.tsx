import * as React from 'react';
import {Wrap} from './styles';

interface Props {}

class Button extends React.Component<Props, {}>{

  constructor(props: Props) {
  super(props);
  this.state = {};
  }

  render() {
  return (
  <Wrap>
    This is Button component
  </Wrap>
  );
  }
  }

  export default Button;