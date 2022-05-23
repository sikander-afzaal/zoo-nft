import React, { useState, useEffect, useRef } from "react";
import "./CountDown.css";
const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    let end = new Date("5/31/2022 12:00 AM");
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <>
      <div className="countdown">
        <div>
          <span>{timerDays}</span>
          <h2>Days</h2>
        </div>
        <div>
          <strong>:</strong>
        </div>
        <div>
          <span>{timerHours}</span>
          <h2>Hours</h2>
        </div>
        <div>
          <strong>:</strong>
        </div>
        <div>
          <span>{timerMinutes}</span>
          <h2>Minutes</h2>
        </div>
        <div>
          <strong>:</strong>
        </div>
        <div>
          <span>{timerSeconds}</span>
          <h2>Seconds</h2>
        </div>
      </div>
    </>
  );
};

export default CountDown;
