type Announce = (message: string) => void;

type UseAnnouncerReturnValue = {
  announce: Announce;
};

export const useAnnouncer = (): UseAnnouncerReturnValue => {
  return {
    announce: (message: string) => console.log(message),
  };
};
