import React from "react";
import {PropsChildren} from "../types/PropsChildren";
import {Container} from "reactstrap";


const MainLayout = (props: PropsChildren) => {
  return (
    <Container className="vh-100" fluid>
      {props.children}
    </Container>
  )
}

export default MainLayout;