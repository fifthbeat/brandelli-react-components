import * as React from "react";
interface Props {
    /** Define data to show in the header of table */
    headData: {
        id: string;
        label: string;
        color?: string;
    }[];
    /** Define if there is first row of a table and the data inside it */
    firstRow?: {
        id: string;
        data: {
            id: string;
            label: string;
            color?: string;
        }[];
    };
    /** Define data to show in the body of table */
    content: {
        id: string;
        data: {
            id: string;
            label: string;
            color?: string;
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
        id: string;
        label: string;
        color?: string;
    }[]): JSX.Element[];
    renderContent(content: {
        id: string;
        data: {
            id: string;
            label: string;
            color?: string;
        }[];
    }[]): JSX.Element[];
    renderFirstRow(content: {
        id: string;
        data: {
            id: string;
            label: string;
            color?: string;
        }[];
    }): JSX.Element;
    render(): JSX.Element;
}
export {};
