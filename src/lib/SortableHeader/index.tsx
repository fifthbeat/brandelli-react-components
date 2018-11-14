import * as React from "react";
import SortArrows from "./SortArrows";
import { SortableHeader } from "./styles";

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
  defaultSort: any;
}

export default class extends React.Component<Props, State> {
  public static getDerivedStateFromProps(props: any, state: any) {
    if (props.default) {
      const newSort = state.sort;
      for (let i = 0; i < props.default; i++) {
        if (state.defaultSort === props.contentToSort[i].id) {
          state.sort[i] = 1;
        }
      }
      return { sort: newSort, defaultSort: null};
    }
    return { state };
  }
  public readonly state: State = { sort: [0, 0, 0, 0], defaultSort: this.props.default };

  public componentDidMount() {
    this.createSort();
  }

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
    const { contentToSort } = this.props;
    return (
      <SortableHeader {...this.props}>
        {contentToSort && this.renderHeaderTitle(contentToSort, sort)}
      </SortableHeader>
    );
  }

  private createSort = () => {
    const { contentToSort } = this.props;
    const { sort } = this.state;
    if(contentToSort) {
      for (
        let i = sort.length;
        i < this.renderHeaderTitle(contentToSort).length;
        i++
      ) {
        sort.push(0);
      }
    }
    return sort;
  };

  private renderHeaderTitle = (data: object[], sort?: number) =>
    data.map((d: any, index: number) => (
      <div key={d.id} onClick={() => this.sortFunc(d.id - 1)}>
        {sort && <SortArrows sort={sort[d.id - 1]} />}
        <span>{d.label}</span>
      </div>
    ));
}
