import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";
import About from "../pages/About";


export const routes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPages, exact: true},
]