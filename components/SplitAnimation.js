import { motion } from "framer-motion";

const repeatDelay = 2;

const transitionOne = {
    type: "spring",
    stiffness: 260,
    damping: 20,
    repeat: Infinity,
    repeatType: "reverse",
    repeatDelay: repeatDelay,
    duration: 1
};

const transitionTwo = {
    type: "spring",
    stiffness: 260,
    damping: 20,
    repeat: Infinity,
    repeatType: "reverse",
    repeatDelay: repeatDelay,
    delay: 0.5,
    duration: 1
};

const transitionThree = {
    type: "spring",
    stiffness: 260,
    damping: 20,
    repeat: Infinity,
    repeatType: "reverse",
    repeatDelay: repeatDelay + 0.5,
    delay: 1.25,
    duration: 0.5
};

const SplitAnimation = () => {
    return (
        <motion.div className="fixed text-white" style={{
            maxWidth: "1000px"
        }}>
            <div className="mt-32" style={{

            }}>
                <motion.div className="bg-white rounded-full fixed t-0 l-0" style={{
                    width: "50px",
                    height: "50px"
                }}
                initial={{
                    x: 0,
                    opacity: 1
                }}
                animate={{
                    x: 200,
                    opacity: 0
                }}
                transition={transitionOne}></motion.div>

                <motion.div className="rounded-full fixed t-0 l-0" style={{
                    width: "200px",
                    height: "200px"
                }}
                initial={{
                    x: 220,
                    y: -75,
                    scale: 1,
                    backgroundColor: "#F59E0B"
                }}
                animate={{
                    x: 350,
                    y: -175,
                    scale: 0.5,
                    backgroundColor: "#F59E9E"
                }}
                transition={transitionTwo}></motion.div>

                <motion.div className="rounded-full fixed t-0 l-0" style={{
                    width: "200px",
                    height: "200px"
                }}
                initial={{
                    x: 220,
                    y: -75,
                    scale: 1,
                    backgroundColor: "#F59E0B"
                }}
                animate={{
                    x: 350,
                    y: 50,
                    scale: 0.5,
                    backgroundColor: "#649EF0"
                }}
                transition={transitionTwo}></motion.div>

                <motion.p
                initial={{
                    x: 600,
                    y: -15,
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={transitionThree}
                className="text-white font-extrabold text-4xl pb-4">
                    + Wärmeenergie
                </motion.p>

                <motion.p
                initial={{
                    x: 600,
                    y: -15,
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={transitionThree}
                className="text-white font-extrabold text-4xl">
                    + Bewegungsenergie
                </motion.p>
            </div>
        </motion.div>
    )
}

export default SplitAnimation;