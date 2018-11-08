import * as React from "react";
interface Props {
    /** Generate the content of the radio switcher.*/
    content: object[];
    /** Append some text at the bottom */
    footer?: string;
    /** Append some text at the top */
    header?: string;
    /** Save index of active element */
    action?: any;
    /** Default active element */
    elementActive?: number;
}
interface State {
    /** Define the active scope */
    radio: boolean[];
}
export default class extends React.Component<Props, State> {
    static getDerivedStateFromProps(props: any, state: any): {
        radio: any;
    };
    readonly state: State;
    componentDidMount(): void;
    render(): JSX.Element;
    private createRadio;
    private selectItem;
    private renderTimespanElm;
}
export {};
