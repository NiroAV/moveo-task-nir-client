import axios from 'axios';
import CodeBlockModel from '../Models/CodeBlockModel';
import config from '../Utils/config';

class CodeBlockService{

    async getCodeBlocks(): Promise<CodeBlockModel[]>{
        const codeBlocks = await axios.get<CodeBlockModel[]>(config.url)
        return codeBlocks.data
    }

    async getCodeBlockById(_id: string): Promise<CodeBlockModel>{
        const codeBlock = await axios.get<CodeBlockModel>(config.url + _id)
        return codeBlock.data
    }

    async updateCodeBlock(_id: string, codeBlock: CodeBlockModel): Promise<CodeBlockModel>{
        const updatedCodeBlock = await axios.put<CodeBlockModel>(config.url + _id, {code: codeBlock})
        return updatedCodeBlock.data
    }
}

const codeBlockService = new CodeBlockService()

export default codeBlockService