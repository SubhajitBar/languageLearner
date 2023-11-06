import { CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    // <div style={{height: "100vh", width:"100vw", display:"flex"}} >
    //   <CircularProgress sx={{alignItems:"center", justifyContent:"center"}} color="success" />
    // </div>
    <Stack height={"100vh"} direction="row" justifyContent="center" alignItems="center">
      <CircularProgress size={"6rem"} color="success" />
    </Stack>
  );
};

export default Loader;
