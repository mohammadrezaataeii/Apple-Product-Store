import type { ComponentType, SVGProps } from "react";

interface BoxIconProps extends SVGProps<SVGSVGElement> {
  pack?: "basic" | "filled" | "brands";
  fill?: string;
  opacity?: number | string;
  width?: number | string;
  height?: number | string;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl";
  flip?: "horizontal" | "vertical";
  rotate?: number | string;
  removePadding?: boolean;
}

export interface navItemsType {
  label: string;
  icon: ComponentType<BoxIconProps>;
  activeIcon: ComponentType<BoxIconProps>;
  inactiveIcon: ComponentType<BoxIconProps>;
  path: string;
}

export interface socialType {
  label: string;
  icon: ComponentType<BoxIconProps>;
  url: string;
}
