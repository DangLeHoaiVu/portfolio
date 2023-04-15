import { FunctionComponent, useState } from "react";
import { iProps } from "../../interfaces/iProps.interface";
import { iCardSkill } from "@/interfaces/iCardSkill";
import { skillsList } from "@/data/skillsList";
import CardSkill from "../card/cardSkill";

interface SkillCardProps {}

const SkillCard: FunctionComponent<SkillCardProps> = () => {
  const [dataList, setDataList] = useState<iCardSkill[]>(skillsList);
  return (
    <>
      <div
        id="slider"
        className="flex-auto grid md:grid-cols-2 sm:grid-cols-1 gap-4 my-5 w-full overflow-x-scroll scroll scroll-smooth scrollbar-hide"
      >
        <div className="flex flex-row">
          {dataList.map((item: iCardSkill, index) => (
            <CardSkill key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillCard;
