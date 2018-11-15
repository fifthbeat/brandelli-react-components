import * as React from "react";
interface Props {
    /** Spit sort array out of component */
    action?: any;
    /** Define the column title */
    contentToSort: object[];
    /** Define the custom class name to give at component */
    customClass?: string | undefined;
    /** Define the default sort order */
    defaultSort?: number[] | null | undefined;
}
interface State {
    sort: number[] | null;
}
export default class extends React.Component<Props, State> {
    readonly state: State;
    componentDidMount(): void;
    sortFunc(index: number): void;
    render(): JSX.Element;
    private renderHeaderTitle;
    private createSort;
}
export {};
