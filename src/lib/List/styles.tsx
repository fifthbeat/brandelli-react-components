import styled, {css} from 'styled-components';

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

interface IListWrap {
  border?: boolean;
  direction?: string;
  size?: string;
  listHeight?: string;
  contentPosition?: string;
}

export const IListWrap = styled.ul`
  display: flex;
  flex-direction: ${(props: IListWrap) => props.direction};
  width: calc(100% - 32px);
  height: ${(props: IListWrap) => props.listHeight};
  padding: 0;
  border-radius: 4px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  ${(props: IListWrap) =>
    props.border &&
    css`
      border: 1px solid lightgrey;
    `};

  & > li {
    list-style-type: none;
    justify-content: ${(props: IListWrap) => {
      switch (props.contentPosition) {
        case 'end':
          return 'flex-end';
        case 'center':
          return 'center';
        default:
          return 'flex-start';
      }
    }};

    ${(props: IListWrap) => {
      switch (props.size) {
        case 'small':
          return css`
            padding: 4px 16px;
            min-height: 40px;
          `;
        case 'large':
          return css`
            padding: 16px 16px;
            min-height: 80px;
          `;
        default:
          return css`
            padding: 16px 16px;
            min-height: 60px;
          `;
      }
    }};
  }
`;

export const ScrollArea = styled.div`
  height: 100%;
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
