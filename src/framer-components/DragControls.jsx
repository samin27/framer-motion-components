import { useDragControls, motion } from "framer-motion";



const DragControls = () => {
    const dragControls = useDragControls();


    function startDrag(event) {
        dragControls.start(event, { snapToCursor: true })
    }

    return (
        <div className="w-44 h-44 bg-white mx-auto mt-20" onPointerDown={startDrag}>
            <h2>Framer</h2>
            <motion.div
                drag
                dragDirectionLock
                onDirectionLock={y => console.log(y)}
                whileDrag={{
                    scale: 1.2,
                }}
                dragControls={dragControls}
                className="w-32 h-32 bg-green-800"
            >

            </motion.div>

        </div>
    );
};

export default DragControls;