import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK , FILTER_TASK} from "./actionType"




export const handeldelete=(id)=>{
    return{
        type:DELETE_TASK,
        payload:id
    }
}
export const handeladd=(newtask)=>{
    return{
        type:ADD_TASK,
        payload:newtask
    }
}
export const handelcomplete=(id)=>{
    return{
        type:COMPLETE_TASK,
        payload:id
    }
}
export const handeledit=(newNew)=>{
    return{
        type:EDIT_TASK,
        payload:newNew
    }
}
export const filTask=() =>{
    return{
        type: FILTER_TASK,
    }
}