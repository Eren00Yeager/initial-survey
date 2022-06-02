import { google } from 'googleapis';
import env from '../../env'

async function handler(req, res) {
  if (req.method === 'POST') {
    const { type,name,contact } = req.body;
    if(type==null || name==null || contact==null){
        res.status(500).json({message:"The form is empty"})
    }else{
        console.log([type,name,contact])
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
            range: 'Insurance!A3:C1000',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[type,name,contact]],
            },
          });
      
      
          res.status(201).json({ message: 'It works!', body:[type,name,contact] , response });
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }

  }
  res.status(200).json({ message: 'Hey!' });
}

export default handler;