import styled, { css } from "styled-components";

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

interface ListProps {
  border?: boolean;
  direction?: string;
  size?: string;
  listHeight?: string;
  contentPosition?: string;
  absolute?: boolean;
}

export const List = styled.div.attrs({
  className: (props: any) => props.className
})`
  height: 100%;
  box-sizing: border-box;
  ${(props: ListProps) =>
    props.absolute &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    `};

  & > * {
    box-sizing: border-box;
  }

  & > ul {
    display: flex;
    flex-direction: ${(props: ListProps) =>
      props.direction ? props.direction : "column"};
    width: 100%;
    height: ${(props: ListProps) => props.listHeight};
    padding: 0;
    border-radius: 4px;

    ${(props: ListProps) =>
      props.border &&
      css`
        border: 1px solid lightgrey;
      `};

    list-style-type: none;
    & > li {
      display: flex;
      align-items: center;
      border-bottom: 1px solid lightgrey;
      padding: 0 16px;
      line-height: 1.2;

      &:last-of-type {
        border-bottom: none;
      }

      justify-content: ${(props: ListProps) => {
        switch (props.contentPosition) {
          case "end":
            return "flex-end";
          case "center":
            return "center";
          default:
            return "flex-start";
        }
      }};

      min-height: ${(props: ListProps) => {
        switch (props.size) {
          case "small":
            return "32px";
          case "large":
            return "64px";
          default:
            return "40px";
        }
      }};
    }
  }
`;

export const Item = styled.li.attrs({
  className: (props: any) => props.className
})`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid lightgrey;
  :last-of-type {
    border: none;
  }
`;
