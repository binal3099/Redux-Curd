
const initialState = {
    Suc: "",
    Err: "",
    Id: "",
    IsLogin : false,
    issignup : false
}

export const Authreducer = (state = initialState, action) => {

    switch (action.type) {
        case "SignUp_suc":
            return {
                ...state,
                Suc: "SignUp complete",
                issignup : true,
                Err : ""
            }

        case "SignUp_err":
            return {
                ...state,
                Err : action.payload
            }

            case "SignIn_suc":
                return {
                    ...state,
                    IsLogin : true,
                    Suc: "SignIn complete",
                    Err : ""
                }
    
            case "SignIn_err":
                return {
                    ...state,
                    Err : action.payload
                }

        default:
            return state
    }

}