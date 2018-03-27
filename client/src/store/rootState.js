const state = {
    color: '#194d33',
    token: '',
    userInfo: {
      username: '',
      email: ''
    },
    chartData:{
        type:'',
        index: -1
    },
    dataset: [
        {
            title:'This is the title 1',
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 39, 10, 40, 39, 80, 40],
                fill: false
                }
            ]
        },
        {
          title:'This is the title 2',
          datasets:[
            {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [
                    {
                    x: 20,
                    y: 25,
                    r: 5
                    },
                    {
                    x: 40,
                    y: 10,
                    r: 10
                    },
                    {
                    x: 30,
                    y: 22,
                    r: 30
                    }
                ]
            },
            {
                label: 'Data Two',
                backgroundColor: '#7C8CF8',
                data: [
                    {
                    x: 10,
                    y: 30,
                    r: 15
                    },
                    {
                    x: 20,
                    y: 20,
                    r: 10
                    },
                    {
                    x: 15,
                    y: 8,
                    r: 30
                    }
                ]
            }
            ]
        },
        {  
            title:'This is the title 3',
            labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
            datasets: [
                {
                backgroundColor: [
                    '#41B883',
                    '#E46651',
                    '#00D8FF',
                    '#DD1B16'
                ],
                data: [40, 20, 80, 10]
                }
            ]
        },
        {
            title:'This is the title 4',
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                label: 'My First dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        },
        {
            title:'This is the title 5',
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                label: 'My First dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        },
        {
            title:'This is the title 6',
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
            ]
        }
    ]
  }
  export default state;