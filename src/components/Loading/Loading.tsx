import { Box, CircularProgress } from "@mui/material";

interface ILoading {
  minHeight?: number | string;
}
const Loading = ({ minHeight = 100 }: ILoading) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
      minHeight={minHeight}
    >
      <CircularProgress size={50} />
    </Box>
  );
};

export default Loading;
