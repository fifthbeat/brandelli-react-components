import * as React from "react";
interface SwitcherProps {
    /** Generate the content of the radio switcher.*/
    content: object[];
    /** Append some text at the bottom */
    footer?: string;
    /** Append some text at the top */
    header?: string;
}
export default class extends React.Component<SwitcherProps, {}> {
    constructor(props: SwitcherProps);
    renderTimespanElm: (data: object[]) => JSX.Element[];
    render(): JSX.Element;
}
export {};
