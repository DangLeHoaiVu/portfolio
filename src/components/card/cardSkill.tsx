import { skillsList } from "@/data/skillsList";
import { iCardSkill } from "@/interfaces/iCardSkill";
import { iProps } from "@/interfaces/iProps.interface";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { FunctionComponent, useState } from "react";

interface CardSkillProps extends iProps {
  data: iCardSkill;
}

const CardSkill: FunctionComponent<CardSkillProps> = ({
  children,
  className,
  data,
  ...props
}: CardSkillProps) => {
  return (
    <>
      <Card
        sx={{
          minWidth: 345,
          backgroundColor: "#202020",
          color: "white",
          borderRadius: 10,
        }}
        className="h-full select-none"
      >
        <CardContent sx={{ padding: 5 }} className="pointer-events-none">
          <CardMedia
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
            }}
            component="img"
            height="140"
            image={data.imageSrc}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {data.name}
            </Typography>
            <Typography
              sx={{ color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              {data.description}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
};

export default CardSkill;
