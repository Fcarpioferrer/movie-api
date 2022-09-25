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
        <div className="center-content h-75">
          <Spinner color="primary"/>
        </div>
      );

    case State.REJECTED:
      return (
        <div>
          State rejected please review data and try again!
        </div>
      );

    default:
      return (
        <>
          {children}
        </>
      );
  }
}


export default LoadingComponent;