import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK} from "./actionType"


const init={
    todos:[
        {id:Math.random(),action:"gaming" ,isDone:true},
        {id:Math.random(),action:"playing" ,isDone:false}
    ]
}

export const reducer0Ftask=(state=init, {type,payload})=>{
switch (type) {
    case DELETE_TASK:
        return{
            ...state, todos:state.todos.filter(el=>el.id!==payload)
        }
        case ADD_TASK:
            return{
                ...state, todos:[...state.todos,payload]
            }
            case COMPLETE_TASK:
                return{
                    ...state,todos:state.todos.map((el)=>el.id===payload?{...el,isDone:!el.isDone}:el)
                }
                case EDIT_TASK:
                    return{
                        ...state,todos:state.todos.map((el)=>el.id===payload.id?({...el,action:payload.action}):el)
                    }
                    case FILTER_TASK:
                        return{
                            ...state,todos:state.todos.filter((e)=>e.isDone===false)
                        }
                        default:
                            return state
}
}