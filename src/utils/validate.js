export const validate=(email,password)=>{
    const emailValiadation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValiadation=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    //const nameValidation=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!emailValiadation) return "Email Id is not valid";
    if(!passwordValiadation) return "Password is not valid";
    //if(!nameValidation) return "Name is not valid";

    return null;
}