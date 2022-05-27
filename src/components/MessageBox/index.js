import './style.css'

const MessageBox = (props) => {
  return (
    <div className={props.position === 'left' ? 'left' : 'right'}>
      <div className="avatar">Avatar</div>
      <div className="message-area">
        <div className="name">Name</div>
        <div className="message">Message</div>
      </div>
    </div>
  );
};

export default MessageBox