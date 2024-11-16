import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Navbar from './Components/Navbar';
import FindFreelan from './Components/FFlancer';
import GoToTop from './Components/GoToTop';
import Footer from './Components/Footer';
import { FilterFreelancer } from './context/freelancercontext';
import { UserContext } from "./Routing";
import axios from "axios"

const FindFreelancer = () => {

    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-var
    const { state, dispatch } = useContext(UserContext);

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 0);
    }

    const callFF = async () => {
        try {
            const res = await axios.get('http://localhost:5000/FreelancersFetch', {
                method: "GET",                        
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            dispatch({ type: "USER", payload: true });

            const data = await res.json();
            console.log(data);

            // Check for status but don't redirect if unauthenticated!
            if (!res.status === 200) {
                console.log('Error fetching freelancers, but not redirecting');
            }
        } catch (err) {
            console.log('Error:', err);
            // You can handle the error here, but without redirection
        }
    }

    useEffect(() => {
        callFF();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        !loading && (
            <>
            <FilterFreelancer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Find Freelancer</title>
                    <meta name="description" content="The place to get your work done" />
                </Helmet>

                <Navbar color="white" change="Profile" link="/FindFreelancer/Profile" />
                <FindFreelan/>
                <GoToTop />
                <Footer />
            </FilterFreelancer>
            </>
        )
    );
}

export default FindFreelancer;
