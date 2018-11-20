import * as React from "react";
import Icon from "../Icon";
import {SortDown, SortUp} from "../Icon/icons";
import {SortArrows} from "./styles";

interface Props {
  sort?: number | undefined;
  arrowColor: string;
}

interface State {}

export default class extends React.Component<Props, State> {
  public readonly state: State = {};

  public render() {
    const {sort, arrowColor} = this.props;
    return (
      <SortArrows>
        <Icon
          img={SortUp()}
          color={sort === 1 ? arrowColor : "grey"}
          theme={"fill"}
        />
        <div />
        <Icon
          img={SortDown()}
          color={sort === 2 ? arrowColor : "grey"}
          theme={"fill"}
        />
      </SortArrows>
    );
  }
}
