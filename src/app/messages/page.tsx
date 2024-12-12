'use client';

import { useState } from 'react';
import ConversationList from '../../components/messages/ConversationList';
import ChatWindow from '../../components/messages/ChatWindow';
import { mockConversations, mockMessages } from '../../data/mockMessages';
import { Conversation, Message } from '../../types/message';

export default function MessagesPage() {
  const [conversations, setConversations] = useState(mockConversations);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>(mockMessages);

  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    // Mark messages as read
    if (conversation.unreadCount > 0) {
      setConversations(prevConversations =>
        prevConversations.map(conv =>
          conv.id === conversation.id
            ? { ...conv, unreadCount: 0 }
            : conv
        )
      );
    }
  };

  const handleSendMessage = (content: string) => {
    if (!selectedConversation) return;

    const timestamp = new Date().toISOString();
    const newMessage: Message = {
      id: `m${Date.now()}`,
      content,
      type: 'text',
      senderId: 'user',
      timestamp,
      read: true,
    };

    // Update messages list
    setMessages(prevMessages => ({
      ...prevMessages,
      [selectedConversation.id]: [
        ...(prevMessages[selectedConversation.id] || []),
        newMessage,
      ],
    }));

    // Update conversation list with last message
    setConversations(prevConversations =>
      prevConversations.map(conv =>
        conv.id === selectedConversation.id
          ? { ...conv, lastMessage: newMessage }
          : conv
      )
    );

    // Simulate broker reply
    setTimeout(() => {
      const replyTimestamp = new Date().toISOString();
      const brokerReply: Message = {
        id: `m${Date.now() + 1}`,
        content: 'Message received. We will process and respond to you shortly.',
        type: 'text',
        senderId: selectedConversation.brokerName,
        timestamp: replyTimestamp,
        read: true,
      };

      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedConversation.id]: [
          ...(prevMessages[selectedConversation.id] || []),
          brokerReply,
        ],
      }));

      setConversations(prevConversations =>
        prevConversations.map(conv =>
          conv.id === selectedConversation.id
            ? { ...conv, lastMessage: brokerReply }
            : conv
        )
      );
    }, 1000);
  };

  return (
    <div className="h-screen flex">
      {/* Left sidebar - conversation list */}
      <div className="w-96 border-r bg-white">
        <ConversationList
          conversations={conversations}
          selectedId={selectedConversation?.id || ''}
          onSelect={handleSelectConversation}
        />
      </div>

      {/* Right side - chat window */}
      <div className="flex-1 bg-white">
        {selectedConversation ? (
          <ChatWindow
            conversation={selectedConversation}
            messages={messages[selectedConversation.id] || []}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="h-full flex items-center justify-center text-neutral-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
}
