
let axios = require("axios");
const route = require("../routes/route");



const getWeatherOfLondon = async function (req,res){
    try{
        let q= req.query.london
        let appId=req.query.eb6ba4466671fdfbfc72bc91307443f3
        // console.log(`query params are: ${q} ${appId}`)
      let options={
        method: "get",
        url:"https://api.openweathermap.org/data/2.5/weather?q=${q}&appId=${appId}"
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
        let cities=["Bengaluru","Mumbai","Kolkata","Chennai","London","Moscow"]
        let cityObjArray=[];
        for (i=0;i=cities.length;i++){
        let obj={city: cities[i]}
        let resp=await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=eb6ba4466671fdfbfc72bc91307443f3')
        console.log(resp.data.main.temp)
       obj.temp=resp.data.main.temp
       cityObjArray.push(obj)
        }
        let sorted=cityObjArray.sort(function(a,b){
            return a.temp - b.temp})

            console.log(sorted)
            res.status(200).send({status: true, data:sorted})
            
        }
        catch(err){
            console.log(err)
            res.status(500).send({status:false, msg: "SERVER ERROR"})
        }
        }
    


      
module.exports.getWeatherOfLondon=getWeatherOfLondon
module.exports.getSortedCities=getSortedCities;