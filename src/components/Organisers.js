import React from "react";
import keepMore from "../assets/images/MoreMoneyIcon.webp";

export default function Organisers() {
    return (

        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[60vh] px-4">
            <div className="flex-1 flex justify-start items-center">
                <div
                    id="icon-circle"
                    className="bg-blue-500 flex items-center justify-center"
                    style={{
                        width: "25vw",
                        height: "25vw",
                        maxWidth: "600px",
                        maxHeight: "600px",
                        minWidth: "250px",
                        minHeight: "250px",
                        borderRadius: "50%",
                        marginTop: "4rem",
                        marginLeft: "10rem",
                    }}
                >
                    <img
                        src={keepMore}
                        alt=""
                        className="w-1/2 h-1/2 object-contain"
                        style={{ maxWidth: "220px", maxHeight: "220px" }}
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-start mt-8 lg:mt-0 lg:ml-12">
                <h2 className="text-3xl font-bold mb-4">
                    Sell Out Your Next Event & Engage Your Community Like Never Before
                </h2>
                <p className="text-lg">
                    Our platform makes it effortless for corporate event organisers to manage ticketing, drive registrations, and keep your audience connected — all in one place.
                </p>
                <p className="mt-6 text-base text-gray-700">
                    With Evently, you keep more of what you earn. Our intuitive tools and seamless experience help you focus on what matters most: delivering value to your attendees and growing your community.
                </p>
            </div>
        </div>
    );
}