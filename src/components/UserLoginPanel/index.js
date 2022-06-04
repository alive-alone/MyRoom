import UserPanel from "../UserPanel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toast } from "antd-mobile";

const UserLoginPanel = () => {
  const navigate = useNavigate();

  const url =
    "https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/client/login";

  function handleLogin(userName, password) {
    // 登录输入规则校验
    if(userName === '' || password === '') return Toast.show('用户名或密码不能为空')
    const data = { userName, password };
    // 后端通信，验证用户是否登录成功，在用户名和密码都输入正确后才能登录并进入主页
    axios
      .post(url, data)
      .then((response) => {
        // console.log(response);
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
