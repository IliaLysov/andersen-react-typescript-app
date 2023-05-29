import React, {useState} from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { setUser } from '../../Modules/common'
import { useNavigate } from 'react-router-dom'

interface AuthProps {
    setUser: (name: string) => void,
    name: string
}

function AuthPage({setUser, name}: AuthProps) {
    const navigate = useNavigate()
    const [value, setValue] = useState(name)

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUser(value)
        navigate('/todo')
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <h1>Авторизация</h1>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    className={styles.input}
                    placeholder='Введите свое имя'
                    value={value}
                    onChange={changeHandler}
                />
                <button className={styles.submit} type='submit'>Сохранить</button>
            </form>
        </div>
    )
}

export default connect((state: any) => ({name: state.common.name}), {setUser})(AuthPage)