import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "French",
    code: "fr",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "Hindi",
    code: "hi",
  },
];

const Home = () => {

  const navigate = useNavigate();
  const languageSelectHandler = (language:string):void => {
    navigate(`/learn?language=${language}`);
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" p={"2rem"} mt={"2rem"} textAlign={"center"} sx={{fontSize:"2.5rem"}}>
        Welcome, Begin Your Jouney of Learning New Languages
      </Typography>
      <Stack
        direction={"row"}
        p={"2rem"}
        spacing={"2vmax"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {languages.map((i) => (
          <Button
            onClick={()=>languageSelectHandler(i.code)}
            variant="contained"
            key={i.code}
            sx={{fontSize:"1.5vmax", padding:"8px 13px", margin:"10px !important"}}
          >
            {i.name}
          </Button>
        ))}
      </Stack>
      <Typography textAlign={"center"}>
        Choose one language from above
      </Typography>
    </Container>
  );
};

export default Home;
