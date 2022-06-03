import { Avatar} from "antd-mobile";

const Item = (props) => {
  return (
    <div className="item flex">
      <Avatar src={props.avatar} />
      <div className="item-info ml-3 text-gray-600 font-sans">
          <p className="font-bold text-base">{props.name}</p>
          <p className="py-1">{props.message}</p>
      </div>
    </div>
  );
};

export default Item;