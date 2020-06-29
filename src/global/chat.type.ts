// 用户从前端传过来的信息
export interface UserType {
    name: string;
    avatar: string;
    id: number;
    show: boolean;
}

// 前端传过来的信息
export interface ReceiveType<T> {
    type: string;   // 传过来本条数据的信息类型
    message: T ;     // 具体信息
}

// 保存的每条ws信息
export interface SavedWebSocket {
    id: number;             // 用户id
    user_info: UserType;    // 本次链接的用户信息
    ws: any;                //本次的websocket链接
}

// 单独发送的信息
export interface SingleReceivedType{
    from: number;
    to: number;
    message: string;
    id: number;
    show: true;
}