import React, { useEffect, useState } from "react";

import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router";
import { Container, Row, Col } from "reactstrap";

import { FetchConnect } from "helpers/FetchConnect";
import { BEM } from "helpers/BEM.helper";

export const $1Page: React.FC<I$1PagePropTypes> = (props: I$1PagePropTypes) => {
  const { dispatch, text } = props;

  const [isSatisfied, setIsSatisfied] = useState(true);

  useEffect(() => {
    return () => {
      document.body.classList.toggle("$1-page");
    };
  });
  useEffect(() => {
    document.body.classList.toggle("$1-page");
  });
  const classes = new BEM({
    block: { name: "$1" },
    elements: [{ name: "title" }, { name: "body" }],
  });

  console.group("$1");
  console.group("props:", props);
  console.table(props);
  console.groupEnd();
  console.log("props", props);
  console.groupEnd();

  return (
    <Container className={classes.getBlockClassNames()} fluid={true}>
      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          Body
        </Col>
      </Row>
    </Container>
  );
};

$1Page.defaultProps = {
  text: "$1Page",
};

export default FetchConnect({
  ConnectedComponent: $1Page,
  state: { stores: [] },
});

export interface I$1PagePropTypes
  extends IRootStateType,
    RouteComponentProps<{}> {
  text: string;
  dispatch: Dispatch;
}
