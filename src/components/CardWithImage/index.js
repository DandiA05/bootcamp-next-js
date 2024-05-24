"use client";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { CardSkeleton } from "../CardSkeleton";

export const CardWithImage = ({ media, title, date, id }) => {
  const router = useRouter();
  const {
    dataLoaderReducer: { isFetching },
  } = useSelector((state) => state);

  const onClick = useCallback(() => {
    router.push(`/books/detail/${id}`);
  }, [router, id]);

  const renderCard = useMemo(() => {
    if (isFetching) return <CardSkeleton />;
    return (
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <div style={{ flex: 1 }}>
          <Card sx={{ maxWidth: 300, borderWidth: 1, height: "100%" }}>
            <CardActionArea onClick={onClick} sx={{ height: "100%" }}>
              <CardMedia component="img" image={media} alt={title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {date}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }, [isFetching, media, title, date, onClick]);

  return renderCard;
};
