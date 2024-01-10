import { create } from 'zustand'

type ModeState = {
  mode: number,
  toggleMode: (state: ModeState) => void
}

export const useModeStore = create((set) => ({
  mode: 0,
  toggleMode: (state: ModeState) => {
    if (state.mode === 0) {
        set((state: ModeState) => ({ mode: 1 }))
    } else {
        set((state: ModeState) => ({ mode: 0 }))
    }
  },
}))