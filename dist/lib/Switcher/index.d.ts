import * as React from "react";
interface Props {
    /** Generate the content of the radio switcher.*/
    content: object[];
    /** Append some text at the bottom */
    footer?: string;
    /** Append some text at the top */
    header?: string;
}
interface State {
    /** Define the active scope */
    radio: boolean[];
}
export default class extends React.Component<Props, State> {
    readonly state: State;
    render(): JSX.Element;
    private selectItem;
    private renderTimespanElm;
}
export {};
