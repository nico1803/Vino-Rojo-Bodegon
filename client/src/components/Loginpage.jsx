import React from "react";
import "../styles/login.css";
import LogGoogle from "../assets/google.png"
import { Link } from "react-router-dom";

// href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank"
export default function Login() {
  return (
    <div class="cardg">
  <div class="card-info">
  <div class='wrapper' >  
  <span class='content img' >
   <img src="https://madeby.google.com/static/images/google_g_logo.svg" />
  </span>
  <span class='content sign-text'>
    <Link to="/">
    <a>Sign In with Google</a>
    </Link>
  </span>
</div>
  </div>
</div>


  )
  }