import { useEffect, useState } from "react";
import axios from "axios";
import Layout from '../../Components/Layouts/Layout'
import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "../../types/User";
import icon from '../../assets/icons/icon.png'
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import moment from "moment";
import filter from '../../assets/icons/filter.png'
import type { ColumnFiltersState } from "@tanstack/react-table";

import "./User.scss";
import DataTable from "../../Components/Table/Table";
import UserActions from "../../Components/UserAction/UserAction";
import UsersFilterPanel from "../../Components/Filters/UsersFilterPanel";

const API_URL =
  "https://temitope-500-users.free.beeceptor.com/api/user_data";


const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phone: "",
    status: "",
    dateJoined: "",
  });
const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

 const applyFilters = () => {
    setColumnFilters(
      [
        { id: "organization", value: filters.organization },
        { id: "username", value: filters.username },
        { id: "email", value: filters.email },
        { id: "phone", value: filters.phone },
        { id: "status", value: filters.status },
        { id: "dateJoined", value: filters.dateJoined },
      ].filter(f => f.value)
    );
  };
 

  const resetFilters = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      phone: "",
      status: "",
      dateJoined: "",
    });

    setColumnFilters([]);
    setShowFilter(false);
  };
  const columns: ColumnDef<User>[] = [
  {
    accessorKey: "organization",
    header: () => (
      <div
        className="table-header"
        // onClick={() => column.toggleSorting()}
      >
        <span>Organization</span>
        {/* <span className="sort-indicator"></span> */}
        <button
          className="filter-toggle"
          onClick={() => setShowFilter(prev => !prev)}
        >
          <img src={filter} alt="filter" />
        </button>
        {showFilter && (
          <UsersFilterPanel
            filters={filters}
            onChange={(key, value) =>
              setFilters(prev => ({ ...prev, [key]: value }))
            }
            onApply={() => applyFilters()}
            onReset={() => resetFilters()}
          />
        )}
      </div>
  ),
    size: 150,
  },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <div
        className="table-header"
        onClick={() => column.toggleSorting()}
      >
        <span>Username</span>
        <span className="sort-indicator"><img src={filter} alt="filter" /></span>
      </div>
  ),
    size: 150,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <div
        className="table-header"
        onClick={() => column.toggleSorting()}
      >
        <span>Email</span>
        <span className="sort-indicator"><img src={filter} alt="filter" /></span>
      </div>
  ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <div
        className="table-header"
        onClick={() => column.toggleSorting()}
      >
        <span>Phone Number</span>
        <span className="sort-indicator"><img src={filter} alt="filter" /></span>
      </div>
  ),
    size: 150,
  },
  {
    accessorKey: "dateJoined",
    header: ({ column }) => (
      <div
        className="table-header"
        onClick={() => column.toggleSorting()}
      >
        <span>Date Joined</span>
        <span className="sort-indicator"><img src={filter} alt="filter" /></span>
      </div>
  ),
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return moment(value).format('MMM DD, YYYY mm:ss A');
    },
    size: 200,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <div
        className="table-header"
        onClick={() => column.toggleSorting()}
      >
        <span>Status</span>
        <span className="sort-indicator"><img src={filter} alt="filter" /></span>
      </div>
  ),
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return (
        <span className={`status status--${status.toLowerCase()}`}>
          {status}
        </span>
      );
    },
    size: 140,
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      const user = row.original;
      return <UserActions user={user} />;
    },
    size: 20,
  },
  
];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(API_URL);
        setUsers(res.data);
      } catch (err) {
        setError("Failed to fetch users");
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // if (loading) {
  //   return <div className="users-page">Loading users...</div>;
  // }

  if (error) {
    return <div className="users-page error">{error}</div>;
  }

  return (
    <Layout>
      {loading ? <div className="users-pageLoading">
        <div className="spinner-grow text-primary " role="status" style={{width: "2rem", height: "2rem"}}>
          
        </div>
        <div className="spinner-grow text-secondary" role="status">
          
        </div>
        <div className="spinner-grow text-success" role="status">
          
        </div>
      </div> : (
        <>
          {users.length > 0 ? (
            <>
              <section className="">
                <div className="pageTitle">Users</div>
                
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
              <DataTable<User>
                data={users}
                columns={columns}
                columnFilters={columnFilters}
                onColumnFiltersChange={setColumnFilters}
              />
            </>
          ) 
          : 
          <div className="pageError">No users found.  </div>
          }
        </>
      ) }
      
    </Layout>
  );
};

export default Users;
