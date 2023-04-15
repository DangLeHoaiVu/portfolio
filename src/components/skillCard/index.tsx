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
      <div className="flex flex-row">
        {dataList.map((item: iCardSkill, index) => (
          <CardSkill key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default SkillCard;
