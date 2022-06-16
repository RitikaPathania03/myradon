const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
     let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header in post message request"})
    let decodedToken = jwt.verify(token, 'functionup-radon')
    if(!decodedToken) {
      return res.send({status: false, msg:"token is not valid"})
    }else{
      next()
    }}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) {return res.send({status: false, msg: 'No such user exists'})}
    else{
        
    next()
    }
    
   }