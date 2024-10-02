import { useContext, useState, useEffect } from 'react';
import { Parallax, Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";
import { useRef } from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import GoToTop from './Components/GoToTop';
import Footer from './Components/Footer';
import './App.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CateCards from './Components/CateCards.jsx';
import { UserContext } from "./Routing";


const App = () => {

    // eslint-disable-next-line no-unused-vars
    const { state, dispatch } = useContext(UserContext);

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 500);
    }

    //* ------------------------------------------------------------------------------

    //* For displaying username in Carousel 
    const [username, setUsername] = useState('');
    const [show, setShow] = useState(false);


    const userHomePage = async () => {
        try {
            const res = await fetch(process.env.REACT_APP_BACKEND_URL+'/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUsername(data.name);
            setShow(true);
            dispatch({ type: "USER", payload: true });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        !loading && (
            <>
                <main>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Freelanster</title>
                        <meta name="description" content="The place to get your work done" />
                    </Helmet>

                    <Navbar color="black" change="About Us" onclick={handleClick} />

                    {/* //? Carasol Section */}
                    <div className='Carcontainer'>
                        <Swiper spaceBetween={10}
                            centeredSlides={true}
                            autoplay={{
                                delay: 6500,
                                disableOnInteraction: false,
                            }}
                            parallax={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Parallax, Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            {/*  slide 1 */}
                            <SwiperSlide className="slide">
                                <div
                                    slot="container-start"
                                    className="parallax-bg"
                                    data-swiper-parallax="-23%"
                                > <img loading="lazy"
                                    src="https://ik.imagekit.io/unimzwtxr/Main%20Image1.jpeg?updatedAt=1727781404060" alt="Top Jobs" /></div>
                            </SwiperSlide>

                            {/* slide 2 */}
                            <SwiperSlide className="slide">
                                <div
                                    slot="container-start"
                                    className="parallax-bg"
                                    data-swiper-parallax="-23%"
                                > <img loading="lazy"
                                    src="https://ik.imagekit.io/unimzwtxr/peter-stumpf-Q2-OEzSZY94-unsplash.jpg?updatedAt=1727781509084" alt="Top Jobs" /></div>
                                {/* <div className="title1" data-swiper-parallax="-300">
                                    <h1 className="swiper-h1" >Welcome, {username}  </h1> <br />
                                    <h2 className="swiper-h2" >{show ? 'Happy to see you back' : 'The place to get your work done'}</h2>
                                </div> */}
                            </SwiperSlide>

                            {/* slide 3 */}
                            <SwiperSlide className="slide">
                                <div
                                    slot="container-start"
                                    className="parallax-bg"
                                    data-swiper-parallax="-23%"
                                > <img loading="lazy"
                                    src="https://ik.imagekit.io/unimzwtxr/backgorund1.webp?updatedAt=1727771624680" alt="Top Jobs" /></div>
                                {/* <div className="title2" data-swiper-parallax="-300">
                                    <h1 className="swiper-h3" >Find Your Desired <br /> Jobs Here</h1>
                                </div> */}
                            </SwiperSlide>

                            {/* slide 4 */}
                            <SwiperSlide className="slide">
                                <div
                                    slot="container-start"
                                    className="parallax-bg"
                                    data-swiper-parallax="-23%"
                                > <img loading="lazy"
                                    src="https://ik.imagekit.io/unimzwtxr/jovaughn-stephens-IuT4XqfabPs-unsplash.jpg?updatedAt=1727781493894" alt="Top Jobs" /></div>
                                {/* <div className="title4" data-swiper-parallax="-300">
                                    <h1 className="swiper-h4" >Choose a perfect <br /> Freelancer Here </h1>
                                </div> */}
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    {/* //?Scroll Down Animation */}
                    <div className="box-div">
                        <div className="box">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </main>

                {/* //? ------------------------------------------------------------------------------ */}


                {/* //? Website Features */}

                <section id="Website-des">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
                        position: "relative",
                        marginTop: "128px",
                        marginLeft: "50px",
                        marginRight: "50px"
                    }}><path fill="#1cd6ce" fillOpacity="0.8" d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,192C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
                        position: "relative",
                        marginTop: "-5px",
                        marginLeft: "50px",
                        marginRight: " 50px"
                    }}><path fill="#1cd6ce" fillOpacity="0.8" d="M0,128L120,112C240,96,480,64,720,58.7C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

                    <div className="glass">

                        <h1
                            data-aos="fade-right"
                            data-aos-offset="350"
                            data-aos-duration="4000"
                            data-aos-easing="ease-out"
                            id="feat-h1">Why to choose Freelanster ?</h1>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="4000"
                            className="divider-h"></div>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="400"
                            data-aos-duration="4000"
                            data-aos-easing="ease-out">
                            <p id="feat-p">The "Freelanster" - empowers small, independent filmmakers to earn income by featuring brands in their films. Companies can bid to have their products, like food or beverages, showcased in key scenes—providing financial support to filmmakers. This platform bridges the gap between creativity and commerce, helping filmmakers sustain their projects while offering brands a unique way to reach audiences. It's a social impact initiative aimed at supporting the survival and success of the creative community.</p>
                        </div>
                        <div className="g-button-div">
                            <button
                                data-aos='zoom-in'
                                data-aos-offset="100"
                                data-aos-duration="4000"
                                data-aos-easing="ease-out"
                                className="g-button">See More</button>
                        </div>
                        <img loading="lazy"
                            data-aos="fade-down-left"
                            data-aos-offset="400"
                            data-aos-duration="4000"
                            data-aos-easing="ease-out"
                            id="g-img" src="https://ik.imagekit.io/bhanu1776/Freelansters/glass-right.png?updatedAt=1682608753541" alt="Freelanster" />
                    </div>
                </section>

                {/* //? ------------------------------------------------------------------------------ */}

                <section>
                    {/* //? Categories */}
                    <div
                        data-aos='fade-right'
                        data-aos-offset='200'
                        data-aos-easing="ease-out"
                        data-aos-duration="4000"

                        className="Features">
                        <p id="s-specialty"> Job Categories </p>
                    </div>

                    <div
                        data-aos='fade-right'
                        data-aos-offset='150'
                        data-aos-easing="ease-out"
                        data-aos-duration="4000"
                        id="divider2"></div>


                    <CateCards />
                    {/* <!-- Temp Div --> */}
                    <div style={{ height: "150px" }}> </div>
                </section>
                {/* //? ------------------------------------------------------------------------------ */}


                {/* //? Features Section */}

                <article id="Features-arc">
                    <div
                        data-aos='fade-left'
                        data-aos-offset='200'
                        data-aos-easing="ease-out"
                        data-aos-duration="4000"
                        className="Features">
                        <p id="s-specialty"> Freelansters Specialty </p>
                    </div>

                    <div
                        data-aos='fade-left'
                        data-aos-offset='150'
                        data-aos-easing="ease-out"
                        data-aos-duration="4000"
                        id="divider"></div>

                    <div
                        data-aos='fade-right'
                        data-aos-offset='150'
                        data-aos-easing="ease-out"
                        data-aos-duration="4000"
                        id="Features-div" style={{ position: "relative", marginTop: "50px" }}>
                       <div>
                            <h3>Post a Placement Opportunity</h3>
                            <p>Submit your product placement bid to showcase your brand in independent films. Let filmmakers know you're interested in having your products featured in their creative projects.</p>
                            
                            <h3>Choose Filmmakers</h3>
                            <p>No project is too big or small. We have filmmakers ready to work with brands of any size or budget. <br /> <b> No product placement is too complex. We can make it happen!</b></p>
                            
                            <h3>Pay Securely</h3>
                            <p>Only pay once your product has been successfully featured in the film, and you're 100% satisfied with the results using our secure payment system.</p>
                            
                            <h3>We're here to assist</h3>
                            <p>Our dedicated team can help match your brand with the right filmmakers, and our project managers are available to oversee the placement process from start to finish.</p>
                        </div>

                        <img loading="lazy"
                            data-aos='flip-right'
                            data-aos-offset='400'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            src="https://ik.imagekit.io/bhanu1776/Freelansters/Features.png?updatedAt=1682608753683" alt="" className="f-img" />

                        <span
                            data-aos='flip-right'
                            data-aos-offset='400'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="circle">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                        </span>

                        <div
                            data-aos='fade-right'
                            data-aos-offset='150'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img1" id='img1'><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/1.png?updatedAt=1682608761055" alt="s" /></div>

                        <div
                            data-aos='fade-left'
                            data-aos-offset='150'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img2"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/2.png?updatedAt=1682608761012" alt="s" /></div>

                        <div
                            data-aos='fade-right'
                            data-aos-offset='200'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img3"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/3.png?updatedAt=1682608761027" alt="s" /></div>

                        <div
                            data-aos='zoom-in'
                            data-aos-offset='200'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img4"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/4.png?updatedAt=1682608760997" alt="s" /></div>

                        <div
                            data-aos='fade-left'
                            data-aos-offset='200'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img5"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/5.png?updatedAt=1682608761058" alt="s" /></div>

                        <div
                            data-aos='fade-down'
                            data-aos-offset='200'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img6"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/6.png?updatedAt=1682608761020" alt="s" id='redirect' ref={ref} /></div>

                        <div
                            data-aos='fade-left'
                            data-aos-offset='50'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img7"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/7.png?updatedAt=1682608759198" alt="s" /></div>

                        <div
                            ata-aos='fade-down'
                            data-aos-offset='20'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img8"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/8.png?updatedAt=1682608757447" alt="s" /></div>

                        <div
                            ata-aos='fade-down'
                            data-aos-offset='200'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img9"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/9.png?updatedAt=1682608757207" alt="s" /></div>

                        <div
                            ata-aos='fade-down'
                            data-aos-offset='200'
                            data-aos-easing="ease-out"
                            data-aos-duration="4000"
                            className="shape-img10"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/10.png?updatedAt=1682608757182" alt="s" /></div>
                        <div className="shape-img11"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/11.png?updatedAt=1682608757190" alt="s" /></div>
                    </div>
                </article>

                {/* //? ------------------------------------------------------------------------------ */}

                {/* //? About Us */}
                <About />

                {/* //? ------------------------------------------------------------------------------ */}

                < GoToTop />
                <Footer />

            </>
        )
    );
}

export default App