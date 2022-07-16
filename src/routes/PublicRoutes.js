import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

const PublicRoutes = ({ children, userDetails }) => {
    return !userDetails || !userDetails.slug ? (
        <>
            <Header />
                {children}
            <Footer />
        </>
    ) : (
        <>
            123 hjbj
            <Navigate to="/" />
        </>
    )
}

export default PublicRoutes