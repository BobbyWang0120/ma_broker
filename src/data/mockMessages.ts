import { Conversation, Message } from '../types/message';

export const mockConversations: Conversation[] = [
  {
    id: '1',
    type: 'buying',
    companyName: 'Tech Solutions Inc',
    lastMessage: {
      id: 'm1',
      content: 'We have received your acquisition interest in Tech Solutions Inc, and our team is evaluating the information.',
      type: 'text',
      senderId: 'broker1',
      timestamp: '2024-12-12T10:30:00Z',
      read: false
    },
    unreadCount: 2,
    brokerName: 'John Smith',
    brokerAvatar: '/avatars/broker1.jpg',
    dealId: 'deal1'
  },
  {
    id: '2',
    type: 'buying',
    companyName: 'Global Manufacturing Co',
    lastMessage: {
      id: 'm2',
      content: 'The seller has some questions about your valuation. Could we discuss your calculation method in detail?',
      type: 'text',
      senderId: 'broker2',
      timestamp: '2024-12-11T15:45:00Z',
      read: true
    },
    unreadCount: 0,
    brokerName: 'Sarah Johnson',
    brokerAvatar: '/avatars/broker2.jpg',
    dealId: 'deal2'
  },
  {
    id: '3',
    type: 'selling',
    companyName: 'Your Company Name',
    lastMessage: {
      id: 'm3',
      content: 'A potential buyer has expressed strong interest in your company, particularly impressed by your technical team and market share.',
      type: 'text',
      senderId: 'broker3',
      timestamp: '2024-12-12T09:15:00Z',
      read: false
    },
    unreadCount: 1,
    brokerName: 'Michael Brown',
    brokerAvatar: '/avatars/broker3.jpg',
    dealId: 'deal3'
  }
];

export const mockMessages: { [key: string]: Message[] } = {
  '1': [
    {
      id: 'm1-1',
      content: 'Hello! I\'m John Smith, your dedicated M&A advisor. I\'m pleased to assist you.',
      type: 'text',
      senderId: 'broker1',
      timestamp: '2024-12-12T10:00:00Z',
      read: true
    },
    {
      id: 'm1-2',
      content: 'We have received your acquisition interest in Tech Solutions Inc.',
      type: 'text',
      senderId: 'broker1',
      timestamp: '2024-12-12T10:01:00Z',
      read: true
    },
    {
      id: 'm1-3',
      content: 'Our team is evaluating the information and will provide you with an initial analysis report within 24 hours.',
      type: 'text',
      senderId: 'broker1',
      timestamp: '2024-12-12T10:30:00Z',
      read: false
    }
  ],
  '2': [
    {
      id: 'm2-1',
      content: 'Hello, regarding the acquisition of Global Manufacturing Co, we have had initial communications with the seller.',
      type: 'text',
      senderId: 'broker2',
      timestamp: '2024-12-11T15:30:00Z',
      read: true
    },
    {
      id: 'm2-2',
      content: 'The seller has some questions about your valuation. Could we discuss your calculation method in detail?',
      type: 'text',
      senderId: 'broker2',
      timestamp: '2024-12-11T15:45:00Z',
      read: true
    }
  ],
  '3': [
    {
      id: 'm3-1',
      content: 'Good news! A potential buyer has expressed strong interest in your company.',
      type: 'text',
      senderId: 'broker3',
      timestamp: '2024-12-12T09:00:00Z',
      read: true
    },
    {
      id: 'm3-2',
      content: 'They are particularly impressed by your technical team and market share, and would like to learn more about the specifics.',
      type: 'text',
      senderId: 'broker3',
      timestamp: '2024-12-12T09:15:00Z',
      read: false
    }
  ]
};
