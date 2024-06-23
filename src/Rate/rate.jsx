import './rate.css'
import classNames from "classnames";



function Rate (props, className){
   //const{name, price, limit, info} = this.props
   const handleMouseEnter = (e) => {
    const box = e.target.closest('.card')
    box.style.height = "400px"  
   }
        
   const handleMouseLeave = (e) => {
    const box = e.target.closest('.card');
    box.style.height = "350px" ;
   }
 
  return(
        <>
         <div className="cards">
        {
       <div className= "card"
       onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}>
        <div className={classNames("card_name")} style={{backGround : "red"}}><p>{props.name}</p></div>
        <div className="card_price"> 
        <span style={{fontSize: 12, marginTop:-12}}>{props.price1}</span>
        <span style={{fontSize: 42}}>{props.price2}</span>
        <span style={{fontSize: 14, marginTop:12}}>{props.price3}</span>
        </div>
        <div className="card_limit"><p>{props.limit}</p></div>
        <div className="card_info"><p>
      {props.info}</p></div>
      </div>
   
} 
</div>
        </>
    )
}
 
export default Rate