let axios = require("axios");
const routes = require("../routes/route");

// let getMemes= async function(req,res){
//     try{
//         options={
//             method: "get",
//             url: "https://api.imgflip.com/"
//         }
//         let result = await axios(options);
//         console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
        
//     }
// };

let memeHandler= async function(req,res){
    try{
        options={
        method: "post",
        url: "https://api.imgflip.com/caption_img?template_id=${meme_id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123"
      }
    let result=await axios(options) 
   
    
    res.send({ data:result.data  })
    }  catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }


}
// module.exports.getMemes=getMemes
module.exports.memeHandler=memeHandler
