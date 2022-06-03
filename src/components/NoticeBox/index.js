
const NoticeBox = (props) => {
    return (
        <div className="flex justify-center">
        <div className="font-sans text-gray-600 text-center">
            <div className="date">{props.time}</div>
            <div className="notice-image">{props.image}</div>
            <div className="notice">
                <div className="">{props.text}</div>
            </div>
        </div>
        </div>
    )
}

export default NoticeBox