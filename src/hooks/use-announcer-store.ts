import { useState } from "react";

type Action = {
  type: "ANNOUNCE_MESSAGE";
  message: string;
};

type State = {
  message: string;
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ANNOUNCE_MESSAGE":
      return {
        ...state,
        message: action.message,
      };
  }
};

export const useAnnouncerStore = () => {
  const [state, setState] = useState<State>();
};
