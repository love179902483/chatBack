import { UserType, ReceiveType } from './../global/chat.type';
import { saveConnection } from '../service/connect.service';
import { wsReturnCreate } from '../utils/my_utils';

async function connectionRoute(message: ReceiveType<UserType>, ws: any){
    try {
        const saveConnectionResult =  await saveConnection(message.message, ws);
        // 返回给前端信息
        ws.send(wsReturnCreate(message.type, saveConnectionResult))
    } catch (error) {
        ws.send(wsReturnCreate(message.type, { flag: false, msg: "解析数据出错" }))
    }

}

export { connectionRoute }