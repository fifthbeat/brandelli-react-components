import * as React from "react";
interface Props {
    /** Define data to show in the header of table */
    headData: {
        id: number;
        label: string;
    }[];
    /** Define data to show in the body of table */
    content: {
        id: number;
        data: {
            id: number;
            label: string;
        }[];
    }[];
    /** Define the custom class name to give at component */
    customClass?: string | undefined;
}
interface State {
}
export default class extends React.Component<Props, State> {
    readonly state: State;
    renderHeader(headData: {
        id: number;
        label: string;
    }[]): JSX.Element[];
    renderContent(content: {
        id: number;
        data: {
            id: number;
            label: string;
        }[];
    }[]): JSX.Element[];
    render(): JSX.Element;
}
export {};
