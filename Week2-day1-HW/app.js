var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]
// create database 
var MongoClient = require('mongodb').MongoClient;

//statsdb is the database name
var url = "mongodb://localhost:27017/statsdb";

// connect to statsdb
MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, function (err, db) {
    var dbo = db.db('statsdb');
    var queryAsc = { state: 1  };
// created a collection called uscensus
    dbo.collection("uscensus").find().sort(queryAsc).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })
});