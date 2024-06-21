import React from 'react';

const Courses = () => {
    const list = [
        {
            "id": 1,
            "title": "Introduction to programming",
            "description": "Learn the basics of programming, including syntax, variables, loops, and functions.",
            "duration": "4 weeks",
            "difficulty": "Beginner",
            "image": "https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format",
            "instructor": {
                "name": "John Doe",
                "email": "john.doe@example.com"
            }
        },
        {
            "id": 2,
            "title": "Web Development with HTML, CSS, and JavaScript",
            "description": "Build and style modern web pages using HTML, CSS, and JavaScript. Learn how to create responsive designs and dynamic web applications.",
            "duration": "6 weeks",
            "difficulty": "Intermediate",
            "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
            "instructor": {
                "name": "Jane Smith",
                "email": "jane.smith@example.com"
            }
        },
        {
            "id": 3,
            "title": "Digital Media",
            "description": "Master data analysis techniques using Python libraries such as Pandas, NumPy, and Matplotlib. Learn to visualize and interpret data effectively.",
            "duration": "8 weeks",
            "difficulty": "Intermediate",
            "image": "https://www.marketing91.com/wp-content/uploads/2022/07/Digital-media.jpg",
            "instructor": {
                "name": "Alice Johnson",
                "email": "alice.johnson@example.com"
            }
        },
        {
            "id": 4,
            "title": "Machine Learning Basics",
            "description": "An introduction to machine learning concepts and techniques. Learn about supervised and unsupervised learning, and explore popular algorithms.",
            "duration": "10 weeks",
            "difficulty": "Advanced",
            "image": "https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?height=456&width=711&fit=bounds",
            "instructor": {
                "name": "Bob Brown",
                "email": "bob.brown@example.com"
            }
        },
        {
            "id": 5,
            "title": "Cybersecurity Fundamentals",
            "description": "Understand the basics of cybersecurity, including risk management, threat assessment, and the implementation of security measures.",
            "duration": "5 weeks",
            "difficulty": "Beginner",
            "image": "https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
            "instructor": {
                "name": "Carol White",
                "email": "carol.white@example.com"
            }
        },
        {
            id: 6,
            title: "UI & UX",
            description: "Explore the principles of User Interface and User Experience design. Learn to create intuitive and visually appealing digital products.",
            duration: "4 weeks",
            difficulty: "Beginner",
            image: "https://media.licdn.com/dms/image/D4D12AQEcduxMILhC9Q/article-cover_image-shrink_720_1280/0/1694931324118?e=2147483647&v=beta&t=FXuo5S7ycEbQs9mBqzP6tqWdsd9rqxfGV7Go3L9Mquc",
            instructor: {
              name: "John Doe",
              email: "",
            },
          },
    ];

    return (
        <div className="container p-6 mx-auto">
            <h1 className="mb-8 text-3xl font-extrabold text-center text-yellow-600">Children Bootcamp Courses</h1>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {list.map((course) => (
                    <div key={course.id} className="p-6 transition-shadow duration-300 ease-in-out transform bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
                        <img src={course.image} alt={course.title} className="object-cover w-full h-40 mb-4 rounded-t-lg" />
                        <h2 className="mb-2 text-xl font-bold text-yellow-600">{course.title}</h2>
                        <p className="mb-2 text-gray-700">{course.description}</p>
                        <p className="mb-2"><strong>Duration:</strong> {course.duration}</p>
                        <p className="mb-2"><strong>Difficulty:</strong> {course.difficulty}</p>
                        <p className="mb-2"><strong>Instructor:</strong> {course.instructor.name}</p>
                        <p className="mb-4 text-sm text-gray-500"><strong>Email:</strong> {course.instructor.email}</p>
                        <a href="/enroll">
                        <button className="inline-block w-full px-5 py-2 font-medium text-white transition-colors duration-300 ease-in-out bg-yellow-600 rounded-lg hover:bg-yellow-500" >
                            Enroll Now
                        </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
