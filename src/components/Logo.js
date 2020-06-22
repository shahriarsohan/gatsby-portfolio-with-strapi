import React from "react"

import "./logo.css"
import "./responsive.css"

export const Logo = ({ images }) => {
  return (
    <section className="brand-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="first-row row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                <div className="single-brand">
                  <img
                    src={require("../assets/icons8-python-512.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-brand">
                  <img
                    src={require("../assets/icons8-django-480.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-brand">
                  <img src={require("../assets/api.png")} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-brand">
                  <img
                    src={require("../assets/icons8-javascript-480.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-brand">
                  <img
                    src={require("../assets/icons8-react-native-512.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-brand">
                  <img src={require("../assets/icons8-redux-240.png")} alt="" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-brand">
                  <img
                    src={require("../assets/icons8-mongodb-480.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-brand">
                  <img
                    src={require("../assets/icons8-postgresql-480.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-brand">
                  <img
                    src={require("../assets/icons8-docker-480.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
