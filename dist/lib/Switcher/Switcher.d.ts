import * as React from "react";
interface IProps {
    content: object[];
    footer?: string;
    header?: string;
}
declare class Switcher extends React.Component<IProps, {}> {
    constructor(props: IProps);
    renderTimespanElm: (data: object[]) => JSX.Element[];
    render(): JSX.Element;
}
export default Switcher;
