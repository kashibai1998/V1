import { memo } from "react"
const Header =memo(function Header() {
    console.log('header')
    return (
        <div>
            <h1>header</h1>
        </div>
    )
})

export default Header;