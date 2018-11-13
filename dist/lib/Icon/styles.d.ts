/// <reference types="react" />
interface IconProps {
    label?: {
        pos: string;
        text: string;
    };
    size?: string;
    theme?: "outline" | "fill" | "none" | undefined;
    color?: string;
}
export declare const Icon: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IconProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IconProps>;
export {};
