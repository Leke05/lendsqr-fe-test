import React from "react";
import { BallBeat } from "react-pure-loaders";

type BallBeatProps = {
  loading: boolean;
  loaderRef?: React.RefObject<HTMLDivElement>;
};

const GlobalBallBeat = ({ loading, loaderRef }: BallBeatProps) => {
  if (!loading) return null;

  return (
    <div className="text-center" ref={loaderRef}>
      <BallBeat color="#f26222" loading={loading} />
    </div>
  );
};

export default GlobalBallBeat;
