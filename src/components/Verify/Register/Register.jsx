import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname  || "/";
const [registerError , setRegisterError ] = useState("");
const [success , setSuccess] = useState("");
    const {createUser, googleSignIn, githubSignIn} = useContext(AuthContext)
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const register = {name , photo,email, password}
       console.log(register);
if(password.length <6){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Password must be 6 charecter ",
    footer: '<a href="#"></a>'
  });
  return;
} 

    createUser(email , password)
    .then(result =>{
      const registerUser = result.user;
      console.log(registerUser);
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from, {replace: true})

      .catch(error =>{
        console.error(error)
        setRegisterError(error.message)
      })
    })
    }
// google signIn 
const handleGoogleSignIn = () =>  {
    googleSignIn()
    .then(result =>{
       console.log(result.user)
       navigate(from, {replace: true})
    }
    )
    
}
// github 
const handleGithubSignIn = () =>{
    githubSignIn()
    .then(result =>{
        console.log(result.user);
        navigate(from, {replace: true})
    })
}
 
    return (
        <div  data-aos="fade-right"
        >


           <div className="hero min-h-screen ">
  <div className="">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    
    </div> */}
    <div className=" rounded-md  bg-gradient-to-r from-indigo-500 to-purple-700 ">
      <form  onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>

          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
     
        </div>
        <div className="divider">or</div>
        <div>
        <div className="flex flex-col w-full">
  <div onClick={handleGoogleSignIn} className="flex items-center justify-center gap-3  bg-base-300 p-3 rounded-box font-bold   "><FcGoogle></FcGoogle>Google</div> 
  <div className="divider"></div> 
  <div onClick={handleGithubSignIn} className=" flex items-center justify-center gap-3  bg-base-300 p-3 rounded-box font-bold "><SiGithub></SiGithub>Github</div>
</div>
            <h2 className="font-bold">You Have Account?  Now <Link className= "text-2xl text-purple-600 font-bold " to={"/login"}>Login</Link></h2>
        </div>
      </form>
    {
      registerError && <p className="text-red-700">{registerError}</p>
    }
    {
      success && <p className="text-green-500">{success}</p>
    }
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;