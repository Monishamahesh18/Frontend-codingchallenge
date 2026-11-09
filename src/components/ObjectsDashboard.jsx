import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getObjects } from "../store/actions/ObjectAction"
import ObjectList from "./ObjectList"
import ObjectAdd from "./ObjectAdd"

function ObjectsDashboard(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getObjects())
    }, [])

    return(
        <div className="container">
            <h1>ObjectsDashboard</h1>
            <hr />
            <ObjectAdd />
            <hr />
            <ObjectList />
        </div>
    )
}

export default ObjectsDashboard