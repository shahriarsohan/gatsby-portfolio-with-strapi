import React from "react"

import Title from "./Title"

import "./Testimonial.css"

export const Testimonial = () => {
  return (
    <>
      <Title title="Testimonials" />
      <section className="pt-5 pb-5 mb-5">
        <div className="container">
          <div className="card col-md-12 mt-2">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
              data-interval={100000}
            >
              <div className="w-100 carousel-inner mb-5" role="listbox">
                <div className="carousel-item active">
                  <div className="bg" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-sm-3 col-4 align-items-start">
                            <img
                              src="https://s17.postimg.org/mqjuw14bz/profile1.png"
                              alt=""
                              className="rounded-circle img-fluid"
                            />
                          </div>
                          <div className="col-sm-9 col-8">
                            <h2>
                              Micheal Smith - <span>Web Developer</span>
                            </h2>
                            <small>
                              Well incremented. Comes with recommended workout.
                              I'm using it to help with bladder leakage issues
                              that I've been experiencing since a recent
                              vasectomy.
                            </small>
                            <small className="smallest mute">- willi</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-sm-3 col-4 align-items-start">
                            <img
                              src="https://s17.postimg.org/5q0yndefz/profile2.png"
                              alt=""
                              className="rounded-circle img-fluid"
                            />
                          </div>
                          <div className="col-sm-9 col-8">
                            <h2>
                              Helena Doe - <span>Architect</span>
                            </h2>
                            <small>
                              Well incremented. Comes with recommended workout.
                              I'm using it to help with bladder leakage issues
                              that I've been experiencing since a recent
                              vasectomy.
                            </small>
                            <small className="smallest mute">- willi</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="bg" />
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-sm-3 col-4 align-items-start">
                            <img
                              src="https://s17.postimg.org/7ulbog0n3/profile3.png"
                              alt=""
                              className="rounded-circle img-fluid"
                            />
                          </div>
                          <div className="col-sm-9 col-8">
                            <h2>
                              John Doe - <span>Ceo Mobile company</span>
                            </h2>
                            <small>
                              Well incremented. Comes with recommended workout.
                              I'm using it to help with bladder leakage issues
                              that I've been experiencing since a recent
                              vasectomy.
                            </small>
                            <small className="smallest mute">- willi</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-sm-3 col-4 align-items-start"></div>
                          <div className="col-sm-9 col-8">
                            <h2>
                              Helena Doe - <span>Architect</span>
                            </h2>
                            <small>
                              Well incremented. Comes with recommended workout.
                              I'm using it to help with bladder leakage issues
                              that I've been experiencing since a recent
                              vasectomy.
                            </small>
                            <small className="smallest mute">- willi</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true">
                  <i className="fas fa-chevron-left" />
                </span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true">
                  <i className="fas fa-chevron-right" />
                </span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
