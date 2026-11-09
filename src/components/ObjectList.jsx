import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteObject } from "../store/actions/ObjectAction"

function ObjectList() {
    const list = useSelector(state=>state.objects)
    const dispatch = useDispatch()
    const onDelete = (id)=>{
        dispatch(deleteObject(id))
    }

    const [page, setPage] = useState(0)
    const size = 10
    const totalPages = Math.ceil(list.length / size)
    const pageList = list.slice(page * size, page * size + size)

    return (
        <div>
            <div className="row">
                {
                    pageList?.map((o, index)=>(
                        <div className="col-md-4" key={index}>
                            <div className="card mt-3">
                                <div className="card-header">
                                    <h5>{o.name}</h5>
                                </div>
                                <div className="card-body">
                                    <p>Color: {o.data?.color || o.data?.Color || 'N/A'}</p>
                                    <p>Price: {o.data?.price || o.data?.Price || 'N/A'}</p>
                                    <p>CPU: {o.data?.CPU || o.data?.['CPU model'] || 'N/A'}</p>
                                    <button className="btn btn-danger btn-sm" onClick={()=>onDelete(o.id)}>delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <nav aria-label="Page navigation example" className="mt-4">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><button className="page-link" onClick={()=>setPage(page-1)}
                        disabled={page === 0}>Previous</button></li>

                    {
                    Array.from({ length: totalPages }, (e, index) => (
                        <li key={index} className="page-item">
                        <button className="page-link" onClick={()=>setPage(index)}>{index+1}</button></li>
                    ))}

                    <li className="page-item"><button className="page-link" onClick={()=>setPage(page+1)}
                         disabled={page === (totalPages-1)} >Next</button></li>

                </ul>
                <p className="text-center">{`Page ${page+1} of ${totalPages} total pages`}</p>
                <p className="text-center">{`Showing ${pageList.length} records from total ${list.length} records`}</p>
            </nav>
        </div>
    )
}

export default ObjectList