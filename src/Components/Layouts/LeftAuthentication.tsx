import React from 'react'
import logo from '../../assets/Group.svg'

interface LeftAuthenticationProps {
  authImage: string;
}

const LeftAuthentication: React.FC<LeftAuthenticationProps> = ({ authImage }) => {
  return (
    <div>
        <div className="lendsqrLogo" style={{paddingBottom: '70px'}}>
          <img src={logo} alt="" />
        </div>

        <div className="authImage">
          <img src={authImage} alt="login" style={{width: '100%'}} />
        </div>
    </div>
  )
}

export default LeftAuthentication