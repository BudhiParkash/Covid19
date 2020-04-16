import React , {useState, useEffect} from 'react'

import {Nativecontrol, FormControl, NativeSelect} from '@material-ui/core'

import styles from './CountryPicker.module.css'
import {fetchcountries} from '../../Api'

const CountryPicker=({handlecountrychange})=>{

    const [fetchedcountries, setfetchedcountries] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setfetchedcountries(await fetchcountries ())
          }

          fetchApi();



    }, [setfetchedcountries])

    
    

    return(
            <FormControl className = {styles.FormControl}>
                <NativeSelect defaultValue = '' onChange= {(e)=> handlecountrychange(e.target.value)}>
                <option value = ''>Global</option>
                        {fetchedcountries.map((country , i) => <option key = {i}  value = {country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
    )

}

export default CountryPicker;