import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';
import consumerStyles from "../styles/consumer.module.css";

const cForm = () => {
  return (
    <Form className={consumerStyles.frm} method="post" >
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
                        <Form.Control className={consumerStyles.plc} type="text" placeholder="Name" required/>
                    </Form.Group>

                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Mobile No.</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} type="Mobile No." pattern="[0-9]{10}" placeholder="Mobile No." onChange={(e) => setMobile(e.target.value)} />
                    </Form.Group>

                    <Form.Group className={consumerStyles.det} >
                        {/* <Form.Label className={consumerStyles.nam}>Email Id.</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} type="text" placeholder="Email Id." onChange={(e) => setMobile(e.target.value)} />
                    </Form.Group>
                    <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Address of Consumer</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} placeholder="Address of Consumer" />
                    </Form.Group>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion >
            <Accordion.Item eventKey="0" style={{ background: "#424242" }}>
                <Accordion.Header><div className={consumerStyles.id}>Product Details</div></Accordion.Header>
                <Accordion.Body className={consumerStyles.cbd}>
                <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} type="text" placeholder="company name" />
                   </Form.Group>
                <SearchBar comp={comp} setCompany={setcnam}/>
                    <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Name</Form.Label> */}
                        <Form.Control className={consumerStyles.plc} type="tel" placeholder="Cost of Product" />
                    </Form.Group>
                    <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Problem Faced</Form.Label> */}
                        <Form.Select className={consumerStyles.pot}>
                            <option value="" disabled selected>Problem faced</option>
                            <option >Received defective product</option>
                            <option >Received an empty box</option>
                            <option >Late delivery</option>
                            <option >Not satisfied with the service</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className={consumerStyles.det}>
                        {/* <Form.Label className={consumerStyles.nam}>Demand from the company</Form.Label> */}

                        <Form.Select className={consumerStyles.pot} >
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
