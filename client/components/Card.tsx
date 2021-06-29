import styles from './Card.module.css';
import React from 'react';

export const Card: React.SFC<React.ReactNode> = ({children}) => {
    return <div className={styles.card}>{children}</div>
}