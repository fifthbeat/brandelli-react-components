import * as React from 'react';
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
declare class List extends React.Component<IProps, {}> {
    constructor(props: IProps);
    renderItems: (data: any[]) => JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
export default List;
