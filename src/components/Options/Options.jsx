import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { correctAnswer } from '../../reducers/answersSlice'
import Card from '../Card'
import Button from '../Button'
import styles from './Options.module.scss'

const Options = ({ question, nextQuestion }) => {
  const [indexSelected, setIndexSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [answerSubmited, setAnswerSubmited] = useState(false)

  const theme = useSelector((state) => state.theme)
  const quiz = useSelector((state) => state.subject)
  const dispatch = useDispatch()

  const letters = ['A', 'B', 'C', 'D']

  const handleKeyDown = (event) => {
    if (answerSubmited) {
      return;
    }

    if (!answerSubmited){
      if (event.key === 'ArrowUp' && indexSelected > 0) {
        setIndexSelected(indexSelected - 1);
      } else if (event.key === 'ArrowDown' && indexSelected < 3) {
        setIndexSelected(indexSelected + 1);
      }
      setAnswered(false)          
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [indexSelected, answerSubmited])

  const handleSubmitAnswer = () => {
    setAnswered(true)
    if (indexSelected !== null){
      setAnswerSubmited(true)
    }
  }

  const handleNextQuestion = () => {
    if (quiz.questions[question].answer === quiz.questions[question].options[indexSelected]){
      dispatch(correctAnswer())
    }
    nextQuestion()
    setIndexSelected(null)
    setAnswered(false)
    setAnswerSubmited(false)
  }

  const selectOption = (index) => {
    if (!answerSubmited){
      setAnswered(false)
      setIndexSelected(index)      
    }
  }

  return (
    <div className={styles.containerCards}>
      {quiz.questions[question].options.map((item, index) => 
        <Card key={index} value={item} selected={indexSelected === index}
          handleClick={() => selectOption(index)} 
          correct={quiz.questions[question].answer === item}
          icon={letters[index]}
          answered={answerSubmited}
        />
      )}
      {answered && indexSelected !== null ?
        <Button text='Next Question' handleClick={() => handleNextQuestion()} />
        :
        <Button text='Submit Answer' handleClick={() => handleSubmitAnswer()} />
      }
      
      {indexSelected === null && answered &&
        <span className={styles.incorrect}>
          <img className={styles.icon} src="/assets/images/icon-error.svg" alt="icon error" />
          <p className={`${styles.text} ${styles[theme]}`}>Please select an answer</p>
        </span>
      }
    </div>
  )
}

export default Options