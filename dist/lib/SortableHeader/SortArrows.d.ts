import * as React from "react";
interface Props {
    sort?: 0 | 1 | 2 | undefined;
}
interface State {
}
export default class extends React.Component<Props, State> {
    readonly state: State;
    render(): JSX.Element;
}
export {};
