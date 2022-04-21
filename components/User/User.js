import React from 'react';


import styles from './styles.module.scss'

function User ({children, ...props})  {
  return (
           <UserStyles  {...props}>
           <aside className={styles.user}>
             <header>
               <h2>{name}</h2>
               <p>{username}</p>
              </header>
              <p>{email}</p>
           </aside>
        </UserStyles>
  
        
  )
}

export default User