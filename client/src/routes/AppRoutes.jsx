import {BrowserRouter, Routes,Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Transactions from "../pages/Transactions/Transactions";
import Analytics from "../pages/Analytics/Analytics";
import Settings from "../pages/Settings/Settings";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route element = {<PublicLayout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            <Route element = {<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
         <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;