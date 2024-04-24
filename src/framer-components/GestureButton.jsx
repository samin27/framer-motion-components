import {motion} from "framer-motion";

const GestureButton = () => {
    return (
        <div className="flex justify-center mt-10">
            <motion.button 
            whileHover={{
                scale: 1.2,
                backgroundColor: "#1A4D2E",
                color: "#ffff",
                transition: {duration: 0.5}
            }}
            whileTap={{
                scale: 0.7,

            }}
            className="bg-white p-2 rounded-full text-gray-700 w-44 font-bold">Submit</motion.button>
        </div>
    );
};

export default GestureButton;