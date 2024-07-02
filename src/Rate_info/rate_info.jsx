import Rate from "../Rate/rate";
import NewPage from "../Page_about_rate/new_page";
//import addStyle from '../Rate/rate.css'
import style from '../Rate_info/rate_info.module.css';
import styled from 'styled-components';
import React from 'react';



function Rate_info(){
    const rates = [
        {
            id: 1,
            name: "Безлимит 300",
            className: "blue",
            price1: "руб",
            price2: 300,
            price3: " /мес",
            limit: "До 10 Мбит/сек",
            color: {head: "#1f7a87" , main : "#249aab"},
            info: "Объем включенного тарифа не ограничен",
        },
        {
            id: 2,
            name: "Безлимит 450",
            className: "card_450",
            price1: "руб",
            price2: 400,
            price3: "/мес",
            limit: "До 50 Мбит/сек",
            info: "Объем включенного тарифа не ограничен",
            color: {head: "#1d8771" , main : "#24ae8d"}
        },
        {
            id: 3,
            name: "Безлимит 550",
            className: "card_550",
            price1: "руб",
            price2: 550,
            price3: "/мес",
            limit: "До 100 Мбит/сек",
            info: "Объем включенного тарифа не ограничен",
            color: {head: "#c4554e" , main : "#f46a5f"}
        },
        {
            id: 4,
            name: "Безлимит 1000",
            className: "card_1000",
            price1: "руб",
            price2: 1000,
            price3: "/мес",
            limit: "До 200 Мбит/сек",
            info: "Объем включенного тарифа не ограничен",
            color: {head: "#282f37" , main : "#333a44"}
        },
    ];
    return (
        <>
            {rates.map((item, index) => (
                <Rate key={index} {...item}></Rate>
             ))};
         
        </>
    );
}

export default Rate_info