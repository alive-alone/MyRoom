import NavHeader from "../../../components/NavHeader";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Input, Space } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";
import MessageBox from "../../../components/MessageBox";

import './style.css'

const ChatPanel = (props) => {

    const [inputValue, setInputValue] = useState('')
    const params = useParams()  
    // 根据Params.id获取对应id的聊天记录

    return (
        <div>
            <div className="top-nav-area">
                <NavHeader right={<MoreOutline fontSize={24}/>} >对面名称(消息数)</NavHeader>
            </div>
            <div className="message-show-area" onClick={() => console.log(params)}>
                聊天记录Panel
                <MessageBox position="right" />
            </div>
            <div className="input-area">
                <Space>
                    {/* icon */}
                    <Input 
                    placeholder="write something"
                    value={inputValue}
                    onChange={(val) => setInputValue(val)}
                    clearable
                    />
                    <Button color="primary">发送</Button>
                </Space>
            </div>
        </div>
    )
}

export default ChatPanel