import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-6 right-6 z-50" data-ocid="theme.toggle">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        data-ocid="theme.toggle_button"
        className="
          group relative flex items-center gap-2.5
          px-4 py-2.5 rounded-full
          border border-accent/40
          bg-card/90 backdrop-blur-md
          shadow-gold
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-gold-glow hover:border-accent/70
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
          active:scale-95
        "
      >
        {/* Track — pill background */}
        <span
          className={`
            absolute inset-0 rounded-full opacity-0 transition-opacity duration-300
            group-hover:opacity-100
            ${isDark ? "bg-primary/10" : "bg-accent/10"}
          `}
          aria-hidden="true"
        />

        {/* Icon + label */}
        <span className="relative flex items-center gap-2">
          <span
            className={`
              flex items-center justify-center w-6 h-6 rounded-full
              transition-all duration-300
              ${
                isDark
                  ? "bg-accent/20 text-accent"
                  : "bg-primary/15 text-primary"
              }
            `}
          >
            {isDark ? (
              <Sun size={14} strokeWidth={2.2} aria-hidden="true" />
            ) : (
              <Moon size={14} strokeWidth={2.2} aria-hidden="true" />
            )}
          </span>
          <span
            className={`
              text-xs font-semibold tracking-wide select-none
              transition-colors duration-300
              ${isDark ? "text-accent" : "text-primary"}
            `}
          >
            {isDark ? "Light" : "Dark"}
          </span>
        </span>
      </button>
    </div>
  );
}
