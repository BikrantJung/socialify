import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser() {}
  return (
    <div className="flex flex-col h-screen mx-auto items-center justify-center gap-3 w-1/2">
      <div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <button className="px-3 py-1.5 bg-blue-500 rounded text-white m-4 text-sm">
        Register
      </button>
    </div>
  );
}

export default Register;
