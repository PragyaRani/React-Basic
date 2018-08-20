import * as actionTypes from '../../actions';
const userReducer= (
    state={
        name:"",
        role:""
    }  
    ,action)=>{
            switch(action.type){
                case actionTypes.setName :
            
                state={
                    ...state,
                name :action.name
                }
                break;
                case actionTypes.setRole :
                state={
                    ...state,
                    role : action.role
                }
                    break;
                default : break;
                }

                return state;
            }//it is a method ,it will take 2 argument(state,action) ,it will return state
export default userReducer;