import React,{ useState } from "react";
import { BrowserRouter as Router
        , Switch
        , Route, Link
        , Redirect
        , useHistory
        , useLocation
      } 
      from "react-router-dom";
import BlogPost from "./container/BlogPost/BlogPost";
//import Login from './login/login1';
import './login/login.css';
export default function AuthExample() {

  return (
    <Router>
      <div>
        <AuthButton />
        <ul>

          <li>
            <Link to="/private">Product Page</Link>
          </li>

        </ul>
        <Switch>
          <Route path="/public">
             <LoginPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <BlogPost />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
    localStorage.removeItem('Name');
    localStorage.removeItem('Password');
  },
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  var names = localStorage.getItem('Name');
  let { from } = location.state || { from: { pathname: "/" } };

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome To Alibaba Store <b>{names}</b>
      <br/>
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push(from));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p align="center">Welcome to Alibaba Store , You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return (
    <div>
      <h3>Public</h3>
    </div>
  );
}

function ProtectedPage() {
  return (
    <div>
      <h3>Private</h3>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  let login = () => {
    if(name == 'dummy'){
      if(pwd == '12345678'){
        localStorage.setItem('Name', name);
        fakeAuth.authenticate(() => {
          history.replace(from);
        });
      }else{
        alert('Password salah , gunakan 12345678!');
      }
    }else{
        alert('Username salah , gunakan dummy!');
    }
  };
  
  return (
    <div>
      <p >You must log in to view the page at {from.pathname}</p>
        <div class="kotak_login">
                  <center><h2>Silahkan login</h2></center>
                  <center><p>Menggunakan Akun Dummy</p></center>
                  <center>
                          <p>Email : dummy</p>
                          <p>Password : 12345678</p>
                  </center>
                
                      <div class="form-inline">
                          <label>Username</label>
                          <input type="text" name="username" class="form_login" placeholder="masukkan username"
                          onChange={(e) => setName(e.target.value)} value={name}/>
                      </div>
                      <div class="form-inline">
                          <label>Password</label>
                          <input type="password" name="password" class="form_login" 
                          placeholder="masukkan password anda"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}/>
                      </div>
                       <button onClick={login} class="tombol_login">Login</button>
                  </div>
              </div>
  );
}