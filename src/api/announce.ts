import { dispatch } from "../hooks";

export const announce = (message: string) => {
  dispatch({
    type: "ANNOUNCE_MESSAGE",
    message,
  });
};
