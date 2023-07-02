function ItemDetail(props){
    return (
        <div className='card img-fluid mx-auto mt-4 mb-5 shadow-lg' style={{width:"30rem"}}>
            <div className="bg-white">
                <div><img className="p-2" style={{width:"100%"}} src={props.image} alt="productimage" />
                </div>
                <div className="text-center">
                    <h5 className="nordica fs-3 text-dark">{props.name}</h5>

                    <div className="flex justify-between items-center mb-1">
                        <div className="nordica text-dark">{props.size} </div>
                        <div className="nordica text-dark">{props.made} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;