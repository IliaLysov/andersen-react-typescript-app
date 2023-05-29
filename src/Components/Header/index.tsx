import React from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

interface HeaderProps {
    name: string,
    tasks: [{task: string, status: boolean}]
}

function Header({name, tasks}: HeaderProps) {
    const count = tasks.reduce((accumulator, obj) => {
        if (obj.status === false) {
            return accumulator + 1
        }
        return accumulator
    }, 0)

    return (
        <div className={styles.wrapper}>
            <NavLink to='/' className={({isActive}) => [styles.link, isActive && styles.active].join(' ')}>{name}</NavLink>
            <NavLink to='/todo' className={({isActive}) => [styles.link, isActive && styles.active].join(' ')}>{`Активных задач: ${count}`}</NavLink>
            <NavLink to='/about' className={({isActive}) => [styles.link, isActive && styles.active].join(' ')}>О приложении</NavLink>
        </div>
    )
}

export default connect((state: any) => ({name: state.common.name, tasks: state.common.tasks}))(Header)
