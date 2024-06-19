import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useTokenStore} from "../Store/TokenStore";
import {Role} from "../DataType/Role";

export const UserRoutes = () => {
    const location = useLocation()
    const token = useTokenStore((state) => state.token)

    return token
        ? <Outlet />
        : <Navigate to='/' state={{ from: location }} />
}

export const AdminRoutes = () => {
    const location = useLocation()
    const role = useTokenStore((state) => state.role)


    return role === Role.ADMIN
        ? <Outlet />
        : <Navigate to='/admin' state={{ from: location }} />
}

export const BackendRoutes = () => {
    const location = useLocation()
    const backendUp = useTokenStore((state) => state.backendUp)

    return backendUp
        ? <Outlet />
        : <Navigate to='/' state={{ from: location }} />
}