/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import SocialContact from "../components/socialContact/index";
import ButtonLink from "@/components/button/buttonLink";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import SkillCard from "../components/skillCard/index";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Tooltip from "@mui/material/Tooltip";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleSlideLeft = () => {
    let slider = document.getElementById("slider");
    if (slider != null) slider.scrollLeft = slider.scrollLeft - 900;
  };

  const handleSlideRight = () => {
    let slider = document.getElementById("slider");
    if (slider != null) slider.scrollLeft = slider.scrollLeft + 900;
  };

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
            <div>
              <SocialContact className="icon-intro flex flex-wrap gap-4 mt-5" />
            </div>
            <p className="my-5">Fontend / Backend</p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-xs max-h-xs">
              <img
                src="/image/avatar.jpg"
                alt="Avatar"
                className="object-scale-down rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/*About me */}
      <section
        className="flex justify-around"
        style={{ padding: "80px 20px 20px 20px" }}
      >
        <div className="container">
          <div className="flex gap-4 my-5">
            <p className="text-cyan-600 text-3xl font-semibold">/</p>
            <p className="text-3xl font-semibold">ABOUT ME</p>
          </div>
          <div className="flex-auto grid md:grid-cols-2 sm:grid-cols-1 gap-4 my-5 items-center">
            <div>
              <p className="text-5xl font-medium py-5">
                I’ve been developing websites since 2020
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo velit at laudantium iusto inventore dolore. Nesciunt
                atque asperiores porro omnis, accusamus ratione est cumque
                dicta, ipsa quis obcaecati eius incidunt.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 py-5 justify-items-center">
              <div className="flex">
                <p className="text-8xl text-slate-500 font-bold">04</p>
                <p className="text-4xl text-slate-600 font-semibold ml-4">
                  Years of <br /> experience
                </p>
              </div>
              <div className="flex">
                <p className="text-8xl text-slate-500 font-bold">04</p>
                <p className="text-4xl text-slate-600 font-semibold ml-4">
                  Successful <br /> projects
                </p>
              </div>
              {/* <p className="col-span-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi optio tenetur voluptates dicta. Laborum expedita
                fugiat, atque repudiandae aliquam commodi voluptatem sunt
                reprehenderit ex, deleniti aliquid ratione vitae quae enim.
              </p> */}
            </div>
          </div>
          <ButtonLink className="p-3 font-semibold text-3xl" href="/about-me">
            More about me <TrendingFlatIcon />
          </ButtonLink>
        </div>
      </section>

      {/* Skill list */}
      <section
        className="flex justify-around"
        style={{ padding: "80px 20px 20px 20px" }}
      >
        <div className="container">
          <div className="flex gap-4 my-5">
            <p className="text-cyan-600 text-3xl font-semibold">/</p>
            <p className="text-3xl font-semibold">MY SKILLS</p>
          </div>
          <div className="flex items-center">
            <ChevronLeftIcon
              fontSize="large"
              className="rounded-full hover:bg-white opacity-50"
              type="button"
              onClick={handleSlideLeft}
            />
            <Tooltip title="Press SHIFT and scroll!">
              <SkillCard />
            </Tooltip>
            <ChevronRightIcon
              fontSize="large"
              className="rounded-full hover:bg-white opacity-50"
              type="button"
              onClick={handleSlideRight}
            />
          </div>
        </div>
      </section>
    </>
  );
}
