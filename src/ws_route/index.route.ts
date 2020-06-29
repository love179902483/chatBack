import { ReceiveType } from './../global/chat.type';
import { connectionRoute } from './connection.route';
import { singleChat } from './single_chat.route';

async function indexRoute(receiveMessage: ReceiveType<any>, ws: any){
    try {
        switch (receiveMessage.type){
            case 'connection':
                await connectionRoute(receiveMessage, ws);
                break
            case 'single':
                await singleChat(receiveMessage, ws);
                break
        }
    } catch (error) {
        console.error(error)
    }
}

export { indexRoute }