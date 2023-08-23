import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layout/Header';
import SideNav from '../layout/SideNav';
import AuthContext from '../../context/auth/authContext';
import SharedContext from '../../context/shared/sharedContext';
import UserContext from '../../context/user/userContext';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Content from '../common/Content';

const GurujiDetails = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const params = useParams();
  const { reference } = params;

  const sharedContext = useContext(SharedContext);
  const { guruji, getGurujiDetails } = sharedContext;

  const userContext = useContext(UserContext);
  const { subscribeToGuruji, clearResponsState, requestResponse, userError } = userContext;

  const notify = (msg) => toast(msg);

  useEffect(() => {
    getGurujiDetails(reference);
    
    if(requestResponse !== null){
      notify(`${requestResponse.message}`);
      clearResponsState();
    } else if(userError !== null){
      notify(`${userError}`);
      clearResponsState();
    }
    // eslint-disable-next-line
  }, [requestResponse, userError, clearResponsState]);

  const subscribeClickHandler = (e) => {
    e.preventDefault();

    subscribeToGuruji(reference);

    getGurujiDetails(reference);
  }

  if(user !== null && guruji !== null) {
    let activateButton = false;

    if(user.role === 'USER' && user.guruji_subscribed_to !== guruji.id) {
      activateButton = true;
    } else {
      activateButton = false;
    }

    return (
      <>
        <Header />
        <main>
            <div className="row align-items-center justify-content-center">
                <SideNav />
                <ToastContainer />
                <div className="col-md-9">
                    <div className="contents">
                      <div style={{ marginTop: "10rem", marginBottom: "4rem" }} className="mt">
                        <div className="earning none mb-5">
                          <h6>Total Earning <b>${guruji.earning}</b></h6>
                        </div>
                        <h3 className="pb-2 pl-4 display_none">{guruji.name}</h3>

                        <div className="row pl-4 center display_none">
                          <div className="col-md-3">
                            <h6 className="pb-2">Specialization: 
                              <b className="pl-2">
                                {guruji.specialization !== null &&
                                  guruji.specialization.length > 0 && guruji.specialization.map((spec) => (
                                    {spec}
                                  ))
                                }
                              </b>
                            </h6>
                            <h6 className="pb-2">Location: <b className="pl-2">{guruji.address}</b></h6>
                            <h6 className="pb-2">Registered: <b className="pl-2">{moment(guruji.created_at).format('MMMM DD, YYYY')}</b></h6>
                            {user.role === 'USER' && user.guruji_subscribed_to === guruji.id &&
                              <h6 className="pb-2">Calendly: <b className="pl-2"><a href={`${guruji.calendly_link}`} target='_blank' rel="noreferrer">{guruji.calendly_link}</a></b></h6>
                            }

                            {user.role === 'ADMIN' &&
                              <h6 className="pb-2">Calendly: <b className="pl-2"><a href={`${guruji.calendly_link}`} target='_blank' rel="noreferrer">{guruji.calendly_link}</a></b></h6> 
                            }
                          </div>

                          <div className="col-md-3">
                            {user.role === 'ADMIN' && <h6 className="pb-2">Earning: <b className="pl-2">${guruji.earning}</b></h6>}
                          </div>

                          <div className="col-md-3">
                            <h6 className="pb-2">Subscribers: <b className="pl-2">{guruji.subscribers.length}</b></h6>
                            {user.role === 'ADMIN' && <a href="#!">View Subscribers</a>}

                            {user.role === 'USER' && user.guruji_subscribed_to !== null &&
                              <a href={guruji.personal_store !== null ? `${guruji.personal_store}` : '#!'} className="btn mt-3 center" style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: "1.1rem 4rem", color: "#fff" }}>
                                {guruji.personal_store !== null ? <b>Goto Store</b> : <b>Store Not Created</b>}
                              </a>
                            }

                            {user.role === 'ADMIN' &&
                              <a href={guruji.personal_store !== null ? `${guruji.personal_store}` : '#!'} className="btn mt-3 center" style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: "1.1rem 4rem", color: "#fff" }}>
                                {guruji.personal_store !== null ? <b>Goto Store</b> : <b>Store Not Created</b>}
                              </a>
                            }

                          </div>
                          
                          <div className="col-md-3">
                            {user.role === 'ADMIN' && <a href="#!" className="btn btn-secondary px-3 py-2"><b>BLACKLIST GURUJI</b></a>}
                          </div>
                        </div>

                        <div className="row pl-4 none">
                          <div className="col-6 pb-3">
                            <h4>{guruji.name}</h4>
                            <p className="pb-2">Subscribers: <b className="pl-2">23</b></p>
                          </div>
                          <div className="col-6 pb-3">
                            {user.role === 'ADMIN' && <p>Earning: <b className="pl-2">${guruji.earning}</b></p>}
                            {user.role === 'ADMIN' && <a href="#!">View Subscribers</a>}
                          </div>
                          <div className="col-12 pb-3">
                            <p className="pb-2">Specialization: 
                              <b className="pl-2">
                                {guruji.specialization !== null &&
                                  guruji.specialization.length > 0 && guruji.specialization.map((spec) => (
                                    {spec}
                                  ))
                                }
                              </b>
                            </p>
                            <p className="pb-2">Location: <b className="pl-2">{guruji.address}</b></p>
                            <p className="pb-2">Registered: 
                              <b className="pl-2">
                                {moment(guruji.created_at).format('MMMM DD, YYYY')}
                              </b>
                            </p>
                            {user.role === 'USER' && user.guruji_subscribed_to === guruji.id &&
                              <p className="pb-2">Calendly: <b className="pl-2"><a href={`${guruji.calendly_link}`}>{guruji.calendly_link}</a></b></p>
                            }
                            {user.role === 'ADMIN' &&
                              <p className="pb-2">Calendly: <b className="pl-2"><a href={`${guruji.calendly_link}`}>{guruji.calendly_link}</a></b></p>
                            }
                          </div>
                          <div className="col-md-12 text-center">
                            {user.role === 'ADMIN' && <a href="#!" className="btn btn-secondary px-5 py-2"><b>BLACKLIST GURUJI</b></a>}
                          </div>
                        </div>

                        {/* <div className="form-group mt-3 mb-4 mx-4 none sort_width">
                          <select className="form-control">
                            <option>All Content</option>
                          </select>
                        </div> */}

                        <h3 className="pl-4 none pb-3" style={{ color: "#211552" }}><b>Contents</b></h3>

                        <div className=" row mr-5 display_none align-items-center">
                          <div className="col-md-8 mt-2">
                            <h3 className="pl-4" style={{ color: "#211552" }}><b>Contents</b></h3>
                          </div>

                          {/* <div className="col-md-4">
                            <div className="form-group w-10 mt-3" style={{ flex: "0.3" }}>
                              <select className="form-control">
                                <option>All Content</option>
                              </select>
                            </div>
                          </div> */}
                        </div>

                        <div className="row mr-3 pl-4 mb-5 mt-3">
                          {guruji.contents.length > 0 && guruji.contents.map((content) => (
                            <Content key={content.id} currentContent={content} user={user} />
                          ))}
                        </div>
                        <div className="px-4">
                          {user.role === 'ADMIN' && 
                            <button type="submit" data-target="#delete_guruji" data-toggle="modal" className="btn mt-5 mb-3 btn-danger center">
                              <b>Delete Guruji</b>
                            </button>
                          }

                          {activateButton === true &&
                            <button type="button" onClick={subscribeClickHandler} data-target="#delete_guruji" data-toggle="modal" className="btn mt-3 center" style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: "1.3rem 6rem", color: "#fff" }}>
                              <b>Subscribe to Guruji</b>
                            </button>
                          }
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </main>
      </>
    );
  }
}

export default GurujiDetails;