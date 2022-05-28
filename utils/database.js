import { MongoClient } from 'mongodb';

const DATABASE_URL='mongodb+srv://Eren00Yeager:cpoq9n4n0xE0tZqn@cluster0.wswymly.mongodb.net/?retryWrites=true&w=majority';
const newclient = new MongoClient(DATABASE_URL,
     { useNewUrlParser: true, useUnifiedTopology: true });

async function connect(){
    try{
        // add chk of if already connected
        await newclient.connect();
        const dab = newclient.db("testcase");
        return {dab,newclient};
    }
    catch(e){
        console.log(e);
    }
    
}

export {connect};