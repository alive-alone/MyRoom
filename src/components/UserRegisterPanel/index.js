import UserPanel from "../UserPanel"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Toast } from 'antd-mobile'

const url = 'https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/client/register'

const UserRegister = () => {
  const navigate = useNavigate()

  function handleBack() {
    navigate('/')
  }

  function handleRegister(userName, password) {
    // 注册输入规则校验
    if (userName === '' || password === '') {
      return Toast.show('用户名或密码不能为空')
    }
    const data = {
      userName,
      password
    }
    // 后端通信，校验用户是否已注册，注册成功则跳转到登录页面进行登录
    axios.post(url, data)
      .then(response => {
        // console.log(response)
        if (response.data.status === 'success') {
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