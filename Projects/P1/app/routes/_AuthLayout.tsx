import { Outlet } from "@remix-run/react";

export default function Layout() {
    return (
        <div>
           <header>Auth Layout</header>
           <Outlet/>
        </div>
    )
}