const INITIAL_STATE = {login: false};

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "loggedIn":
            return {...state, login: action.data};
        default:
            return state;
    }
}