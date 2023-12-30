
import {FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate,  } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const login = () => {
    const navigate = useNavigate();
const from = location.state?.from?.pathname  || "/";
    // const {signIn, googleSignIn , githubSignIn} = useContext(AuthContext);
    const {signIn , googleSignIn , githubSignIn} = useContext(AuthContext);
    const handleSubmit = event =>{  
        event.preventDefault();
         const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const login = { email , password}
        console.log(login);
        signIn(email, password)
        .then(result =>{
            const loginUser = result.user;
            console.log(loginUser);
            let timerInterval;
          Swal.fire({
                title: "Successfully logind",
                html: "I will close in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                  const timer = Swal.getPopup().querySelector("b");
                  timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                  }, 100);
                },
                willClose: () => {
                  clearInterval(timerInterval);
                }
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
                }
                
              });
              
              navigate(from , { replace:true})
              
        })
      
    }
   // google sign in
   const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result => {
        const google = result.user;
        console.log(google);
        navigate(from , { replace:true})
    })
}

// github
const handleGithubSignIn = () => {
githubSignIn()
.then(result =>{
  const   github = result.user;
  console.log(github)
  navigate(from , { replace:true})
}) 

}

    return (
        <div data-aos="zoom-in-down">
            
           <div className='flex '>

            
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col  w-2/3">
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl  bg-gradient-to-r from-indigo-500 to-purple-700 ">
      <form onSubmit={handleSubmit}  className="card-body">

       
        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name='email' className="input input-bordered"required />
        
        </div>
    
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered"required />
         
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <p className='text-xl text-center font-bold'>Or</p>
          <button onClick={handleGoogleSignIn} className='border-t-4 btn  btn-block ' ><FcGoogle />Google</button>
          <p className='text-xl text-center font-bold'>Or</p>
          <button onClick={handleGithubSignIn} className='border-t-4 btn  btn-block ' ><FaGithub></FaGithub>Github</button>
        </div>
        <p className='font-bold ' > You Have not Account! Now <Link className='text-2xl font-bold  text-white'  to={"/register"}>Register</Link></p>

      </form>
    </div>
  </div>
</div>
           </div>
        </div>

        
    );
};

export default login;