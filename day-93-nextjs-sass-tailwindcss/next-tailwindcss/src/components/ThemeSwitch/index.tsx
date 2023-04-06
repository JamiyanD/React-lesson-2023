import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const dark: boolean = theme === "dark";

  const toggleTheme = () => {
    setTheme(dark ? "light" : "dark");
  };
  if (typeof window === "undefined") return null;
  return (
    <button onClick={toggleTheme} className="">
      Toggle Theme
    </button>
  );
}
