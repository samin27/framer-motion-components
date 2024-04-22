import {motion} from "framer-motion";

export default function KeyFrames() {
  return (
    <div className="mt-28">
      <motion.div 
      
      animate={{x: [null, 100, 0], scale: [1, 2, 2, 1, 1], rotate: [null, 0 , 180, 180, 0], borderRadius: ["0%", "0%", "50%", "50%", "0%"]}}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
        
      }}
      
      className="bg-white w-32 h-32 mx-auto">


      </motion.div>
    </div>
  )
}
