import styled, {css} from "styled-components";

export interface Table {
  headData: { id: string; label: string }[];
  firstRow?: { id: string; data: { id: string; label: string }[] };
  content: { id: string; data: { id: string; label: string }[] }[];
  customClass?: string;
}

export const Table = styled.table.attrs({
  className: (props: any): string | undefined => props.customClass
})`
  display: flex;
  flex-direction: column;
  & > thead {
    & > tr:first-of-type {
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
  }
  & > tbody {
    & > tr {
      display: grid;
      grid-template-columns: ${(props: Table) =>
        `3fr repeat(${props.headData.length - 1}, 1fr)`};
      height: 32px;
      align-items: center;
      border-bottom: 1px solid black;
      ${(props: Table) =>
        props.firstRow
          ? css`
              padding: 0 12px;
            `
          : css`
              padding: 0 4px;
            `}
    }
  }
`;

export interface FirstElm {
  headData: { id: string; label: string }[];
}

export const FirstElm = styled.tr`
  display: grid;
  grid-template-columns: ${(props: FirstElm) =>
    `3fr repeat(${props.headData.length - 1}, 1fr)`};
  height: 32px;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 0 4px;
`;
