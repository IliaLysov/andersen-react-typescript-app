import React from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HeaderProps } from '../../Types'
import { statusTaskCounter } from '../../Utils'

const Header: React.FC<HeaderProps> = ({name, tasks}) => {
    const {activeCount} = statusTaskCounter(tasks)

    return (
        <div className={styles.wrapper}>
            <NavLink to='/' className={({isActive}) => [styles.link, isActive && styles.active].join(' ')}>{name}</NavLink>
            <NavLink to='/todo' className={({isActive}) => [styles.link, isActive && styles.active].join(' ')}>{`Активных задач: ${activeCount}`}</NavLink>
            <NavLink to='/about' className={({isActive}) => [styles.link, isActive && styles.active].join(' ')}>О сессии</NavLink>
        </div>
    )
}

export default connect((state: any) => ({name: state.common.name, tasks: state.common.tasks}))(Header)
