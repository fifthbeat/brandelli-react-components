import * as React from 'react';
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
declare class List extends React.Component<IProps, {}> {
    constructor(props: IProps);
    renderItems: (data: any[]) => JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
export default List;
