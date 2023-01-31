import CodeBlockLogic from "../CodeBlockLogic/CodeBlockLogic";
import "./AsyncCodeBlock.css";

function AsyncCodeBlock(): JSX.Element {

    return (
        <div className="AsyncCodeBlock">
            <h1>Async Case</h1>
            
            <CodeBlockLogic />
            <div className="async">
            <p>async/await is a way to handle <br /> 
            asynchronous code in JavaScript,<br /> 
            which is code that runs in the <br /> 
            background and doesn't <br /> 
            block the main thread. <br />
           </p>
            </div>
        </div>
    );
}

export default AsyncCodeBlock;
