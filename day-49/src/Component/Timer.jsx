import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TimerActionButton from "./TimerActionButton";
import { useState, useRef } from "react";
import { renderElapsedString } from "./Helpers";
import { useEffect } from "react";
export default function Timer({
  title,
  project,
  elapsed,
  runningSince,
  runningTime,
}) {
  const [timer, setTimer] = useState(elapsed);
  console.log(timer);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  // const timer = renderElapsedString(elapsed, runningSince);

  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(0);
  const countRef = useRef(null);

  function handleStart() {
    countRef.current = setInterval(() => {
      setTimer((par) => par + 1000);
    }, 1000);
  }
  const handlePause = () => {
    clearInterval(countRef.current);
  };

  // const formatTime = () => {
  //   const getSeconds = `0${Math.floor((timer / 1000) % 60)}`.slice(-2);
  //   console.log(getSeconds);
  //   const minutes = `${Math.floor(timer / 1000 / 60)}`;
  //   const getMinutes = `0${minutes % 60}`.slice(-2);
  //   const getHours = `0${Math.floor(timer / 1000 / 3600)}`.slice(-2);
  //   return `${getHours} : ${getMinutes} : ${getSeconds}`;
  // };

  function millisecondsToHuman() {
    const seconds = Math.floor((timer / 1000) % 60);
    const minutes = Math.floor((timer / 1000 / 60) % 60);
    const hours = Math.floor((timer / 1000 / 60 / 60) % 60);
    // console.log(pad(hours.toString(), 2))
    // console.log(seconds, minutes, hours)
    return [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(":");
  }
  function pad(numberString, size) {
    console.log(numberString.length);
    let padded = numberString;
    while (padded.length < size) {
      padded = `0${padded}`;
    }
    return padded;
  }

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
          <h1>{now}</h1>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{millisecondsToHuman()}</h1>
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

        <TimerActionButton
          isTimerRunning={timerIsRunning}
          onStartClick={() => {
            setTimerIsRunning(true);

            handleStart();
          }}
          onStopClick={() => {
            setTimerIsRunning(false);

            handlePause();
          }}
        />
      </Card>
    </Container>
  );
}
