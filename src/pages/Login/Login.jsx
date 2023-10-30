import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {
    const {signIn,setUser}=useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);

        signIn(email,password)
        .then(res => setUser(res.user))
        .catch(error => console.log(error.message))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex">
        <div className="flex items-center justify-center">
          <img src={loginImg} className='w-full pr-28 h-[600px]' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className='text-3xl font-medium'>Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type='submit'>Login</button>
            </div>
          </form>
          <p className='text-center pb-10'>New To Car Doctor? <Link className='text-orange-600 font-bold' to={'/signup'}>SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
