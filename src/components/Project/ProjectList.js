import React, { useEffect, useState } from "react";
import {Table, Button} from 'react-bootstrap';
import axios from "axios";

const useProjectApi = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      let response = await axios.get("http://localhost:3001/api/user/1/projects/n-tasks");
      setProjects(response.data.userProjects);
    } catch (error) {
      console.log("Error while fetching projects:", error.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return projects;
};

const ProjectList = () => {
  const projects = useProjectApi();
  return (
    <>
      <Table class="striped hover">
        <thead>
          <tr>
            <th>
              <abbr title="Name">Name</abbr>
            </th>
            <th>
              <abbr title="Description">Description</abbr>
            </th>
            <th>
              <abbr title="Number of tasks">Number of tasks</abbr>
            </th>
            <th>
              <abbr title="Actions">Actions</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => 
              <tr>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.number_of_tasks}</td>
                <td>
                  <div style={{display: 'flex', flexDirection: 'row', gap: 5}}>
                    <Button variant="success" size="sm">Tasks</Button>
                    <Button variant="secondary" size="sm">Edit</Button>
                    <Button variant="danger" size="sm">Delete</Button>
                  </div>
                </td>
              </tr>
          )}
          
        </tbody>
      </Table>
    </>
  );
};

export default ProjectList;
