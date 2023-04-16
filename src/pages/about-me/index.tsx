import SocialContact from "@/components/socialContact";
import { FunctionComponent } from "react";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <section
        className="flex justify-around"
        style={{ padding: "40px 20px 20px 20px" }}
      >
        <div className="container flex-auto grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="">
            <p className="text-6xl font-semibold">
              Hi, <br />
              I'm Hoai Vu <br />
              Fullstack Web Developer.
            </p>
            <p className="my-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident temporibus sed, impedit dignissimos ipsam blanditiis
              consectetur, suscipit voluptatum vel facere illo cumque eos ullam
              nostrum laboriosam, dolorum corporis aliquid. Quo.
            </p>
          </div>
        </div>
      </section>
      <section
        className="flex justify-around"
        style={{ padding: "40px 20px 20px 20px" }}
      >
        <div className="container">
          <div className="text-3xl font-bold mb-28">
            <p>Work experience</p>
            <div className="flex gap-4 my-5">
              <p className="text-cyan-600 text-3xl font-semibold">/</p>
              <p className="text-3xl font-semibold">Sep 2022 - Dec 2022</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xl font-medium">
                Fontend Developer -{" "}
                <a
                  href="https://www.fpt-software.com/"
                  className="text-slate-600 hover:text-slate-500"
                >
                  FPT Software
                </a>
              </p>
              <p className="text-xl font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                aliquam modi animi inventore molestiae doloribus ea possimus
                ducimus laborum perferendis earum quibusdam at quia aliquid
                delectus voluptatum nam omnis quidem? Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Magni quaerat rem suscipit
                soluta eligendi ut, dolor sunt, non eius aperiam rerum dolorem
                minus aliquam hic impedit odio, fugiat deserunt. Cumque.
              </p>
            </div>
          </div>
          <div className="text-3xl font-bold my-28">
            <p>Education</p>
            <div className="flex gap-4 my-5">
              <p className="text-cyan-600 text-3xl font-semibold">/</p>
              <p className="text-3xl font-semibold">Oct 2019 - Current</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xl font-medium">
                Software Engineer -{" "}
                <a
                  href="https://hcmuni.fpt.edu.vn/"
                  className="text-slate-600 hover:text-slate-500"
                >
                  FPT University
                </a>
              </p>
              <p className="text-xl font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                aliquam modi animi inventore molestiae doloribus ea possimus
                ducimus laborum perferendis earum quibusdam at quia aliquid
                delectus voluptatum nam omnis quidem? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Sapiente unde id deserunt
                et. Beatae velit dolore inventore ducimus officiis! Sunt,
                dolorum dolorem? Recusandae labore tempore animi illum corrupti
                cupiditate architecto!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
