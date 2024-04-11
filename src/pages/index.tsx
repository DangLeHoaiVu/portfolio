/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
import SocialContact from "../components/socialContact/index";
import ButtonLink from "@/components/button/buttonLink";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import SkillCard from "../components/skillCard/index";
import Tooltip from "@mui/material/Tooltip";
import PortfolioList from "../components/portfolioList/index";
import { NextSeo } from "next-seo";
import { useId } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const index = useId()

  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Dang Le Hoai Vu"
        description="Dang Le Hoai Vu Portfolio, introduce about projects, experiences, education,...."
        openGraph={{
          url: '/',
          title: 'Dang Le Hoai Vu Portfolio',
          description: 'Dang Le Hoai Vu Portfolio, introduce about projects, experiences, education,....',
          images: [
            {
              url: '/image/avatar.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: '/image/avatar.jpg',
              width: 1200,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            }
          ],
          siteName: 'DangLeHoaiVu',
        }}
      />
      <section
        className="flex justify-around"
        style={{ padding: "40px 20px 20px 20px" }}
      >
        <div className="container grid xl:grid-cols-2 grid-cols-1 place-content-center">
          <div className="col-span-1 xl:order-1 order-2">
            <p className="xl:text-6xl lg:text-3xl text-xl xl:text-left text-center xl:mt-0 mt-3 font-semibold ">
              Hi, <br />
              I'm Hoai Vu <br />
              Fullstack Web Developer.
            </p>
            <div className="flex xl:justify-start justify-center">
              <SocialContact className="icon-intro flex flex-wrap gap-4 mt-5" />
            </div>
            <p className="my-5 xl:text-left text-center">Fontend / Backend</p>
          </div>
          <div className="col-span-1 flex justify-center xl:order-2 order-1">
            <img
              src="/image/avatar.jpg"
              alt="Avatar"
              className="object-scale-down rounded-full xl:h-[384px] xl:w-[384px] h-[192px] w-[192px]"
            />
          </div>
        </div>
      </section>

      {/*About me */}
      <section
        className="flex justify-around"
        style={{ padding: "80px 20px 20px 20px" }}
      >
        <div className="container lg:ml-10 md:ml-5">
          <div className="flex gap-4 my-5">
            <p className="text-cyan-600 xl:text-3xl lg:text-xl text-md font-semibold">/</p>
            <p className="text-cyan-700 xl:text-3xl lg:text-xl text-md font-semibold">ABOUT ME</p>
          </div>
          <div className="flex-auto grid md:grid-cols-2 sm:grid-cols-1 gap-4 my-5 items-center place-items-center place-content-center">
            <div>
              <p className="xl:text-5xl lg:text-2xl text-lg font-medium py-5">
                I’ve been developing websites since 2020
              </p>
              <p>
                As a front-end developer with 2 years of experience, I have a solid understanding of the Node.js runtime environment, its libraries, and tools. I specialize in working with Next.js, a popular React framework used for server-side rendering, static site generation, and hybrid rendering.
              </p>
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 xl:py-5 py-3 justify-items-center place-items-center">
              <div className="flex">
                <p className="xl:text-8xl text-6xl text-slate-500 font-bold">04</p>
                <p className="xl:text-4xl text-3xl text-slate-600 font-semibold ml-4">
                  Years of <br /> experience
                </p>
              </div>
              <div className="flex">
                <p className="xl:text-8xl text-6xl text-slate-500 font-bold">07</p>
                <p className="xl:text-4xl text-3xl text-slate-600 font-semibold ml-4">
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
            <PortfolioList key={index}>
              <div>
                <p className="text-6xl font-semibold my-10">
                  Take a look at the latest projects I’ve done
                </p>
                <ButtonLink
                  className="p-3 font-semibold text-3xl"
                  href="/work"
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
