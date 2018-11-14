import * as React from "react";
interface Props {
    /** Spit sort array out of component */
    action?: any;
    /** Define the column title */
    contentToSort?: object[] | undefined;
    /** Define the custom class name to give at component */
    customClass?: string | undefined;
    /** Define the default sort order */
    default?: number | string | undefined;
}
interface State {
    sort: number[];
    defaultSort: number | string | undefined;
}
export default class extends React.Component<Props, State> {
    static getDerivedStateFromProps(props: any, state: any): {
        sort: any;
        defaultSort: any;
        state?: undefined;
    } | {
        state: any;
        sort?: undefined;
        defaultSort?: undefined;
    };
    readonly state: State;
    componentDidMount(): void;
    sortFunc: (index: number) => void;
    render(): JSX.Element;
    private createSort;
    private renderHeaderTitle;
}
export {};
