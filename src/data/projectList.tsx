import { iProject } from "@/interfaces/iProject";

const projectList: iProject[] = [
  {
    id: 1,
    name: "Training system",
    img: ["/image/projects_image/trainingSystem-1.png", "/image/projects_image/trainingSystem-2.png"],
    description: "The system enables trainers to easily manage education schedules, programs, and classes for trainees. Trainers can create customized schedules, define education programs, and assign trainees to appropriate classes. They can track attendance, monitor progress, and generate reports. Trainees can access their schedules, materials, and communicate with trainers and peers. Overall, the system streamlines the management of educational activities, enhancing the learning experience for both trainers and trainees.",
  },
  {
    id: 2,
    name: "Findicator",
    img: ['/image/projects_image/findicator-1.png', '/image/projects_image/findicator-2.png'],
    description: "The website provides users with a platform to track and monitor the import and export production of various companies. Users can easily access information regarding the quantities and values of goods being imported and exported by different companies. The website offers a user-friendly interface where users can search for specific companies, view their production data, and analyze trends over time. This platform enables users to stay informed about the import and export activities of companies, allowing for better market insights and decision-making.",
  },
];
export { projectList };
