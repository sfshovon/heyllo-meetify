import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
  return (
    <section className="min-h-screen- flex items-center p-16 bg-emerald-50 h-screen">
      <PageTitle title="Not Found"/>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl my-5">Sorry, we couldn't find this page.</p>
          <Link rel="noopener noreferrer" to="/" className="btn px-8 py-3 font-semibold rounded">Back to homepage</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;