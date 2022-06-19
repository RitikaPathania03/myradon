
let axios = require("axios");
const route = require("../routes/route");



const getWeatherOfLondon = async function (req,res){
    try{
        let q= req.query.q
        let appId=req.query.appId
        console.log(`query params are: ${q} ${appId}`)
      let options={
        method: "get",
        url:"https://api.openweathermap.org/data/2.5/weather?q={q}&appid={appId}"
      }
      let result = await axios(options)
      console.log(result.data)
      res.status(200).send({ msg: result.data });
  }
  catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message })
  }
};


let getSortedCities= async function(req,res){
    try{
        let cities=["bengaluru","mumbai","kolkata","Chennai","London","Moscow"]
        let citiesObjArr=[];
        for (i=0;i=cities.length;i++){
        let obj={cities:cities[i]}
        let resp=await axios.get('https://api.openweathermap.org/data/2.5/weather?q={cities[i]}&appid={appId}')
        console.log(resp.data.main.temp)
       obj.temp=resp.data.main.temp
       citiesObjArr.push(obj)
        }
        let sorted=citiesObjArr.sort(function(a,b){
            return a.temp-b.temp})

            console.log(sorted)
            res.status(200).send({status: false, data:sorted})
            
        }
        catch(err){
            res.status(500).send({status:false, msg: "SERVER ERROR"})
        }
        }
    


      
module.exports.getWeatherOfLondon=getWeatherOfLondon
module.exports.getSortedCities=getSortedCities;