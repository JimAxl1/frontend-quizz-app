import React from 'react'
import styles from './Logo.module.scss'

const Logo = ({ src, subject }) => {
  return (
    <div className={`${styles.container} ${styles[subject]}`}>
      <img className={styles.img} src={src} alt={`${subject} logo`} />
    </div>
  )
}

export default Logo