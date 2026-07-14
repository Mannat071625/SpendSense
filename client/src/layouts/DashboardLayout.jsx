import {Outlet} from "react-router-dom";

function DashboardLayout(){
    return (
        <div>
            Dashboard Navbar
            <hr />
            Dashboard Sidebar
            <hr />
            <Outlet />
        </div>
    );
}

export default DashboardLayout;