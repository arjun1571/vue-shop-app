import { Outlet } from "react-router-dom";
import Header from "../page/Header/Header";
import Fotter from "../page/Fotter/Fotter";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;