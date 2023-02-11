import './Exhibit.css';

export default function Exhibit({header, children}){
    return(
        <div className="card">
            <h2 className="cardTitle">{header}</h2>
            {children}
        </div>
    );
}