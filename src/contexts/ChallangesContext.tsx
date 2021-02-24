import React from 'react';
import challanges from '../challanges.json';

interface Challange {
  type: 'body' | 'eye',
  description: string;
  amount: number;
}

interface ChallangesContextData {
  level: number;
  currentExperience: number;
  challangesCompleted: number;
  activeChallange: Challange
  experienceToNextlevel: number;
  startNewChallange: () => void;
  levelUp: () => void;
  resetChallange: () => void;
}

interface ChallangesProviderProps {
  children: React.ReactNode;
}

export const ChallangesContext = React.createContext({} as ChallangesContextData);

export function ChallangesProvider({ children }: ChallangesProviderProps) {
  const [level, setLevel] = React.useState(1);
  const [currentExperience, setCurrentExperience] = React.useState(0);
  const [challangesCompleted, setChallangesCompleted] = React.useState(0);

  const [activeChallange, setActiveChallange] = React.useState(null);

  const experienceToNextlevel = Math.pow((level + 1) * 4, 2);

  function startNewChallange() {
    const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
    const challange = challanges[randomChallangeIndex];
    setActiveChallange(challange);
  }
  function levelUp() {
    setLevel(level + 1);
  }

  function resetChallange() {
    setActiveChallange(null);
  }

  return (
    <ChallangesContext.Provider value={{
      level,
      currentExperience,
      challangesCompleted,
      startNewChallange,
      levelUp,
      activeChallange,
      resetChallange,
      experienceToNextlevel,
    }}>
      {children}
    </ChallangesContext.Provider>
  )
}


