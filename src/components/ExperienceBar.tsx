import React from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/ExperienceBar.module.css';

const ExperienceBar = () => {

  const { currentExperience, experienceToNextlevel } = React.useContext(ChallangesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextlevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextlevel} xp</span>
    </header>
  )
}

export default ExperienceBar
