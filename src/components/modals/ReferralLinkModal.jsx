import React from 'react';

const ReferralLinkModal = ({ setModal, user }) => {
  return (
    <div id="referral_link" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" style={{ width: "100%", height: "100vh", margin: "0 auto", position: "absolute", top: "12%", zIndex: "100", overflowY: "scroll" }}>
        <div className="overlay"></div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0  d-flex justify-content-center" style={{ border: "none" }}>
                    <button onClick={() => setModal(false)} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <img src="img/cancel.png" alt="" width="30" />
                        </span>
                    </button>
                </div>
                <div class="modal-body d-flex justify-content-center mb-5">
                    <div>
                        <h3 class="modal-title text-center" id="deleteLabel">Earn more money by referring <br />more
                            people
                        </h3>
                        <div class="text-center mt-4 mb-2">
                            <img src="img/group.png" alt="" />
                        </div>
                        <a href={`${process.env.REACT_APP_URL}/?ref=${user.reference}`} target="_
                        " class="text-center d-inline-block">{`${process.env.REACT_APP_URL}/?ref=${user.reference}`}</a>
                    </div>
                </div>
                <div class="modal-footer justify-content-center mt-5" style={{ border: "none", gap: "1rem" }}>
                    <a href="#!" class="btn border"><img src="img/Instagram.png" alt="" width="40" /></a>
                    <a href="#!" class="btn border"><img src="img/Facebook.png" alt="" width="40" /></a>
                    <a href="#!" class="btn border"><img src="img/whatsapp.png" alt="" width="40" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReferralLinkModal;