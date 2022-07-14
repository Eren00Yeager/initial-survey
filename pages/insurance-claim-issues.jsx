import Insurance from '../components/InsuranceClaims'
import Head from 'next/head';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';



const SpinnerComp=()=>{
  return(
      <span style={{height:'100vh',marginTop:'45vh'}}>
          <center style={{paddingTop:'45vh'}}>
              <Spinner animation="grow" style={{color:'rgba(67, 44, 206, 0.8)',height:'5vh',width:'5vh'}}/>
          </center>
      </span>
  );
}

const InsuranceClaimIssues = () =>{

  const [comp,setComp]=useState('');

  
  useEffect(() => {
    axios
      .get("/api/datasheet")
      .then((res) => {
        setComp(res.data)
      })
      .catch((err)=>{
        console.log("error in datasheets")
        console.log(err)
      });},[])
  

    return (
        <>
        <Head>
        <title>Claim Remedy</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="0lg-59aMd1ZNt5ueUJsMg8lansXlC0TaaJjQWNaPkDg"/>
        <link href="https://fonts.cdnfonts.com/css/sf-pro-display?display=optional"/>
      </Head>
      {!comp ? <SpinnerComp/>:<Insurance comp={comp}/>}
        
        </>
    )
}

export default InsuranceClaimIssues