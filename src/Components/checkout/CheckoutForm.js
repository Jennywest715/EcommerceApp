import { withCart } from "../../contexts/cartContext";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

// Renders the checkout form for the cart, used by `Checkout` component.
function CheckoutForm(context) {
    // A list of all the states
    const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    // Loops through all states and makes an option for the state dropdown
    const stateList = states.map((state) =>     
       <option value={state}>{state}</option>
    );

    // Sets the checked state of the billing address same as shipping address.
    const [checked, setChecked] = useState(false);

    // Holds state for the:
    // Shiping Address
    // Billing Address
    const [formData, setFormData] = useState({
        shippingStreet: '',
        shippingSecondaryStreet: '',
        shippingState: '',
        shippingZip: '',
        shippingCity:'',
        billingStreet: '',
        billingSecondaryStreet: '',
        billingState: '',
        billingZip: '',
        billingCity:'',
    })


    // Handles if the user selects that the billing address should be the same as the shipping address.
    const handleCheck = () => {
        // If it is already checked, they are un-checking it
        if (checked) {
            // clear the billing address 
            const updatedBilling = {
                billingStreet: '',
                billingSecondaryStreet: '',
                billingState: '',
                billingZip: '',
                billingCity:'',
            }

            setFormData(formData => ({
                ...formData,
                ...updatedBilling,
            }))

        } else {
            // They are checking the box so set the billing address to the same as the shipping.
            const updatedBilling = {
                billingStreet: formData.shippingStreet,
                billingSecondaryStreet: formData.shippingSecondaryStreet,
                billingState: formData.shippingState,
                billingZip: formData.shippingZip,
                billingCity:formData.shippingCity,
            }

            setFormData(formData => ({
                ...formData,
                ...updatedBilling,
            }))
        }

        // toggle the checked boolean
        setChecked(!checked)
    }

    // Handles a change to the input fields of the form.
    const handleChange = (event) => {
        const updatedItem = {[event.target.name]: event.target.value}
        setFormData(formData => ({
            ...formData,
            ...updatedItem,
        }))
    }

    // called when the purchase button is clicked.
    const handleSubmit = (event) => {
        // clears all the items from the cart.
        context.clearItems()
    }
    // styling checkout page.
    return (
        <div>
            <h1>Checkout</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <FloatingLabel
                          controlId="formGridFirstName"
                          label="First name"
                        >
                            <Form.Control required placeholder="First name" />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <FloatingLabel
                          controlId="formGridLastName"
                          label="Last name"
                        >
                            <Form.Control required placeholder="Last name" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Form.Text className="text-bold">
                    <h3>Shipping Address</h3>
                </Form.Text>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={handleChange} required name='shippingStreet' defaultValue={formData.shippingStreet} placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control onChange={handleChange} required name='shippingSecondaryStreet' defaultValue={formData.shippingSecondaryStreet} placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange} required name='shippingCity' defaultValue={formData.shippingCity}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select onChange={handleChange} required name='shippingState' value={formData.shippingState} defaultValue="Choose...">
                        <option>Select...</option>
                        {stateList}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control onChange={handleChange} required name='shippingZip' defaultValue={formData.shippingZip}/>
                    </Form.Group>
                </Row>

                <Form.Text className="text-bold">
                    <h3>Billing Address</h3>
                </Form.Text>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check onChange={handleCheck} type="checkbox" label="Same as shipping address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridBillingAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={handleChange} required name='billingStreet' defaultValue={formData.billingStreet} placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridBillingAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control onChange={handleChange} required name='billingSecondaryStreet' defaultValue={formData.billingSecondaryStreet} placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridBillingCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange} required name='billingCity' defaultValue={formData.billingCity}  />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBillingState">
                    <Form.Label>State</Form.Label>
                    <Form.Select onChange={handleChange} required name='billingState' value={formData.billingState} defaultValue="Choose...">
                        <option>Select...</option>
                        {stateList}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBillingZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control onChange={handleChange} required name='billingZip' defaultValue={formData.billingZip}  />
                    </Form.Group>
                </Row>

                
                <Form.Text className="text-bold">
                    <h3>Credit card</h3>
                </Form.Text>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCreditNumber">
                    <Form.Label>Number</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCreditCode">
                    <Form.Label>Expiration (MM/DD)</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCreditExpiration">
                    <Form.Label>CSV</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Link to="/products" ><Button variant="primary" onClick={handleSubmit} type="submit">
                    Purchase
                </Button>
                </Link>
                </Form>
        </div>
    )
}

export default withCart(CheckoutForm)