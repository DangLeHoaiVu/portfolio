import { projectList } from "@/data/projectList";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import { iProject } from '../../interfaces/iProject';
import { NextSeo } from "next-seo";

interface ProjectDetailProps { }

const ProjectDetail: FunctionComponent<ProjectDetailProps> = () => {
  const [prjRender, setPrjRender] = useState<JSX.Element | null>(null);
  const [prj, setPrj] = useState<iProject | undefined>(undefined);
  const router = useRouter();
  const { projectID } = router.query;

  useEffect(() => {
    const selectedProject = projectList.find(item => item.id.toString() === projectID);
    if (selectedProject) {
      setPrj(selectedProject);
    }
  }, [projectID]);

  useEffect(() => {
    if (prj) {
      setPrjRender(
        <section className="flex justify-around" style={{ padding: "40px 20px 20px 20px" }}>
          <div className="container">
            <div className="text-3xl font-bold my-28">
              <p>{prj.name}</p>
              <div className="flex flex-col gap-3">
                {prj.img.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index}`} />
                ))}
                <div className="flex flex-col gap-3 text-xl font-medium">
                  {prj.description}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      setPrjRender(null);
    }
  }, [prj]);

  return <>
    {/* SEO */}
    <NextSeo
      title="Project|Dang Le Hoai Vu"
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
    {prjRender}
  </>;
};

export default ProjectDetail;
