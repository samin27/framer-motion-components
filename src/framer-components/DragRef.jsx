
import {motion} from "framer-motion";
import { useRef } from "react";
<motion.div
    drag="x"
    dragConstraints={{ left: 0, right: 300 }}
/>
const DragRef = () => {
    const constraintsRef = useRef(null)
    return (
        <motion.div ref={constraintsRef}>
            <motion.div className="w-44 h-44 bg-white mx-auto" drag dragConstraints={constraintsRef} />
        </motion.div>
    );
};

export default DragRef;