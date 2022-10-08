import React from "react";
import ThemeToggleButton from "components/ThemeToggleButton";

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-[100vh] dark:bg-zinc-500 transition-colors">
      <ThemeToggleButton />
    </main>
  );
};

export default App;
