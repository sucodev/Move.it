import React from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';

import styles from '../styles/components/ChallangeBox.module.css';

export function ChallangeBox() {
  const { activeChallange, resetChallange } = React.useContext(ChallangesContext)

  return (
    <div className={styles.challangeBoxContainer}>
      {activeChallange ? (
        <div className={styles.challangeActive}>
          <header>Ganhe {activeChallange.amount} xp</header>
          <main>
            <img src={`icons/${activeChallange.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallange.description}</p>
          </main>
          <footer>
            <button type="button" onClick={resetChallange} className={styles.challangeFailedButton}>Falhei</button>
            <button type="button" className={styles.challangeSucceededButton}>Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challangeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level UP" />
              Avance de level completando desafios
            </p>
          </div>
        )}
    </div>
  );
}