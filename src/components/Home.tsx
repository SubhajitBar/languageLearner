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
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome, Begin Your Jouney of Learning New Languages
      </Typography>
      <Stack
        direction={"row"}
        p={"2rem"}
        spacing={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {languages.map((i) => (
          <Button
            onClick={()=>languageSelectHandler(i.code)}
            variant="contained"
            key={i.code}
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
