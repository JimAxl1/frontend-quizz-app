import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleCompleted } from '../../reducers/completedSlice'
import Options from '../Options'
import styles from './Quizz.module.scss'

const Quizz = () => {
  const [question, setQuestion] = useState(0)
  const quiz = useSelector((state) => state.subject)
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  const nextQuestion = () => {
    if (question === 9){
      dispatch(handleCompleted())
    }else{
      setQuestion(question + 1)
    }
  }

  return (
    <main className={styles.container}>
      <p className={`${styles.counter} ${styles[theme]}`}>Question {question + 1} of 10</p>
      <p className={`${styles.text} ${styles[theme]}`}>{quiz.questions[question].question}</p>
      <progress className={`${styles.progress} ${styles[theme]}`} value={(question + 1) * 10} max={100} />
      <Options question={question} nextQuestion={() => nextQuestion()} />
    </main>
  )
}

export default Quizz