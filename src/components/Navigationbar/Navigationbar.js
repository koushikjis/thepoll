import React from 'react'
import siteConst from '../../constant.json'
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap'

export default function Navigationbar(){
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">{siteConst.siteName}</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Live Polls</Nav.Link>
            <Nav.Link href="#features">Featured Polls</Nav.Link>
            <Nav.Link href="#pricing">Create Poll</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    )
}
