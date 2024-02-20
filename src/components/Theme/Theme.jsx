import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../../reducers/themeSlice'
import styles from './Theme.module.scss'

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const [active, setActive] = useState(theme === 'light' ? false : true)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTheme())
    setActive(!active)
  }

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <img src={theme === 'light' ? '/assets/images/icon-sun-dark.svg' : '/assets/images/icon-sun-light.svg'} alt="sun" className={styles.img} />
      <div className={styles.toggle_switch}> 
        <input type="checkbox" className={styles.checkbox} checked={active} onChange={() => handleClick()}/> 
        <label className={styles.label} onClick={() => handleClick()}> 
          <span className={styles.inner} /> 
          <span className={styles.switch} /> 
        </label> 
      </div> 
      <img src={theme === 'light' ? '/assets/images/icon-moon-dark.svg' : '/assets/images/icon-moon-light.svg'} alt="moon" className={styles.img} />
    </div> 
  )
}

export default Theme