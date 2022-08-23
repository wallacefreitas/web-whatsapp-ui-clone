import { createContext, ReactNode, useState } from "react";
import { Message, Conversation } from "../types/Conversation";

interface ConversationProviderProps {
  children: ReactNode;
}

interface ConversationContextType {
  conversation: Conversation;
  message: Message[];
  setConversation: ( conversation: Conversation ) => void;
  setMessage: ( message: Message[] ) => void;
}

export const ConversationContext = createContext({} as ConversationContextType);

export const ConversationProvider = ({ children }: ConversationProviderProps) => {
  const [ conversation, setConversationData ] = useState<Conversation>({} as Conversation);
  const [ message, setMessageData ] = useState<Message[]>([]);

  function setConversation(conversation: Conversation) {
    setConversationData(conversation);
  }

  function setMessage( message: Message[] ) {
    console.log(message);
    setMessageData(message)
  }

  return (
    <ConversationContext.Provider value={{
      conversation,
      message,
      setConversation,
      setMessage,
    }}>
      {children}
    </ConversationContext.Provider>
  )
}