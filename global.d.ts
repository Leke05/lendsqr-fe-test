// global.d.ts
declare module "@fortawesome/react-fontawesome" {
  import { IconProp } from "@fortawesome/fontawesome-svg-core";
  import { CSSProperties, FunctionComponent, SVGProps } from "react";

  export interface FontAwesomeIconProps extends SVGProps<SVGSVGElement> {
    icon: IconProp;
    mask?: IconProp;
    className?: string;
    color?: string;
    spin?: boolean;
    pulse?: boolean;
    border?: boolean;
    fixedWidth?: boolean;
    inverse?: boolean;
    listItem?: boolean;
    flip?: "horizontal" | "vertical" | "both";
    size?:
      | "xs"
      | "lg"
      | "sm"
      | "1x"
      | "2x"
      | "3x"
      | "4x"
      | "5x"
      | "6x"
      | "7x"
      | "8x"
      | "9x"
      | "10x";
    rotation?: 90 | 180 | 270;
    pull?: "left" | "right";
    transform?: string | object;
    style?: CSSProperties;
  }

  export const FontAwesomeIcon: FunctionComponent<FontAwesomeIconProps>;
}
