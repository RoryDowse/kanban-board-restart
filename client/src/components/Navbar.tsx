import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [ loginCheck, setLoginCheck ] = useState(false);

  const checkLogin = () => {
    if(auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck])

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
      {
        !loginCheck ? (
          <>
         <li>
          <button type="button" id="create-ticket-link">
            <Link to="/login">New Ticket</Link>
          </button>
        </li>
          <li className='nav-item'>
            <button type='button'>
              <Link to='/login'>Login</Link>
            </button>
          </li>
        </>
        ) : (
          <>
          <li>
            <button type="button" id="create-ticket-link">
              <Link to="/create">New Ticket</Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              onClick={() => {
                auth.logout();
              }}
            >
              <a>
              Logout
              </a>
            </button>
          </li>
        </>
        )
      }
      </ul>
    </div>
  )
}

export default Navbar;
