import * as React from "react";
export interface IProps {
    /** test description goes here */
    test: string;
    /** test number 2 */
    provetta?: object | number;
}
declare class List extends React.Component<IProps, {}> {
    constructor(props: IProps);
    render(): JSX.Element;
}
export default List;
