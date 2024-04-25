import { useState } from "react";
import {  motion } from "framer-motion";


const variant1 = {
    "show": {
        opacity: 1,
        // transition: {
        //     when: "beforeChildren",
        //     staggerChildren: 0.3
        // }
    },
    "hide": {
        opacity: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1
        }
    }
}

const variant2 = {
    show: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i*0.5,
        }
    }),
    hide: (i) =>  ({
        opacity: 0,
        x: -100,
        transition: {
            delay: i*0.2,
        }
    })
}

const emojisArr = ["👍🏻", "❤️", "😮", "😂", "😢"];

const EmojisAnimation = () => {
    const [showEmojis, setShowEmojis] = useState(false);
    return (
        <div className="mt-10">
            <motion.div
                animate={showEmojis ? "show" : "hide"}
                className="flex items-center justify-center space-y-6 flex-col">
                <motion.div
                    variants={variant1}
                    className="flex justify-evenly p-4 items-center text-3xl w-64 h-12 bg-white rounded-full">
                    {/* All the emojis here */}
                    {emojisArr.map((emoji, index) =>
                        { return <motion.span 
                        key={index} 
                        custom={index}
                        variants={variant2} 
                        className="bg-transparent">
                            {emoji}
                        </motion.span>})}
                </motion.div>
                <button
                    className="bg-sky-500 px-8 py-2 rounded-md font-semibold text-white cursor-pointer"
                    onClick={() => setShowEmojis(!showEmojis)} >
                    {!showEmojis ? "Show Emojis" : "Hide Emojis"}
                </button>
            </motion.div>
        </div>
    );
};

export default EmojisAnimation;