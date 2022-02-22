import { useState, useEffect } from "react";

type Action = {
  type: "ANNOUNCE_MESSAGE";
  message: string;
};

type State = {
  message: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ANNOUNCE_MESSAGE":
      return {
        ...state,
        message: action.message,
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = {
  message: "",
};

export const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);
  for (const listener of listeners) {
    listener(memoryState);
  }
};

export const useAnnouncerStore = () => {
  const [state, setState] = useState<State>();

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
  };
};
