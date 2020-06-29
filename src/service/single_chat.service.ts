import { SavedWebSocket } from './../global/chat.type';
import { SingleReceivedType } from '../global/chat.type';
import { AllConnection } from './all_connection';

/**
 * 根据前端传过来的聊天信息，确定要发给的目标用户，并返回目标用户的websocket信息, 若目标没有登陆则返回null
 * @param receivedMessage 获取到的前端传过来的聊天信息
 */

function singleChatService(receivedMessage: SingleReceivedType){
    const allConnectionClass: AllConnection = AllConnection.getInstance();
    const allConnection: SavedWebSocket[] = allConnectionClass.connection;
    const to = receivedMessage.to;

    for(let i=0, j=allConnection.length; i<j; i++){
        if(allConnection[i].id === to)
            return allConnection[i];
    }
    return null;
}

export { singleChatService }