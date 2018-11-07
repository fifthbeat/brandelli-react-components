/// <reference types="react" />
interface ListProps {
    border?: boolean;
    direction?: string;
    size?: string;
    listHeight?: string;
    contentPosition?: string;
}
export declare const List: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ListProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ListProps>;
export declare const Item: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, any, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;
export {};
