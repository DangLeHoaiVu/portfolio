import { FunctionComponent } from "react";
import PortfolioList from "../../components/portfolioList/index";

interface WorkProps { }

const Work: FunctionComponent<WorkProps> = () => {
  return (
    <div className="content-center">
      <PortfolioList />
    </div>
  );
};

export default Work;
