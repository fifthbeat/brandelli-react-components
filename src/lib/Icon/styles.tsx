import styled, { css } from "styled-components";

interface IconProps {
  label?: { pos: string; text: string };
  size?: string;
  theme?: "outline" | "fill" | "none" | undefined;
  color?: string;
  customClass?: string;
}

export const Icon = styled.div.attrs({
  className: (props: any) => props.customClass
})`
  display: grid;
  grid-template-rows: ${(props: IconProps) => {
    switch (props.label && props.label.pos) {
      case "up":
        return `auto ${props.size}`;
      case "down":
        return `${props.size} auto`;
      default:
        return `${props.size}`;
    }
  }};
  grid-template-columns: ${(props: IconProps) => {
    switch (props.label && props.label.pos) {
      case "left":
        return `auto ${props.size}`;
      case "right":
        return `${props.size} auto`;
      default:
        return `${props.size}`;
    }
  }};
  align-items: center;
  transition: all 200ms ease-out;
  & > svg {
    justify-self: center;
    ${(props: IconProps) => {
      if (props.theme === "fill") {
        return css`
          fill: ${props.color};
        `;
      }
      return css`
        fill: none;
        stroke: ${props.color};
      `;
    }};
  }
  & > span {
    font-size: 16px;
    align-self: center;
    justify-self: center;
    color: ${(props: IconProps) => (props.color ? props.color : "black")};
    grid-row: ${(props: IconProps) => {
      switch (props.label && props.label.pos) {
        case "down":
          return 2;
        default:
          return 1;
      }
    }};
    grid-column: ${(props: IconProps) => {
      switch (props.label && props.label.pos) {
        case "right":
          return 2;
        default:
          return 1;
      }
    }};
  }
`;
