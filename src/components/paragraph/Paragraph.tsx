interface ParagraphProperties {
  h2: boolean;
  h2Text?: string;
  h3: boolean;
  h3Text?: string;
  p: boolean;
  pText?: string;
  position: "left" | "right";
}

export const Paragraph = (props: ParagraphProperties) => {
  return (
    <div
      className={`flex flex-col gap-10 md:w-2/3 ${
        props.position === "left" ? "self-start" : "self-end"
      }`}
    >
      {props.h2 ? <h2>{props.h2Text}</h2> : null}
      {props.h3 ? <h3>{props.h3Text}</h3> : null}
      {props.p ? <p>{props.pText}</p> : null}
    </div>
  );
};
