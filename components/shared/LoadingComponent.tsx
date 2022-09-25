import React from "react";
import {State} from "../../types/reducer/State";

interface IProps {
  children: React.ReactElement;
  state: State
}

const LoadingComponent = ({children, state}: IProps) => {

  switch (state) {
    case State.IDLE:
    case State.LOADING:
      return (
        <div>
          Loading...
        </div>
      );

    case State.REJECTED:
      return (
        <div>
          State rejected pls review data and try again!
        </div>
      );

    case State.FINISHED:
      return (
        <>
          {children}
        </>
      );
  }
}


export default LoadingComponent;