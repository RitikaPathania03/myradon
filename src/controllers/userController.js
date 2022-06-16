const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
}
catch(error){res.status(500).send({msg:"SERVER ERROR1", error:error.message})
}

};



//=============================login==============================================================================
const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({status:false, msg: "username or the password is not corerct"});
  
    
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, token: token });
}catch(error)
{res.status(500).send({msg:"SERVER ERROR2", error:error.message})
}
};

//========getuser===========================================================================================================
const getUserData = async function (req, res) {
  try {
  // let token = req.headers["x-auth-token"];
  // if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // console.log(token);
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  // let decodedToken = jwt.verify(token, "functionup-radon");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(403).send({ status: false, msg: "No such user exists while verifying user details" });

  res.status(200).send({ status: true, data: userDetails });
} catch(error){res.status(500).send({msg:"SERVER ERROR3", error:error.message})
}
};


//======================updateUser====================================================
const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(400).send({status:false, msg:"No such user exists while updating"});
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: true, data: updatedUser });
}catch(error){
  res.status(500).send({msg:"SERVER ERROR4"}, {error:error.message})
}
};


//====================deleteUser======================================================================
let deleteUser= async function(req,res){
  try{
 let userId=req.params.userId;
  let dUser=await userModel.findOneAndUpdate({_id:userId},{ $set:{isDeleted:true}},{new:true})
  res.status(200).send({status:true,data:dUser});
  
  } catch(error){
  res.status(500).send({msg:"SERVER ERROR5", error: error.message})
}
};

//==========================postMessage================================================================
const postMessage = async function (req, res) {
  try{
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(400).send({status: false, msg: 'No such user exists'})
    let updatedPosts=user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
    return res.status(200).send({status: true, data: updatedUser});
  } catch(error){res.status(500).send({msg:"SERVER ERROR6", error:error.message})}
};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser=deleteUser;
