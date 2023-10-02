import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Add, Delete, EDITSTU, Update } from "../Actiontype/Actiontype"
import { db } from "../FireBase";


export const StuActionAsync = (data)=>{

    return async dispatch =>{
        // await setDoc(doc(db, "students", "2"), data); setDoc
        await addDoc(collection(db, "students"), data);
        dispatch(StuAction(data))
    }
}

const StuAction = (Data) =>{

    // console.log(Data);
    return{
        type : Add,
        payload : Data
    }

}

export const singleStu = (data,index) =>{
    

    console.log("sd",data, index);
    return{
        type : EDITSTU,
        payload : {data,index}
    }
}

export const update = (data,index) =>{

    return{
        type: Update,
        payload: {data,index}
    }
}

export const delete_stu = (id) =>{

    return{
        type: Delete,
        payload: id
    }
}