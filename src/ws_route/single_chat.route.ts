import { ReceiveType,SingleReceivedType, SavedWebSocket } from './../global/chat.type';
import { singleChatService } from '../service/single_chat.service';
import { wsReturnCreate } from '$/utils/my_utils';


async function singleChat(message: ReceiveType<SingleReceivedType>, ws: any){
    try {
        const targetUser: SavedWebSocket|null =  await singleChatService(message.message);
        if(targetUser===null){
            console.log(`${message.message.to}用户没有登陆`)
            ws.send(wsReturnCreate(message.type, { flag: false, msg: "用户还没有登陆!!" }))
        }else{
            // 若目标用户登陆了，则将数据发送给他
            targetUser.ws.send(wsReturnCreate(message.type, { flag: true, data: message.message }))
          
        }
        // 将用户信息服务器已经获取的标志返回给用户
        ws.send(wsReturnCreate( 'singleReturn', { flag: true, data: { to: message.message.to, id: message.message.id } }))
    } catch (error) {
        ws.send(wsReturnCreate(message.type, { flag: false, msg: "解析数据出错" }))
    }
}

export { singleChat }