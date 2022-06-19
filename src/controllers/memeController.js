let axios = require("axios");
const { get } = require("../routes/route");
let get_memes= async function(req,res){
    try{
        options={
            method: "get",
            url: "https://api.imgflip.com/"
        }
        let result = await axios(get_memes);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
        
    }
};

let caption_image= async function(req,res){
    try{
      let  template_id=req.query.meme_id
            text0 =req.query.text0
            text1=req.query.text1
            
        options={
        method: "post",
        url: "https://api.imgflip.com/?template_id=${template_id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123"
      }
    let result=await axios(options) 
    }  catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }


}
module.exports.get_memes=get_memes
module.exports.caption_image=caption_image
