const express = require('express');

// init express
const app = express()

// middleware / routing
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.raw());

const data = [
    {
        'id' : '1',
        'name' : 'Foo',
        'image' : [
            {'url' : 'pub/foo.jpg'}
        ]
    },
    {
        'id' : '2',
        'name' : 'Bar',
        'image' : [
            {'url' : 'pub/bar.jpg'}
        ]
    },
    {
        'id' : '3',
        'name' : 'Foo Bar',
        'image' : [
            {'url' : 'pub/foobar.jpg'}
        ]
    }
]

var data2 = [
    {type:"Foo", year:1995},
    {type:"Bar", year:1993},
    {type:"Foobar", year:2020}
]

const number1 = (data) => {
    console.log('# Number 1')
    console.log('result : ')
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].id +' => ' + data[i].image[0].url)  
    }
}

function asc_sort( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
  }

function number2 (data) {
    data.sort(asc_sort);
    console.log('# Number 2')
    console.log(data2);
}


number1(data)
number2(data2)
