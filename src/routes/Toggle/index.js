/* eslint-disable react/button-has-type */
import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Toggle.module.scss'

function Toggle() {
  const [toggle, setToggle] = useState('기본')

  const handleClicked = (e) => {
    setToggle(e.currentTarget.title)
  }

  return (
    <ul className={styles.toggle}>
      <li className={cx(toggle === '기본' && styles.active)}>
        <button type='button' onClick={handleClicked} title='기본'>
          기본
        </button>
      </li>
      <li className={cx(toggle === '상세' && styles.active)}>
        <button type='button' onClick={handleClicked} title='상세'>
          상세
        </button>
      </li>
    </ul>
  )
}
export default Toggle
