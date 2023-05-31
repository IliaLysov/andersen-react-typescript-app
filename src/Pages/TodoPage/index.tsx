import React, {useState} from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { TodoPageProps } from '../../Types'
import { statusTaskCounter } from '../../Utils'
import { Item, Input } from '../../Components'


const TodoPage: React.FC<TodoPageProps> = ({ tasks }) => {
    const [active, setActive] = useState(false)
    const {activeCount, completedCount} = statusTaskCounter(tasks)

    return (
        <div className={styles.wrapper}>
            <h1>Список задач</h1>
            <div className={styles.add}>
                <Input placeholder='Новая задача' type='add' name='Добавить'/>
            </div>
            <div className={styles.switch}>
                <div className={[styles.switchBtn, !active && styles.active].join(' ')} onClick={() => setActive(false)}>{`Активные ( ${activeCount} )`}</div>
                <div className={[styles.switchBtn, active && styles.active].join(' ')} onClick={() => setActive(true)}>{`Завершенные ( ${completedCount} )`}</div>
            </div>
            {active === false && activeCount === 0 && <div className={styles.message}>Нет активных задач</div>}
            {active === true && completedCount === 0 && <div className={styles.message}>Нет завершенных задач</div>}
            <ul>
                {tasks.map((task, i:number) => {
                    return active === task.status && <Item taskObj={task} index={i} key={i}/>
                })}
            </ul>
        </div>
    )
}

export default connect((state: any) => ({tasks: state.common.tasks}))(TodoPage)