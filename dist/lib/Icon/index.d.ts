import "normalize.css";
import * as React from "react";
interface Props {
    /** Define position and icon's label */
    label?: {
        pos: string;
        text: string;
    };
    /** Define img to load */
    img: string | React.ReactElement<any>;
    /** Define if icon is filled or outlined */
    theme?: "outline" | "fill" | "none";
    /** Define icon's color */
    color?: string;
    /** Define component size */
    size?: string;
}
interface State {
}
export default class extends React.Component<Props, State> {
    readonly state: State;
    render(): JSX.Element;
}
export {};
