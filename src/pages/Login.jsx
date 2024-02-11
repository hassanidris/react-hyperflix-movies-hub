import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" w-full">
        <div className=" fixed w-full px-4 py-24 z-20">
          <div className=" max-w-[450px] mx-auto bg-m_darkGrey rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1>login</h1>
              <form onSubmit={handleFormSubmit} className=" flex flex-col py-4">
                <input
                  className="w-full p-3 my-2 text-m_black bg-m_lightGrey rounded-lg placeholder-m_gold focus:bg-m_white focus:border-m_gold"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full p-3 my-2 text-m_black bg-m_lightGrey rounded-lg placeholder-m_gold focus:bg-m_white focus:border-m_gold"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className=" capitalize border border-m_gold bg-m_gold hover:bg-m_darkGrey hover:text-m_gold py-3 my-6 rounded-lg">
                  login
                </button>
                <p className="my-4">
                  <span className=" text-m_lightGrey mr-2">
                    New to HyperFlix?
                  </span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
