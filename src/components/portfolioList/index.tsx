import { projectList } from "@/data/projectList";
import { iProject } from "@/interfaces/iProject";
import { FunctionComponent, useState } from "react";
import CardPortlio from "../card/cardPortfolio";
import { iProps } from "@/interfaces/iProps.interface";

interface PortfolioListProps extends iProps { }

const PortfolioList: FunctionComponent<PortfolioListProps> = ({
  children,
  className,
  ...props
}: PortfolioListProps) => {
  const [projectDatas, setProjectDatas] = useState<iProject[]>(projectList);
  const left: JSX.Element[] = [];
  const right: JSX.Element[] = [];

  projectDatas.forEach((projectData: iProject, index: number) => {
    const card = <CardPortlio data={projectData} />;
    if (index % 3 == 0) {
      left.push(card);
    } else {
      right.push(card);
    }
  });

  return (
    <>
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 place-items-center">
        {children}
        <div className="col-span-1">
          {left.map((item) => item)}
        </div>
        <div className="col-span-1">
          {right.map((item) => item)}
        </div>
      </div>
    </>
  );
};

export default PortfolioList;
