export const Paragraph = (props: any) => {
  return (
    <div className="flex flex-col gap-10 md:w-2/3">
      <h3>{props.projectItem?.text.sectionA.h3}</h3>
      <p>{props.projectItem?.text.sectionA.p}</p>
    </div>
  );
};
