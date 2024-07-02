import "./rate.css";
import { useState } from "react";
import NewPage from "../Page_about_rate/new_page";
import {Link} from "react-router-dom";


function Rate(props, className) {
    const { name, price1, price2, price3, limit, info, color } = props;

    const [heigth, setHeigth] = useState("350px");
    
    const handleMouseEnter = () => {
        setHeigth("400px");
    };
    const handleMouseLeave = () => {
        setHeigth("350px");
    };
    
    
    return (
        
        <>
            {
                 <Link to="/new">
                <div
                    className="card"
                    style={{ height: heigth }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                   
                >
                   
                    <div
                        className={"card_name"}
                        style={{ background: color.head }}
                    >
                        <p>{name}</p>
                    </div>
                    <div
                        className="card_price"
                        style={{ background: color.main }}
                    >
                        <span style={{ fontSize: 12, marginTop: -12 }}>
                            {price1}
                        </span>
                        <span style={{ fontSize: 42 }}>{price2}</span>
                        <span style={{ fontSize: 14, marginTop: 12 }}>
                            {price3}
                        </span>
                    </div>
                    <div className="card_limit">
                        <p>{limit}</p>
                    </div>
                    <div className="card_info">
                        <p>{info}</p>
                    </div>
                   
                </div>
                </Link>
            }
          
          </>
        
    );
}

export default Rate;
