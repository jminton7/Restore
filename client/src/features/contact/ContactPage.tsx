import { decrement, increment } from "./counderReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export default function ContactPage() {
  const {data} = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h2">Contact Page</Typography>
      <Typography variant="body1">Data is: {data}</Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} color="error">
          Decrement
        </Button>
        <Button onClick={() => dispatch(increment(1))} color="secondary">
          Increment
        </Button>
        <Button onClick={() => dispatch(increment(5))} color="primary">
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
}
