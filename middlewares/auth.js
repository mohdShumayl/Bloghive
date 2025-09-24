const { validatToken } = require("../service/auth");

function checkForAuthCookie(cookieName){
    return(req, res, next)=>{
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue){
            return next();
        }
        try {
            const userPayload = validatToken(tokenCookieValue);
            req.user = userPayload;            
        } catch (error) {
            
        }
       return next();        
    }
}
module.exports ={
    checkForAuthCookie,
}