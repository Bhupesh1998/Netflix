export const validateUserInput = (email, password) =>{
    const isValideEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isValidePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)

    if(!isValideEmail) return "Email is not Validate";
    if(!isValidePassword) return "Password is not Validate"

    return null;
}