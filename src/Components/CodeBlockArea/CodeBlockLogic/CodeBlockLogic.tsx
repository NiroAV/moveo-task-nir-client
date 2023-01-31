import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeBlockModel from "../../../Models/CodeBlockModel";
import codeBlockService from "../../../Services/CodeBlockService";
import socketService from "../../../Services/SocketService";
import "./CodeBlockLogic.css";


function CodeBlockLogic(): JSX.Element {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const [codeBlock, setCodeBlock] = useState("")
    const [isMentor, setIsMentor] = useState(true);


    useEffect(() => {
        socketService.connect( () => {
         
            socketService.socket.on("msg-from-server-update", (updatedCode) => {      
                setCodeBlock(updatedCode);   
            });
        }
        );
            socketService.isMentor((result: any)=>{
                setIsMentor(result)
            })  
        return () => {
            socketService.disconnect();
        }
    }, []);

    useEffect(() => {
        codeBlockService.getCodeBlockById(id)
            .then(c => {
               setCodeBlock(c.code);
               
            })
            .catch(err => console.log("Data not found.: " + err));
    }, [id]);

    function backLobby(){
        navigate("/")
    }

    // A function for handling changes in the text area 
    function handleChange(e: any){
        if (isMentor) {
            return;
        }
  // Otherwise, retrieve the updated code, create a new CodeBlockModel, and send the update
        const updatedCode = e.target.value
        let codeBlockModel = new CodeBlockModel()
        codeBlockModel.code = updatedCode
        setCodeBlock(updatedCode)
        socketService.clientSendUpdate(codeBlockModel, id)

        
    }

    return (
        <div className="CodeBlockLogic">
            <button className="nav-home" onClick={backLobby}>Lobby</button>
             {!isMentor ? <h2 className="mode">Mode: Student</h2> : <h2 className="mode">Mode: Mentor</h2>}   
            <div className="container">
            {!isMentor ? <textarea value={codeBlock} onChange={handleChange}></textarea> : <div></div>} 
             <SyntaxHighlighter className="high-light" language="javascript" style={atomDark}>{codeBlock}</SyntaxHighlighter>
            </div>
      
              
                
        </div>
      );
    }

export default CodeBlockLogic;