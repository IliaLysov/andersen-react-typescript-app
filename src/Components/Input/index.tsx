import React, {useState} from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { addTask, editTask, setUser } from '../../Modules/common'
import { InputProps } from '../../Types'

const Input: React.FC<InputProps> = ({defaultValue, placeholder, type, index, name, addTask, editTask, setUser}) => {
    const [value, setValue] = useState(defaultValue || '')

    const sendHandler = () => {
        if (type === 'add' && value.trim() !== '' && addTask) {
            addTask(value)
            setValue('')
        } else if (type === 'edit' && typeof index === 'number' && editTask) {
            editTask(index, value)
        } else if (type === 'user' && setUser) {
            setUser(value)
        }
    }

    return (
        <>
            <input type="text" value={value} onChange={({target: {value}}) => setValue(value.trimStart())} className={styles.input} placeholder={placeholder} />
            <button className={styles.btn} onClick={sendHandler}>{name}</button>
        </>
    )
}

export default connect(null, {addTask, editTask, setUser})(Input)