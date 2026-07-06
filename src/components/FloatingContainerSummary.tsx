interface Container{
    title: string;
    description: string;
    num: number;
}

export default function FloatingContainerSummary( {title, description, num}: Container) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 w-[240px] h-[190px] hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-[#F5F5F5] flex flex-col items-center justify-center">
            <h2 className="text-md font-semibold text-center text-black mb-2">{title}</h2>
            <h1 className="text-6xl font-bold text-center text-black mb-2">{num}</h1>
            <p className="text-md text-center text-gray-400 dark:text-gray-600">{description}</p>
        </div>
    )
}