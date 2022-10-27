import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { NavBar } from '../NavBar'
import styles from './MainLayout.module.css'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Yair Chan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

