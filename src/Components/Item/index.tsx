import React, {useState, useEffect} from 'react'
import styles from './styles.module.scss'
import { ItemProps } from '../../Types'
import { connect } from 'react-redux'
import { deleteTask, changeStatus } from '../../Modules/common'
import editIcon from '../../Icons/editIcon.svg'
import deleteIcon from '../../Icons/deleteIcon.svg'
import { Input } from '../'

const Item: React.FC<ItemProps> = ({taskObj, index, deleteTask, changeStatus}) => {
    const {task, status} = taskObj
    const [editable, setEditable] = useState(false)

    useEffect(() => {
        setEditable(false)
    }, [task])

    return (
        <div className={styles.wrapper}>
            {
                editable
                ?
                <Input type='edit' name='Сохранить' index={index} defaultValue={task}/>
                :
                <>
                    <p className={[styles.task, status && styles.disable].join(' ')} onClick={() => changeStatus && changeStatus(index)}>{task}</p>
                    <div className={styles.btn} onClick={() => setEditable(true)}>
                        <img src={editIcon} alt="edit" className={styles.icon}/>
                    </div>
                    <div className={styles.btn} onClick={() => deleteTask && deleteTask(index)}>
                        <img src={deleteIcon} alt="delete" className={styles.icon}/>
                    </div>
                </>
            }
        </div>
    )
}

export default connect(null, {deleteTask, changeStatus})(Item)