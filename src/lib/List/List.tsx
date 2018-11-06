import * as React from 'react';
import Item from './Item';
import {IListWrap, ScrollArea} from './styles';

export interface IProps {
  /** add a border to the list  */
  border?: boolean;
  /** define list items direction */
  direction?: 'row' | 'column';
  /** define size of the list */
  size?: 'small' | 'large';
  /** define min height of an element in the list */
  maxHeight?: string;
  /** component inside the list */
  content: object[];
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
    return <div>Ciao</div>;
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
