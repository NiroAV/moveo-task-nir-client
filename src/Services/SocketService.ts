import { io, Socket } from "socket.io-client";

class SocketService {

    public socket: Socket;

    public connect(codeUpdate: Function): void {
        this.socket = io("http://129.159.148.125:5000");

        this.socket.on("msg-from-server-update", (updatedCode) => {
            codeUpdate(updatedCode)
        })
    };

    public disconnect(): void {
        this.socket.disconnect();
    }

    public clientSendUpdate(updatedCode: any, _id: string): void {
        this.socket.emit("msg-from-client-update", updatedCode, _id);
    }

    public isMentor(setIsMentor: Function){
        this.socket.emit("check-if-mentor", function(res:boolean){ 
            setIsMentor(res)
        })
    }
    
}

const socketService = new SocketService();

export default socketService;