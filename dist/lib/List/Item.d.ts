import * as React from 'react';
export interface IProps {
    /** define the height of the element */
    height?: string;
    /** hey teacher leave the  kids alone  */
    children: object;
}
declare class Item extends React.Component<IProps, {}> {
    constructor(props: IProps);
    render(): JSX.Element;
}
export default Item;
