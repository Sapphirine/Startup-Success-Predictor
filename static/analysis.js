$(document).ready(() => {
  const barChartLabels = [
    'Venture',
    'Angel',
    'Series-A',
    'Series-B',
    'Series-C+',
    'Others',
    'Private-Equity',
    'Crowdfunding',
    'Post-IPO',
  ];
  let barChartData = {
    labels: barChartLabels,
    datasets: [{
        label: 'Funding Rounds',
        data: [15264, 14866, 8001, 4865, 4197, 4190, 1043, 111, 85],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
  };
const barChartCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barChartCtx, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
});

  const pieChartLabels = [
      'Operating',
      'Acquired',
      'Closed',
      'IPO'
    ];
  let pieChartData = {
    labels: pieChartLabels,
    datasets: [{
      label: 'Startup Status',
      data: [120983,5489,1905,1030],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  const pieChartCtx = document.getElementById('pieChart').getContext('2d');
  const pieChart = new Chart(pieChartCtx, {
      type: 'pie',
      data: pieChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
        }
      }
  });


  const stackBarChartLabels = [
    'Venture',
    'Angel',
    'Series-A',
    'Series-B',
    'Series-C+',
    'Others',
    'Private-Equity',
    'Crowdfunding',
    'Post-IPO',
  ];
  let stackedBarChartData = {
    labels: stackBarChartLabels,
    datasets: [
      {
        label: 'Acquired',
        data: [0.08471487, 0.0620406, 0.1291905, 0.1678646, 0.1920225, 0.06850799, 0.03299204, 0],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Closed',
        data: [0.03437202, 0.07962898, 0.05092863, 0.04382101, 0.03554078, 0.03818034, 0.007963595, 0.01176471],
        backgroundColor: 'rgb(201, 203, 207)'
      },
      {
        label: 'IPO',
        data: [0.03662876, 0, 0.01390025, 0.02967772, 0.05318333, 0.03709721, 0.0978385, 0.01176471],
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Operating',
        data: [0.8442844, 0.8562303, 0.8059806, 0.7586367, 0.7192534, 0.8562145, 0.8612059, 0.9764706],
        backgroundColor: 'rgb(153, 102, 255)',
      }
    ]
  };
  const stackedBarChartCtx = document.getElementById('stackedBarChart').getContext('2d');
  const stackedBarChart = new Chart(stackedBarChartCtx, {
      type: 'bar',
      data: stackedBarChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            reverse: true,
            max: 1.0
          }
        }
      }
  });

  let values = $('.switch-values')
  let percents = $('.switch-percents')
  let divValues = $('#funding-rounds-values')
  let divPercents = $('#funding-rounds-percents')

  $(values).click(() => {
    // divValues.css('opacity', '1')
    // divValues.css('transform', 'translateY(0)')
    // divValues.css('pointer-events', 'all')
    divValues.css('display', 'block')

    // divPercents.css('opacity', '0')
    // divPercents.css('pointer-events', 'none')
    // divPercents.css('transform', 'translateY(-500px)')
    divPercents.css('display', 'none')
  })

  percents.on('click', () => {
    // divPercents.css('opacity', '1')
    // divPercents.css('pointer-events', 'all')
    // divPercents.css('transform', 'translateY(0)')
    divPercents.css('display', 'block')

    // divValues.css('opacity', '0')
    // divValues.css('pointer-events', 'none')
    // divValues.css('transform', 'translateY(-100px)')
    divValues.css('display', 'none')
  })

  const featureImportanceChartLabels = [
    'Funding Total (USD)',
    'Relationships',
    'Milestones',
    'Venture',
    'Age',
    'Operating',
    'Series-A',
    'Funding Rounds',
    'Series-C+',
    'Angel',
  ];
  let featureImportanceData = {
    labels: featureImportanceChartLabels,
    datasets: [{
        label: 'Funding Rounds',
        data: [3379, 2698, 1187, 1028, 948, 929, 683, 619, 604, 537],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
  };
  const featureImportanceChartCtx = document.getElementById('featureImportanceChart').getContext('2d');
  const featureImportanceChart = new Chart(featureImportanceChartCtx, {
      type: 'bar',
      data: featureImportanceData,
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Feature Score'
            }
          }
        }
      }
  });

})