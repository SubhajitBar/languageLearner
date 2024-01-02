import {
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearState } from "../redux/slices";
import { countMatchingElemet } from "../utils/features";

const Result = () => {
  const { words, result } = useSelector(
    (state: { root: StateType }) => state.root
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const correctAns = countMatchingElemet(
    result,
    words.map((i) => i.meaning)
  );
  const percentage = (correctAns / words.length) * 100;

  const resetHandler = () => {
    dispatch(clearState());
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4" color={"primary"} m={"2rem 0"}>
        Result
      </Typography>
      <Typography m={"1rem"} variant="h6">
        You got {correctAns} right out of {words?.length}
      </Typography>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
        <Stack>
          <Typography m={"1rem 0"} variant="h5">
            Your Answer
          </Typography>
          <List>
            {result.map((i, idx) => (
              <ListItem key={idx}>
                {idx + 1}-{i}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack>
          <Typography m={"1rem 0"} variant="h5">
            Correct Answer
          </Typography>
          <List>
            {words?.map((i, idx) => (
              <ListItem key={idx}>
                {idx + 1}-{i.meaning}
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
      <Typography
        m={"1rem 0"}
        variant="h5"
        color={percentage > 50 ? "green" : "red"}
      >
        {percentage > 50 ? "Pass" : "Fail"}
      </Typography>
      <Button
        sx={{ margin: "1rem" }}
        variant="contained"
        onClick={resetHandler}
      >
        Reset
      </Button>
    </Container>
  );
};

export default Result;
