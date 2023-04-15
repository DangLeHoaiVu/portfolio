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
          marginLeft: "10px",
          marginRight: "10px",
          padding: 3,
        }}
      >
        <CardActionArea>
          <CardMedia
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
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardSkill;
