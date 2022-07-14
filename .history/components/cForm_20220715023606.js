import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import consumerStyles from "../styles/consumer.module.css";
import SearchBar from "./csearch";
import { useState } from "react";
const cForm = ({comp}) => {
    // const [name, setName] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [email, setEmail] = useState('');
    // const [problem, setProblem] = useState('');
    // const [error, seterror] = useState('');
    const [st, setst] = useState(false);
    const [Data,setData] =useState({});
    const [cnam,setcnam]=useState('');
    const [cid,setcid] = useState('');
  const onChangeHandler =(e)=>{
   setData((state)=>{
    return{
        ...state,
        [e.target.name]: e.target.value,
    }
   })
  }
  const onSubmitHandler =(e)=>{
    console.log(Data);
  }
  
  return (
    <Form className={consumerStyles.frm} method="post" onSubmit={onSubmitHandler}>
    <div className={consumerStyles.grev}>
        Submit your Grievance
    </div>
    <div className={consumerStyles.details}>
        <Accordion>
            <Accordion.Item eventKey="0" style={{ background: "#424242" }}>
                <Accordion.Header><div className={consumerStyles.id}>Consumer Details</div></Accordion.Header>
                <Accordion.Body className={consumerStyles.cbd}>
                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} name="name" type="text" placeholder="Name" required onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Mobile No.</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} name="mobnum" type="Mobile No." pattern="[0-9]{10}" placeholder="Mobile No." onChange={onChangeHandler} />
                    </Form.Group>

                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Email Id.</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} name="email" type="text" placeholder="Email Id." onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Address of Consumer</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} name="address" placeholder="Address of Consumer" onChange={onChangeHandler}/>
                    </Form.Group>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion >
            <Accordion.Item eventKey="0" style={{ background: "#424242" }}>
                <Accordion.Header><div className={consumerStyles.id}>Product Details</div></Accordion.Header>
                <Accordion.Body className={consumerStyles.cbd}>

                <SearchBar comp={comp} setCompany={setcnam}  setCId ={setcid}/>
                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} type="tel" name="cost" placeholder="Cost of Product" />
                    </Form.Group>
                    <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Problem Faced</Form.Label> */}
                        <Form.Select className={consumerStyles.pot} name="problem" onChange={onChangeHandler}>
                            <option value="" disabled selected>Problem faced</option>
                            <option >Received defective product</option>
                            <option >Received an empty box</option>
                            <option >Late delivery</option>
                            <option >Not satisfied with the service</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Demand from the company</Form.Label> */}

                        <Form.Select className={consumerStyles.pot} name="demand" onChange={onChangeHandler}>
                            <option value="" disabled selected>Demand from the company</option>
                            <option>Refund of my money</option>
                            <option>Replacement of the product</option>

                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formFile">
                        {/* <Form.Label className={consumerStyles.nam}>Proof</Form.Label> */}
                        <Form.Control className={consumerStyles.plc}  type="file" />
                    </Form.Group>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


        <Form.Group className={consumerStyles.terms} >
            <Form.Check type="checkbox" label="check this" />

        </Form.Group>
        <Button variant="primary" type="submit" className={consumerStyles.sub} >
            Send
        </Button>
    </div>

</Form>
  );
};

export default cForm;
