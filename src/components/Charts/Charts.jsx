import React ,{useState , useEffect} from 'react'
import {fetchDailydata} from '../../Api'
import {Line , Bar} from 'react-chartjs-2'

import styles from './Charts.module.css'


const Charts=({data: {confirmed,recovered,deaths}, country})=>{
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{

        const fetchApi = async () => {
            setDailyData(await fetchDailydata())
        }
        console.log(dailyData)

        fetchApi()
    },[])

    const Linechart = (
       dailyData.length  
        ?( <Line
        data = {{
            labels : dailyData.map(({date}) => date), 
            datasets : [{
                data : dailyData.map(({confirmed}) => confirmed),
                label : 'Infected',
                borderColor : '#3333ff',
                fill : true,
                
            },{
                data : dailyData.map(({deaths}) => deaths),
                label : 'Infected',
                borderColor : 'red',
                backgroundColor : 'rgba(255, 0 , 0 , 5)',
                fill : true,

            }],
        }}
        
        />) : null
 )


                    //console.log(confirmed.value,deaths.value,recovered.value)


        const barchar = (
            confirmed
            ?
            (
                <Bar
                    data= {{
                        labels : ['Infected', 'Recovered', 'Deaths'],
                        datasets : [{
                            label : 'People',
                            backgroundColor: [
                                'rgba(47, 7, 223, 0.5)',
                            'rgba(10, 245, 49, 0.5)',
                            'rgba(236, 24, 24, 0.5)',],
                            
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}

                    options = {{
                        legend : {display : false},
                        title : {display : true, text : `current state in ${country}`}
                     }}
                />
                 ): null
        ) 


    
   
    return(
            <div className = {styles.container}>
                {country ? barchar : Linechart }
            </div>

    )

}

export default Charts