//import React from 'react'

import Axios from 'axios'

const url = 'http://covid19.mathdro.id/api'

export const fetchData = async (country) =>{
    let changeableurl = url;

    if(country){
        changeableurl = `${url}/countries/${country}`
    }

    try {
        const {data} = await Axios.get(changeableurl)

        const ModifiedData =  {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths:   data.deaths,
            lastUpdate: data.lastUpdate,

        }

        return ModifiedData;
        
    } catch (error) {
        
    }
}

export const fetchDailydata = async () =>{
    try {
        const {data} = await Axios.get(`${url}/daily`)

        const ModifiedData = data.map((dailydata)=>({
            confirmed : dailydata.confirmed.total,
            deaths : dailydata.deaths.total,
            date : dailydata.reportDate,

        }))

        return ModifiedData;
    } catch (error) {
        
    }
}


export const fetchcountries = async () =>{
    try {
        const {data:{countries}} = await Axios.get(`${url}/countries`)



        return countries.map((country) => country.name)
        
    } catch (error) {
        
    }

  


}