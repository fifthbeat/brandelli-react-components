import styled from "styled-components";

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

export const Wrap = styled.div`
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
    & > li {
      display: flex;
      height: 100%;
      width: 100%;
      flex: 1;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      border-right: 1px solid lightgray;
      :last-of-type {
        border: none;
      }
    }
  }
  & > footer {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
