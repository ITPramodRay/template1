
import validator from 'validator';

export default function validate(formData) {
    const errors = {};
    // console.log(formData, 'this is the formdata');
    if (formData.email?.length <= 0) {
        errors.email = 'Email address is required';
    } else if (!validator.isEmail(formData.email)) {
        errors.email = 'Enter valid email';
    }
    if (formData.termsAndCondition !== undefined && !formData.termsAndCondition) {
        errors.termsAndCondition = 'Please agree to terms and conditions';
    }
    if (formData.password?.length === 0) {
        errors.password = 'Password is required';
    }

    if (formData.password && formData.password !== formData.repassword && formData.repassword) {
        errors.password = 'Passwords should be same';
    }

    if (formData.firstName?.length <= 0) {
        errors.firstname = 'Firt name is required';
    }
    
    if (formData.lastName?.length <= 0) {
        errors.lastname = ' Last name is required';
    }
    // if (!/^[a-zA-Z ]+$/.test(formData.yourName)) {
    //     errors.yourName = 'Name should only have alphabets';
    //     if (formData.yourName?.length <= 0) {
    //         errors.yourName = 'Name is required';
    //     }
    // }

    

    if (formData.phone && formData.phone && !/^\d*\.?\d*$/.test(formData.phone)) {
        errors.phone = 'Mobile number must be in numbers';
    }
    if (formData.phone && formData.phone?.length < 10) {
        if (formData.phone?.length <= 0) {
            errors.phone = 'Mobile number is required';
        } else {
            errors.phone = 'Enter valid mobile number';
        }
    }
    return errors;
}