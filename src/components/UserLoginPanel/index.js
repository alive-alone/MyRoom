import UserPanel from "../UserPanel";
import { useNavigate } from "react-router-dom";

const UserLoginPanel = () => {
    const navigate = useNavigate()

    function handleLogin() {

    }

    function handleRegister() {
        navigate('/register')
    }

    return (
        <>
            <UserPanel topText="登录" leftButtonText="登录" rightButtonText="注册" leftButtonEvent={handleLogin} rightButtonEvent={handleRegister} />
        </>
    )
}

export default UserLoginPanel