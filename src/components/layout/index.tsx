import React from "react";

import classNames from "classnames";
import { Outlet } from "react-router-dom";

import Navigation from "@/components/navigation";
import { HeaderState, useHeaderStore } from "@/store/headerStore";

interface LayoutProps {
  showNavigation?: boolean;
}

const HeaderContainer: React.FC = () => {
  const header = useHeaderStore((state: HeaderState) => state.header);

  return (
    <header className="sticky top-0 left-0 px-8 xl:px-25 z-10">{header}</header>
  );
};

const Layout: React.FC<LayoutProps> = ({ showNavigation = true }) => {
  return (
    <div className="inset-0 overflow-hidden bg-[#2A4DA3] bg-no-repeat flex flex-col h-dvh">
      <div className="fixed inset-0 bg-gradient-to-t from-transparent to-[#0F172A] h-[215px] md:h-[397px] pointer-events-none z-10" />
      <main
        className={classNames(
          "flex-1 flex flex-col",
          "overflow-y-auto overflow-x-hidden",
        )}
      >
        <HeaderContainer />
        <Outlet />
        {showNavigation && (
          <>
            <div className="sticky bottom-0 left-0 right-0 z-10 mt-auto">
              <footer className="w-full z-10 shrink-0">
                <Navigation />
              </footer>
            </div>
            <div className="fixed inset-0 bg-gradient-to-t from-transparent to-[#0F172A] h-[220px] top-[calc(100dvh-220px)] left-0 w-full -rotate-180 pointer-events-none" />
          </>
        )}
      </main>
    </div>
  );
};

export const LayoutWithNavigation: React.FC = () => (
  <Layout showNavigation={true} />
);
export const LayoutWithoutNavigation: React.FC = () => (
  <Layout showNavigation={false} />
);

export default Layout;
