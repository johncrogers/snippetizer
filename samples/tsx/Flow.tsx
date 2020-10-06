import React, { useEffect, useState } from "react";

import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router";
import { Button } from "reactstrap";

import { FetchConnect } from "helpers/FetchConnect";
import { FetchControlledFlow } from "views/common/FetchControlledFlow";

export const $1Flow: React.FC<I$1FlowPropTypes> = (props: I$1FlowPropTypes) => {
  const { dispatch, text } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isSatisfied, setIsSatisfied] = useState(true);

  useEffect(() => {
    // Mount
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      // Unmount
    };
  }, []);

  console.group("$1");
  console.group("props:", props);
  console.table(props);
  console.groupEnd();
  console.log("props", props);
  console.groupEnd();

  return (
    <FetchControlledFlow
      {...{
        goal: <div>Goal</div>,
        requirements: [
          {
            component: <div>Loading...</div>,
            isSatisfied: isLoaded,
            name: "Loading",
          },
          {
            component: (
              <Button
                color="info"
                onClick={() => {
                  setIsSatisfied(true);
                }}
              >
                Satisfy
              </Button>
            ),
            isSatisfied,
            name: "Second",
          },
        ],
      }}
    />
  );
};

export default FetchConnect({
  ConnectedComponent: $1Flow,
  state: { stores: [] },
});

export interface I$1FlowPropTypes
  extends IRootStateType,
    RouteComponentProps<{}> {
  text: string;
  dispatch: Dispatch;
}
