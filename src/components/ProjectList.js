import React, { useEffect, useState } from "react";
import axios from 'axios';

const useProjectApi = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
      try {
        let userProjects = await axios.get('localhost:3001/user/1/projects');
        setProjects(userProjects);
      } catch (error) {
        console.log("Error while fetching projects:", error.message);
      }  
    }

    useEffect(() => {
      fetchProjects();
    }, [])
    return {projects};
};

const ProjectList = () => {

  return (
    <>
      <table class="table">
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
          <tr>
            <td>Asvitec</td>
            <td>
              Development of a virtual assistant that helps technicians to send
              reports related to their daily work
            </td>
            <td>23</td>
            <td>
              <span class="icon">
                <i class="fas fa-home"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProjectList;
