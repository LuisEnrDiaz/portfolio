import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutMe } from "../../features/page/aboutMe/aboutMe";
import { Home } from "../../features/page/home/home";
import { MyProjects } from "../../features/page/myProjects/myProjects";

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/my-projects" element={<MyProjects />} />

                <Route path="" element={<Home />} />
                <Route path="*" element={<Navigate replace to="" />} />
            </Routes>
        </Suspense>
    );
}
