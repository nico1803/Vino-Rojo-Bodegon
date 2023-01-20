import React from "react";
import "../styles/login.css";
import LogGoogle from "../assets/google.png"
import { Link } from "react-router-dom";

// href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank"
export default function Login() {
  return (
<div class="cardlogin">
<div class="cardg-img">
<img src={LogGoogle}/>
</div>
  <div class="cardg-info">
    <p class="text-body">Te invitamos ser parte registrarte atravez de google para tu comodidad.</p>
    <a class="text-title">Autor</a>
  </div>
</div>
  )
  }