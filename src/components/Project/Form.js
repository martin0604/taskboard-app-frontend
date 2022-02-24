import React from "react";
import useFormState from "./useFormState";
import { Form, Modal, Button } from "react-bootstrap";

const ProjectForm = ({ isActive, handleClose }) => {
  const form = useFormState();

  return (
    <>
      <Modal show={isActive} onHide={() => handleClose(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => form.handleState("name", e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Put here a short description of the project"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" aria-label="close">
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ProjectForm;
