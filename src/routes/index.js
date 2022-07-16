import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Custom Route Component
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

// 
import Loader from '../components/Loader/index';

// Lazy Load Visitor Components 
const Home = React.lazy(() => import('../views/Visitor/Home/index'))
const About = React.lazy(() => import('../views/Visitor/About/index'))

// Lazy Load Admin Components 
const Dashboard = React.lazy(() => import('../views/Admin/Dashboard/index'))
const Login = React.lazy(() => import('../views/Admin/Login/index'))


const RouterComponent = ({userDetails}) => {
  return (
    <Suspense fallback={<Loader />}>

      <Routes>

        {/* Admin Routes */}
        <Route path="/admin/login" element={
          <PrivateRoutes userDetails={userDetails}>
            <Login />
          </PrivateRoutes>} 
        />

        <Route path="/admin/dashboard" element={
          <PrivateRoutes userDetails={userDetails}>
            <Dashboard />
          </PrivateRoutes>} 
        />

        {/* Visitor Routes */}
        <Route path="/about" element={
          <PublicRoutes userDetails={userDetails}>
            <About />
          </PublicRoutes>} 
        />

        <Route
          path="/home"
          element={<Navigate to={"/"} replace />}
        />

        <Route path="/" element={
          <PublicRoutes userDetails={userDetails}>
            <Home />
          </PublicRoutes>} 
        />

      </Routes>
    
    </Suspense>
  )
}

export default RouterComponent