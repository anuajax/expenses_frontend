<<<<<<< HEAD
import { makeStyles, Paper, Switch } from "@material-ui/core";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Diaries from "./components/diaries/Diaries";
import FolderIcon from "./components/diaries/FolderIcon";
=======
import { makeStyles } from "@material-ui/core";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Diaries from "./components/diaries/Diaries";
>>>>>>> auth
import SignIn from "./components/loginform/SignIn";
import SignUp from "./components/signupform/SignUp";
import SideDrawer from "./components/NavBars/SideDrawer";
import SheetList from "./components/diaries/SheetsList";
import {
  Routes,
  Route,
<<<<<<< HEAD
  BrowserRouter,
  useNavigate,
  Navigate,
} from "react-router-dom";
import AddItem from "./components/forms/AddItem";
import ItemsTable from "./components/items/ItemsTable";
=======
  Navigate,
} from "react-router-dom";
import AddItem from "./components/forms/AddItem";
>>>>>>> auth
import MonthlyItems from "./components/items/monthlyItems";
import ItemsTablePage from "./components/items/itemsTablePage";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> auth
import ChangePassword from "./components/forms/ChangePassword";
import Forgotpassword from "./components/forms/Forgotpassword";
import UserProfile from "./components/dashboard/UserProfile";
import NewPassword from "./components/forms/NewPassword";
import TaskTable from "./components/automatedTasks/TaskTable";
<<<<<<< HEAD
=======
import Notification from './components/notification/Notification';
>>>>>>> auth

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "black",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(8, 10, 12, 0.8)",
    color: "white",
  },
  scrollbar: {
    overflowY: "auto",
    margin: 0,
    padding: 0,
    listStyle: "none",
    height: "100%",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 1px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "0px solid slategrey",
    },
  },
}));
function App() {
  const styles = useStyles();
  const [user, setUser] = useState(null);
  const [text, setText] = useState("Dashboard");
  const handleToken = (token) => {
    const tokenData = jwt_decode(token);
    if (Date.now() >= tokenData.exp * 1000) {
      localStorage.removeItem("authToken");
      setUser(null);
    }
<<<<<<< HEAD
    console.log(tokenData);
    setUser(tokenData);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    token ? handleToken(token) : setUser(null);
  }, []);
=======
    setUser(tokenData);
  };
  console.log(window.location.pathname);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    token ? handleToken(token) : setUser(null);
  }, []);

    // const getUser = async () => {
  //   try{
  //   const response = await axios.get('http://localhost:5000/user');
  //   if(response) setUser(response.data.user);
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
  //useEffect(() => getUser() , []);
>>>>>>> auth

  return (
    <>
      {!user && (
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<Forgotpassword />} />
          <Route path="/resetpass/:token" element={<NewPassword />} />
        </Routes>
      )}

      {user && (
        <div className={styles.root}>
          <SideDrawer text={text} userId={user.id} />
          <main className={styles.content}>
            <div className={styles.appBarSpacer}>
              <Routes>
                <Route
                  path="/diaries"
                  element={<Diaries userId={user.id} setText={setText} />}
                />
                <Route
                  path="/addnew"
                  element={<AddItem userId={user.id} setText={setText} />}
                />
                <Route
                  path="/"
                  element={
                    <Dashboard
                      name={user.name}
                      userId={user.id}
                      setText={setText}
                    />
                  }
                />
                <Route
                  path="/all/items"
                  element={
                    <ItemsTablePage userId={user.id} setText={setText} />
                  }
                />
                <Route
                  exact
                  path="/:year/in"
                  element={<SheetList userId={user.id} setText={setText} />}
                />
                <Route
                  exact
                  path="/:year/in/:month"
                  element={<MonthlyItems userId={user.id} setText={setText} />}
                />
                <Route
                  path="/changepass"
                  element={<ChangePassword userId={user.id} />}
                />
                <Route
                  path="/recurring-items"
<<<<<<< HEAD
                  element={<TaskTable userId={user.id} />}
                />
=======
                  element={<TaskTable userId={user.id} setText={setText} />}
                />
                <Route  path="/notifications" element={<Notification userId={user.id} setText={setText}/>}/>
>>>>>>> auth
                <Route
                  exact
                  path="/profile"
                  element={<UserProfile user={user} />}
                />
                <Route
                  path="*"
                  element={<Navigate to={user ? "/" : "/login"} />}
                />
              </Routes>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
