
function Validation(values) {
    let errors = {};
    const email_pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    if (!values.email === "") {
        errors.email = "Name should not be empty";
    }
    else if (!email_pattern.test(values.email)) {
        errors.email = "Email Did not match";
    }else{
        errors.email = "";
    }

    if (!values.password === "") {
        errors.password = "Password should not be empty";
    }
    else if (!password_pattern.test(values.password)) {
        errors.password = "Password Did not match";
    }else{
        errors.password = "";
    }
    return errors;
}

export default Validation;