import React, {useState} from 'react';
import {Grid, GridColumn, GridRow, Icon, Header, Button, Form, Modal, Image} from 'semantic-ui-react';
import {contactMeConstants} from '../staticContent/contactMeConstants';
import pigeon from '../images/pigeon.png'

 const Contact = () => {

    const [values, setValues] = useState({firstName: '', lastName: '', email: '', comment: ''})
    const [open, setOpen] = React.useState(false)

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
        console.log(values);
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const submitForm = () =>{
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
          })
            .then(() => setOpen(true))
            .catch(error => alert(error));
    
    }

    return (
        <div>
            <Grid>
                <GridRow stretched>
                    <GridColumn width='2'></GridColumn>
                    <GridColumn width='5' textAlign='center'>
                        <img src='https://media.giphy.com/media/byA7UVvcIQvAppjRNY/giphy.gif'/>
                    </GridColumn>
                    <GridColumn width='6'>
                        <Header as='h1' color='orange'>{contactMeConstants.heading}</Header>

                        <div style={{color:'grey', fontSize:'15px'}}>
                            {contactMeConstants.desc}
                            <br/>
                        </div>

                        <Form inverted>
                            <Form.Group widths='equal'>
                                <Form.Input fluid name='firstName' label='First name' placeholder='First name' onChange={handleInputChange}/>
                                <Form.Input fluid name='lastName' label='Last name' placeholder='Last name' onChange={handleInputChange}/>
                            </Form.Group>
                            <Form.Input fluid name='email' label='Email' placeholder = 'Your email' onChange={handleInputChange}></Form.Input>
                            <Form.Field name='comment' label='Comment' control='textarea' placeholder ='Whats up? 'rows='3'  onChange={handleInputChange}/>
                            <Button onClick ={submitForm}>Submit</Button>
                        </Form>
                        <br/>
                        <div>
                            ~ OR ~ 
                        </div>
                        <div style={{color:'grey', fontSize:'15px'}}>
                            {contactMeConstants.contDesc}
                        </div>
                        <br/>
                        <div style={{textAlign:'center'}}>
                            <a href='https://www.linkedin.com/in/sahaj-kohli-1b975388'  >
                                <Icon name='linkedin' size='huge'/>
                            </a>
                        </div>

                    </GridColumn>
                    <GridColumn width='2'></GridColumn>

                </GridRow>
            </Grid>

            <Modal 
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <Modal.Header style={{backgroundColor:'grey', color: 'white'}}>Thanks for contact me!</Modal.Header>
                <Modal.Content image style={{backgroundColor:'black', color: 'white'}}>
                <Image size='medium' src={pigeon} wrapped />                    
                <Modal.Description style={{backgroundColor:'black',color: 'white'}}>
                        <p>
                        I've attached your message to a carrier pigeon and its already on it's way
                        </p>
                        <p>I'll respond as soon as I can!</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions style={{backgroundColor:'grey', color: 'white'}}>
                    <Button color='black' onClick={() => setOpen(false)}>
                    Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default Contact;