declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    hashSpy?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    activeClass?: string;
    className?: string;
    containerId?: string;
    ariaLabel?: string;
    role?: string;
    tabIndex?: number;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps, any> {}

  export interface ElementProps {
    name: string;
    className?: string;
    children?: React.ReactNode;
  }

  export class Element extends React.Component<ElementProps, any> {}

  export const Events: any;
  export const animateScroll: any;
  export const scrollSpy: any;
}
