import avatar from "../../assets/images/avatar.png";

const MessageBox = (props) => {
  return (
    <div className="mt-5 max-w-full">
      <div className="font-sans text-center text-gray-600">{props.time}</div>
      <div
        className={`flex ${
          props.position === "left" ? "self-start" : "self-end flex-row-reverse"
        }`}
      >
        <div
          className={`w-10 flex-none ${
            props.position === "left" ? "ml-5 " : "mr-5"
          }`}
        >
          <img src={avatar} alt="avatar" className="rounded-full" />
        </div>
        <div
          className={`${props.position === "left" ? "ml-2 mr-16" : "mr-2 ml-16"}`}
        >
          <div
            className={`text-gray-500 mx-2 font-sans ${
              props.position === "left" ? "text-left" : "text-right"
            }`}
          >
            {props.userName}
          </div>
          <div
            className={`text-gray-800 bg-green-400 rounded-xl w-100 ${
              props.position === "left" ? "rounded-tl-none text-left" : "rounded-tr-none text-right"
            } px-2 py-2 font-sans break-all`}
          >
            {props.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
