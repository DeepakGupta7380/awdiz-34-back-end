export const checkAuth = (req, res, next) => {
    if(req.headers.auth === "true"){
        next();
    }else{
        res.send("Unauthorized");
    }
};