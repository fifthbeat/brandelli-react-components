import * as React from "react";
import Item from "./Item";
export interface IProps {
    /** Data on which the list will iterate*/
    content: [{
        id: string;
        label: string;
    }];
    /** Add a border to the list  */
    border?: boolean;
    /** Define list items direction */
    direction?: "row" | "column";
    /** Define size of the list item */
    size?: "small" | "large";
    /** Define the item's content position */
    contentPosition?: "end" | "center";
    /** Define height of the list */
    listHeight?: string;
    /** If a defined list item is passed will be used to reder the data */
    renderItem?: any;
}
declare class List extends React.Component<IProps, {}> {
    static Item: typeof Item;
    constructor(props: IProps);
    renderDefalut: (content: [{
        id: string;
        label: string;
    }]) => JSX.Element[];
    render(): JSX.Element;
}
export default List;
