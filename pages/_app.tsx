import { AppProps } from "next/app";
import "@/styles/style.css";
import Main from "@/components/UI/layout/Main";
import { Open_Sans } from "@next/font/google";
import { useEffect } from "react";
import { NotificationContextProvider } from "@/store/notification-context";

const openSans = Open_Sans({ variable: "--ff-primary", subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <NotificationContextProvider>
        <div className={`min-h-screen dark:bg-slate-800 ${openSans.className}`}>
          <Main>
            <Component {...pageProps} />
          </Main>
        </div>
      </NotificationContextProvider>
    </>
  );
};

export default App;
