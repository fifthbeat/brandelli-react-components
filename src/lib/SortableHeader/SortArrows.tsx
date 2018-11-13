import * as React from "react";
import Icon from "../Icon";
import { SortDown, SortUp } from "../Icon/icons";
import { SortArrows } from "./styles";

interface Props {
  sort?: 0 | 1 | 2 | undefined;
}

interface State {}

export default class extends React.Component<Props, State> {
  public readonly state: State = {};

  public render() {
    const { sort } = this.props;
    return (
      <SortArrows sort={sort}>
        <Icon
          img={SortUp()}
          color={sort === 1 ? "green" : "grey"}
          theme={"fill"}
        />
        <div />
        <Icon
          img={SortDown()}
          color={sort === 2 ? "green" : "grey"}
          theme={"fill"}
        />
      </SortArrows>
    );
  }
}
