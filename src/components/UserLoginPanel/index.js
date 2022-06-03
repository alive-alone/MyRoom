import UserPanel from "../UserPanel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toast } from "antd-mobile";

const UserLoginPanel = () => {
  const navigate = useNavigate();

  const url =
    "https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/client/login";

  function handleLogin(userName, password) {
    const data = { userName, password };
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
            Toast.show('登录成功，进入主界面')
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  }

  function handleRegister() {
    navigate("/register");
  }

  return (
    <>
      <UserPanel
        topText="登录"
        leftButtonText="登录"
        rightButtonText="注册"
        leftButtonEvent={handleLogin}
        rightButtonEvent={handleRegister}
      />
    </>
  );
};

export default UserLoginPanel;
