import { ReactNode } from "react";
import { Topbar, TopbarLogo } from "../components/Header/Topbar";
import { MenuBarDesktop } from "../components/Header/MenuBar";
import { Trending } from "../components/Trending";
import { Search } from "../components/Search";
import { Footer } from "../components/Footer";
import { TopButton } from "../components/TopButton";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div>
      <Topbar />
      <TopbarLogo />
      <MenuBarDesktop />
      <div className="grid grid-cols-3 gap-6 items-baseline py-4 px-4 max-w-6xl mx-auto">
        <div className="col-span-full md:col-span-2 w-full">
          <Trending />
        </div>
        <div className="col-span-full md:col-span-1">
          <Search />
        </div>
      </div>
      {children}
      <TopButton />
      <Footer />
    </div>
  );
}
