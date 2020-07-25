const axios = require('axios').default;

export const doLogin = (user, pass) => {
    return async (dispatch) => {
        try{

        }catch(e){

        }
    };
}

export const verifyLogin = () => {
    return async (dispatch) => {
        const cookie = document.cookie.split("; ");

        //Verifica se tem o cookie sessionId
        dispatch({type: "loggedIn", data: cookie.some(rx => /sessionId/g.test(rx))});
    }
}