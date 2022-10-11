import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

interface PageProperties {
  contentSlot: React.ReactElement;
}

export const Page = (props: PageProperties) => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 lg:gap-46">
      <Navbar />
      {props.contentSlot}
      <Footer />
    </div>
  );
};
