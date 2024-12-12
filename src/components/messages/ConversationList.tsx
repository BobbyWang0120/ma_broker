'use client';

import { Conversation } from '../../types/message';

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string;
  onSelect: (conversation: Conversation) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  selectedId,
  onSelect,
}) => {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(date);
    } catch (error) {
      return '';
    }
  };

  const buyingConversations = conversations.filter(conv => conv.type === 'buying');
  const sellingConversations = conversations.filter(conv => conv.type === 'selling');

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {buyingConversations.length > 0 && (
          <div className="py-2">
            <div className="px-4 py-2 text-sm font-medium text-gray-500">
              Acquisition Interests
            </div>
            {buyingConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                  selectedId === conversation.id ? 'bg-blue-50' : ''
                }`}
                onClick={() => onSelect(conversation)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-900">
                        {conversation.companyName}
                      </span>
                      {conversation.unreadCount > 0 && (
                        <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm text-gray-600 line-clamp-1">
                      {conversation.lastMessage.content}
                    </div>
                    <div className="mt-1 flex items-center text-xs text-gray-500">
                      <span>{conversation.brokerName}</span>
                      <span className="mx-1">•</span>
                      <span>{formatDate(conversation.lastMessage.timestamp)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {sellingConversations.length > 0 && (
          <div className="py-2">
            <div className="px-4 py-2 text-sm font-medium text-gray-500">
              Sale Interests
            </div>
            {sellingConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                  selectedId === conversation.id ? 'bg-blue-50' : ''
                }`}
                onClick={() => onSelect(conversation)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-900">
                        {conversation.companyName}
                      </span>
                      {conversation.unreadCount > 0 && (
                        <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm text-gray-600 line-clamp-1">
                      {conversation.lastMessage.content}
                    </div>
                    <div className="mt-1 flex items-center text-xs text-gray-500">
                      <span>{conversation.brokerName}</span>
                      <span className="mx-1">•</span>
                      <span>{formatDate(conversation.lastMessage.timestamp)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationList;
