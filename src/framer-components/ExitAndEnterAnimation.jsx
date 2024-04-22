import { AnimatePresence, motion, } from "framer-motion";
import { useEffect, useState } from "react";

export default function ExitAndEnterAnimation() {

    const [removeInnerCircle, setRemoveInnerCircle] = useState(false);

    useEffect(() => {
        setTimeout(() => setRemoveInnerCircle(true), 5000);
    })

    return (
        <div>
            <div className="bg-white h-32 w-32 rounded-full mx-auto mt-10">
                <AnimatePresence>
                    {removeInnerCircle === false &&
                        (<motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 40 }}
                            transition={{
                                duration: 3,
                            }}
                            exit={{ opacity: 0, y: 1000 }}

                            className="bg-red h-24 w-24 rounded-full">

                        </motion.div>)
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}
