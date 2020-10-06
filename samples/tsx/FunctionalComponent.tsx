import React, { useEffect, useState } from "react";

import { Dispatch } from "redux";

import { FetchConnect } from "helpers/FetchConnect";
import { RouteComponentProps } from "react-router";

export const $1: React.FC<I$1PropTypes> = (props: I$1PropTypes) => {
  const { dispatch, text } = props;

  const [isSatisfied, setIsSatisfied] = useState(true);

  useEffect(() => {
    // Mount

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
    <div
      onClick={() => {
        setIsSatisfied(!isSatisfied);
      }}
    >
      {text}: {isSatisfied}
    </div>
  );
};

export default FetchConnect({
  ConnectedComponent: $1,
  state: { stores: [""] },
});

export interface I$1PropTypes extends IRootStateType, RouteComponentProps<{}> {
  text: string;
  dispatch: Dispatch;
}
