import React from 'react';
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import InputForm1 from './inputForm';

function Modal1(props: any) {
    return (
        <Container>
      <br />
      <Modal isOpen={true}>
        <ModalHeader>
          <h3>Create New Address</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm1 />
        </ModalBody>
        <ModalFooter>
          <Button color="danger">Close</Button>
        </ModalFooter>
      </Modal>
    </Container>

    );
}

export default Modal1;