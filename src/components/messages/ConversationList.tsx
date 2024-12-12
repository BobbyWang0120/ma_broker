'use client';

import { Conversation } from '../../types/message';
import Image from 'next/image';

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string;
  onSelect: (conversation: Conversation) => void;
}

export default function ConversationList({
  conversations,
  selectedId,
  onSelect,
}: ConversationListProps) {
  const buyingConversations = conversations.filter(c => c.type === 'buying');
  const sellingConversations = conversations.filter(c => c.type === 'selling');

  const formatDate = (timestamp: string) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleDateString();
    } catch (error) {
      return '';
    }
  };

  const ConversationItem = ({ conversation }: { conversation: Conversation }) => (
    <div
      className={`p-4 cursor-pointer hover:bg-neutral-50 ${
        selectedId === conversation.id ? 'bg-blue-50' : ''
      }`}
      onClick={() => onSelect(conversation)}
    >
      <div className="flex items-start space-x-4">
        <div className="relative w-12 h-12">
          <Image
            src={conversation.brokerAvatar}
            alt={conversation.brokerName}
            className="rounded-full"
            width={48}
            height={48}
          />
          {conversation.unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {conversation.unreadCount}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-neutral-900 truncate">
              {conversation.companyName}
            </h3>
            <span className="text-xs text-neutral-500">
              {formatDate(conversation.lastMessage.timestamp)}
            </span>
          </div>
          <p className="text-sm text-neutral-500 truncate mt-1">
            {conversation.lastMessage.content}
          </p>
          <p className="text-xs text-neutral-400 mt-1">
            {conversation.brokerName}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      <div className="px-4 py-3 bg-neutral-100">
        <h2 className="text-lg font-medium text-neutral-900">Messages</h2>
      </div>
      
      {buyingConversations.length > 0 && (
        <div>
          <div className="px-4 py-2 bg-neutral-50">
            <h3 className="text-sm font-medium text-neutral-500">Acquisition Interests</h3>
          </div>
          <div className="divide-y divide-neutral-100">
            {buyingConversations.map(conversation => (
              <ConversationItem
                key={conversation.id}
                conversation={conversation}
              />
            ))}
          </div>
        </div>
      )}

      {sellingConversations.length > 0 && (
        <div>
          <div className="px-4 py-2 bg-neutral-50">
            <h3 className="text-sm font-medium text-neutral-500">Sale Interests</h3>
          </div>
          <div className="divide-y divide-neutral-100">
            {sellingConversations.map(conversation => (
              <ConversationItem
                key={conversation.id}
                conversation={conversation}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
