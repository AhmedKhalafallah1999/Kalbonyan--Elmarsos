import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { BigSidebar } from "../component/index";
import { SmallSidebar } from "../component/index";
import { Navbar } from "../component/index";
import Wrapper from "../assets/wrappers/Dashboard";
const DashboardContext = createContext();
import { checkDefaultTheme } from "../App";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  // console.log(user)
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // console.log("toggled to Dark Theme");
    document.body.classList.toggle("dark-theme", !isDarkTheme);
    localStorage.setItem("darkTheme", !isDarkTheme);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logOutUser = async () => {
    try {
      navigate("/");
      await customFetch.get("/auth/logout");
      toast.success("Logged out");
    } catch (error) {
      toast.error("Logged failed");
      navigate("/dashboard");
    } 
  };
  return (
    <DashboardContext.Provider
      value={{
        isDarkTheme,
        showSidebar, 
        toggleDarkTheme,
        toggleSidebar,
        logOutUser,
        user,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{user}}/>
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
