
function generateOtp(){
    var otp="";
    const digits="0123456789";

    for (let i = 0; i <6; i++) {
        otp += digits[Math.floor(Math.random()*10)];
    }

    return otp;
}

async function SendOtp(number){
    const otp = generateOtp();

    // dont know which service will use for sending otp


    return otp;
}

export default SendOtp