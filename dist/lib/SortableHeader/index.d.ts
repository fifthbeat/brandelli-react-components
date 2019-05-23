import * as React from 'react';
interface Props {
    /** Spit sort array out of component */
    action: (sort: number[]) => void;
    /** Define the column title */
    contentToSort: {
        id: number;
        label: string;
        hideSort?: boolean;
    }[];
    /** Define the custom class name to give at component */
    customClass?: string | undefined;
    /** Define the default sort order */
    defaultSort?: number[];
    /** Define active arrow color */
    arrowColor: string;
}
interface State {
    sort: number[] | null;
}
export default class extends React.Component<Props, State> {
    readonly state: State;
    componentDidMount(): void;
    renderHeaderTitle(data: object[], sort: number[], arrowColor: string): JSX.Element[];
    sortFunc(index: number): void;
    createSort(data: {
        id: number;
        label: string;
    }[]): number[];
    render(): JSX.Element;
}
export {};
