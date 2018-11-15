import * as React from "react";
import SortArrows from "./SortArrows";
import { SortableHeader } from "./styles";

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
  public readonly state: State = {
    sort: null
  };

  public componentDidMount() {
    const {sort} = this.state;
    const {defaultSort, contentToSort} = this.props;
    if (sort === null) {
      this.setState({ sort: this.createSort(contentToSort) });
    }
    if(sort === null && defaultSort &&  defaultSort.length === contentToSort.length){
      this.setState({ sort: defaultSort });
    }
  }

  public sortFunc(index: number) {
    const newSort = this.createSort(this.props.contentToSort);
    if (newSort && this.state.sort) {
      newSort[index] = (this.state.sort[index] + 1) % 3;
      if (newSort[index] === 0) {
        newSort[index] += 1;
      }
      this.setState({
        sort: newSort
      });
    }
    // this.props.action(index);
  }

  public render() {
    const { sort } = this.state;
    const { contentToSort } = this.props;
    return (
      <SortableHeader {...this.props}>
        {contentToSort && sort && this.renderHeaderTitle(contentToSort, sort)}
      </SortableHeader>
    );
  }

  private renderHeaderTitle = (data: object[], sort?: number[]) =>
    data.map((d: any, index: number) => (
      <div key={d.id} onClick={() => this.sortFunc(d.id - 1)}>
        {sort && <SortArrows sort={sort[d.id - 1]} />}
        <span>{d.label}</span>
      </div>
    ));

  private createSort(data: object[]) {
    if (data) {
      const newSort = [];
      for (let i = 0; i < data.length; i++) {
        newSort.push(0);
      }
      return newSort;
    }
    return null;
  }
}
