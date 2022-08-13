import { data } from "./utils/data";
import Card from "./components/Card";
import Footer from "./components/Footer";
import IP from "./components/IP";
const Content = () => {
    return (
        <div className="content my-5">
            <div className="container">
                <h2 className="primary_color center text-center mb-3">Welcome to our Site</h2>
                <IP ipVal="ipv4"/>
                <IP ipVal="ipv6"/>
                <div className="flex flex-wrap mb-3">
                    {
                        data?.map((val)=>{
                            return <Card data={val}/>
                        })
                    }
                </div>
               
            <hr/>
            <Footer/>    
            </div>
        </div>
    )
}
export default Content;