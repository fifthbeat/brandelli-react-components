import styled, { css } from "styled-components";

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

export const Switcher = styled.div.attrs({
  className: (props: any) => props.className
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  border: 1px solid lightgray;
  & > header {
    border-bottom: 1px solid lightgray;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > ul {
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 100%;
    border-bottom: 1px solid lightgray;
    margin: 0;
    padding: 0;
  }
  & > footer {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface ItemProps {
  active?: boolean;
  children: any;
  key: any;
  customClass?: string;
}

export const Item = styled.li.attrs({
  className: (props: any) =>
    [props.active ? "active" : "inactive", props.customClass].join(" ")
})`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-right: 1px solid lightgray;
  ${(props: ItemProps) =>
    props.active
      ? css`
          background-color: black;
          color: white;
        `
      : css`
          background-color: white;
          color: black;
        `};
  &:last-of-type {
    border: none;
  }
`;
