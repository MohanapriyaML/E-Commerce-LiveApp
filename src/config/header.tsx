import { BsCart3 } from "react-icons/bs"
import { CiHeart, CiSearch } from "react-icons/ci"
import { FaRegUser } from "react-icons/fa"

export const headerLogo = {
    image:"/images/logo.png"
}


export const headerNav = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"Shop",
        path:"/"
    },
    {
        name:"About",
        path:"/"
    },
    {
        name:"Contact",
        path:"/"
    }
]

export const headerIcons = [
    {
        href:"",
        icon:<FaRegUser />
    },
    {
        href:"",
        icon:<CiSearch />
    },
    {
        href:"",
        icon:<CiHeart />
    },
    {
        href:"",
        icon:<BsCart3 />
    }
]
