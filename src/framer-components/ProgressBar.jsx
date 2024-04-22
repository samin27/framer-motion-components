import {motion} from "framer-motion"

export default function ProgressBar() {
  return (
    <div className="mt-6">
        <div className="w-full h-2 rounded-full bg-white">
            <motion.div
            animate={
                {
                    width: "100%",
                    scale: "2",
                    rotateZ: [100, 200]
                }
            }
            transition={
                {
                    duration: 10,
                }
            }
            className="w-1/12 h-full bg-purple-800">

            </motion.div>

        </div>
    </div>
  )
}
