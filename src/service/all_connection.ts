import { SavedWebSocket } from './../global/chat.type';
class AllConnection {
    
    private static instance: AllConnection;

    static getInstance(): AllConnection{
        if(!AllConnection.instance){
            AllConnection.instance = new AllConnection();
        }
        return AllConnection.instance;
    }
    public static test(){
        return '11111111'
    }
    
    private _connection: SavedWebSocket[] = [];
    public get connection(): SavedWebSocket[]{
        return this._connection;
    }
    // 将新连入的connection加入到所有connection的列表中
    public insertConnection(connection: SavedWebSocket){
        this._connection.push(connection);
    }
}

export { AllConnection }