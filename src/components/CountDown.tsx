import React from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/CountDown.module.css'

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {

  const { startNewChallange } = React.useContext(ChallangesContext);

  const [time, setTime] = React.useState(0.1 * 60);
  const [active, setActive] = React.useState(false);
  const [hasFinished, setHasFinished] = React.useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setActive(true);
  }
  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setActive(false);
    setTime(0.1 * 60);
  }

  React.useEffect(() => {
    if (active && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (active && time === 0) {
      setHasFinished(true);
      setActive(false);
      startNewChallange();
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={`${styles.countDownButton}`}>
          Ciclo encerrado
        </button>
      ) : (
          <>
            {active ? (
              <button type="button" onClick={resetCountDown} className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>
                {active ? "Abandonar ciclo" : "Iniciar um ciclo"}
              </button>
            ) : (
                <button type="button" onClick={startCountDown} className={styles.countDownButton}>
                  {active ? "Abandonar ciclo" : "Iniciar um ciclo"}
                </button>
              )
            }
          </>
        )}





    </div>
  )
}