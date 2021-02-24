import Head from 'next/head'
import { ChallangeBox } from '../components/ChallangeBox';
import { CompletedChallanges } from '../components/CompletedChallanges';
import { CountDown } from '../components/CountDown';
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <CountDown />
        </div>
        <div>
          <ChallangeBox />
        </div>
      </section>
    </div>
  )
}
