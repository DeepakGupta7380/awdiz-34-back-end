export const Profile = (req, res) => {
    // res.send("User profile data from controller.");
    res.send({
        message: "User Profile from controller",
        User: "Deepak gupta"
        
    });
};

export const Cart = (req, res) => {
    res.send("User cart data from controller.");
};

export const Orders = (req, res) => {
    res.send("User orders data from controller.");
};