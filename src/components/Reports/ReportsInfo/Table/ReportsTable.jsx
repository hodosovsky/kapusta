
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
  import { Chart, registerables } from 'chart.js';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  Chart.register(...registerables);
  Chart.register(ChartDataLabels);

  let data = [

    {
        name: 'Fish',
        total: 100,
    },
    {
        name: 'meat',
        total: 150,
    },
    {
        name: 'cheese',
        total: 1800,
    },
    {
        name: 'Onignion',
        total: 90,
    },
    {
        name: 'FisCarron',
        total: 120,
    },
    {
        name: 'Fish',
        total: 100,
    },
    {
        name: 'meat',
        total: 150,
    },
    {
        name: 'cheese',
        total: 180,
    },
    {
        name: 'Onignion',
        total: 90,
    },
    {
        name: 'FisCarron',
        total: 120,
    },

]
// let data2 =[{name:'mango', total:3000,},
// {
//     name: 'Fish',
//     total: 100,
// },
// {
//     name: 'meat',
//     total: 150,
// },]



// let intervarId = setInterval(()=>{
//   if( data2.length !==11){
  
//     data2.unshift({})
//   data2.push({})
//   } else{
 
//     clearInterval(intervarId)
//   return
// }

// })




export const ReportsTable = () => {
  const [chartData, setChartData] = useState({
    datasets: []
})
const [chartOptions, setChartOptions] = useState({})
useEffect(()=>{
    setChartData({
    
        labels: data.map(el=>el.name),
        datasets:[
            {
                label: 'awd',
                data: data.map(el=>el.total),
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
                        if (value === undefined){
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
}, [])
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
