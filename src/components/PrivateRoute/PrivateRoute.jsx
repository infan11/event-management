import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
const {user , loading } = useContext(AuthContext);

if(loading){
    return <FadeLoader color="#36d7b7" />
}
if(user){
    return children
}
 
     return <Navigate to={"/login"} state={{from : location} } replace ></Navigate>
};

export default PrivateRoute;