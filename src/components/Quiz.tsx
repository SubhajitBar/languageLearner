import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Typography,
  Radio,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveResult } from "../redux/slices";
import Loader from "./Loader";

const Quiz = () => {
  const { loading, words } = useSelector(
    (state: { root: StateType }) => state.root
  );
  const dispatch = useDispatch();
  const [result, setResult] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [ans, setAns] = useState<string>("");

  const navigate = useNavigate();

  const nextHandler = (): void => {
    setResult((prev) => [...prev, ans]);
    setCount((prev) => prev + 1);
    setAns("");
  };

  useEffect(() => {
    if (count + 1 > words.length) navigate("/result");

    dispatch(saveResult(result));
  }, [result]);

  if (loading) return <Loader />;

  return (
    <Container sx={{ padding: "1rem" }} maxWidth="sm">
      <Typography m={"2rem 0"}>Quiz</Typography>
      <Typography variant="h3">
        {count + 1} - {words[count]?.word}
      </Typography>
      <FormControl>
        <FormLabel sx={{ mt: "2rem", mb: "1rem" }}>Meaning</FormLabel>

        <RadioGroup value={ans} onChange={(e) => setAns(e.target.value)}>
          {words[count]?.options.map((i, idx) => (
            <FormControlLabel
              value={i}
              control={<Radio />}
              label={i}
              key={idx}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Button
        sx={{ margin: "3rem 0" }}
        variant="contained"
        fullWidth
        onClick={nextHandler}
        disabled={ans === ""}
      >
        {count === words.length - 1 ? "Submit" : "Next"}
      </Button>
    </Container>
  );
};

export default Quiz;
