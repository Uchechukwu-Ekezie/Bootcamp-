import React from 'react';

const Courses = () => {
    return (
        <div className="container mx-auto">
            <h1 className="mb-4 text-2xl font-bold">Children Bootcamp Courses</h1>
            {/* Add your course components here */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 bg-white shadow-md">
                    <h2 className="text-xl font-bold">Course 1</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="p-4 bg-white shadow-md">
                    <h2 className="text-xl font-bold">Course 2</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="p-4 bg-white shadow-md">
                    <h2 className="text-xl font-bold">Course 3</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                \ No newline at end of file
                <div className="p-4 bg-white shadow-md">
                    <h2 className="text-xl font-bold">Course 4</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="p-4 bg-white shadow-md">
                    <h2 className="text-xl font-bold">Course 5</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
    </div>
    
    );
};

export default Courses;