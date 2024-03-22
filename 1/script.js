// Wait until the webpage is fully loaded before running our code
document.addEventListener('DOMContentLoaded', function () {
    // fetching the data from the pieChart.json file
    fetch('pieChart.json')
        .then(response => response.json()) // Convert the response to a JavaScript object
        .then(data => {
            // Extract the years and number of installs from the data using dot notation
            const years = data.map(item => item.year);
            const numInstalls = data.map(item => item.numInstalls);


            // Get the area on the webpage where we'll draw the pie chart
            const pieChart = document.getElementById('myChart').getContext('2d');


            // Create a new pie chart using Chart.js library
            new Chart(pieChart, {
                type: 'pie', // We're creating a pie chart
                data: {
                    labels: years, // Years will be shown as labels on the chart
                    datasets: [{
                        label: 'Number of Installs', // Label for the chart data
                        data: numInstalls, // Number of installs for each year
                        backgroundColor: [ // Colors for each segment of the pie chart
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)'
                        ],
                        borderColor: [ // Border colors for each segment
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1 // Border width for each segment
                    }]
                },
             
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Log any errors that occur during data fetching
        });
});




