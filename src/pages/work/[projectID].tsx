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
        <section className="flex justify-around" style={{ padding: "20px 0px 20px 0px" }}>
          <div className="text-3xl font-bold my-10">
            <div className="mx-10">
              <p>{prj.name}</p>
            </div>
            <div className="flex flex-col gap-3 my-10">
              <div className="w-full h-[700px] relative overflow-hidden bg-gray-900">
                <div className="absolute top-0 left-0 inset-0 flex items-center justify-self-center mx-10 w-max h-fit">
                  {prj.img.map((image, index) => (
                    <img key={index} className="w-2/3 h-2/3 -rotate-3 shadow-2xl" src={image} alt={`Img ${index}`} />
                  ))}
                </div>
              </div>
              <div className="mt-12 mx-10">
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
      {prjRender}
    </>
  );
};

export default ProjectDetail;
