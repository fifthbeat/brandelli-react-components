import * as React from "react";
interface Props {
    sort?: number | undefined;
    arrowColor: string;
}
interface State {
}
export default class extends React.Component<Props, State> {
    readonly state: State;
    render(): JSX.Element;
}
export {};
