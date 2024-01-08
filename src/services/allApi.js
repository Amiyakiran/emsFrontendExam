//add employee

import { serverURL } from "./baseUrl"
import { commonAPI } from "./commonApi"

export const addEmployee = async (reqBody)=>{
    //make post request to http://localhost:4000/videos to add videos to json server return response to add component
     return await commonAPI('POST',`${serverURL}/users`,reqBody)

}

export const getEmployee = async ()=>{
    //make post request to http://localhost:4000/videos to add videos to json server return response to add component
     return await commonAPI('GET',`${serverURL}/users`,"")

}

export const deleteEmployee = async (id)=>{
    //make post request to http://localhost:4000/videos to add videos to json server return response to add component
     return await commonAPI('DELETE',`${serverURL}/users/${id}`,{})

}