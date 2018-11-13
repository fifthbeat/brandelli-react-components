import styled from "styled-components";

// interface SortableHeaderProps {}

export const SortableHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  border: 1px solid lightgray;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
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
  margin: 0 16px 0 24px;
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
