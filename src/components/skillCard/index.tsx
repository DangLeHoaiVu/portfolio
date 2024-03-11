import { FunctionComponent, useRef, useState } from "react";
import { iCardSkill } from "@/interfaces/iCardSkill";
import { skillsList } from "@/data/skillsList";
import CardSkill from "../card/cardSkill";
import 'swiper/css';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface SkillCardProps {
}

const SkillCard: FunctionComponent<SkillCardProps> = (props) => {
  const dataList: iCardSkill[] = (skillsList);

  const boxList = useRef<any>(null);
  const outerBox = useRef<any>(null);
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [tranlateX, setTranlateX] = useState<number>(0)
  const [hadAddTransition, setHadAddTransition] = useState<boolean>(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.clientX - tranlateX);
    setIsPressed(true)
  }
  const handleMouseUp = () => {
    setIsPressed(false)
  }
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPressed) return;
    setHadAddTransition(false);
    const newtranslateXPosition = e.clientX - startX;
    setNewtranslateXPosition(newtranslateXPosition)
  }

  const setNewtranslateXPosition = (newtranslateXPosition: number) => {
    const childrenWidth = boxList.current.children[0].offsetWidth;
    const cardDisplay = outerBox.current.offsetWidth / childrenWidth;
    const minPositionToLeft = - (childrenWidth * (skillsList.length - cardDisplay));
    setTranlateX(newtranslateXPosition);
    if (newtranslateXPosition > 0) setTranlateX(0);
    if (newtranslateXPosition < minPositionToLeft) setTranlateX(minPositionToLeft);
  }

  const handleChangeSkill = (numberChange: number) => {
    const childrenWidth = boxList.current.children[0].offsetWidth;
    let newtranslateXPosition = tranlateX - numberChange * childrenWidth;
    newtranslateXPosition = Math.ceil(newtranslateXPosition / childrenWidth) * childrenWidth
    setHadAddTransition(true);
    setTranlateX(newtranslateXPosition);
    setNewtranslateXPosition(newtranslateXPosition)
  }

  return (
    <>
      <div className="flex justify-end gap-3 items-center">
        <ChevronLeftIcon
          fontSize="large"
          className="w-10 h-10 bg-gray-700 rounded-full hover:bg-white opacity-50"
          type="button"
          onClick={() => handleChangeSkill(-1)}
        />
        <ChevronRightIcon
          fontSize="large"
          className="w-10 h-10 bg-gray-700 rounded-full hover:bg-white opacity-50"
          type="button"
          onClick={() => handleChangeSkill(1)}
        />
      </div>
      <div
        ref={outerBox}
        className={`flex-auto grid md:grid-cols-2 sm:grid-cols-1 my-5 w-full overflow-x-scroll scroll scroll-smooth scrollbar-hide`}
      >
        <div ref={boxList} className={`flex flex-row ${hadAddTransition ? `duration-${500} ease-in-out` : ""} ${isPressed ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ transform: `translateX(${tranlateX}px)` }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}>
          {dataList.map((item: iCardSkill, index) => (
            <div className="h-full px-2" key={index}>
              <CardSkill key={index} data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillCard;
