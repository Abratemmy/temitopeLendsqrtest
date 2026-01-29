import React, { useState} from 'react'
import Layout from '../../Components/Layouts/Layout'
import arrowback from '../../assets/icons/arrowback.png'
import "./UserDetail.scss";
import { NavLink, useNavigate } from 'react-router-dom';
import type { User } from '../../types/User';
import person from '../../assets/icons/person.png'
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import type { TabItem } from '../../Components/Tabs/Tabs';
import Tabs from '../../Components/Tabs/Tabs';
import GeneralDetails from './GeneralDetails';


function UserDetail() {
  const navigate = useNavigate();
  const [user] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("selectedUser");
    if (!storedUser) {
      navigate("/users");
      return null;
    }
    return(JSON.parse(storedUser));
  });


  const tabs: TabItem[] = [
    { label: "General Details", value: "general" },
    { label: "Documents", value: "documents" },
    { label: "Bank Details", value: "bank" },
    { label: "Loans", value: "loans" },
    { label: "Savings", value: "savings" },
    { label: "App and System", value: "app" },
  ];

  const [activeTab, setActiveTab] = useState("general");
  return (
    <div className='userDetailsPage'>
      <Layout>
      <section className="">
        <div><NavLink to="/users"  className="back-button"><img src={arrowback} alt="back" /> Back to Users </NavLink></div>
        <div className="pageTitle">
          User Details

          <div className='user-detail-actions'>
            <button className='user-detail-actions_blacklist'>Blacklist User</button>
            <button className='user-detail-actions_activate'>Activate User</button>
          </div>

        </div>

        {user && (
          <div className="user-infoContainer">
            <div className="pageCards">
                <div className="card firstcard">
                  <div className="user-info-top">
                    <div className="user-info-avatar">
                      {user.profile.avatar !== "" ? 
                        <img src={user.profile.avatar} alt={user.username} />  
                        :
                        <div className='imageAvatar'>
                          <img src={person} alt="avatar" />
                        </div>
                      }

                      <div className="user-info-name">
                        <h3>{user?.profile?.fullName} {user?.personalInfo?.fullName}</h3>
                        <div className='bvn'>{user?.personalInfo?.bvn}</div>
                      </div>
                      
                    </div>

                    <div className="divider"></div>

                    {/* tier session */}
                    <div className="user-info-tier">
                      <div className='user-info-tier-label'>User's Tier</div>
                      <div className="tier-stars">
                        {Array.from({ length: 5 }).map((_, index) => {
                          const isFilled = index < user.profile.tier;
                          return (
                            <span
                              key={index}
                              className={'star '}
                            >
                              {isFilled ? (
                                <MdOutlineStarPurple500  className='star-filled'/>
                              ) : (
                              <IoMdStarOutline className='not-filled'/>)}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="divider"></div>

                    {/* account balance */}
                    <div className="accountBalanceSession">
                      <div className='accountBalance'>
                        ₦{user.profile.balance.toLocaleString()}
                      </div>
                      <div className='accountNumber'>
                        {user.profile.accountNumber}/{user.profile.bank}
                      </div>
                    </div>
                  
                  </div>
                      
                    <div className='tabs-wrapper'>
                    <Tabs
                      tabs={tabs}
                      activeTab={activeTab}
                      onChange={setActiveTab}
                    />
                  </div>
                </div>
            
            </div>

            <div className="user-detail-content" style={{marginTop: "20px"}}>
              <div className="pageCards">
                <div className='card'>
                  
                  {activeTab === "general" && (
                    <div><GeneralDetails user={user} /></div>
                  )}

                  {activeTab === "documents" && (
                    <div>Documents Content</div>
                  )}

                  {activeTab === "bank" && (
                    <div>Bank Details Content</div>
                  )}

                  {activeTab === "loans" && (
                    <div>Loans Content</div>
                  )}

                  {activeTab === "savings" && (
                    <div>Savings Content</div>
                  )}
                  {activeTab === "app" && (
                    <div>App and System Content</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      </Layout>
    </div>
  )
}

export default UserDetail