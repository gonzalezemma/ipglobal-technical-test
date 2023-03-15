import { Link } from "react-router-dom";
import { Box, Rating, Typography } from "@mui/material";
import { API_URL_IMAGE, API_URL_MOVIE } from "@constants/env";
import styles from "./PreviewMovie.module.css";

interface IPreviewMovieProps {
  id: number;
  title: string;
  poster: string;
  releaseDate: string;
  voteAverage: number;
}

const PreviewMovie = ({
  id,
  title,
  poster,
  releaseDate,
  voteAverage,
}: IPreviewMovieProps) => {
  return (
    <Link to={`${API_URL_MOVIE}/${id}`}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "1rem",
          position: "relative",
          transition: "transform 0.2s",
          "&:hover": {
            backgroundColor: "primary",
            transform: "scale(1.08)",
            cursor: "pointer",
            "& img": {
              opacity: [0.9, 0.8, 0.8],
            },
            "& .moreInfo": {
              display: "inline-block",
              background: "#0000019c",
            },
          },
        }}
      >
        <img
          className={styles.movieImg}
          src={`${API_URL_IMAGE}${poster}`}
          alt={title}
        />
        <Box
          className="moreInfo"
          sx={{
            display: "none",
            position: "absolute",
            margin: "1rem",
            padding: "1rem",
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" lineHeight={1.2}>
            {title}
          </Typography>
          <Typography variant="subtitle2">{releaseDate}</Typography>
          <Rating value={voteAverage / 2} precision={0.1} readOnly />
        </Box>
      </Box>
    </Link>
  );
};

export default PreviewMovie;
