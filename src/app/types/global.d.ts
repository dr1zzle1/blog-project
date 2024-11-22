declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }

  const className: IClassNames;
  export = className;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
  import React = require("react");
  export const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
