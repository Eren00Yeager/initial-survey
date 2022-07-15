import { google } from 'googleapis';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { name,mobnum,email,problem,address,demand,cnam,cad,cid,cost,order } = req.body;

    var dateUTC = new Date();
    var dateUTC = dateUTC.getTime() 
    var dateIST = new Date(dateUTC);
    dateIST.setHours(dateIST.getHours() + 5); 
    dateIST.setMinutes(dateIST.getMinutes() + 30);

    if(name==null || mobnum==null || email==null || problem==null){
        res.status(500).json({message:"The form is empty"})
    }else{
        console.log([name,email,address,problem,demand,dateIST])
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
            range: 'Consumernew',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[name,email,address,cnam,cid,cad,cost,order,problem,demand,dateIST]],
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