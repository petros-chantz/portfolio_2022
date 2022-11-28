import { Exit } from "../components/Exit";

export const ComingSoon = () => {
  return (
    <section className="flex flex-col h-screen gap-10 p-5 md:p-10">
      <Exit />
      <section className="flex flex-col self-center justify-center pt-10 h-95">
        <h1 className="self-center font-medium text-7xl">Coming Soon!</h1>
      </section>
    </section>
  );
};
