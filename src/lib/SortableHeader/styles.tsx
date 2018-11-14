import styled from "styled-components";

interface SortableHeader {
  customClass?: string;
  contentToSort?: object[] | undefined;
}

export const SortableHeader = styled.div.attrs({
  className: (props: any) => props.customClass
})`
  display: grid;
  grid-template-columns: ${(props: SortableHeader) =>
    props.contentToSort && `${props.contentToSort.length}fr repeat(${props.contentToSort.length}, 1fr)`};  
  border: 1px solid lightgray;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    border-right: 1px solid lightgrey;
    :last-of-type {
      border: none;
    }
    & > span {
      text-transform: uppercase;
    }
  }
`;

interface SortArrows {
  sort?: 0 | 1 | 2 | undefined;
}

export const SortArrows = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  width: 13px;
  align-items: center;
  margin: 0 8px 0 0;
  padding: 6px 0;

  & > div {
    height: 8px;
    :first-of-type {
      ${(props: SortArrows) => props.sort === 1 && `pink`};
    }
    :last-of-type {
      ${(props: SortArrows) => props.sort === 2 && `pink`};
    }
  }
`;