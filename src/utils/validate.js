

export const checkValidData=(email,password,name)=>{
    const isEmailValid=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    const isNameValid=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);

    if(!isEmailValid) return "Email id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isNameValid) return "Name is not valid"

    return null;


    

}