import React from "react";

function Teacher() {
  const icoo = [
    {
      iconImg: "/Assets/Image/handshake.png",
      desc: "Close to our students",
    },
    {
        iconImg: "/Assets/Image/medal.png",
        desc: "Experts in their fields",
      },
    {
        iconImg: "/Assets/Image/flag.png",
        desc: "Mentors at heart",
      },
  ];
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/Assets/Image/tech tutor.jpg"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Learn with our passionate instructors
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <div className="mt-8 space-y-4">
                {icoo.map((item, index) => (
                    <div key={index} className="flex flex-col items-center space-x-4">
                    <img
                        src={item.iconImg}
                        alt=""
                        className="w-12 h-12"
                    />
                    <p className="text-lg font-semibold">{item.desc}</p>
                    </div>
                ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Teacher;
