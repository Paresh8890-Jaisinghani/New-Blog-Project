import React from "react";



function Loginpages(){
    return (
        <form className="login">
        <h1>Login</h1>
        <input type="text"
          placeholder="username"
        />
        <input type="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    );
}


export default Loginpages;