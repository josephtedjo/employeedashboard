export default function FloatingContainerSummary({Children}: any) {
    return (
            <div className="grid grid-cols-3 ml-2 my-4 w-full">
                <div className="bg-white rounded-xl shadow-lg p-6 w-[240px] hover:scale-105 transition-transform duration-300 ease-in-out">      
                    {Children}         
                 </div>
            </div>

    )
}