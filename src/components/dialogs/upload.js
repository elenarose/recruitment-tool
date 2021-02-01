import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";


export default function Upload(props) {
    const [file, setFile] = useState(null);

    function onChangeHandler(event){
        console.log(event.target.files[0]);
        setFile(event.target.files[0])
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Upload {props.type}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Select a csv file to upload</h4>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.upload(file)}>Upload</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}