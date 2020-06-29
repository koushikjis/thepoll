import React from 'react';
import Logo from '../logo/logo'
import Title from '../title/title'
import Navigationbar from "../Navigationbar/Navigationbar"
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'

function Header(){
    return (
        <Jumbotron fluid>
            <Container fluid>
                <Row>
                    <Col xs={6} md={4}>
                        <Logo />
                    </Col>
                    <Col xs={12} md={8}>
                        <Title />
                    </Col>
                </Row>
            </Container>
            <Navigationbar />
        </Jumbotron>
    )
}

export default Header