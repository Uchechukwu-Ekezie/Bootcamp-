import React from 'react'

function Contact() {
  return (
<section className=" bg-black">
  <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
    <h1 className='font-bold text-2xl mb-4 text-yellow-600'>Fill the form below to contact us!</h1>
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12 bg-yellow-600 rounded-md">
        <h1 className="max-w-xl text-2xl font-extrabold">
          Let us know how we can help you!
        </h1>

        <div className="mt-8">
          <p className="text-lg"> Our fun and interactive bootcamp sparks creativity, teaches coding basics and introduces the kids to <br />cutting edge technology in a <br /> supportive environment!</p>

          <h2 className="mt-3 font-bold text-xl">Contact us today for any enquiries!</h2>
        </div>
      </div>

      <div className="rounded-lg bg-transparent p-8 shadow-lg lg:col-span-3 lg:p-12 ">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg bg-text-yellow-600 placeholder:text-yellow-600 bg-transparent border-white p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg placeholder:text-yellow-600 bg-transparent border-white p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full  placeholder:text-yellow-600 rounded-lg bg-transparent border-white p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>


          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full placeholder:text-yellow-600 rounded-lg bg-transparent border-white p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-yellow-600 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact

