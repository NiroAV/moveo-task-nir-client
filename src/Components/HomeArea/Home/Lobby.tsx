import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import codeBlockService from "../../../Services/CodeBlockService";
import "./Lobby.css";

function Lobby(): JSX.Element {

    const [codeBlocks,setCodeBlocks] = useState([])

    useEffect(() => {
        codeBlockService.getCodeBlocks()
        .then(codeBlock => setCodeBlocks(codeBlock))
        .catch(err => console.log("Not found: " + err))
    },[])

    return (
        <div className="Lobby">
			<h1>Choose code block</h1>
           <div className="code-block-container">
            {codeBlocks.map(i => <div className="code-block" key={i._id}><NavLink  to={`/code-block/${i.title}/${i._id}`}><div className="title-btn">{i.title}</div></NavLink></div>)}
           </div>
        </div>
    );
}

export default Lobby;
