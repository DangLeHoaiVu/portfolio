/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
import SocialContact from "../components/socialContact/index";
import ButtonLink from "@/components/button/buttonLink";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import SkillCard from "../components/skillCard/index";
import Tooltip from "@mui/material/Tooltip";
import PortfolioList from "../components/portfolioList/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

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
            <p className="text-cyan-700 text-3xl font-semibold">ABOUT ME</p>
          </div>
          <div className="flex-auto grid md:grid-cols-2 sm:grid-cols-1 gap-4 my-5 items-center">
            <div>
              <p className="text-5xl font-medium py-5">
                I’ve been developing websites since 2020
              </p>
              <p>
                As a front-end developer with 2 years of experience, I have a solid understanding of the Node.js runtime environment, its libraries, and tools. I specialize in working with Next.js, a popular React framework used for server-side rendering, static site generation, and hybrid rendering.
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
            <p className="text-cyan-700 text-3xl font-semibold">MY SKILLS</p>
          </div>
          <Tooltip title="Press SHIFT and scroll!">
            <SkillCard />
          </Tooltip>
        </div>
      </section>

      {/* Project list */}
      <section
        className="flex justify-around"
        style={{ padding: "80px 20px 20px 20px" }}
      >
        <div className="container">
          <div className="flex gap-4 my-5">
            <p className="text-cyan-600 text-3xl font-semibold">/</p>
            <p className="text-cyan-700 text-3xl font-semibold">MY PORTFOLIO</p>
          </div>
          <div>
            <PortfolioList>
              <div>
                <p className="text-6xl font-semibold my-10">
                  Take a look at the latest projects I’ve done
                </p>
                <ButtonLink
                  className="p-3 font-semibold text-3xl"
                  href="/about-me"
                >
                  More projects <TrendingFlatIcon />
                </ButtonLink>
              </div>
            </PortfolioList>
          </div>
        </div>
      </section>
    </>
  );
}
