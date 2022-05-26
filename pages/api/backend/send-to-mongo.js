import {NextApiRequest,NextApiResponse} from 'next';
import { connect } from '../../../utils/database';


const req = NextApiRequest;
const res =NextApiResponse;

export default async function (req, res){

    const {dab} =await connect();
    const dataRec = req.body;

    const Chker = await dab.collection('Insurance').insertOne({
        name:dataRec.name,
        mobile: dataRec.mobile,
        otp:dataRec.otp,
        dataEnc : dataRec.baseenc,
        createdAt: new Date(),
    });

    res.json({});
}