import "../pages-login/login.css";
import image from "../src/assets/images/plane.png";
import image2 from "../src/assets/images/Vector (1).png";
import image3 from "../src/assets/images/Group 688.png";
import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook} from 'react-icons/ai';
import { AiFillApple } from "react-icons/ai";


const Login = () => {
    return (
        <>
        <section className="wrapper">

      <div className="image">
                <h2>Travelista Tour</h2>
                <p>Travel is the only that enriches you in ways </p>
                <p>beyond material wealth</p>
      </div>

         <div className="form">
         
         <div className="plane"><img src={image}/></div>
                <h2>Welcome</h2>
                <p>Login With Email</p>
                <div className="form-dtl">
                   <div className="in"> <input type="email" placeholder=" bastukur1997@gmail.com"></input></div>
                   <input type="text" placeholder=" Enter Your Password"></input>
                </div>
                <div className="forgot"><a href="#">Forgot Your Password ?</a></div>
                     <div className="login-btn"><a href="#"><button>LOGIN</button></a></div>

             <div className="or-container">
                    <div className="box"></div>
                    <div className="or">OR</div>
                    <div className="box"></div>
             </div>

                <div className="social-container">
                    <div className="box"><span><FcGoogle color="red"/></span></div>
                    <div className="box"><span><AiFillFacebook color="blue"/></span></div>
                    <div className="box"><span><AiFillApple/></span></div>
                </div>


                <div className="register">
                    <h1>Don't have account ?</h1>
                    <div className="now"><a href="#">Register Now</a></div>
                </div>


                <div className="last-img">
                    <div className="left"><img src={image2}/></div>
                    <div className="right"><img src={image3}/></div>
                </div>
         </div>
        </section>
        </>
     );
}
export default Login;