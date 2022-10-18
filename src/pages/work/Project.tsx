import {
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Exit } from "../../components/exit/Exit";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Paragraph } from "../../components/paragraph/Paragraph";

const keywords = [
  ["Home", "/dashboard"],
  ["Team", "/team"],
  ["Projects", "/projects"],
  ["Reports", "/reports"],
];

export const Project = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="flex flex-col px-10 my-32 gap-52 lg:px-32 md:my-20">
        <div className="flex flex-col gap-5 md:w-2/3">
          <h1 className="font-bold">Model Making in the Digital Age</h1>
          <h2>2022 - Workshop</h2>
        </div>
        <Paragraph
          h2={false}
          h3={false}
          p={true}
          pText={"lorem"}
          position={"left"}
        />
        <div className="grid self-end justify-end grid-cols-2 gap-10 md:w-4/5">
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
        </div>
        <div className="flex flex-col self-start justify-end gap-10 md:w-4/5">
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
        </div>
        <div className="flex flex-col gap-10 md:w-2/3">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            excepturi veritatis quod expedita minus eum qui blanditiis quis.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            sequi quisquam numquam inventore explicabo reiciendis adipisci
            voluptatem necessitatibus tempora porro facilis ducimus suscipit
            doloremque beatae, soluta eaque, cum ullam eius.
          </p>
        </div>
        <div className="flex flex-col self-end justify-start gap-10 md:w-4/5">
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
        </div>
        <div className="flex flex-col gap-10 md:w-2/3">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            excepturi veritatis quod expedita minus eum qui blanditiis quis.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            sequi quisquam numquam inventore explicabo reiciendis adipisci
            voluptatem necessitatibus tempora porro facilis ducimus suscipit
            doloremque beatae, soluta eaque, cum ullam eius.
          </p>
        </div>
      </section>
      <Exit />
      <Footer />
    </React.Fragment>
  );
};
