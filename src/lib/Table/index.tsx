import * as React from "react";
import {FirstElm, Table} from "./styles";

interface Props {
  /** Define data to show in the header of table */
  headData: { id: string; label: string }[];
  /** Define if there is first row of a table and the data inside it */
  firstRow?: { id: string; data: { id: string; label: string }[] };
  /** Define data to show in the body of table */
  content: { id: string; data: { id: string; label: string }[] }[];
  /** Define the custom class name to give at component */
  customClass?: string | undefined;
}
interface State {}

export default class extends React.Component<Props, State> {
  public readonly state: State = {};

  renderHeader(headData: { id: string; label: string }[]): JSX.Element[] {
    return headData.map((d, i) => <th key={d.id}>{d.label}</th>);
  }

  renderContent(
    content: { id: string; data: { id: string; label: string }[] }[]
  ): JSX.Element[] {
    return content.map((d, i) => (
      <tr key={d.id}>
        {d.data.map(f => (
          <td key={f.id}>{f.label}</td>
        ))}
      </tr>
    ));
  }

  renderFirstRow(content: {
    id: string;
    data: { id: string; label: string }[];
  }): JSX.Element {
    return (
      <FirstElm key={content.id} headData={content.data}>
        {content.data.map(f => (
          <td key={f.id}>{f.label}</td>
        ))}
      </FirstElm>
    );
  }

  render() {
    const {headData, content, customClass, firstRow} = this.props;
    return (
      <Table
        headData={headData}
        content={content}
        customClass={customClass}
        firstRow={firstRow}
      >
        <thead>
          <tr>{this.renderHeader(headData)}</tr>
          {firstRow && this.renderFirstRow(firstRow)}
        </thead>
        <tbody>{this.renderContent(content)}</tbody>
      </Table>
    );
  }
}
