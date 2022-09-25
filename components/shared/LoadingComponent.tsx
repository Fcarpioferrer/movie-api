import React from "react";
import {State} from "../../types/reducer/State";
import {Spinner} from "reactstrap";

interface IProps {
  children: React.ReactElement;
  state: State
}

const LoadingComponent = ({children, state}: IProps) => {

  switch (state) {
    case State.LOADING:
      return (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Spinner/>
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