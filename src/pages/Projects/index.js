import React from "react";
import ProjectList from "../../components/ProjectList";
import Menu from "../../components/Menu";

const ProjectsPage = () => {

  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu"><h2>TASKBOARD</h2></div>
      </nav>
      <div class="container is-fullhd">
        <div class="columns is-centered">
          <div class="column is-one-fifth">
            <Menu />
          </div>

          <div class="column is-four-fifths px-4">

              <div class="is-flex is-flex-direction-row is-justify-content-space-between">
                <h3 class="title is-3">My projects</h3>
                <button class="button is-primary">New Project</button>
              </div>

              <div class="box">
                <ProjectList />
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
