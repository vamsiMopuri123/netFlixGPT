export const validate=(email,password,name)=>{
   const emailValiadation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const passwordValiadation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   const nameValiadation = /([a-zA-Z0-9_\s]+)/.test(name);
   if(!emailValiadation) return "Email Id is not valid";
   if(!passwordValiadation) return "Password is not valid";
   if(!nameValiadation) return "Enter valid name";

   return null;
}