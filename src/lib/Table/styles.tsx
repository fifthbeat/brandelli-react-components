import styled from "styled-components";

export interface Table {
  headData: { id: number; label: string }[];
  content: { id: number; data: { id: number; label: string }[] }[];
  customClass?: string;
}

export const Table = styled.table.attrs({
  className: (props: any): string | undefined => props.customClass
})`
  display: flex;
  flex-direction: column;
  & > tr {
    display: grid;
    grid-template-columns: ${(props: Table) =>
      `3fr repeat(${props.headData.length - 1}, 1fr)`};
    height: 32px;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 0 4px;
    :first-of-type {
      height: 24px;
      background-color: gray;
      color: white;
    }
    & > th {
      justify-self: flex-start;
    }
  }
  & > tbody {
    & > tr {
      display: grid;
      grid-template-columns: ${(props: Table) =>
        `3fr repeat(${props.headData.length - 1}, 1fr)`};
      height: 32px;
      align-items: center;
      border-bottom: 1px solid black;
      padding: 0 4px;
    }
  }
`;
