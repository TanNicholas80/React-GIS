import { Outlet } from "react-router-dom";
import NavLayout from "../components/navbarComponent";

const BaseLayout = () => {
    return (<>
        <NavLayout />
        <Outlet />
    </>)
};

export default BaseLayout;