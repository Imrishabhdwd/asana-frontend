import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { logout } from '../redux/action/user';

export default props => {
  function logout() {
    localStorage.clear()
  }
  return (
    <Menu noOverlay pageWrapId={ "page-wrap" }>
    <div className="wrapper"> Asana </div>
      <a className="menu-item" href="/">
        Home
      </a>
      {
      localStorage.getItem('username') || localStorage.getItem('adminname') ? 
      <a href="/" className="menu-item" onClick={() => logout()}>
      Logout
    </a>:<>
    <a className="bm-item menu-item user-login" tabIndex="0" href="/user-login">
        Login
      </a>

      <a className="bm-item menu-item user-login" tabIndex="0" href="/user-signup">
        SignUp
      </a></>
    }
      {localStorage.getItem('adminname') ?<a className="menu-item" href="/add-task">
        AddTask
      </a>: undefined}
    </Menu>
  );
};