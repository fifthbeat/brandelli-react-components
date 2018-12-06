import styled, {css} from "styled-components";

export interface Table {
  headData: { id: string; label: string; color?: string }[];
  firstRow?: {
    id: string;
    data: { id: string; label: string; color?: string }[];
  };
  content: {
    id: string;
    data: { id: string; label: string; color?: string }[];
  }[];
  customClass?: string;
}

export const Table = styled.table.attrs((props: any) => ({
  className: props.customClass
}))`
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
  text-transform: uppercase;
`;

export interface ContentCell {
  color?: string;
}

export const ContentCell = styled.td`
  color: ${(props: ContentCell) => (props.color ? props.color : "inherit")};
`;

export interface HeaderCell {
  color?: string;
}

export const HeaderCell = styled.th`
  color: ${(props: HeaderCell) => (props.color ? props.color : "inherit")};
`;

export interface FirstElmCell {
  color?: string;
}

export const FirstElmCell = styled.td`
  color: ${(props: FirstElmCell) => (props.color ? props.color : "inherit")};
`;
