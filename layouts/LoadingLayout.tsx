import {PropsChildren} from "../types/PropsChildren";
import useRouterState from "../hooks/useRouterState";
import {State} from "../types/reducer/State";
import {Spinner} from "reactstrap";

const LoadingLayout = (props: PropsChildren) => {

  const [loading] = useRouterState();

  switch (loading) {
    case State.LOADING:
      return (
        <div className="float d-flex justify-content-center align-items-center vh-100 w-100">
          <Spinner/>
        </div>
      );
    default:
      return (
        <>
          {props.children}
        </>
      )
  }
}

export default LoadingLayout;