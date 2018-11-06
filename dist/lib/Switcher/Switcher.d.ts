import * as React from "react";
interface IProps {
    /** Generate the content of the radio switcher */
    content: object[];
    /** Append some text at the bottom */
    footer?: string;
    /** Append some text at the top */
    header?: string;
}
declare class Switcher extends React.Component<IProps, {}> {
    constructor(props: IProps);
    renderTimespanElm: (data: object[]) => JSX.Element[];
    render(): JSX.Element;
}
export default Switcher;
