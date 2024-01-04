import { create } from 'zustand'

export const useModeStore = create((set) => ({
  mode: 0,
  toggleMode: (state) => {
    if (state.mode === 0) {
        set((state) => ({ mode: 1 }))
    } else {
        set((state) => ({ mode: 0 }))
    }
  },
}))

export function GetMode() {
    const mode = useModeStore((state) => state.mode)
    return mode;
  }