import { google } from 'googleapis';
import { Router } from 'next/router';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { type,name,mail,address,relIssue,amt,company,companyId,pno } = req.body;
    console.log([ type,name,mail,address,relIssue,amt,company,companyId,pno  ])
    var dateUTC = new Date();
    var dateUTC = dateUTC.getTime() 
    var dateIST = new Date(dateUTC);
    dateIST.setHours(dateIST.getHours() + 5); 
    dateIST.setMinutes(dateIST.getMinutes() + 30);

    if(type==null || name==null || mail==null  || address==null  || relIssue==null  || company==null || companyId==null || amt==null || pno==null){
        res.status(500).json({message:"The form is empty"})
    }else{
        console.log([ type,name,mail,address,relIssue,amt,company,companyId,dateIST])
    }

    try{
        const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: process.env.client_email,
              client_id: process.env.client_id,
              private_key: process.env.private_key.replace(/\\n/g, '\n'),
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
            spreadsheetId: process.env.DATABASE_ID,
            range: 'Insurance!A3:J1000',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[type,name,mail,dateIST,address,relIssue,amt,company,companyId,pno]],
            },
          });
      
          res.status(201).json({ message: 'Success!' });
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }

  }
  res.status(200).json({ message: 'Only POST allowed!' });
}

export default handler;