import React, { useContext } from 'react';
import Header from '../layout/Header';
import SideNav from '../layout/SideNav';
import AuthContext from '../../context/auth/authContext';
import moment from 'moment';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Subscription = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  if(user !== null) {
    return (
      <>
        <Header />
        <main>
            <div className="row align-items-center justify-content-center">
                <SideNav />
                <div className="col-9">
                    <div className="subscribers pr-4">
                      <div className="earning none">
                        <h6>Total Earning <b>$34,500</b></h6>
                      </div>
  
                      <h3 className="pb-2 pl-4 display_none">{user.name}</h3>
                      <div className="row pl-4 center display_none">
                        <div className="col-md-3">
                          <h6 className="pb-2">{user.email}</h6>
                          <h6 className="pb-2">Registered: 
                            <b className="pl-2">{moment(user.created_at).format('MMMM DD, YYYY')}</b>
                          </h6>
                        </div>
                        <div className="col-md-3">
                          <h5 className="pb-2 d-flex align-items-center"><b>{user.plan.charAt(0).toUpperCase() + user.plan.slice(1)} Plan</b> <span><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="pb-1 ml-1">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"
                                  fill="rgba(33,21,82,1)" />
                              </svg></span>
                          </h5>
                          <h6 className="pb-2">Next Payment: 
                            <b className="pl-2">{moment(user.created_at).add(3, 'M').format('MMMM DD, YYYY')}</b>
                          </h6>
                        </div>
                        <div className="col-md-3">
                          <h6 className="pb-2">Guruji: {user.guruji !== null ? <Link to={`/guruji/${user.guruji.reference}`}>{user.guruji.name}</Link> : <b className="pl-2">Unassigned</b>}</h6>
                          {user.role === 'ADMIN' &&
                            <button type="button" className="btn text-white" style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: ".6rem 3rem" }}>
                              <b>REALLOCATE</b>
                            </button>
                          }
                        </div>

                        <div className="col-md-3">
                        {user.role === 'USER' && user.guruji_subscribed_to !== null &&
                          <a href="#!" data-target="#cancel_subscription" data-toggle="modal" className="btn btn-secondary px-3 py-2" style={{ marginTop: "2.2rem" }}><b>CANCEL SUBSCRIPTION</b></a>
                        }
                        </div>
                      </div>
  
                      <div className="row pl-4 none">
                        <div className="col-6 pb-3">
                          <h6><b>{user.name}</b></h6>
                          <p className="pb-2 overflow">{user.name}</p>
                        </div>
                        <div className="col-6 pb-3">
                          <h6 className="pb-2 d-flex align-items-center">{user.plan.charAt(0).toUpperCase() + user.plan.slice(1)} Plan <span><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" width="23" height="23" className="ml-1">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"
                                  fill="rgba(33,21,82,1)" />
                              </svg></span>
                          </h6>
                        </div>
                        <div className="col-12 pb-3">
                          <p className="pb-2">Registered: 
                            <b className="pl-2">{moment(user.created_at).format('MMMM DD, YYYY')}</b>
                          </p>
                          <p className="pb-2">Next Payment: 
                            <b className="pl-2">{moment(user.created_at).add(3, 'M').format('MMMM DD, YYYY')}</b>
                          </p>
                          <p className="pb-2">Guruji: {user.guruji !== null ? user.guruji.name : <b className="pl-2">Unassigned</b>}</p>
                        </div>
                        <div className="col-md-12 text-center d-flex align-items-center" style={{ flexDirection: "column" }}>
                          {user.role === 'ADMIN' &&
                            <button type="button" className="btn text-white mb-2 py-2 px-5" style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none" }}>
                              <b>REALLOCATE</b>
                            </button>
                          }

                          {user.role === 'USER' &&
                            <button data-target="#cancel_subscription" data-toggle="modal" className="btn btn-secondary" style={{ padding: "0.5rem .9rem" }}>
                              <b>CANCEL SUBSCRIPTION</b>
                            </button>
                          }
                        </div>
                      </div>
  
                      <div className="form-group mt-3 none sort_width">
                        <select className="form-control">
                          <option>Amount Made</option>
                          <option>Guruji</option>
                        </select>
                      </div>

                      <div className="pt-3 px-4 p" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h5 className="text-secondary" style={{ flex: "1" }}>Date</h5>
                        <h5 className="text-secondary overflow" style={{ flex: "1" }}>Subscription Plan</h5>
                        <h5 className="text-secondary display_none" style={{ flex: "1" }}>Amount</h5>
                        <h5 className="text-secondary display_none" style={{ flex: "1" }}>Remark</h5>
                      </div>

                      <div className="py-3 px-4 p rounded" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <div className="pr-3" style={{ flex: "1" }}>
                          <h6 className="text-secondary">{moment(user.created_at).format('MMMM DD, YYYY')}</h6>
                        </div>
                        <div style={{ flex: "1" }}>
                          <h6 className="pb-2 d-flex align-items-center text-secondary">{user.plan.charAt(0).toUpperCase() + user.plan.slice(1)} Plan <span><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="23" className="ml-1">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"
                                  fill="rgba(33,21,82,1)" />
                              </svg></span>
                          </h6>
                        </div>
                        <h6 className="display_none text-secondary" style={{ flex: "1" }}>INR {user.subscription_amount}</h6>
                        <h6 className="display_none text-secondary" style={{ flex: "1" }}>Subscription Renewal</h6>
                      </div>

                      <div className="px-4">
                        {user.role === "ADMIN" && 
                          <button type="submit" data-target="#delete_guruji" data-toggle="modal"
                          className="btn mt-5 mb-3 btn-danger center">
                            <b>Delete User</b>
                          </button>
                        }
                      </div>
                    </div>
                </div>
            </div>
        </main>
      </>
    )
  }
}

export default Subscription;