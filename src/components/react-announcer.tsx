type ReactAnnouncerProperties = {
  text?: string;
};

export const ReactAnnouncer = ({
  text,
}: ReactAnnouncerProperties): JSX.Element => {
  return <div>{text}</div>;
};
