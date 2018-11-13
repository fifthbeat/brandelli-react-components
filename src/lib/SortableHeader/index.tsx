import * as React from "react";
import SortArrows from "./SortArrows";
import { SortableHeader } from "./styles";

interface Props {
  /** Spit sort array out of component */
  action?: any;
}
interface State {
  sort: any;
}

export default class extends React.Component<Props, State> {
  public readonly state: State = { sort: [0, 0, 0, 0] };

  public sortFunc = (index: number) => {
    const newSort = [0, 0, 0, 0];
    newSort[index] = (this.state.sort[index] + 1) % 3;
    if (newSort[index] === 0) {
      newSort[index] += 1;
    }
    this.setState({
      sort: newSort
    });
    // this.props.action(index);
  };

  public render() {
    const { sort } = this.state;
    return (
      <SortableHeader>
        <div onClick={() => this.sortFunc(0)}>
          <SortArrows sort={sort[0]} />
          <span>Titolone</span>
        </div>
        <div onClick={() => this.sortFunc(1)}>
          <SortArrows sort={sort[1]} />
          <span>cy</span>
        </div>
        <div onClick={() => this.sortFunc(2)}>
          <SortArrows sort={sort[2]} />
          <span>py</span>
        </div>
        <div onClick={() => this.sortFunc(3)}>
          <SortArrows sort={sort[3]} />
          <span>∆%</span>
        </div>
      </SortableHeader>
    );
  }
}
