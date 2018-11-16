import "normalize.css";
import * as React from "react";
interface Props {
    /** Generate the content of the radio switcher.*/
    content: Array<{
        id: number;
        label: string;
    }>;
    /** Append some text at the bottom */
    footer?: string;
    /** Append some text at the top */
    header?: string;
    /** Save index of active element */
    action: (index: number) => void;
    /** Default active element */
    elementActive?: number;
    /** Define the custom class name to give at component */
    customClass?: string | undefined;
}
interface State {
    /** Default element active */
    activeDefault: number;
    /** Define the active scope */
    radio: boolean[];
}
export default class extends React.Component<Props, State> {
    readonly state: State;
    componentDidMount(): void;
    static getDerivedStateFromProps(props: Props, state: State): State;
    createRadio(): boolean[];
    selectItem(index: number): void;
    renderTimespanElm(data: Array<{
        id: number;
        label: string;
    }>, customClass?: string): JSX.Element[];
    render(): JSX.Element;
}
export {};
