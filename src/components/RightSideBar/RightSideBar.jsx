import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import qZone1 from "../../assets/images/qZone1.png";
import qZone2 from "../../assets/images/qZone2.png";
import qZone3 from "../../assets/images/qZone3.png";

const RightSideBar = () => {
    return (
        <div>
            <div>
                <h3 className="fw-bold">Login With</h3>
                <div>
                    <Button
                        className="d-block w-100 mb-3"
                        variant="outline-info"
                    >
                        Log in with Google
                    </Button>
                    <Button
                        className="d-block w-100"
                        variant="outline-secondary"
                    >
                        Log in with Github
                    </Button>
                </div>

                <div className="mt-5">
                    <h3 className="fw-bold">Find Us On</h3>
                    <ListGroup>
                        <ListGroup.Item>Facebook</ListGroup.Item>
                        <ListGroup.Item>Twitter</ListGroup.Item>
                        <ListGroup.Item>Twitter</ListGroup.Item>
                    </ListGroup>
                </div>

                <div className="mt-4 bg-secondary rounded-1 bg-gradient py-3 px-2">
                    <h4 className="fw-semibold text-white">Find Us On</h4>
                    <div className="text-center">
                        <img className="mb-4 w-100" src={qZone1} alt="" />
                        <img className="mb-4 w-100" src={qZone2} alt="" />
                        <img className="w-100" src={qZone3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
