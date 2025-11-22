'use client'

import React from "react";
import './form.css'

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
         <div className="w-[450px] h-[550px] bg-[#FFFFFF] rounded-2xl shadow-xl shadow-[rgba(0,0,0,0.1)] px-1">

        <div className="w-full h-[150px] flex flex-col justify-evenly items-center ">

            <h1 className="text-[20px] font-semibold">Your Valubale Feedback</h1>

            <p className="text-[12px] text-[#6A717D]">Help us to improve our coding and teaching quality!</p>
        </div>


        {/* Main form start   */}
        <form action="" className="w-full flex flex-col justify-center px-4 text-[#6A717D]">

            <label htmlFor="name" className="text-[12px] font-medium mb-1">Your Name (Optional)</label>
            <input type="text" placeholder="e.g., Peter Parker"
                className="border-solid border-1 border-[#E7E7E7] px-2 py-1 rounded-md text-[14px] bg-[#F5F5F5]" />

            <label htmlFor="course" className="text-[12px] font-medium mt-3 mb-1">Course / Topic</label>
            <select name="course" id="course"
                className="border-solid border-1 px-2 py-1 rounded-md text-[14px] bg-[#F5F5F5] border-[#E7E7E7] ">
                <option value="">Select a Course</option>
                <option value="">Digital Marketing</option>
                <option value="">Hacking</option>
                <option value="">Web Development</option>
                <option value="">Cyber Security</option>
            </select>

            <div className="flex flex-col justify-center items-center">
                <p className="text-[14px] mt-3">Overall Teaching Rating</p>

                <div className="star-rating flex flex-row-reverse justify-center gap-2">
                    <input type="radio" id="star5" name="rating" value="5" className="hidden peer" />
                    <label for="star5"
                        className="text-[#ccc] cursor-pointer text-[28px] transition-colors duration-300 peer-checked:text-[#ffcc00] hover:text-[#ffcc00]">&#9733;</label>

                    <input type="radio" id="star4" name="rating" value="4" className="hidden peer" />
                    <label for="star4"
                        className="text-[#ccc] cursor-pointer text-[28px] transition-colors duration-300 peer-checked:text-[#ffcc00] hover:text-[#ffcc00]">&#9733;</label>

                    <input type="radio" id="star3" name="rating" value="3" className="hidden peer" />
                    <label for="star3"
                        className="text-[#ccc] cursor-pointer text-[28px] transition-colors duration-300 peer-checked:text-[#ffcc00] hover:text-[#ffcc00]">&#9733;</label>

                    <input type="radio" id="star2" name="rating" value="2" className="hidden peer" />
                    <label for="star2"
                        className="text-[#ccc] cursor-pointer text-[28px] transition-colors duration-300 peer-checked:text-[#ffcc00] hover:text-[#ffcc00]">&#9733;</label>

                    <input type="radio" id="star1" name="rating" value="1" className="hidden peer" />
                    <label for="star1"
                        className="text-[#ccc] cursor-pointer text-[28px] transition-colors duration-300 peer-checked:text-[#ffcc00] hover:text-[#ffcc00]">&#9733;</label>
                </div>

            </div>



            <label htmlFor="Detailed Feedback" className="text-[12px] font-medium mb-1">Detailed Feedback</label>
            <textarea className="border-solid border-1 px-2 py-1 h-26 rounded-md text-[14px] bg-[#F5F5F5] border-[#E7E7E7] "
                name="Detailed-fb" id="" placeholder="What did you like the most? What can be improved?"></textarea>

            <button className="rounded-md p-2 mt-5 text-[#F8F6FF] text-[14px] font-medium bg-[#007bff]">Submit
                Feedback</button>
        </form>
        {/* Main form end  */}

    </div>
        // Form box end
    );
};