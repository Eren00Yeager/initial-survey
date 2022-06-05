import { google } from 'googleapis';
import env from '../../env'

async function handler(req, res) {
  if (req.method === 'POST') {
    const { type,name,contact } = req.body;

    var dateUTC = new Date();
    var dateUTC = dateUTC.getTime() 
    var dateIST = new Date(dateUTC);
    dateIST.setHours(dateIST.getHours() + 5); 
    dateIST.setMinutes(dateIST.getMinutes() + 30);

    if(type==null || name==null || contact==null){
        res.status(500).json({message:"The form is empty"})
    }else{
        console.log([type,name,contact,dateIST])
    }

    try{
        const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: env.client_email,
              client_id: env.client_id,
              private_key: env.private_key.replace(/\\n/g, '\n'),
            },
            scopes: [
              'https://www.googleapis.com/auth/drive',
              'https://www.googleapis.com/auth/drive.file',
              'https://www.googleapis.com/auth/spreadsheets',
            ],
          });
      
          const sheets = google.sheets({
            auth,
            version: 'v4',
          });
      
          const response = await sheets.spreadsheets.values.append({
            spreadsheetId: env.DATABASE_ID,
            range: 'Insurance!A3:D1000',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[type,name,contact,dateIST]],
            },
          });
      
      
          res.status(201).json({ message: 'Success!', body:[type,name,contact,dateIST] , response });
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }

  }
  res.status(200).json({ message: 'Only POST allowed!' });
}

export default handler;