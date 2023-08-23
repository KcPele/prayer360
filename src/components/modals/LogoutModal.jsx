import React from 'react';

const LogoutModal = () => {
  return (
    <div id="logout" data-backdrop="static" data-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header pb-0  d-flex justify-content-center" style={{ border: "none" }}>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <img src="img/cancel.png" alt="" width="30" />
              </span>
            </button>
          </div>
          <h5 class="modal-title text-center" id="deleteLabel">Are you sure you want to logout</h5>
          <div class="modal-body d-flex justify-content-center mb-5">
            <div>
              <img src="img/sad-face.png" alt="" />
            </div>
          </div>
          <div class="modal-footer justify-content-center" style={{ border: "none" }}>
            <button type="button" class="btn text-white"
              style={{ background: "linear-gradient(to right,#6561ba,#16168e)", border: "none", padding: ".8rem 3rem" }}>LOGOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal;