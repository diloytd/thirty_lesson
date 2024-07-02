import Rate_info from "../Rate_info/rate_info";

export default function NewPage (props){
    const { name, price1, price2, price3, limit, info, color } = props;
    
    return (
        <>
        
            <div className="block">
                <h1>{name}</h1>
                <p> Сумма:{price2}</p>
                <p> {limit}</p>
                <p> {info}</p>
            </div>
           
            </>
    )
}