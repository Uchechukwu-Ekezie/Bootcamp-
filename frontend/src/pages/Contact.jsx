import React from 'react';

function Contact() {
  return (
    <section className="text-white bg-white">
      <div className="max-w-screen-xl px-4 mx-auto py-14 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-bold text-center text-yellow-600">Fill the form below to contact us!</h1>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="p-8 bg-yellow-600 rounded-md lg:col-span-2 lg:py-12">
            <h1 className="mb-4 text-3xl font-extrabold">
              Let us know how we can help you!
            </h1>
            <p className="text-lg">
              Our fun and interactive bootcamp sparks creativity, teaches coding basics, and introduces the kids to cutting edge technology in a supportive environment!
            </p>
            <h2 className="mt-6 text-xl font-bold">Contact us today for any enquiries!</h2>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-6">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="w-full p-3 text-sm placeholder-yellow-600 bg-gray-700 border border-yellow-600 rounded-lg"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full p-3 text-sm placeholder-yellow-600 bg-gray-700 border border-yellow-600 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className="w-full p-3 text-sm placeholder-yellow-600 bg-gray-700 border border-yellow-600 rounded-lg"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  className="w-full p-3 text-sm placeholder-yellow-600 bg-gray-700 border border-yellow-600 rounded-lg"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-block w-full px-5 py-3 font-medium text-white transition duration-300 bg-yellow-600 rounded-lg hover:bg-yellow-700 sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
