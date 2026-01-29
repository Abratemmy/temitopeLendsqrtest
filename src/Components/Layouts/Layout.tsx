import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Layout.scss";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="layout__content">
                <Navbar />
                <main className="layout__main">{children}</main>
            </div>
        </div>
    );
};


export default Layout;