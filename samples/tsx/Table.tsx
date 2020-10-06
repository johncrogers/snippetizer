import React, { useEffect, useState } from "react";

import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router";

import { FetchConnect } from "helpers/FetchConnect";
import { BEM } from "helpers/BEM.helper";
import { FetchTable } from "views/common/tables/FetchTable";

export const $1Table: React.FC<I$1TablePropTypes> = (
  props: I$1TablePropTypes
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
    block: { name: "$1Table" },
    elements: [{ name: "temporaryPassword", extras: [] }],
  });

  console.group("$1");
  console.group("props:", props);
  console.table(props);
  console.groupEnd();
  console.log("props", props);
  console.groupEnd();

  return (
    <FetchTable
      {...{
        className: "-striped -highlight primary-pagination",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
        data: [{ firstName: "John", lastName: "Rogers" }],
        defaultSorted: [{ id: "name", desc: false }],
        manual: false,
        minRows: 20,
        filterable: true,
        pageSizeOptions: [20, 50, 100],
        showPaginationBottom: true,
        showPaginationTop: false,
      }}
    />
  );
};

export default FetchConnect({
  ConnectedComponent: $1Table,
  state: { stores: [] },
});

export interface I$1TablePropTypes
  extends IRootStateType,
    RouteComponentProps<{}> {
  text: string;
  dispatch: Dispatch;
}
