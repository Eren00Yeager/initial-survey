import {connect} from  '../../../utils/database';
import {NextApiRequest,NextApiResponse} from 'next';

const req = NextApiRequest;
const res =NextApiResponse;

export default async function (req, res){
    const {dab} =await connect();
    console.log(req.body.mobile);
    const Chker = await dab.collection('Insurance').findOne({
        mobile: req.body.mobile,
    });

    res.json(Chker);
}

