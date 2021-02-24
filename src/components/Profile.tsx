import React from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = React.useContext(ChallangesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/marcosdelvalle.png" alt="Marcos Del Valle" />
      <div>
        <strong>Marcos Del Valle</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}