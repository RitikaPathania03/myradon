const jwt= require('jsonwebtoken')
const userModel=require('../models/userModel')

const authenticate = (req, req, next)=>{
  try{
  let token = req.headers["x-auth-token"];
  if (!token)
    return res.status(400).send({ status: false, msg: "token must be present in the request header2" })
  let decodedToken = jwt.verify(token, 'functionup-radon')
  if (!decodedToken) {
    return res.status(404).send({ status: false, msg: "token is not valid" })
  } else {
    next()
  }
}catch(error){res.status(500).send({msg:"SERVER ERROR8", error:error.message})
}
};
const authorise = function(req, res, next) {
  try{
    // comapre the logged in user's id and the id in request
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn){

    return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})}

     else{ 
    next()
    }
  }catch(error){ res.status(500).send({status: false, msg: "SERVER ERROR9"})}
    
   }
   module.exports.authenticate=authenticate;
   module.exports.authorise=authorise;