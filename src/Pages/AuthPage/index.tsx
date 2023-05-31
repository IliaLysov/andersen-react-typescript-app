import React, { useEffect} from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthPageProps } from '../../Types'
import { Input } from '../../Components'


const AuthPage: React.FC<AuthPageProps> = ({name}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (name !== '') {
            navigate('/todo')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

    return (
        <div className={styles.wrapper}>
            <h1>Авторизация</h1>
            <Input placeholder='Введите своё имя' type='user' name='Сохранить'/>
        </div>
    )
}

export default connect((state: any) => ({name: state.common.name}))(AuthPage)