import { UserType, SavedWebSocket } from './../global/chat.type';
import { AllConnection } from './all_connection';


function replaceConnection(message: UserType) {
    try {
        // 获取到已经存在的所有connection
        const allConnectionClass = AllConnection.getInstance();
        const allConnections: SavedWebSocket[] = allConnectionClass.connection;
        for(let j=allConnections.length - 1; j>=0; j--){
            const thisConnection: SavedWebSocket = allConnections[j];
            if(thisConnection.id === message.id)
                allConnections.splice(j, 1);
        }

    } catch (error) {
        console.log(error);
    }
}

/**
 * 
 * @param message 用户数据
 * @param ws 本次链接
 */
export async function saveConnection(message: UserType, ws: any){
    try {
        const saveUser: SavedWebSocket = {
            id: message.id,
            user_info: message,
            ws: ws
        }
        // 若存储的connections 中已经存在了登陆的id则替换掉
        replaceConnection(message);
        // 将本次的websocket链接存储到内存中
        const allConnections = AllConnection.getInstance();
        allConnections.insertConnection(saveUser);

        return { flag: true }

    } catch (error) {
        console.error(error);
        return ({flag: false, msg: JSON.stringify(error)});
    }

}