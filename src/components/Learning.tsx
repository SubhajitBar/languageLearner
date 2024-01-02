import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Button, Typography, Stack } from "@mui/material";
import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { fetchAudio, translateWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getWordsFail,
  getWordsRequest,
  getWordsSuccess,
} from "../redux/slices";
import Loader from "./Loader";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const [audioSrc, setAudioSrc] = useState<string>("");
  const audioRef = useRef(null);
  const params = useSearchParams()[0].get("language") as LangType;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, words } = useSelector(
    (state: { root: StateType }) => state.root
  );

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
    setAudioSrc("");
  };
  const perviousHandler = (): void => {
    if (count === 0) {
      navigate("/");
    } else {
      setCount((prev) => prev - 1);
      setAudioSrc("");
    }
  };

  const audioHandler = async () => {
    const player: HTMLAudioElement = audioRef.current!;
    if (player) {
      player.play();
    } else {
      const data = await fetchAudio(words[count]?.word, params);
      setAudioSrc(data);
    }
  };

  useEffect(() => {
    dispatch(getWordsRequest());
    translateWords(params)
      .then((arr) => {
        dispatch(getWordsSuccess(arr));
      })
      .catch((err: string) => {
        dispatch(getWordsFail(err));
      });

    if (error) {
      alert(error);
      dispatch(clearState());
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <Container maxWidth="sm" sx={{ padding: "1rem" }}>
      {audioSrc && <audio src={audioSrc} autoPlay ref={audioRef}></audio>}
      <Button onClick={perviousHandler}>
        <ArrowBack />
      </Button>

      <Typography m={"2rem 0"}>Learning Made Easy</Typography>
      <Stack direction={"row"} flexWrap={"wrap"} spacing={"1rem"}>
        <Typography variant="h4">
          {count + 1}-{words[count]?.word}
        </Typography>
        <Typography color={"blue"} variant="h4">
          :{words[count]?.meaning}
        </Typography>
        <Button onClick={audioHandler} sx={{ borderRadius: "50%" }}>
          <VolumeUp />
        </Button>
      </Stack>

      <Button
        onClick={
          count === words.length - 1 ? () => navigate("/quiz") : nextHandler
        }
        variant="contained"
        fullWidth
        sx={{ margin: "3rem 0" }}
      >
        {count === words.length - 1 ? "Start Test" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;
