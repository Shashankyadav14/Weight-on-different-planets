const express = require('express');
const port = 5000;
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.get('/',(req,res)=>{
    res.sendFile('src.html',{root :__dirname});
});
app.post('/submit',(req,res)=>{
    var org_weight =  req.body.yourweight;
    console.log(`the orginal weight of person is ${org_weight}`);  //orginal weight is multiplied with surface gravity of planets
    var mer_w = org_weight*0.38;
    var ven_w = org_weight*0.91;
    var mars_w = org_weight*0.38;
    var jup_w = org_weight*2.34;
    var sat_w = org_weight*0.93;
    var ura_w = org_weight*0.92;
    var nep_w = org_weight*1.12;
    res.send(`<div align="center"> <p style="color:black"> <i style="font-size:40px"> YOUR WEIGTH ON DIFFERNT PLANETS AS FOLLOWS </i> </p>
     <p  style="color:#808080"> <i style="font-size:40px">  Mercury ${mer_w}      </i> </p>
     <p  style="color:#651a1a"> <i style="font-size:40px">  Venus   ${ven_w}      </i> </p>
     <p  style="color:#0000cc"> <i style="font-size:40px">  Earth   ${org_weight} </i> </p>
     <p  style="color:#660000"> <i style="font-size:40px">  Mars    ${mars_w}     </i> </p>
     <p  style="color:#805300"> <i style="font-size:40px">  Jupiter ${jup_w}      </i> </p>
     <p  style="color:#998200"> <i style="font-size:40px">  Satrun  ${sat_w}      </i> </p>
     <p  style="color:#8080ff"> <i style="font-size:40px">  Uranus  ${ura_w}      </i> </p>
     <p  style="color:#166483"> <i style="font-size:40px">  Neptune ${nep_w}      </i> </p> </div>`);
    console.log('The person weight on differnt plannets are')
    console.log(`Weight on Mercury ${mer_w}`);
    console.log(`Weight on Venus ${ven_w}`);
    console.log(`Weight on Earth ${org_weight}`);
    console.log(`Weight on Mars ${mars_w}`);
    console.log(`Weight on Jupiter ${jup_w}`);
    console.log(`Weight on Satrun ${sat_w}`);
    console.log(`Weight on Uranus ${ura_w}`);
    console.log(`Weight on Neptune ${nep_w}`)
});
// app.get('/mercury',(req,res)=>{
//     res.send(mer_w);
// });

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
    
});
