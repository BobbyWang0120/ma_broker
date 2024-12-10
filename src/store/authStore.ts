import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 用户基本信息接口
interface UserProfile {
  companyName: string;
  industry: string;
  location: string;
  foundedYear: number;
  employeeCount: number;
  annualRevenue: string;
  ebitda: string;
  description: string;
  contactPerson: {
    name: string;
    position: string;
    email: string;
    phone: string;
  };
}

// 认证状态接口
interface AuthState {
  isAuthenticated: boolean;
  userType: 'seller' | 'buyer' | null;
  userProfile: UserProfile | null;
  login: () => void;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

// 模拟的卖方用户数据
const mockSellerProfile: UserProfile = {
  companyName: "TechVision Solutions",
  industry: "Software Development",
  location: "Boston, MA",
  foundedYear: 2015,
  employeeCount: 85,
  annualRevenue: "$12M",
  ebitda: "$2.8M",
  description: "TechVision Solutions specializes in developing enterprise-level software solutions for the financial services industry. Our flagship product serves over 200 clients across North America.",
  contactPerson: {
    name: "Sarah Chen",
    position: "Chief Executive Officer",
    email: "s.chen@techvision.example",
    phone: "(617) 555-0123"
  }
};

// 创建持久化的状态存储
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userType: null,
      userProfile: null,
      login: () => set({
        isAuthenticated: true,
        userType: 'seller',
        userProfile: mockSellerProfile
      }),
      logout: () => set({
        isAuthenticated: false,
        userType: null,
        userProfile: null
      }),
      updateProfile: (profile) => set((state) => ({
        userProfile: state.userProfile ? { ...state.userProfile, ...profile } : null
      })),
    }),
    {
      name: 'auth-storage', // localStorage 中的键名
    }
  )
);
