// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('barGraph.json')
      .then(response => response.json())
      .then(data => {
        drawBarChart(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  
  function drawBarChart(data) {
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
  
    const svg = d3.select('#chart-container')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
  
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, width])
      .padding(0.1);
  
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.numInstalls)])
      .nice()
      .range([height, 0]);
  
    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.month))
      .attr('y', d => yScale(d.numInstalls))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d.numInstalls));
  
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
  
    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale));
  
    svg.append('text')
      .attr('class', 'x-axis-label')
      .attr('x', width / 2)
      .attr('y', height + margin.top + 10)
      .style('text-anchor', 'middle')
      .text('Month');
  
    svg.append('text')
      .attr('class', 'y-axis-label')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -margin.left)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Number of Installs');
  }
  