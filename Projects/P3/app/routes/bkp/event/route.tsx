import { Outlet } from "@remix-run/react";

export default function Events() {
    return (
                    <div>
                        <header>
                            All headers related to Events page
                        </header>
                            <Outlet />
                        <footer>
                            All footers related to Events page
                        </footer>
                    </div>
    )
}