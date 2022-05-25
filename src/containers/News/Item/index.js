import { Avatar } from "antd-mobile";
import './index.css'

const Item = (props) => {
    return (
        <div className="item">
            <Avatar />
            <div className="item-info">
                <p>{props.name}</p>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Item