import {motion} from "framer-motion"

export default function ProgressBar() {
  return (
    <div className="mt-10">
        <div className="w-full h-2 rounded-full bg-white">
            <motion.div
            animate={
                {
                    width: "50%",
                    scale: "2",
                    rotateY: [100, 200],
                }
            }
            transition={
                {
                    duration: 5,
                }
            }
            className="w-1/12 h-full bg-purple-800">
            </motion.div>

        </div>
    </div>
  )
}
