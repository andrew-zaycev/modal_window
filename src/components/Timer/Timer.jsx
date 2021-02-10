import React, { useState, useEffect } from 'react';

import './Timer.scss';

export const Timer = () => {
  const [timerMinutes, setTimerMinutes] = useState(16);
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    const startTimer = setInterval(() => setTimerSeconds(prevSeconds => prevSeconds - 1),
      1000)

    if (timerSeconds === 0 && timerMinutes === 0) {
      clearInterval(startTimer)
    }

    if (timerSeconds === 0 && timerMinutes > 0) {
      setTimerMinutes(prevMinutes => prevMinutes - 1)
      setTimerSeconds(59)
    }

    return (
      () => clearInterval(startTimer)
    )
  }, [timerSeconds]);

  return (
    <div className="timer">
      <img src="timer.svg" className="timer__icon"/>
      <p className="timer__content">00:{timerMinutes < 10 && '0'}{timerMinutes}:{timerSeconds < 10 && '0'}{timerSeconds}</p>
    </div>
  )
}
