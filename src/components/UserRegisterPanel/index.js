import UserPanel from "../UserPanel"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import {Toast} from 'antd-mobile'

const url = 'https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/client/register'

const UserRegister = () => {
    const navigate = useNavigate()

    function handleBack() {
        navigate('/')
    }

    function handleRegister(userName, password) {
        const data = {
            userName,
            password
        }
        axios.post(url, data)
            .then(response => {
                console.log(response)
                if(response.data.status ==='success'){
                    Toast.show('注册成功')
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <UserPanel topText="注册" leftButtonText="注册" rightButtonText="返回" leftButtonEvent={handleRegister} rightButtonEvent={handleBack} />
        </>
    )
}

export default UserRegister