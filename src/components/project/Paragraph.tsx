export const Paragraph = (props: any) => {
  return (
    <div className={`flex flex-col ${props.position} gap-10 md:w-2/3`}>
      <h3>{props.sectionH3}</h3>
      <p>{props.sectionP}</p>
    </div>
  );
};
