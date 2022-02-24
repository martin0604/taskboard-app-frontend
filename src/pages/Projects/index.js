import React, {useState} from "react";
import ProjectList from "../../components/Project/ProjectList";
import ProjectForm from "../../components/Project/Form";
import Menu from "../../components/Menu";
import { Button, Container, Row, Col } from 'react-bootstrap';

const ProjectsPage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <Container>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-menu"><h2>TASKBOARD</h2></div>
        </nav>
      <Row>
        <Col md={2}>
          <Menu />
        </Col>
        <Col md={10}>
              <div style={{display: 'flex', justifyContent:'space-between'}}>
                <h3 class="title is-3">My projects</h3>
                <Button variant="primary" onClick={() => setShowForm(true)}>New Project</Button>
              </div>

              <div>
                <ProjectList />
              </div>
        </Col>
      </Row>
    </Container>
    <ProjectForm isActive={showForm} handleClose={setShowForm}/>
    </>
  );
};

export default ProjectsPage;
