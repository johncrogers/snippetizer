/*
    TODO:
        - Fill names:
            1: actionGenerator
            2: ActionTag
            3: Endpoint
            4: Method
 */

export const $1 = (
  requestBody: I$2PayloadType
): IAuthenticatedRequestDefinition => ({
  body: requestBody,
  requestOptions: {
    method: "$4",
    // headers: { "Content-Type": "application/json" },
  },
  requestUrl: "$3",
});
