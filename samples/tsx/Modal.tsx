import React, { useEffect, useState } from "react";

import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";

import { BEM } from "helpers/BEM.helper";
import { FetchConnect } from "helpers/FetchConnect";
import FetchModal from "views/common/modals/FetchModal";

export const $1Modal: React.FC<I$1ModalPropTypes> = (
  props: I$1ModalPropTypes
) => {
  const { dispatch, text } = props;

  const [isSatisfied, setIsSatisfied] = useState(true);

  useEffect(() => {
    // Mount

    return () => {
      // Unmount
    };
  }, []);

  const classes = new BEM({
    block: { name: "$1Modal" },
    elements: [{ name: "temporaryPassword", extras: [] }],
  });

  console.group("$1");
  console.group("props:", props);
  console.table(props);
  console.groupEnd();
  console.log("props", props);
  console.groupEnd();

  return (
    <FetchModal title="$1" id="$1">
      <div>Body</div>
    </FetchModal>
  );
};

$1Modal.defaultProps = {
  text: "$1Modal",
};

export default FetchConnect({
  ConnectedComponent: $1Modal,
  state: { stores: [] },
});

export interface I$1ModalPropTypes
  extends IRootStateType,
    RouteComponentProps<{}> {
  text: string;
  dispatch: Dispatch;
}
