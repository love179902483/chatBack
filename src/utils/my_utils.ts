function wsReturnCreate(type: string, message: any){
    let returnMsg = {}
    if(message.flag === true){
        if(message.hasOwnProperty('data'))
            returnMsg = {type: type, message: {flag: true, data: message.data}};
        else
            returnMsg = {type: type, message: {flag: true, data: ''}};
    }else{
        if(message.hasOwnProperty('msg'))
            returnMsg = {type: type, message: {flag: false, msg: message}};
        else
            returnMsg = {type: type, message: {flag: true, msg: ''}};
    }
    return JSON.stringify(returnMsg); 
}



export{ wsReturnCreate };