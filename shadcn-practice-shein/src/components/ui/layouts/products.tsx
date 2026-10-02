import { Outlet } from "react-router"

export default function products() {
    return (
        <>
            <div className="bg-amber-500 h-8">products layout</div>
            <Outlet />
        </>
    )
}
