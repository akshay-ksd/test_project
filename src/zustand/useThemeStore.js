import create from "zustand"

const useThemeStore = create ((set)=>({
    themeType: "light",
    setThemeType: (value) => set((state) => ({ themeType:value })),
}));

export default useThemeStore