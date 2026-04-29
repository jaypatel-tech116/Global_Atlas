import { GoHomeFill } from "react-icons/go";
import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h1>Ooops...! An Error Occurred.</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/" >
                <button>Go to Home<GoHomeFill /></button>
            </NavLink>
        </div>
    );
};