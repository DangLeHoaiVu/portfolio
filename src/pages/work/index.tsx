import { FunctionComponent, useId } from "react";
import PortfolioList from "../../components/portfolioList/index";
import { NextSeo } from "next-seo";

interface WorkProps { }

const Work: FunctionComponent<WorkProps> = () => {
  const index = useId()
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Project | Dang Le Hoai Vu"
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
      <div className="content-center">
        <PortfolioList key={index} />
      </div>
    </>
  );
};

export default Work;
