import React from 'react'
import styles from './Card.module.scss'
import { useSelector } from 'react-redux'

const Card = ({ value, handleClick, selected, correct, answered, icon }) => {
  const theme = useSelector((state) => state.theme)
  
  return (
    <div className={`${styles.container} ${selected && styles.selected} ${selected && correct && answered && styles.correct} ${selected && !correct && answered && styles.incorrect} ${styles[theme]}`} onClick={handleClick}>
      <div className={`${styles.icon}`}>{icon}</div>
      <p className={`${styles.text} ${styles[theme]}`}>{value}</p>
      {correct && answered && <img className={styles.answer} src='/assets/images/icon-correct.svg' alt='icon correct'/>}
      {selected && answered && !correct && <img className={styles.answer} src='/assets/images/icon-incorrect.svg' alt='icon incorrect' />}
    </div>
  )
}

export default Card