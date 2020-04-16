import React from 'react'

// import Cards from './components/Cards/Cards'
// import CountryPicker from './components/CountryPicker/CountryPicker'
// import Charts from './components/Charts/Charts'

import {Cards , Charts , CountryPicker} from './components'

import styles from './App.module.css'
import {fetchData} from './Api'
//import Covidimage from './images'




class App extends React.Component{
    state = {
        data: {},
        country: '',


    }


    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})

    }

        handlecountrychange=  async (country) => {

            const fetchedData = await fetchData(country);

            this.setState({data: fetchedData, country: country})


        }

    render(){
        const {data , country} = this.state;

        return(
            <div className = {styles.container}>
            
               <Cards data={data}/>
               <CountryPicker handlecountrychange = {this.handlecountrychange} />
               <Charts data = {data} country = {country}/>
               
            </div>

        )
    }
}

export default App;