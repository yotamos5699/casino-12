// "use client";
import "./globals.css";

import AuthProvider from "./context/AuthProvider";
import ServerUpperNav from "./components/NavComponents/ServerUpperNav";
import LeftSideNav from "./components/NavComponents/LeftSideNav";
import { AppStyle_, AppTheme } from "./Style";
import RightSideNav from "./components/NavComponents/RightNav";

export const metadata = {
  title: "NextAuth Tutorial",
  description: "kat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body dir="rtl">
        <AuthProvider>
          <div className={`${AppStyle_.bg.a}    h-screen flex  flex-col  `}>
            <ServerUpperNav
              className={` items-center  w-full  p-4 justify-between flex text-sm    ${AppStyle_.bg.b}  w-full sticky top-0`}
            />

            <LeftSideNav
              className={`hidden left-2 w-[3%]  p-2 md:flex absolute h-[85%] top-24 hover:left-2  group  transition-all duration-200 hover:w-44   rounded-md shadow-lg items-center    ${AppStyle_.bg.c} flex-col`}
            />
            <div className=" md:absolute overflow-auto scrollbar-hide h-[90%]  md:w-[75%]  md:right-[18%] md:top-24   ">{children}</div>
            <RightSideNav className={`hidden top-24  absolute right-0 h-[85%] w-[15%] md:flex   flex-col p-4 ${AppStyle_.bg.b}`} />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
