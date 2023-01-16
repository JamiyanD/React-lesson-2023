import { Outlet } from "react-router-dom";

export default function About(){
    return(
        <div>
            <h1>It is about page</h1>
            <a href="/about/usukhuu">Usukhuu</a>
            <a href="/about/khangai">Khangai</a>
            <Outlet />
        </div>
    )
}