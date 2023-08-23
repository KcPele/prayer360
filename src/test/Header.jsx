import React from 'react';

const Header = () => {
    const role = "USER";
    const isUser = () => {
        if(role === "USER") {
            return true;
        } else {
            return false
        }
    }
  return (
    <header>
        <nav className="header">
            <button className="btn btn_mobile_nav open_btn">
                <img src="img/previous.png" alt="" className="icon_mobile_nav open_icon" />
                <img src="img/close.png" alt="" className="icon_mobile_nav close_icon" />
            </button>

            <h5 className="heading_mobile">GURUJIS</h5>
            <a href="#" className="pl-5 display_none">
                <img src="img/Prayer.png" alt="" />
            </a>

            <div className="d-flex align-items-center pr-4 hide">
                {
                    !isUser() && <div className="earning display_none">
                    <h6>Total Earning <b>$34,500</b></h6>
                </div>
                }
                <div className="d-flex align-items-center hide">
                    <p className="pl-3 pr-2">Hello <b>Admin</b></p>
                    <p className="user"><b>A</b></p>
                    <div className="dropdown">
                        <a className="" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            <button style={{ border: "none", background: "none" }}>
                                <i className="ri-arrow-down-s-line down_arrow"></i>
                            </button>
                        </a>

                        <div className="dropdown-menu" style={{ marginRight: "2rem", marginTop: "1.5rem" }}>
                            <a className="dropdown-item" href="setting.html">
                                <span><img src="img/setting.png" className="mr-3" width="18" alt="" /></span>
                                Account Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <button className="btn menu_btn">
                <img src="img/menu.png" alt="" className="icon_mobile_nav" />
            </button>
        </nav>
    </header>
  );
}

export default Header;