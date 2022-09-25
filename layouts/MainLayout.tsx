import React from "react";
import {PropsChildren} from "../types/PropsChildren";
import {Col, Container, FormGroup, Input} from "reactstrap";


const MainLayout = (props: PropsChildren) => {
  return (
    <Container className="vh-100 pt-5">
      <div className="center-content">
        <Col md={6} sm={12}>
          <FormGroup>
            <Input className="rounded-pill" placeholder="Search..."/>
          </FormGroup>
        </Col>
      </div>
      {props.children}
    </Container>
  )
}

export default MainLayout;