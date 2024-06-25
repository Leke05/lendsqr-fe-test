declare module "react-pure-loaders" {
  import { Component } from "react";

  interface LoaderProps {
    loading: boolean;
    color?: string;
    sizeUnit?: string;
    size?: number;
  }

  export class BallBeat extends Component<LoaderProps> {}
  // Add other loaders if needed
}
