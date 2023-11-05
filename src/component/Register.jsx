import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";
import "aos/dist/aos.css"; // Import the styles
import AOS from "aos";   
import Swal from 'sweetalert2'  
import { AuthContext } from "../AuthProvider";

AOS.init();

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name, photo);
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setPasswordError("Email must be valid");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdateProfile(name, photo)
        .then(() =>{
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'User created successfully',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/");
        })
        .catch(error =>{
          console.error(error)
        })
   
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div data-aos="zoom-in-down">
      <div className="hero h-[80vh] bg-base-200 mb-24">
        <div className="hero-content flex-col">
          <h1 className="text-4xl font-semibold font-young text-[#A3A3A3]">
            Register now!
          </h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ABCE4E]">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input border-[#FDBF05] border-1 focus-border-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="name"
                  name="photo"
                  placeholder="Photo URL"
                  className="input border-[#FDBF05] border-1 focus-border-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input border-[#FDBF05] border-1 focus-border-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input border-[#FDBF05]"
                  required
                />
                {passwordError && (
                  <p className="text-red-500 mt-2">{passwordError}</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#FDBF05] font-thin font-young text-white p-2 rounded-md">
                  Register
                </button>
              </div>
              <p className="flex gap-5">
                Already have an account?
                <Link className=" text-orange-600 font-semibold" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
