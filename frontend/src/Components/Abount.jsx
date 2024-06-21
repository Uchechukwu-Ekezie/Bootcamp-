import React from "react";
import Team from "./Team";

const Abount = () => {
  return (
    <div className="p-8 about">
      <div>
        <div className="">
          <h1 className="mb-4 text-3xl font-bold">About Chuze Learning</h1>
          <p className="mb-4">
            Welcome to Chuze Learning! We are dedicated to inspiring the next
            generation of innovators by teaching children the fundamentals of
            coding in a fun and interactive way. Our bootcamp provides a unique
            opportunity for kids to learn essential programming skills that will
            serve them well in the future.
          </p>
        </div>
        <h2 className="mb-2 text-2xl font-bold">Our Mission</h2>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="/Assets/Image/techKid.jpg"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Our Mission
              </h2>

              <p className="mt-4 text-gray-600">
                Our mission at Chuze Learning is to empower children with the
                knowledge and skills to create, innovate, and excel in the
                digital world. We believe this will prepare them for the future
                of work in the fourth industrial revolution. <br />
                Through our training we have reached over 1500 students. Parents
                have come to trust our approach and ability to positively
                influence their children in a safe and friendly environment.{" "}
                <br />
                We are creating "magic" and we hope you join us in making
                Nigeria great again, putting Africa on the tech map, and
                bringing our children into the spotlight.
              </p>
            </div>
          </div>
        </div>
     
        <h2 className="mb-2 text-2xl font-bold">Why Choose Us?</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>
            Experienced instructors passionate about teaching and technology
          </li>
          <li>Interactive and hands-on learning approach</li>
          <li>Small class sizes for personalized attention</li>
          <li>Flexible scheduling options to fit your needs</li>
          <li>Safe and inclusive learning environment</li>
        </ul>
        <h2 className="mb-2 text-2xl font-bold">Join Us</h2>
        <p>
          We are excited to welcome you to our coding community. Whether your
          child is a beginner or has some experience, our courses are designed
          to help them grow and succeed. Join us today and start your child's
          journey into the world of coding with Chuze Learning!
        </p>
      </div>
    </div>
  );
};

export default Abount;
