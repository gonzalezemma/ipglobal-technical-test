import { Box, Typography } from "@mui/material";

interface IShowMessage {
  status: number | string;
  description: string;
  minHeight?: number | string;
}

const ShowMessage = ({
  status,
  description,
  minHeight = "90vh",
}: IShowMessage) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={3}
      minHeight={minHeight}
    >
      <Typography variant="h6" component="h2">
        {status}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ShowMessage;
