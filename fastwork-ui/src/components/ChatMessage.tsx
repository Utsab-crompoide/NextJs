
const ChatMessage = ({ message }: any) => {
    return (
      <div className="flex items-start mb-10">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={message.avatar}
          alt={message.sender}
        />
        <div>
          <p className="font-bold">{message.sender}</p>
          <p className="bg-blue-100 rounded-lg p-2">{message.text}</p>
        </div>
      </div>
    );
  };
  
  export default ChatMessage;
  