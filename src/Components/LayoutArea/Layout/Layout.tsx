//import { useEffect } from "react";
//import socketService from "../../../Services/SocketService";
import Routing from "../Routing/Routing";
import "./Layout.css";


function Layout(): JSX.Element {

    return (
        <div className="Layout">
            <Routing />
        </div>
    );
}

export default Layout;
