import React, { useState } from 'react'
import styles from "./Products.module.css";


export const ReadMoreReadLess = ({children}) => {

    const [isReadMoreShown, setReadMoreShown] = useState(false);

    const toggleBtn = ()=> {
        setReadMoreShown(prevState => !prevState)
    }

  return (
    <div>
        {isReadMoreShown ? children : children.substr(0,100)}
        <button className={styles.Readmorebtn} onClick={toggleBtn}> {isReadMoreShown ? 'Read Less': '...Read More'}</button>
    </div>
  )
}
