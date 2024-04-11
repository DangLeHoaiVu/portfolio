/* eslint-disable react/no-unescaped-entities */
import SocialContact from "@/components/socialContact";
import { NextSeo } from "next-seo";
import { FunctionComponent } from "react";

interface AboutProps { }

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="About | Dang Le Hoai Vu"
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
        <div className="container flex-auto">
          <div className="">
            <p className="xl:text-6xl text-4xl font-semibold">
              I'm Hoai Vu <br />
              Fullstack Web Developer.
            </p>
            <p className="xl:text-lg text-md my-5">
              A full-stack developer is a versatile professional who possesses the skills and knowledge to handle both the front-end and back-end aspects of web development. With expertise in both client-side and server-side technologies, a full-stack developer can seamlessly transition between creating captivating user interfaces and building robust server architectures.
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
            <div className="flex flex-col gap-10 my-5">
              <div>
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
                  <div className="flex flex-col gap-3 text-xl font-medium">
                    <li>Developing web applications based on design and software requirements.</li>
                    <li>Integrating with Web APIs from the backend team.</li>
                    <li>Practicing code reviews.</li>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-4 my-5">
                  <p className="text-cyan-600 text-3xl font-semibold">/</p>
                  <p className="text-3xl font-semibold">May 2023 - Dec 2023</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-xl font-medium">
                    Fullstack Developer Freelance -{" "}
                    <a
                      href="https://findicator.vn/"
                      className="text-slate-600 hover:text-slate-500"
                    >
                      Findicator
                    </a>
                  </p>
                  <div className="flex flex-col gap-3 text-xl font-medium">
                    <li>As a software engineer at this company, my primary responsibility is to design and develop an application that provides users with real-time access to the indexes of various industries in the Vietnamese stock market. This includes providing insights into the sales, profit, and overall strength of each stock code.</li>
                    <li>To achieve this, I will be utilizing the NestJS and NextJS frameworks to design and implement the application.</li>
                    <li>Throughout the development process, I will also be responsible for testing and debugging the application, as well as ensuring that it meets performance and security standards.</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-3xl font-bold my-28">
            <p>Education</p>
            <div className="flex gap-4 mb-5 mt-10">
              <p className="text-cyan-600 text-3xl font-semibold">/</p>
              <p className="text-3xl font-semibold">Oct 2019 - Jan 2024</p>
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
              <div className="flex flex-col gap-3 text-xl font-medium">
                <li>Studied software, including coursework in algorithms, data structures, programming languages, and computer architecture.</li>
                <li>Completed a many project on the design and development of a web application using the ReactJS, NextJS, NestJS, ExpressJS,... framework and MongoDB, MySQL database.</li>
                <li>Participated in various hackathons and coding competitions.</li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
