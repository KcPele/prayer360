import React, { useContext, useEffect } from "react";
import Header from "../layout/Header";
import SideNav from "../layout/SideNav";
import AuthContext from "../../context/auth/authContext";
import SharedContext from "../../context/shared/sharedContext";
import Notification from "../common/Notification";

const Notifications = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const sharedContext = useContext(SharedContext);
  const { notifications, getNotifications } = sharedContext;

  useEffect(() => {
    getNotifications();
    // eslint-disable-next-line
  }, []);

  if (user !== null) {
    return (
      <>
        <Header />
        <main>
          <div className="flex">
            <SideNav />
            <div className="w-full p-4">
              <div className="subscribers pr-4">
                <div className="earning none">
                  {user.role === "USER" ? (
                    <h6>
                      <b>
                        {user.plan.charAt(0).toUpperCase() + user.plan.slice(1)}{" "}
                        Plan
                      </b>
                    </h6>
                  ) : (
                    <h6>
                      Total Earning <b>${user.earning}</b>
                    </h6>
                  )}
                </div>

                {/* <div className="form-group mt-3 none sort_width">
                                    <select className="form-control">
                                        <option>Amount Made</option>
                                        <option>Guruji</option>
                                    </select>
                                </div> */}

                {/* <div className="py-3 pl-5 display_none" style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <div className="form-group w-10 mt-3" style={{ flex: "0.3" }}>
                                        <select className="form-control">
                                            <option>Date</option>
                                        </select>
                                    </div>
                                </div> */}

                {notifications !== null &&
                  notifications.length > 0 &&
                  notifications.map((notification) => (
                    <Notification
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Notifications;
