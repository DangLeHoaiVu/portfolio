import { iProject } from "@/interfaces/iProject";
import { iProps } from "@/interfaces/iProps.interface";
import { ExpandMore, Fullscreen } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

interface CardPortlioProps extends iProps {
  data: iProject;
}

const CardPortlio: FunctionComponent<CardPortlioProps> = ({
  children,
  className,
  data,
  ...props
}: CardPortlioProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (currentIndex === data.img.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <Link href={`/work/${data.id}`}>
        <Card
          sx={{
            maxWidth: 550,
            height: 500,
            background: "#202020",
            borderRadius: 10,
            margin: "50px 50px 100px 50px",
          }}
          className="hover:-translate-y-6"
        >
          <CardActionArea sx={{ padding: 3, maxWidth: "100%", height: "100%" }}>
            <CardContent
              sx={{
                color: "white",
                position: "relative",
              }}
            >
              <Typography
                gutterBottom
                component="div"
                className="font-bold xl:text-5xl lg:text-2xl md:text-md"
              >
                {data.name}
              </Typography>
              <Typography variant="body2" sx={{
                fontWeight: '500',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
                className="font-medium xl:text-2xl lg:text-lg text-sm text-balance">
                {data.description}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              image={data.img[currentIndex]}
              alt="green iguana"
              className="absolute scale-125 top-0 left-0 h-full opacity-20 hover:scale-100 duration-500"
            />
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
};

export default CardPortlio;
