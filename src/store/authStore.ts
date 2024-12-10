import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 定义认证状态的接口
interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// 创建持久化的状态存储
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'auth-storage', // localStorage 中的键名
    }
  )
);
