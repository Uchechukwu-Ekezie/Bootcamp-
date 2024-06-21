import React from "react";
import Team from "./Team";

const Abount = () => {
  return (
    <div className="p-8 about">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-yellow-600">About Chuze Learning</h1>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Welcome to Chuze Learning! We are dedicated to inspiring the next
            generation of innovators by teaching children the fundamentals of
            coding in a fun and interactive way. Our bootcamp provides a unique
            opportunity for kids to learn essential programming skills that will
            serve them well in the future.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-lg lg:h-auto">
            <img
              alt="Tech Kid"
              src="/Assets/Image/techKid.jpg"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>

          <div className="lg:py-8">
            <h2 className="mb-4 text-2xl font-bold text-yellow-600">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission at Chuze Learning is to empower children with the
              knowledge and skills to create, innovate, and excel in the
              digital world. We believe this will prepare them for the future
              of work in the fourth industrial revolution.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Through our training, we have reached over 1500 students. Parents
              have come to trust our approach and ability to positively
              influence their children in a safe and friendly environment.
              We are creating "magic" and we hope you join us in making
              Nigeria great again, putting Africa on the tech map, and
              bringing our children into the spotlight.
            </p>
          </div>
        </div>

        <Team />

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-yellow-600">Why Choose Us?</h2>
          <ul className="mb-4 text-lg text-gray-700 list-disc list-inside">
            <li>Experienced instructors passionate about teaching and technology</li>
            <li>Interactive and hands-on learning approach</li>
            <li>Small class sizes for personalized attention</li>
            <li>Flexible scheduling options to fit your needs</li>
            <li>Safe and inclusive learning environment</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold text-yellow-600">Join Us</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We are excited to welcome you to our coding community. Whether your
            child is a beginner or has some experience, our courses are designed
            to help them grow and succeed. Join us today and start your child's
            journey into the world of coding with Chuze Learning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abount;
