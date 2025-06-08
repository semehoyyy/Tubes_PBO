import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default 
[
    index("routes/home.tsx"),
    route("login", "routes/LoginPage.tsx"),
    route("signup", "routes/Signup.tsx"),
    route("homepage", "routes/HomePage.tsx"),
    route("detailBarang", "routes/DetailBarang.tsx"),
    route("cart", "routes/Cart.tsx"),
    route("admin", "routes/Admin.tsx")
    
] satisfies RouteConfig;
