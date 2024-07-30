import React from "react";
import Header from "../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";

const Home = () => {
    return (
        <div>
            <Header />
            <Container className="my-4">
                <Row>
                    <Col className="border border-1" sm={3}>
                        <LeftSideBar />
                    </Col>
                    <Col className="border border-1" sm={6}>
                        sm=4
                    </Col>
                    <Col className="border border-1" sm={3}>
                        <RightSideBar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
