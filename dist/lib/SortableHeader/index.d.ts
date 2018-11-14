import * as React from "react";
interface Props {
    /** Spit sort array out of component */
    action?: any;
    /** Define the column title */
    contentToSort?: object[] | undefined;
    /** Define the custom class name to give at component */
    customClass?: string | undefined;
    /** Define the default sort order */
    default?: any;
}
interface State {
    sort: any;
}
export default class extends React.Component<Props, State> {
    static getDerivedStateFromProps(props: any, state: any): {
        sort: any;
        state?: undefined;
    } | {
        state: any;
        sort?: undefined;
    };
    readonly state: State;
    componentDidMount(): void;
    sortFunc: (index: number) => void;
    render(): JSX.Element;
    private createSort;
    private renderHeaderTitle;
}
export {};
