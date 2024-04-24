
import { motion } from 'framer-motion';

const DraggableDiv = () => {
    return (
        <motion.div
        drag
        whileDrag={{
            scale: 1.2,
            backgroundColor: "#10439F",
            
        }}
        dragConstraints = {{
            left: -100,
            right: 400,
            top: -100,
            bottom: 400
        }}
        dragSnapToOrigin = {true}
        dragElastic ={0.5}
        dragTransition={{
            bounceStiffness: 300,
            bounceDamping: 10
        }}
        dragPropagation
        className="w-44 h-44 rounded-full bg-white mx-auto mt-10 flex justify-center flex-col">
          <h2 className='text-center'>Circle</h2>  
        </motion.div>
    );
};

export default DraggableDiv;