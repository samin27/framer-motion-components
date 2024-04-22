import { AnimatePresence, motion, } from "framer-motion";
import { useEffect, useState } from "react";

export default function ExitAndEnterAnimation() {

    const [removeInnerCircle, setRemoveInnerCircle] = useState(false);

    useEffect(() => {
        setTimeout(() => setRemoveInnerCircle(true), 5000);
    })

    return (
        <div className="mt-28">
            <div className="bg-white h-32 w-32 rounded-full mx-auto mt-10">
                <AnimatePresence>
                    {removeInnerCircle === false &&
                        (<motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 40, scale: [null, 1.2, 0.5, 0.1, 1], backgroundColor: [null, "#F7C566", "#003C43", "#11111" ], borderRadius: [null, "40%", "10%", "100%"]  }}
                            transition={{
                                duration: 5,
                                
                            }}
                            exit={{ opacity: 0, y: 100 }}

                            className="bg-red h-24 w-24 rounded-full">

                        </motion.div>)
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}
