import { useContext, useState } from "react";
import { ConversationContext } from "../../context/ConversationContext";
import Avatar from "../Avatar";
import { ConversationListData } from "../../types/Conversation"

interface ConversationListProps {
  isFirstConversation?: boolean;
  data: ConversationListData
}

export default function ConversationList(props: ConversationListProps) {
  const { isFirstConversation, data } = props;
  const { setConversation } = useContext(ConversationContext);
  const { contactName, lastMessage, lastTime, image } = data;
  const borderHeight = isFirstConversation ? "0px" : "1px"
  const [ isHover, seHover ] = useState(false);

  return (
    <div 
      className="flex items-center w-full h-[4.5rem] bg-[#111B21] pl-3 pr-4 hover:bg-[#2A3942] cursor-pointer"
      onMouseMove={ () => seHover(true) }
      onMouseLeave={ () => seHover(false) }
      onClick={ () => setConversation(data) }
    >
      <div className="flex w-[4.8rem]">
        <Avatar  width="w-12" height="h-12" image={image} />
      </div>
      <div className="flex flex-col w-full">
        <hr style={{borderTop: `${borderHeight} solid rgba(134,150,160,0.15)`}} />
        <div className="flex py-2">
          <div className="flex flex-col w-full h-full ">
            <span className="overflow-y-hidden text-ellipsis text-white text-base">{contactName}</span>
            <span className="overflow-y-hidden text-ellipsis text-[#aebac1] text-sm">{lastMessage}</span>
          </div>
          <div className="flex flex-col w-auto text-[#aebac1]">
            <h1 className="text-xs">{lastTime}</h1>
            {
              isHover ? (
                <span className="flex cursor-pointer h-full items-center justify-center">
                  <svg viewBox="0 0 19 20" width="19" height="20" className="">
                    <path fill="currentColor" d="m3.8 6.7 5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path>
                  </svg>
                </span>
              ) : null
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}