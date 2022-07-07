import { useRouter } from "next/router";
import React, { useState } from "react";
import { TOKEN } from "../common/constant";
import { login } from "../utils/api";

function Login() {
  const router = useRouter();
  const [state, setState] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = state;

  //   handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //handle submit
  const handleSumbit = async (e) => {
    e.preventDefault();
    let data = {
      email: userName,
      password: password,
    };

    try {
      const response = await login(data);
      if (response.status === 200) {
        const { access_token } = response.data.response;
        localStorage.setItem(TOKEN, access_token);
        router.push("/news");
      }
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <>
      <div
        className="card mx-auto mt-5  pt-5 shadow-sm bg-white rounded"
        style={{ maxWidth: "40rem" }}
      >
        <div className="card-body">
          <h5 className="card-title text-center">Login Form</h5>
          <form className="my-4">
            <div className="row">
              <div className="col-lg-10 offset-1">
                <input
                  type="text"
                  name="userName"
                  className="form-control"
                  placeholder="Enter username"
                  onChange={handleChange}
                  value={userName}
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-lg-10 offset-1">
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={handleChange}
                  value={password}
                />
              </div>
            </div>
            <div
              className="row mt-2 offset-5"
              style={{ marginLeft: "18.8rem" }}
            >
              <div className="col-lg-10 text-right">
                <button
                  type="submit"
                  onClick={handleSumbit}
                  className="btn btn-success"
                  style={{ width: "8rem" }}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
