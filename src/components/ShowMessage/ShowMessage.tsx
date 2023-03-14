import { Box, Typography } from "@mui/material";

interface IShowMessage {
  status: number | string;
  description: string;
}

const ShowMessage = ({ status, description }: IShowMessage) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={3}
      minHeight="90vh"
    >
      <Typography variant="h6" component="h2">
        {status}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ShowMessage;
