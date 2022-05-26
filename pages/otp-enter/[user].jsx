import {useRouter} from 'next/router';

export default function otpValidator (){
    const route = useRouter();

    route.query.user;
}