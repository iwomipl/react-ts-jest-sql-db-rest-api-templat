import React, {useEffect} from "react";
import { useSelector} from "react-redux";
import { RootState } from "src/store";




export const UserView = ()=>{
    // const dispatch = useDispatch();
    const {loginStatus} = useSelector((store: RootState) => store.loggedInStatus);

    useEffect(()=>{

    }, [])
    return <>{loginStatus ? <p>UserView</p> : <p>UserNieView</p>}</>
}