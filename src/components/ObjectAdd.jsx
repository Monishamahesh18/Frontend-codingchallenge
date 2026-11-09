import { useState } from "react"
import { addObject } from "../store/actions/ObjectAction"
import { useDispatch } from "react-redux"

function ObjectAdd() {
   const [name, setName] = useState("")
   const [year, setYear] = useState("")
   const [price, setPrice] = useState("")
   const [cpu, setCpu] = useState("")

   const dispatch = useDispatch()

   const add = (e)=>{
        e.preventDefault()
        let obj = {
            'name': name,
            'data': {
                'Year': year,
                'Price': price,
                'CPU': cpu
            }
        }
        dispatch(addObject(obj))

   }
    return (
        <div className="container">
            <h3>Add new Object</h3>
            <form onSubmit={(e)=> add(e)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mt-4">
                            <label>Name</label>
                            <input type="text" className="form-control"
                            onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div className="mt-4">
                            <label>Year</label>
                            <input type="number" className="form-control"
                             onChange={(e)=> setYear(e.target.value)}/>
                        </div>
                        <div className="mt-4">
                            <label>Price</label>
                            <input type="number" className="form-control"
                             onChange={(e)=> setPrice(e.target.value)}/>
                        </div>
                        <div className="mt-4">
                            <label>CPU</label>
                            <input type="text" className="form-control"
                             onChange={(e)=> setCpu(e.target.value)}/>
                        </div>
                        <div className="mt-4">

                            <button type="submit" className="btn btn-primary" >
                            +Add Object
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default ObjectAdd