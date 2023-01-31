import { Route, Routes} from "react-router-dom";
import ArrayCodeBlock from "../../CodeBlockArea/ArrayCodeBlock/ArrayCodeBlock";
import AsyncCodeBlock from "../../CodeBlockArea/AsyncCodeBlock/AsyncCodeBlock";
import ClassCodeBlock from "../../CodeBlockArea/ClassCodeBlock/ClassCodeBlock";
import FunctionCodeBlock from "../../CodeBlockArea/FunctionCodeBlock/FunctionCodeBlock";
import Lobby from "../../HomeArea/Home/Lobby"




function Routing(): JSX.Element {

    return (
        <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/code-block/Async/:id" element={< AsyncCodeBlock/>} />
            <Route path="/code-block/Functions/:id" element={<FunctionCodeBlock />} />
            <Route path="/code-block/Class/:id" element={<ClassCodeBlock />} />
            <Route path="/code-block/Arrays/:id" element={<ArrayCodeBlock/>} />
        </Routes>
    );
}

export default Routing;