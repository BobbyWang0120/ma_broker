export type MessageType = 'text' | 'image' | 'file';
export type ConversationType = 'buying' | 'selling';

export interface Message {
  id: string;
  content: string;
  type: MessageType;
  senderId: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  type: ConversationType;
  companyName: string;
  lastMessage: Message;
  unreadCount: number;
  brokerName: string;
  dealId: string;
}
