import React from 'react';
import '../../App.css';
import contact from '../../assets/images/contact2.png';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';

const Contact = () => {
  return (
    <div>
        <PageTitle title="Contact"/>
        <section className="hero min-h-screen bg-gray-100 px-6 py-4 rounded">
            <div className="my-2 mx-auto">
                <h1 className="text-5xl font-bold text-grey-900 text-center mt-24 animate-bounce-duration">Get In Touch</h1>
                <div className="hero-content grid md:grid-cols-2 sm:grid-cols-1 h-auto mt-2">
                    <div className="card bg-emerald-100 shadow-xl text-center lg:text-left h-full justify-center items-center md:w-3/4 ml-20 h-auto">
                        <figure className="px-5 pt-5">
                            <img src={contact} alt="Contact" className="rounded-xl duration-250" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-center">
                                <button className="btn btn-accent p-0 md:px-4">
                                    <i className="fa-regular fa-paper-plane text-teal-900 mx-2 md:mr-4"></i>
                                    <p>Email Us: <span className="ml-2 lowercase underline"> info@heylloalpha.com</span></p>
                                </button>
                                <button className="btn btn-accent p-0 md:px-4">
                                    <i className="fa fa-map-marker text-teal-900 mx-2 md:mr-4"></i>
                                    <p>450 Lexington Ave, NY 10017, US </p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card flex-shrink-0 shadow-2xl bg-emerald-100 col-span-1 ml-20 md:w-3/4 h-auto">
                        <div className="card-body grid grid-cols-2">
                            <div className="form-control col-span-2 ">
                                <label className="label">
                                    <span className="label-text text-dark">Name</span>
                                </label>
                                <input type="text" id="name" className="input drop-shadow-2xl bg-base-400 focus:outline-none focus:border-sky-300 focus:ring-sky-100" required/>
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text text-dark">Email</span>
                                </label>
                                <input type="email" id="email" className="input drop-shadow-2xl bg-base-400 focus:outline-none focus:border-sky-300 focus:ring-sky-500" required/>
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text text-dark">Phone Number</span>
                                </label>
                                <input type="text" id="phone" className="input drop-shadow-2xl bg-base-400 focus:outline-none focus:border-sky-300 focus:ring-sky-100" required/>
                            </div>
                            
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text text-dark">Subject</span>
                                </label>
                                <input id="subject" type="text" className="input drop-shadow-2xl bg-base-400 focus:outline-none focus:border-sky-300 focus:ring-sky-100" required/>
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text text-dark">Message</span>
                                </label>
                                <textarea id="message" className="textarea drop-shadow-2xl input bg-base-400 focus:outline-none focus:border-sky-300 focus:ring-sky-100" required></textarea>
                            </div>
                            <div className="form-control w-36 ml-auto col-span-2 mt-4">
                                <button className="btn btn-accent">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </div>
  );
};

export default Contact;