import styled, {css} from 'styled-components';

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

interface IListWrap {
  border?: boolean;
  direction?: string;
  size?: string;
  maxHeight?: string;
}

export const IListWrap = styled.ul`
  display: flex;
  flex-direction: ${(props: IListWrap) => props.direction};
  width: calc(100% - 32px);
  max-height: ${(props: IListWrap) => props.maxHeight};
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
    padding: ${(props: IListWrap) => {
      switch (props.size) {
        case 'small':
          return '4px 16px';
        case 'large':
          return '16px 16px';
        default:
          return '8px 16px';
      }
    }};
  }
`;

export const ScrollArea = styled.div`
  height: 100%;
`;

interface IItemWrap {
  height?: string;
}

export const IItemWrap = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${(props: IItemWrap) => props.height};
  border-bottom: 1px solid lightgrey;
  :last-of-type {
    border: none;
  }
`;
