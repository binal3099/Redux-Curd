import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../FireBase";

export const SignUpAsync = (data) => {

    return dispatch => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                dispatch(SignUp_Suc())
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(SignUp_ERR(errorCode))

            });
    }
}

export const SignInAsync = (data) => {
    return dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                dispatch(SignIn_Suc())
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(SignIn_ERR(errorCode))

            });

    }
}

const SignUp_Suc = () => {
    return {
        type: "SignUp_suc"
    }
}

const SignUp_ERR = (msg) => {
    return {
        type: "SignUp_err",
        payload: msg
    }
}

const SignIn_Suc = () => {
    return {
        type: "SignIn_suc"
    }
}

const SignIn_ERR = (msg) => {
    return {
        type: "SignIn_err",
        payload: msg
    }
}