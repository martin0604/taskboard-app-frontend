import React from 'react';

const LoginPage = () => {
    
    return (
      <>
        <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-third">
            <div>Welcome to the Taskboard App</div>

            <div class="field">
              <label class="label">User</label>
              <div class="control">
              <input class="input is-primary" type="text" placeholder="User"/>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
              <input class="input is-primary" type="password" placeholder="Password"/>
              </div>

            </div>


              <button class="button is-primary">Login</button>
            </div>
        </div>
        </div>
      </>
    );
};

export default LoginPage;