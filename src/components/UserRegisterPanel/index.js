import UserPanel from "../UserPanel"
import { useNavigate } from "react-router-dom"


const UserRegister = () => {
    const navigate = useNavigate()

    function handleBack() {
        navigate('/')
    }

    function handleSubmit() {

    }

    return (
        <>
            <UserPanel topText="注册" leftButtonText="注册" rightButtonText="返回" leftButtonEvent={handleSubmit} rightButtonEvent={handleBack} />
        </>
    )
}

export default UserRegister