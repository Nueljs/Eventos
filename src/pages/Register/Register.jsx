import React from 'react'
import fotoRegister from '../../assets/img/Foto_Register.png'
import './Register.css'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

const login = useNavigate()

  return (
    <main className="d-flex align-items-center justify-content-center font-family_register mt-5 mb-5 min-vh-100">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row g-0 m-0 p-0 align-items-stretch rounded-3 shadow w-100 h-100 border-custom_register">

          <div className="col-md-6 d-flex p-5">
            <div className="w-100 d-flex flex-column justify-content-center">
              <h1 className="text-center mb-3">CREATE AN ACCOUNT</h1>
              <form className="font-size_register">
                
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fa-solid fa-user-pen"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                      placeholder="Create a password"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm_password"
                      name="confirm_password"
                      required
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                <button type="submit" className="button_register btn w-100 mt-3">Create an account</button>
              </form>

              {/* Enlace al login */}
              <div className="text-center mt-3">
                <p className="font-size_register">
                  Have an account? <span className='login-link' onClick={()=>{login("/")}}>Sign in</span>
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src={fotoRegister}
              alt="Imagen Register"
              className="img-fluid w-100 h-100 rounded-end img_register"
            />
          </div>

        </div>
      </div>
    </main>
  )
}
