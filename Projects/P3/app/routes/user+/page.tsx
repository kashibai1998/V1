import { useRouteLoaderData } from "@remix-run/react";

export default function Index() {
    const userList = ["lucky", "appu", "adi"];

    const data = useRouteLoaderData("routes/user+/_layout") as string[];
    console.log(data, "data===>")
    return (
        <div>
            {
                userList.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
            <h2>Data from Layout</h2>
            {
                data.appName
            }
        </div>
    )
}