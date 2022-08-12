
const Card = ({data,..._val}) => {
    return(
        <div key={data.id} style={{width:"25%", padding:20}}>
            <div className="card">
                <div className="card-head" style={{height:250 }}>
                    <img style={{width: "100%", height: "100%", borderRadius: "20px 20px 0 0"}} src={data.image} alt="abc"/>
                </div>
                <div className="card-bottom pb-3">
                    <h2 className="text-center mt-2 secondary_color">{data.name}</h2>
                    <p className="text-center primary_color">{data.destination}</p>
                </div>
            </div>
        </div>

    )
}
export default Card