import React, {useState} from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { addTask, deleteTask, editTask, changeStatus } from '../../Modules/common'
import editIcon from '../../Icons/editIcon.svg'
import deleteIcon from '../../Icons/deleteIcon.svg'


interface TodoProps {
    name: string,
    tasks: [{task: string, status: boolean}],
    addTask: (name: string) => void,
    deleteTask: (number: number) => void,
    editTask: (index: number, task: string) => void,
    changeStatus: (index: number) => void
}

function TodoPage({name, tasks, addTask, deleteTask, editTask, changeStatus}: TodoProps) {
    const [value, setValue] = useState('')
    const [active, setActive] = useState(false)
    interface EditableState {
        index: number | undefined,
        task: string
    }
    const [editable, setEditable] = useState<EditableState>({index: undefined, task: ''})

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (value !== '') {
            addTask(value)
            setValue('')
        }
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const {activeCount, completedCount} = tasks.reduce((accumulator, obj) => {
        if (obj.status === false) {
            accumulator.activeCount++
        } else {
            accumulator.completedCount++
        }
        return accumulator
    }, {activeCount: 0, completedCount: 0})

    return (
        <div className={styles.wrapper}>
            <h1>Список задач</h1>
            <form className={styles.add} onSubmit={submitHandler}>
                <input type="text" value={value} onChange={changeHandler} className={styles.input} placeholder='Новая задача' />
                <button type='submit' className={styles.submit}>Добавить</button>
            </form>
            <div className={styles.switch}>
                <div className={[styles.switchBtn, !active && styles.active].join(' ')} onClick={() => setActive(false)}>{`Активные ( ${activeCount} )`}</div>
                <div className={[styles.switchBtn, active && styles.active].join(' ')} onClick={() => setActive(true)}>{`Завершенные ( ${completedCount} )`}</div>
            </div>
            {active === false && activeCount === 0 && <div className={styles.message}>Нет активных задач</div>}
            {active === true && completedCount === 0 && <div className={styles.message}>Нет завершенных задач</div>}
            <ul>
                {tasks.map(({task, status}, i:number) =>
                    (active === status &&
                        <li key={i} className={styles.item}>
                            {
                                i === editable.index
                                ?
                                <>
                                    <input className={styles.input} type="text" value={editable.task} onChange={({target: {value}}) => setEditable(prev => ({...prev, task: value}))} />
                                    <button className={styles.submit} onClick={() => {editTask(Number(editable.index), editable.task); setEditable({index: undefined, task: ''})}}>Сохранить</button>
                                </>
                                :
                                <>
                                    <p className={[styles.task, status && styles.disable].join(' ')} onClick={() => changeStatus(i)}>{task}</p>
                                    <div className={styles.btn} onClick={() => setEditable({index: i, task: task})}>
                                        <img src={editIcon} alt="edit" className={styles.icon}/>
                                    </div>
                                    <div className={styles.btn} onClick={() => deleteTask(i)}>
                                        <img src={deleteIcon} alt="delete" className={styles.icon}/>
                                    </div>
                                </>
                            }
                        </li>

                    )
                )}
            </ul>
        </div>
    )
}

export default connect((state: any) => ({name: state.common.name, tasks: state.common.tasks}), {addTask, deleteTask, editTask, changeStatus})(TodoPage)