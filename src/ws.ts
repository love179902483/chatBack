
import websocket from 'ws';
import { AllConnection } from './service/all_connection';
import { indexRoute } from './ws_route/index.route';

export function startWS(){
  const ws = new websocket.Server({port: 8888});
  const allConnection: AllConnection = AllConnection.getInstance();
  // allConnection.insertConnection(ws);
  // console.log(allConnection.connection)
    ws.on('connection', ws => {
        console.log('server connection');
        ws.on('message', async msg => {
          console.log('server receive msg：', msg);
          try {
            const receivedMessage = JSON.parse(msg.toString());
            await indexRoute(receivedMessage, ws);
          } catch (error) {
            console.error(error)
            ws.send({'flag': false, msg: '解析数据出错!!'})
          }
        });
    
    });
    
}