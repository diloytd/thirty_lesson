import Rate from "../Rate/rate";
//import addStyle from '../Rate/rate.css'
import style from '../Rate_info/rate_info.module.css';
import styled from 'styled-components';
import React from 'react';



function Rate_info(){
    

    return(
        <>
        <div className={style.card_300}>
            <Rate 
                name='Безлимит 300'
                className='blue'
                price1="руб"
                price2={300}
                price3=' /мес'
                limit="До 10 Мбит/сек"
                info="Объем включенного тарифа не ограничен"
            /> 
           
        </div>
            <div className={style.card_450}>
            <Rate 
                name='Безлимит 450'
                price1="руб" 
                price2 = {400}
                price3 = '/мес'
                limit = "До 50 Мбит/сек"
                info = "Объем включенного тарифа не ограничен" />     
            </div>
            <div className={style.card_550}>
            <Rate 
                name='Безлимит 550'
                price1="руб" 
                price2 = {550}
                price3 = '/мес' 
                limit = "До 100 Мбит/сек"
                info = "Объем включенного тарифа не ограничен" />     
            </div>
            <div className={style.card_1000}>
            <Rate 
                name='Безлимит 1000'
                price1="руб" 
                price2 = {1000}
                price3 = '/мес'
                limit = "До 200 Мбит/сек"
                info = "Объем включенного тарифа не ограничен" />     
            </div>
         </>
    )
}

export default Rate_info