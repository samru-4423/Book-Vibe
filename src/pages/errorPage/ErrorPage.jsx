import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
            <div className="text-center max-w-lg">

                {/* Error Code */}
                <h1 className="text-[120px] md:text-[160px] font-black leading-none 
                    bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
                    bg-clip-text text-transparent">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-slate-400 mt-4 text-base md:text-lg leading-relaxed">
                    Oops! The page you're looking for doesn't exist or may have
                    been moved somewhere else.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-xl border border-slate-700 
                        text-slate-300 hover:bg-slate-800 hover:text-white 
                        transition duration-300"
                    >
                        ← Go Back
                    </button>

                    <a
                        href="/"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r 
                        from-cyan-500 to-blue-600 text-white font-semibold 
                        hover:scale-105 transition duration-300 shadow-lg 
                        shadow-blue-500/20"
                    >
                        Back to Home
                    </a>
                </div>

                {/* Small footer */}
                <p className="text-slate-600 text-sm mt-12">
                    Error 404 • Page unavailable
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;