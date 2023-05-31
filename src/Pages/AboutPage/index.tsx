import React from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { AboutPageProps } from '../../Types'
import { statusTaskCounter } from '../../Utils'

const AboutPage: React.FC<AboutPageProps> = ({name, tasks, date}) => {
    const count = tasks.length
    const {activeCount, completedCount} = statusTaskCounter(tasks)

    return (
        <div className={styles.wrapper}>
            <h1>О сессии</h1>
            <div className={styles.date}>{date}</div>
            <div className={styles.item}>{`Пользователь: ${name}`}</div>
            <div className={styles.item}>{`Всего задач: ${count}`}</div>
            <div className={styles.item}>{`Активных задач: ${activeCount}`}</div>
            <div className={styles.item}>{`Завершенных задач: ${completedCount}`}</div>
        </div>
    )
}

export default connect((state: any) => ({name: state.common.name, tasks: state.common.tasks, date: state.common.date}))(AboutPage)