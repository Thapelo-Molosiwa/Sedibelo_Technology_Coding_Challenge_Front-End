document.addEventListener("DOMContentLoaded", function() {
    fetch('barGraph.json')
    .then(response => response.json())
    .then(data => {
        const months = data.map(entry => entry.month);
        const installs = data.map(entry => entry.numInstalls);

        const chart = new Chart('bar-chart', {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: 'Number of Installs',
                    data: installs,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
});
