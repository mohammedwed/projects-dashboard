const ch1 = document.getElementById('chart1');
const ch11 = document.getElementById('chart1-1');
const ch2 = document.getElementById('chart2');
const ch3 = document.getElementById('chart3');
const ch4 = document.getElementById('chart4');

new Chart(ch1, {
    type: 'line',
    data: {
        labels: ['Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            
            {
            data: [9, 5, 7, 2, 7, 3, 4, 8],
            borderColor: 'red',
            fill: false,
            lineTension: 0.3,
            pointRadius: 4,
            backgroundColor : '#fff',
            label: 'Delayed'
        }, 

        {
            data: [8, 3, 7, 8, 7, 4, 3, 2],
            borderColor: 'green',
            fill: false,
            lineTension: 0.3,
            pointRadius: 4,
            backgroundColor : '#fff',
            label: 'Complete'
        }, 

        {
            data: [5, 6, 5, 8, 2, 1, 9, 7],
            borderColor: 'blue',
            fill: false,
            lineTension: 0.3,
            pointRadius: 4,
            backgroundColor : '#fff',
            label: 'In Progress'
        }
    
    ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'progress for this year',
                font: { size: 28}
                
            }},
        legend: {display:true},
        repsonsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ch11, {
    type: 'line',
    data: {
        labels: ['Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            
            {
            data: [9, 5, 7, 2, 7, 3, 4, 8],
            borderColor: 'red',
            fill: false,
            lineTension: 0.3,
            pointRadius: 4,
            backgroundColor : '#fff',
            label: 'Delayed'
        }, 

        {
            data: [8, 3, 7, 8, 7, 4, 3, 2],
            borderColor: 'green',
            fill: false,
            lineTension: 0.3,
            pointRadius: 4,
            backgroundColor : '#fff',
            label: 'Complete'
        }, 

        {
            data: [5, 6, 5, 8, 2, 1, 9, 7],
            borderColor: 'blue',
            fill: false,
            lineTension: 0.3,
            pointRadius: 4,
            backgroundColor : '#fff',
            label: 'In Progress'
        }
    
    ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Quarter Data',
                font: { size: 28}
                
            }},
        legend: {display:true},
        repsonsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



new Chart(ch2, {
    type: 'bar',
    data: {
        labels: ['Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            
            {
            data: [9, 5, 7, 2, 7, 3, 4, 8],
            backgroundColor:'red',
            label: 'Delayed'
        }, 

        {
            data: [8, 3, 7, 8, 7, 4, 3, 2],
            backgroundColor:'green',
            label: 'Complete'
        }, 

        {
            data: [5, 6, 5, 8, 2, 1, 9, 7],
            backgroundColor:'blue',

            label: 'In Progress'
        }
    
    ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Last Quarter data',
                font: { size: 28}
                
            }},
        legend: {display:true},
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



new Chart(ch3, {
    type: 'pie',
    data: {
        labels: ['In Progress', 'Completed', 'Delayed'],
        datasets: [
            
            {
                backgroundColor: ['blue', 'green','red'],
            data: [9, 5, 7],
        }
    
    ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'In Percentage',
                font: { size: 28}
                
            }},
        spacing: 3,
        borderWidth:2,
    }
});


new Chart(ch4, {
    type: 'doughnut',
  
    data: {
        labels: ['In Progress', 'Completed', 'Delayed'],
        datasets: [
            
            {
                backgroundColor: ['blue', 'green','red'],
            data: [9, 5, 7],
       
        }
    
    ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'In Percentage',
                font: { size: 28}
                
            }},
        spacing: 3,
        weight:1,
      
    }
});