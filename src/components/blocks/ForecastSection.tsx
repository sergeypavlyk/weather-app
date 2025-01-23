'use client';

export default function ForecastSection() {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 max-w-[600px] mx-auto">
            <div className="grid grid-cols-4 gap-4 w-full">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center"
                        key={index}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </section>
    );
}
