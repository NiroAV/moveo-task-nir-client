import CodeBlockLogic from "../CodeBlockLogic/CodeBlockLogic";
import "./ArrayCodeBlock.css";

function ArrayCodeBlock(): JSX.Element {
    return (
        <div className="ArrayCodeBlock">
            <h1>Array Case</h1>
			  <CodeBlockLogic />
              <div className="arrays">
                <p>
                In JavaScript, an array is a collection of elements <br />
                 that can be of different data types <br />
                  (e.g. numbers, strings, objects, etc.). <br />
                   Arrays are used to store <br />
                 and manipulate multiple values in a single variable.
                </p>
              </div>
        </div>
    );
}

export default ArrayCodeBlock;
