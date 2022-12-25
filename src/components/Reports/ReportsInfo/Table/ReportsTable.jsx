
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
  import { Chart, registerables } from 'chart.js';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { selectDataChart} from '../../../../redux/selectors'
import { useSelector } from "react-redux";
  Chart.register(...registerables);
  Chart.register(ChartDataLabels);



export const ReportsTable = ({onChange}) => {

  const [chartData, setChartData] = useState({
    datasets: []
})
const [keys, setKeys]= useState([])
const [values, setValues]= useState([])

const myData = useSelector(selectDataChart)


useEffect(()=>{

  if (myData.length>0){
    let mimi = myData[0]
   let key  = Object.keys(mimi[1])
  
   let value = Object.values(mimi[1])
   if( key.length<13 && value.length< 13){
    let intervarId = setInterval(()=>{
      if( key.length !==13 && value.length< 13){
      
      key.unshift('')
      key.push('')
      value.unshift(0)
      value.push(0)
      } else{
     
        clearInterval(intervarId)
        if(keys !== key &&  values!== value ){
          setKeys(key)
          setValues(value)
        }else{
          return
        }
      return
    }
    
    })
   }

  
}
},[myData, keys, values])

const [chartOptions, setChartOptions] = useState({})
useEffect(()=>{
    setChartData({
    
        labels: keys.map(el=>el),
        datasets:[
            {
                label: 'awd',
                data: values.map(el=>el),
                backgroundColor: [ '#FFDAC0', '#FF751D','#FFDAC0'],
                borderRadius: 10,
                borderSkipped: 'start',
               
                datalabels: {
                    color: '#52555F',
                    anchor: 'end',
                    align: 'top',
                    font: {
                        size: 10
                    },
                    formatter: function(value, context) {
                        if (value === undefined||value=== 0){
                           return ''
                        }
                        return `${value} UAH` 
                      }
                  },
                
            },
        ]
   });
   setChartOptions({
    animations: {
      y: {
        easing: 'easeInOutElastic',
        from: (ctx) => {
          if (ctx.type === 'data') {
            if (ctx.mode === 'default' && !ctx.dropped) {
              ctx.dropped = true;
              return 0;
            }
          }
        },
      },
    },
responsive: true,
plugins: {
    legend: {
        display: false,
    },
  
},

scales: {
    x:{
        border:{
            display: false,
            
        },
        beginAtZero:true,
        ticks: {
            display: true,  
            padding: 4,
          },
          grid:{
            
          display: false,
            drawOnChartArea:false,
           
          },
        
    },
    y:{
        grace: "20%",
        border:{
            display: false,
        },
        beginAtZero:true,
        ticks: {
            display: false,
            count: 11,  
          },
          grid:{
            lineWidth: 2,
            color: (ctx) =>{
                if(ctx.index !== 9 && ctx.index !== 10  ){
                    return '#F5F6FB'
                }
            },
       
          }  ,
         
    },   
},
})
}, [keys, values])
return(
  <div>
     <Bar
    style={{padding:'20px 120px '}}
     data={chartData}
     options={chartOptions}
    height={312}
     width={758}
     />
  </div>
)
}
