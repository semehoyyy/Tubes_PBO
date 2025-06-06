import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default 
[
    index("routes/home.tsx"),
    route("login", "routes/LoginPage.tsx"),
    route("signup", "routes/Signup.tsx"),
    route("homepage", "routes/HomePage.tsx")
    
] satisfies RouteConfig;
