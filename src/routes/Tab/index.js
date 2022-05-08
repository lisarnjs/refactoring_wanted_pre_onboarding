/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Tab.module.scss'

const tabList = ['짜장면', '짬뽕', '군만두']

function Tab() {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <section>
      <ul className={styles.tab}>
        {tabList.map((list, index) => (
          <li key={`tab--${list}`} onClick={() => setTabIndex(index)}>
            {list}
          </li>
        ))}
      </ul>
      <div className={styles.slideBar}>
        <div className={styles.active} style={{ left: `${tabIndex * 33.3}%` }} />
      </div>
    </section>
  )
}
export default Tab
