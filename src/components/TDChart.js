import React, {useContext, useEffect} from 'react';
import { AnalysisContext } from '../contexts/AnalysisContext';
import Chart from "chart.js";

const TDChart = () => {
    const {analysis} = useContext(AnalysisContext);
    window.scrollTo(0,document.body.scrollHeight);
    console.log(analysis);
    useEffect(()=>{
        if(analysis.hasOwnProperty("totalDaily")){
            let myChart = document.querySelector(".myChart").getContext("2d");
            //array with the object that contain the labels and quantities
            const analysisArr =  Object.values(analysis.totalDaily)
            const nurtientLabelArr = [];
            const quantityArr = [];
            //push the nutrient labels intpo the array
            analysisArr.forEach((obj)=>{
                nurtientLabelArr.push(obj.label);
                quantityArr.push(parseFloat(obj.quantity.toFixed(2)));
                console.log(quantityArr)
            });
    
            
            if(window.bar !== undefined){
                window.bar.destroy();
            }
            console.log(Object.entries(analysis.totalDaily).length);
            
             window.bar = new Chart(myChart, {
                type: "bar", //look ata docs for more
                data: {
                  labels: nurtientLabelArr,
                  datasets: [{
                      label: "% of Daily value",
                      data: quantityArr,
                      backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                      '#66664D']
                        }], //array of objects
                },
                options: {
                    
                    legend: {
                        labels: {
                          fontColor: '#ffffff'
                       }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                                fontColor: 'white'
                            },
                        }],
                      xAxes: [{
                            ticks: {
                                fontColor: 'white'
                            },
                        }]
                    } 
    
                }
            })
            
        }

    })

    if(analysis.hasOwnProperty("totalDaily")){
        return ( 
            <div className="u-margin-bottom">
                <canvas className="myChart"></canvas>
            </div>
         );
    }else{
        return <div className="u-margin-bottom">
                 <h1>No data</h1>
             </div>
    }

}
 
export default TDChart;