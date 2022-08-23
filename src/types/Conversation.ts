interface Message {
  me: boolean;
  message: string;
}

interface Conversation {
  contactName: string;
  messageHistory: Message[];
  image: string;
}

interface ConversationListData {
  contactName: string;
  lastMessage: string;
  lastTime: string;
  image: string;
  messageHistory: Message[];
}

export type { Message, Conversation, ConversationListData }