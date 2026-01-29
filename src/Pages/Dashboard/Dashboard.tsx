import Layout from "../../Components/Layouts/Layout";
import "./Dashboard.scss";
import icon from '../../assets/icons/icon.png'
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'

const Dashboard = () => {
  return (
    <Layout>
      <section className="">
                <div className="pageTitle">Dashboard</div>
                <div className="pageTitle">Kindly navigate to the users page</div>
                
                <div className="pageCards">
                  <div className="card">
                    <img src={icon} alt="icon" />
                    <div className="cardTitle">USERS</div>
                    <div className='number'>500</div>
                  </div>
                  <div className="card">
                    <img src={icon1} alt="icon" />
                    <div className="cardTitle">ACTIVE USERS</div>
                    <div className='number'>450</div>
                  </div>
                  <div className="card">
                    <img src={icon2} alt="icon" />
                    <div className="cardTitle">USERS WITH LOANS</div>
                    <div className='number'>250</div>
                  </div>
                  <div className="card">
                    <img src={icon3} alt="icon" />
                    <div className="cardTitle">USERS WITH SAVINGS</div>
                    <div className='number'>200</div>
                  </div>
                </div>
              </section>
    </Layout>
  );
};


export default Dashboard;