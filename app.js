const express =  require('express');
var contactusModel = require('../hotelcrown/model/mdata');
var hoteldataModel = require('../hotelcrown/model/hoteldata');
var router = express.Router();
const app = express();
app.use(express.urlencoded({ extended:true}));
app.set('view engine','ejs');

var contect = contactusModel.find({});
var mumbai = hoteldataModel.mumbaidata.find({});
var bekaal = hoteldataModel.bekaaldata.find({});
var bengaluru = hoteldataModel.bengalurudata.find({});
var hyderabad = hoteldataModel.hyderabaddata.find({});
var jaipur = hoteldataModel.jaipurdata.find({});
var jodhpur = hoteldataModel.jodhpurdata.find({});
var madikeri = hoteldataModel.madikeridata.find({});
var munnar = hoteldataModel.munnardata.find({});
var mussoorie = hoteldataModel.mussooriedata.find({});
var udaipur = hoteldataModel.udaipurdata.find({});


app.get("/",(req,res,next)=>{
    res.render('admin');
});

app.get("/conect",(req,res,next)=>{
    contect.exec((err,data)=>{
        if(err) throw err;
        res.render('conect',{record : data});
    }); 
});

app.get("/Mumbai",(req,res,next)=>{
    mumbai.exec((err,data)=>{
        if(err) throw err;
        res.render('Mumbai',{record : data});
    });
});

app.get("/Bekaal",(req,res,next)=>{
    bekaal.exec((err,data)=>{
        if(err) throw err;
        res.render('Bekaal',{record : data});
    });
});

app.get("/Bengaluru",(req,res,next)=>{
    bengaluru.exec((err,data)=>{
        if(err) throw err;
        res.render('Bengaluru',{record : data});
    });
});

app.get("/Hyderabad",(req,res,next)=>{
    hyderabad.exec((err,data)=>{
        if(err) throw err;
        res.render('Hyderabad',{record : data});
    });
});

app.get("/Jaipur",(req,res,next)=>{
    jaipur.exec((err,data)=>{
        if(err) throw err;
        res.render('Jaipur',{record : data});
    });
});
app.get("/Jodhpur",(req,res,next)=>{
    jodhpur.exec((err,data)=>{
        if(err) throw err;
        res.render('Jodhpur',{record : data});
    });
});

app.get("/Madikeri",(req,res,next)=>{
    madikeri.exec((err,data)=>{
        if(err) throw err;
        res.render('Madikeri',{record : data});
    });
});

app.get("/Munnar",(req,res,next)=>{
    munnar.exec((err,data)=>{
        if(err) throw err;
        res.render('Munnar',{record : data});
    });
});

app.get("/Mussoorie",(req,res,next)=>{
    mussoorie.exec((err,data)=>{
        if(err) throw err;
        res.render('Mussoorie',{record : data});
    });
});

app.get("/Udaipur",(req,res,next)=>{
    udaipur.exec((err,data)=>{
        if(err) throw err;
        res.render('Udaipur',{record : data});
    });
});



app.listen(800);

