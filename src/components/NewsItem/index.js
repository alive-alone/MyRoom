import { Avatar} from "antd-mobile";

const Item = (props) => {
  return (
    <div className="item flex">
      <Avatar src={props.avatar} />
      <div className="item-info ml-3 text-gray-600 font-sans text-left">
          <p className="font-bold text-sm">{props.name}</p>
          <p className="py-1">{props.message}</p>
      </div>
    </div>
  );
};

export default Item;