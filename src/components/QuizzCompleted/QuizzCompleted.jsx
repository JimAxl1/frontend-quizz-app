import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSubject } from '../../reducers/subjectSlice'
import { handleCompleted } from '../../reducers/completedSlice'
import { erase } from '../../reducers/answersSlice'
import Logo from '../Logo'
import Button from '../Button'
import styles from './QuizzCompleted.module.scss'

const QuizzCompleted = () => {
	const theme = useSelector((state) => state.theme)
	const subject = useSelector((state) => state.subject)
  const correctAnswers = useSelector((state) => state.answers)
	const dispatch = useDispatch()

  const reset = () => {
    dispatch(erase())
    dispatch(selectSubject(null))
    dispatch(handleCompleted())
  }

  return (
    <div className={styles.container}>
			<p className={`${styles.title} ${styles[theme]}`}>Quiz completed <b>You scored...</b></p>
			<div className={`${styles.info} ${styles[theme]}`}>
				<span className={styles.subject}>
					<Logo src={subject.icon} subject={subject.title}/>
					<p className={styles.name}>{subject.title}</p>	
				</span>
				<p className={styles.result}>{correctAnswers}</p>
				<p className={`${styles.result2} ${styles[theme]}`}>Out of 10</p>
			</div>
			<Button text='Play Again' handleClick={() => reset()}/>
    </div>
  )
}

export default QuizzCompleted