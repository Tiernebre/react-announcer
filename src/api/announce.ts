import { dispatch } from "../hooks/use-announcer-store";

export const announce = (message: string) => {
  dispatch({
    type: "ANNOUNCE_MESSAGE",
    message,
  });
};
