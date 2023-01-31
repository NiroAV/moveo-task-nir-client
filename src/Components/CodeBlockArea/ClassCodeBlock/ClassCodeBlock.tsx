import CodeBlockLogic from "../CodeBlockLogic/CodeBlockLogic";
import "./ClassCodeBlock.css";

function ClassCodeBlock(): JSX.Element {
    return (
        <div className="ClassCodeBlock">
            <h1>Class Case</h1>
			<CodeBlockLogic />
            <div className="classes">
                <p>
                In JavaScript, a class is a blueprint <br /> 
                for creating objects (instances) <br />
                 with specific properties and methods (functions). <br />
                Classes are a way to create reusable objects <br />
                 and encapsulate data and behavior.
                </p>
            </div>
        </div>
    );
}

export default ClassCodeBlock;
