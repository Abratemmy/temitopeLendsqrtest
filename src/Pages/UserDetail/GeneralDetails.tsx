import React from 'react'
import type { User } from '../../types/User';

function GeneralDetails({user}: {user: User}) {
  return (
    <>
        <div className='info-section'>
            <div className="details-title">Personal Information</div>
            <div className="personal-info-section" style={{width: '100%'}}>
                <div className='detail-grid'>
                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Full Name</div>
                        <div className="detail-grid_item_value">{user?.profile?.fullName} {user?.personalInfo?.fullName}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Phone Number</div>
                        <div className="detail-grid_item_value">{user?.personalInfo?.phone}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Email Address</div>
                        <div className="detail-grid_item_value">{user?.personalInfo?.email}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">BVN</div>
                        <div className="detail-grid_item_value">{user?.personalInfo?.bvn}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Gender</div>
                        <div className="detail-grid_item_value">{user?.personalInfo?.gender}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Marital Status</div>
                        <div className="detail-grid_item_value">{user?.personalInfo?.maritalStatus}</div>
                    </div>

                

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Children</div>
                        <div className="detail-grid_item_value">{user?.personalInfo?.children === 0 ? "None" : user?.personalInfo?.children}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Type of residence</div>
                        <div className="detail-grid_item_value">{user?.personalInfo?.residence}</div>
                    </div>
                </div>
                
            </div>
           
        </div>

        <div className="info-divider"></div>

        {/* another session here */}
        <div className='info-section '>
            <div className="details-title">Education and Employment</div>
            <div className="personal-info-section" style={{width: '100%'}}>
                <div className='detail-grid education-employment'>
                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Level of Education</div>
                        <div className="detail-grid_item_value">{user?.educationEmployment?.level}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Employment status</div>
                        <div className="detail-grid_item_value">{user?.educationEmployment?.employmentStatus}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Sector of employment</div>
                        <div className="detail-grid_item_value">{user?.educationEmployment?.sector}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Duration of employment</div>
                        <div className="detail-grid_item_value">{user?.educationEmployment?.duration}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Office email</div>
                        <div className="detail-grid_item_value">{user?.educationEmployment?.officeEmail}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Monthly income</div>
                        <div className="detail-grid_item_value">{user?.educationEmployment?.monthlyIncome}</div>
                    </div>
                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Loan Repayment</div>
                        <div className="detail-grid_item_value">{user?.educationEmployment?.loanRepayment}</div>
                    </div>
                </div>

            

            

                
            </div>
           
        </div>


        <div className="info-divider"></div>

        {/* another session here */}
        <div className='info-section '>
            <div className="details-title">Socials</div>
            <div className="personal-info-section" style={{width: '100%'}}>
                <div className='detail-grid '>
                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Twitter</div>
                        <div className="detail-grid_item_value">@{user?.profile?.fullName} {user?.personalInfo?.fullName}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Facebook</div>
                        <div className="detail-grid_item_value">{user?.profile?.fullName} {user?.personalInfo?.fullName}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Instagram</div>
                        <div className="detail-grid_item_value">@{user?.profile?.fullName} {user?.personalInfo?.fullName}</div>
                    </div>
                </div>
                
            </div>
           
        </div>

        <div className="info-divider"></div>

        {/* another session here */}
        <div className='info-section '>
            <div className="details-title">Guarantor</div>
            <div className="personal-info-section" style={{width: '100%'}}>
                <div className='detail-grid '>
                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">FullName</div>
                        <div className="detail-grid_item_value">{user?.guarantor?.fullName} {user?.personalInfo?.fullName}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Phone number</div>
                        <div className="detail-grid_item_value">{user?.guarantor?.phone}</div>
                    </div>

                    <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Email Address</div>
                        <div className="detail-grid_item_value">@{user?.guarantor?.email}</div>
                    </div>

                     <div className='detail-grid_item'>
                        <div className="detail-grid_item_label">Relationship</div>
                        <div className="detail-grid_item_value">@{user?.guarantor?.relationship}</div>
                    </div>
                </div>
                
            </div>
           
        </div>
    </>
  )
}

export default GeneralDetails