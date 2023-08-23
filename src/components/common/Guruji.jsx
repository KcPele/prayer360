import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Guruji = (props) => {
    const { currentGuruji } = props;
    const {name, created_at, specialization, address, reference} = currentGuruji;

    return (
        <div className="col-md-12 col-lg-4 pb-4">
            <div className="card">
                <div className="card-body">
                    <div className="row align-items-center justify-content-center center">
                        <div className="col-md-4">
                            <img src="img/image 1.png" alt="" style={{ borderRadius: "50rem" }} className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-9 pl">
                                    <h5 className="card-title">{name}</h5>
                                    <p>Location: <span style={{ fontWeight: "500" }}>{address}</span></p>
                                    <p>Joined: <span style={{ fontWeight: "500" }}>{moment(created_at).format('MMMM-YYYY')}</span></p>
                                    <p>Specialization: 
                                        <span style={{ fontWeight: "500" }}>
                                            {specialization !== null &&
                                                specialization.length > 0 && specialization.map((spec) => (
                                                    {spec}
                                                ))
                                            }
                                        </span>
                                    </p>
                                </div>
                                <div className="col-3">
                                    <div className="dropdown">
                                        <a className="" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            <img src="img/option.png" alt="" width="20" />
                                        </a>

                                        <div className="dropdown-menu"
                                            style={{ marginRight: "2rem", marginTop: "1rem" }}>
                                            <Link className="dropdown-item" to={`/guruji/${reference}`}><span><img src="img/view.png" className="mr-3" width="15" alt="" /></span>
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guruji;