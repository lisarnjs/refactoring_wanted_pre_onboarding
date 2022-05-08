import { useState } from 'react'
import cx from 'classnames'
import styles from './Input.module.scss'

function Input() {
  const [valid, setValid] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleCheckEmail = (value) => {
    const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!pattern.test(value)) {
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const handleClickVisible = () => {
    setVisible(!visible)
  }

  return (
    <form className={styles.form}>
      <div className={styles.inputBox}>
        <span>E-mail</span>
        <input onChange={(e) => handleCheckEmail(e.currentTarget.value)} type='email' placeholder='email' />
        <span className={cx('material-symbols-outlined', styles.icon, valid && styles.check)}>check_circle</span>
        <span className={styles.emailInvalidAlert}>{valid ? '' : 'Invalid Email address'}</span>
      </div>
      <div className={styles.inputBox}>
        <span>Password</span>
        <input type={visible ? 'text' : 'password'} placeholder='password' />
        <button type='button' className={styles.icon} onClick={handleClickVisible}>
          {visible ? (
            <span className={cx('material-symbols-outlined', styles.show)}>visibility</span>
          ) : (
            <span className='material-symbols-outlined'>visibility_off</span>
          )}
        </button>
      </div>
    </form>
  )
}
export default Input
