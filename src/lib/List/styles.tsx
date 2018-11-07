import styled, { css } from "styled-components";

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

interface IWrap {
  border?: boolean;
  direction?: string;
  size?: string;
  listHeight?: string;
  contentPosition?: string;
}

export const Wrap = styled.div`
  height: 100%;
  box-sizing: border-box;

  & > * {
    box-sizing: border-box;
  }

  & > ul {
    display: flex;
    flex-direction: ${(props: IWrap) =>
      props.direction ? props.direction : "column"};
    width: calc(100% - 32px);
    height: ${(props: IWrap) => props.listHeight};
    padding: 0;
    border-radius: 4px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

  ${(props: IWrap) =>
    props.border &&
    css`
      border: 1px solid lightgrey;
    `};

  & > li {
    display: flex;
    align-items: center;
    list-style-type: none;
    border-bottom: 1px solid lightgrey;
    padding: 0 16px;
    line-height: 1.2;

    &:last-of-type {
      border-bottom: none;
    }

    justify-content: ${(props: IWrap) => {
      switch (props.contentPosition) {
        case "end":
          return "flex-end";
        case "center":
          return "center";
        default:
          return "flex-start";
      }
    }};
   
    min-height: ${(props: IWrap) => {
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
`;

export const IItemWrap = styled.li`
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
