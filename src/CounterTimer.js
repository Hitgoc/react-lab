import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./style.css";

const CounterTimer = () => {
  const secondsArray = [10, 20, 30, 40, 50];

  const [isSecondClick, setIsSecondClick] = useState();
  const [seconds, setSeconds] = useState();
  const [duration, setDuration] = useState();

  const onClickReset = () => {
    setDuration(seconds);

    if (isSecondClick) {
      setIsSecondClick(false);
      return;
    }

    setIsSecondClick(true);
  };

  const timeIndecis = (e) => {
    setSeconds(e.currentTarget.value);
  };

  const counterTimerBody = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        <div style={{ display: "flex", color: "red", fontSize: "20px" }}>
          Too late
        </div>
      );
    }

    return (
      <div className="timerBody">
        <div className="remainingTime">Remaining time</div>
        <div id="timer">{remainingTime}</div>
        <div className="remainingTime">seconds</div>
      </div>
    );
  };

  return (
    <div>
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
      </h1>
      <h2>ReactJS Assignment</h2>
      <div id="countDownTimer">
        <CountdownCircleTimer
          key={isSecondClick}
          size={250}
          isPlaying
          duration={duration ? duration : secondsArray[0]}
          colors={[
            ["#34AD00", 0.55],
            ["#B3BB2B", 0.44],
            ["#FF0000", 0.33],
          ]}
        >
          {counterTimerBody}
        </CountdownCircleTimer>
      </div>
      <div id="selectReset">
        <select onChange={timeIndecis}>
          {secondsArray.map((time, i) => (
            <option value={time} key={i}>
              {time}
              {" sec"}
            </option>
          ))}
        </select>
        <button id="resetBtn" onClick={onClickReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterTimer;
