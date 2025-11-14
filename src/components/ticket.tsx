import { useLocation } from "react-router";
import Bg from "../assets/pattern-ticket.svg"
import Logo from "../assets/logo-full.svg"
import Icon from "../assets/icon-github.svg"
import html2canvas from "html2canvas";
import { useRef } from "react";


function Ticket() {
    const { state } = useLocation();

    const ticketRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (!ticketRef.current) return;

        // Capture the element
        const canvas = await html2canvas(ticketRef.current, {
            scale: 0.8,
            backgroundColor: "#0c082b", // ticket background color
            
        });

        // Convert to image
        const image = canvas.toDataURL("image/png");

        // Download automatically
        const link = document.createElement("a");
        link.href = image;
        link.download = "ticket.png";
        link.click();
    };


    return (

        <div className="flex flex-col items-center justify-center gap-10 text-(--neutral-300) text-center my-10 mx-auto">
            <img src={Logo} alt="" className="" />
            <div className="flex flex-col gap-4 items-center justify-center w-[70%]">
                <h1 className="text-4xl">
                    Congrats, <span className="font-bold bg-linear-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent">{state.fullname}!</span> Your ticket is ready.
                </h1>
                <p className="text-xl">We've emailed your ticket to <span className="text-(--orange-500)">{state.email}</span> and will send updates
                    in the run up to the event</p>
            </div>


            <div ref={ticketRef} className="relative w-[80%] h-[200px] flex items-center justify-center mx-auto">
                <img
                    src={Bg}
                    alt="ticket background"
                    className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="relative z-10 right-5 flex flex-col items-start gap-5">
                    <div className="">
                        <img src={Logo} alt="Logo" className="w-[150px] mb-1 flex items-start" />
                        <p className="ml-6"> Jan 31, 2025 / Lagos, Nigeria</p>
                    </div>

                    {/* Avatar and username details */}

                    <div className="flex gap-5">
                        <img src={state.avatar} alt={state.username} className="w-20 h-20" />

                        <div className="flex flex-col items-start justify-center">
                            <p>{state.fullname} </p>
                            <div className="flex">
                                <img src={Icon} alt="" />
                                <p className="">{state.username}</p>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="relative left-10 rotate-90 text-lg">
                    <p className="text-(--neutral-300)">#01609</p>
                </div>

            </div>
            <button onClick={handleDownload} className="mt-4 bg-(--orange-700) text-white p-2 rounded cursor-pointer">
                Download Ticket
            </button>

        </div>
    )

}

export default Ticket