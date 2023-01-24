import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";
import { useEffect } from "react";
export default function Timer({
  title,
  project,
  elapsed,
  runningSince,
  runningTime,
}) {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [runningInterval, setRunningInterval] = useState(0);
  const timer = renderElapsedString(elapsed, runningSince);
  //   console.log(timer);
  //   setInterval(() => {
  //     setRunningInterval(runningInterval + 1), 1000;
  //   });
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [startStop, setStartStop] = useState(false);

  if (startStop) {
    // setStartTime(Date.now());
    // setNow(Date.now());
    console.log(Date.now());
    // setInterval(() => {
    //   setNow(Date.now());
    // }, 10);
  } else {
    // clearInterval(() => {
    //   setInterval();
    // });
  }

  let secondsPassed = 0;

  //   if (startTime != null && now != null) {
  //     secondsPassed = (now - startTime) / 1000;
  //   }

  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
        <Typography sx={{ fontSize: 28 }} color="text.secondary">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{runningTime}</h1>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <DeleteIcon />
          <ModeEditIcon />
        </Box>
        <h1>Time passed: {now}</h1>
        <TimerActionButton
          isTimerRunning={timerIsRunning}
          onStartClick={() => {
            setTimerIsRunning(true);
            setStartStop(true);
          }}
          onStopClick={() => {
            setTimerIsRunning(false);
            setStartStop(false);
          }}
        />
      </Card>
    </Container>
  );
}
