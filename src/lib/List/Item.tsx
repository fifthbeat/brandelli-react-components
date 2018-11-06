import * as React from 'react';
import {IItemWrap} from './styles';

export interface IProps {
  /** define the height of the element */
  height?: string;
  /** hey teacher leave the  kids alone  */
  children: object;
}

class Item extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <IItemWrap {...this.props}>{this.props.children}</IItemWrap>;
  }
}

export default Item;
