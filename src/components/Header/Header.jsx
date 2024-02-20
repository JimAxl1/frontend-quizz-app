import React from 'react'
import Logo from '../Logo'
import Theme from '../Theme'
import styles from './Header.module.scss'

const Header = ({ subject, theme }) => {
  return (
    <header className={styles.header}>
      {subject !== null && 
        <div className={styles.container}>
          <Logo src={subject.icon} subject={subject.title} />
          <p className={`${styles.text} ${styles[theme]}`}>{subject.title}</p>
        </div>
      }
      <Theme />
    </header>
  )
}

export default Header