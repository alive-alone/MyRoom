import { useState } from "react";

const UserPanel = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 font-sans">
      <div className="w-3/4">
        <div className="flex mb-10 justify-center text-3xl text-gray-800">
          <h1>{props.topText}</h1>
        </div>
        <div className="">
          <div className="flex mb-3 h-10 items-baseline">
            <span className="text-base h-full flex-0 ">用户名：</span>
            <input
              type="text"
              placeholder="please input username"
              className="rounded px-2 h-full flex-1"
              value={userName}
              onChange={(e) => handleUserNameChange(e)}
            />
          </div>
          <div className="mb-3 h-10 flex items-baseline">
            <span className="text-base h-full flex-0 leading-loose">
              密码：
            </span>
            <input
              type="password"
              placeholder="please input password"
              className="h-full px-2 ml-4 w-full flex-1"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
          </div>
        </div>
        <div className="flex justify-evenly text-base">
          <button
            type="submit"
            className="bg-green-500 text-gray-600 rounded px-5 py-2"
            onClick={() => props.leftButtonEvent(userName, password)}
          >
            {props.leftButtonText}
          </button>
          <button
            className="bg-zinc-300 text-gray-600 rounded px-5 py-2"
            onClick={() => props.rightButtonEvent()}
          >
            {props.rightButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
