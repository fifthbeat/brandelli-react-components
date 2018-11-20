import * as React from "react";
import SortArrows from "./SortArrows";
import {SortableHeader} from "./styles";

interface Props {
  /** Spit sort array out of component */
  action: (index: number) => void;
  /** Define the column title */
  contentToSort: { id: number; label: string }[];
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
  readonly state: State = {
    sort: null
  };

  componentDidMount() {
    const {sort} = this.state;
    const {defaultSort, contentToSort} = this.props;
    if (!sort && defaultSort && defaultSort.length === contentToSort.length) {
      this.setState({sort: defaultSort});
    } else if (!sort) {
      this.setState({sort: this.createSort(contentToSort)});
    }
  }

  renderHeaderTitle(
    data: object[],
    sort: number[],
    arrowColor: string
  ): JSX.Element[] {
    return data.map((d: any, index: number) => (
      <div key={d.id} onClick={() => this.sortFunc(d.id - 1)}>
        {d.label !== "" && (
          <SortArrows sort={sort[d.id - 1]} arrowColor={arrowColor} />
        )}
        <span>{d.label}</span>
      </div>
    ));
  }

  sortFunc(index: number): void {
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

  createSort(data: { id: number; label: string }[]): number[] {
    const newSort: number[] = [];
    data.forEach((data: { id: number; label: string }) => {
      // NOTE: In order to use forEach statement and have not compiling errors we use push(data.id - data.id) instead of push(0)
      newSort.push(data.id - data.id);
    });
    return newSort;
  }

  render() {
    const {sort} = this.state;
    const {contentToSort, customClass, arrowColor} = this.props;
    if (!sort) {
      return null;
    }
    return (
      <SortableHeader
        customClass={customClass}
        contentToSort={contentToSort}
        arrowColor={arrowColor}
      >
        {this.renderHeaderTitle(contentToSort, sort, arrowColor)}
      </SortableHeader>
    );
  }
}
