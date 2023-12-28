import { React, useEffect } from "react";
import { loginUser } from "../../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      dispatch(loginUser(values));
      console.log("login")
    } catch (error) {
      console.log("yahahahahahhahahah");
    }
  };
  useEffect(() => {
    if (user?.token) {
      navigate("/books");
    }
  }, [user]);
  return (
    <div className="container-fluid">
      <form action="post" className="container" onSubmit={handleSubmit}>
        <div className="row g-3 text-center py-5">
          <h1>Welcome Back</h1>
        </div>
        <div className="row text-center py-1">
          <p>Enter your crediential to login to your account</p>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12  justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      aria-label="Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary px-4">
                      Login
                    </button>
                  </div>
                  <div className="col-12 text-end">
                    <a href="/create">Create an account</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
