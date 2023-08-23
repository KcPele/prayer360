import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layout/Header';
import SideNav from '../layout/SideNav';
import AuthContext from '../../context/auth/authContext';
import AdminContext from '../../context/admin/adminContext';
import moment from 'moment';
import Referral from '../common/Referral';

const AgentDetails = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const params = useParams();
  const { reference } = params;

  const adminContext = useContext(AdminContext);
  const { agent, getAgentDetails } = adminContext;
  

  useEffect(() => {
    getAgentDetails(reference);
    // eslint-disable-next-line
  }, []);

  if(user !== null  && agent !== null) {
    return (
      <>
        <Header />
        <main>
            <div className="row align-items-center justify-content-center">
                <SideNav />
                <div className="col-9">
                    <div className="subscribers pr-4">
                      <div className="earning none" style={{ marginBottom: "0" }}>
                        <h6>Total Earning <b>$34,500</b></h6>
                      </div>
  
                      <div className="row pl-5 center display_none">
                        <div className="col-md-12">
                          <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5">
                              <h2 className="pb-2">{agent.name}</h2>
                              <h6 className="pb-2">{agent.email}</h6>
                              <h6 className="pb-2">Registered: 
                                <b className="pl-2">{moment(agent.created_at).format('MMMM DD, YYYY')}</b>
                              </h6>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <h6 className="pb-2">Amount Made: <b className="pl-2">${agent.earning}</b></h6>
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="row pl-5 center none">
                        <div className="col-md-12">
                          <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5">
                              <h3 className="pb-2">{agent.name}</h3>
                              <p className="pb-2">{agent.email}</p>
                              <p className="pb-2">Registered: <b className="pl-2">{moment(agent.created_at).format('MMMM DD, YYYY')}</b></p>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <p className="pb-2">Amount Made: <b className="pl-2">${agent.earning}</b></p>
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="form-group none sort_width">
                        <select className="form-control">
                          <option>Amount Made</option>
                          <option>Guruji</option>
                        </select>
                      </div>
  
                      <div className="py-3 pl-5 p"
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <p style={{ flex: "1.7" }}><b>Referrals Name</b></p>
                        <p style={{ flex: "1.5" }}><b>Date</b></p>
                        <p style={{ flex: "1.4" }} className="display_none"><b>Time</b></p>
                        <p style={{ flex: "1.2" }} className="display_none"><b>Subscription</b></p>
                        <p style={{ flex: "1" }} className="display_none"><b>Amount</b></p>
                        <div style={{ flex: "1.1" }} className="form-group w-10 mt-3 display_none">
                          <select className="form-control">
                            <option>Date</option>
                            <option>Guruji</option>
                          </select>
                        </div>
                      </div>
  
                      {agent.referrals.length > 0 &&
                        agent.referrals.map((referral) => (
                          <Referral key={referral.id} currentReferral={referral} />
                        ))
                      }
                    </div>
                </div>
            </div>
        </main>
      </>
    );
  }
}

export default AgentDetails;