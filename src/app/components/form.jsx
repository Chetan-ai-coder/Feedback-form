'use client'

import React from "react";

export default function Form() {

    const courses = [
        "Web Development",
        "Graphic Designing",
        "Digital Marketing",
        "Cyber Security",
        "Data Science",
        "Machine Learning",
    ]

    return (

        // Form box start
        <div className="w-[450px] h-[500px] bg-pink-300 px-1">

            <div className="flex flex-col justify-center items-center">

                <h1>Your Valubale Feedback</h1>

                <p>Help us to improve our coding and teaching quality</p>
            </div>


            {/* Main form start */}
            <form action="" className="flex flex-col justify-center">

                <label htmlFor="name">Your Name (Optional)</label>
                <input type="text" placeholder="e.g., Peter Parker" />

                <label htmlFor="course">Course / Topic</label>
                <select name="course" id="course">
                    <option value="">Select a Course</option>
                    <option value="uouo"></option>
                    <option value="hjgjghdgc"></option>
                </select>


                <p>Overall Teaching Rating</p>

                <input type="rating" />

                <label htmlFor="Detailed Feedback">Detailed Feedback</label>
                <textarea name="Detailed-fb" id="">What did you like the most? What can be improved?</textarea>

                <button>Submit Feedback</button>
            </form>
            {/* Main form end */}

        </div>
        // Form box end
    );
};