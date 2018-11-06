import * as React from 'react';
import Item from './Item';
import {IListWrap, ScrollArea} from './styles';

export interface IProps {
  /** add a border to the list  */
  border?: boolean;
  /** define list items direction */
  direction?: 'row' | 'column';
  /** define size of the list item */
  size?: 'small' | 'large';
  /** define height of the list */
  listHeight?: string;
  /** component inside the list */
  content: object[];
  /** define the item's content position */
  contentPosition?: 'end' | 'center';
}

class List extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public renderItems = (data: any[]) => {
    if (data && data.length > 0) {
      return data.map(d => <Item key={d.id}>{d.label}</Item>);
    }
    return <li>Ciao sono una lista vuota</li>;
  };

  public render() {
    const {content} = this.props;
    return (
      <ScrollArea>
        <IListWrap {...this.props}>{this.renderItems(content)}</IListWrap>
      </ScrollArea>
    );
  }
}

export default List;
