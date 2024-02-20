import React from 'react'
import Card from '../Card'
import { useDispatch, useSelector } from 'react-redux'
import { selectSubject } from '../../reducers/subjectSlice'
import quizzes from '../../data.json'
import styles from './Home.module.scss'
import Logo from '../Logo'

const Home = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  const handleClick = (subject) => {
    const quizSubject = quizzes.quizzes.find((item) => item.title === subject)
    dispatch(selectSubject(quizSubject))
  }

  return (
    <main className={styles.main}>
      <p className={`${styles.title} ${styles[theme]}`}>Welcome to the <b>Frontend Quizz!</b></p>
      <p className={`${styles.text} ${styles[theme]}`}>Pick a subject to get started</p>
      <div className={styles.container}>
        {quizzes.quizzes.map((item, index) => {
          return <Card key={index} value={item.title} handleClick={() => handleClick(item.title)} icon={<Logo src={item.icon} subject={item.title} />} />
        })}      
      </div>
    </main>
  )
}

export default Home