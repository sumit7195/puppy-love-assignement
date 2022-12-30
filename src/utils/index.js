import axios from "axios"


export const callBackendApi =  async(method,url, data)=>{

    const makeReq =  await axios({
        method,
        url,
        data
    })


    return makeReq

}