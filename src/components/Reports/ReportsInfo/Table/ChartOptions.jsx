
export function ChartDataDesktop(keys, values, indexAxis) {
  if (indexAxis === 'x') {
    return {
      labels: keys.map(el => el),
      datasets: [
        {
          label: 'awd',
          data: values.map(el => el),
          backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
          borderRadius: 10,
          
          borderSkipped: 'start',
          datalabels: {
            color: '#52555F',
            anchor: 'end',
            align: 'top',
            font: {
              size: 10,
            },
            formatter: function (value, context) {
              if (value === undefined || value === 0) {
                return '';
              }
              return `${value} UAH`;
            },
          },
        },
      ],
    };
  } else if (indexAxis === 'y') {
    return {
      labels: keys.map(el => el),
      datasets: [
        {
          label: 'awd',
          data: values.map(el => el),
          backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
          borderRadius: 10,
          borderSkipped: 'start',
         
          datalabels: {
            color: '#52555F',
            anchor: 'end',
            align: 'right',
            font: {
              size: 10,
            },
            formatter: function (value, context) {
              if (value === undefined || value === 0) {
                return '';
              }
              return `${value} UAH `;
            },
          },
        },
      ],
    };
  }
}
export function ChartOptionsDesktop(indexAxis) {
  if (indexAxis === 'x') {
    return {
      maintainAspectRatio: false,
      indexAxis: 'x',
      barPercentage: 0.6,
      animations: {
        y: {
          easing: 'easeInOutElastic',
          from: ctx => {
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
        x: {
          border: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            display: true,
            padding: 4,
          },
          grid: {
            display: false,
            drawOnChartArea: false,
          },
        },
        y: {
          grace: '20%',
          border: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            display: false,
            count: 11,
          },
          grid: {
            lineWidth: 2,
            color: ctx => {
              if (ctx.index !== 9 && ctx.index !== 10) {
                return '#F5F6FB';
              }
            },
          },
        },
      },
    };
  } else if (indexAxis === 'y') {
    return{
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        barPercentage: 0.1,
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
   
        plugins: {
            legend: {
                display: false,
            },
          
        },
       
        scales: {
            x:{
                grace: "20%",
                border:{
                    display: false,
                    
                },
                beginAtZero:true,
                ticks: {
                    //////////add
                    display: false,  

                    ///////////
                    padding: 4,
                  },
                  grid:{
                    
                  display: false,
                    drawOnChartArea:false,
                   
                  },
                
            },
            y:{
              height: 400,
                grace: "20%",
                border:{
                    display: false,
                },
                beginAtZero:true,
                ticks: {
                    ////////remove
                    font:{
                        size:10,
                    },
                     display: true,
                    mirror: true,
                    labelOffset: -15,
                    // position: 'top',
                    ///////
                    count: 11,  
                  },
                  grid:{
                    ///// add
                    display: false,
                    /////
                    lineWidth: 2,
                    color: (ctx) =>{
                        if(ctx.index !== 9 && ctx.index !== 10  ){
                            return '#F5F6FB'
                        }
                    },
               
                  }  ,
                 
            },   
        }
    }
  }
}
