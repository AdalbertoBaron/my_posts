import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPages from "../pages/PostIdPages";
import {routes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    element={<route.component/>}
                    path={route.path}
                    exact={route.exact}
                />
            )}

            {/*<Route path="/about" element={<About/>}/>*/}
            {/*<Route path="/posts" element={<Posts/>}/>*/}
            {/*<Route path="/posts/:id" element={<PostIdPages/>}/>*/}
            {/*<Route path="*" element={<Navigate replace to="/posts" />} />*/}
        </Routes>
    );
};

export default AppRouter;