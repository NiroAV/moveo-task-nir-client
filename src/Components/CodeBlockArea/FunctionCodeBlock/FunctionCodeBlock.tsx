import CodeBlockLogic from "../CodeBlockLogic/CodeBlockLogic";
import "./FunctionCodeBlock.css";

function FunctionCodeBlock(): JSX.Element {
    return (
        <div className="FunctionCodeBlock">
            <h1>Function Case</h1>
			  <CodeBlockLogic />
              <div className="functions">
                <p>
              In JavaScript, a function is a block of code <br /> 
              designed to perform a specific task. <br />
             Functions help to organize code <br />
              and make it reusable.
             </p>
             </div>
        </div>
    );
}

export default FunctionCodeBlock;
