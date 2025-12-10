import { Outlet, redirect } from "@remix-run/react";

const user = {
    login: true,
}
export const loader = () => {
    if (!user.login) {
       return redirect('/login');
    }else
    {
    console.log('loader');
    }
    return null;
}

export default function Layout() {
    return (
        <div>
        <h1>This is Layout Component</h1>
        <Outlet/>
        </div>
    )
}