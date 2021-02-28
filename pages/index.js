import DefaultContainer from "../components/DefaultContainer";
import SplitAnimation from "../components/SplitAnimation";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { createRef, useEffect, useState } from "react";

let prev = -1;

const Index = () => {
    const { scrollY } = useViewportScroll();

    const scrollReminderOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    const heading1MarginTop = useTransform(scrollY, [0, 100], [0, -100]);
    const heading1Opacity = useTransform(scrollY, [0, 100], [1, 0]);

    const heading2MarginTop = useTransform(scrollY, [150, 250, 450, 550], [100, 0, 0, -100]);
    const heading2Opacity = useTransform(scrollY, [150, 250, 450, 550], [0, 1, 1, 0]);

    const [explosionOpacity, setExplosionOpacity] = useState(0);

    const dotsOpacity1 = useTransform(scrollY, [750, 850, 1150, 1250], [0, 1, 1, 0]);
    const dotsOpacity2 = useTransform(scrollY, [800, 900, 1200, 1300], [0, 1, 1, 0]);
    const dotsOpacity3 = useTransform(scrollY, [850, 950, 1250, 1350], [0, 1, 1, 0]);

    const heading3MarginTop = useTransform(scrollY, [1450, 1550, 1750, 1850], [100, 0, 0, -100]);
    const heading3Opacity = useTransform(scrollY, [1450, 1550, 1750, 1850], [0, 1, 1, 0]);

    const heading4MarginTop = useTransform(scrollY, [1850, 1950, 2150, 2250], [100, 0, 0, -100]);
    const heading4Opacity = useTransform(scrollY, [1850, 1950, 2150, 2250], [0, 1, 1, 0]);

    const splitAnimationMarginTop = useTransform(scrollY, [2250, 2350, 2550, 2650], [100, 0, 0, -100]);
    const splitAnimationOpacity = useTransform(scrollY, [2250, 2350, 2550, 2650], [0, 1, 1, 0]);

    const heading5MarginTop = useTransform(scrollY, [2650, 2750, 2950, 3050], [100, 0, 0, -100]);
    const heading5Opacity = useTransform(scrollY, [2650, 2750, 2950, 3050], [0, 1, 1, 0]);

    const heading6MarginTop = useTransform(scrollY, [3050, 3150, 3350, 3450], [100, 0, 0, -100]);
    const heading6Opacity = useTransform(scrollY, [3050, 3150, 3350, 3450], [0, 1, 1, 0]);

    const heading7MarginTop = useTransform(scrollY, [3450, 3550, 3750, 3850], [100, 0, 0, -100]);
    const heading7Opacity = useTransform(scrollY, [3450, 3550, 3750, 3850], [0, 1, 1, 0]);

    const dots2Opacity1 = useTransform(scrollY, [3950, 4050, 4350, 4450], [0, 1, 1, 0]);
    const dots2Opacity2 = useTransform(scrollY, [4000, 4100, 4400, 4500], [0, 1, 1, 0]);
    const dots2Opacity3 = useTransform(scrollY, [4050, 4150, 4450, 4550], [0, 1, 1, 0]);

    const heading8MarginTop = useTransform(scrollY, [4650, 4750, 4950, 5050], [100, 0, 0, -100]);
    const heading8Opacity = useTransform(scrollY, [4650, 4750, 4950, 5050], [0, 1, 1, 0]);

    const heading9MarginTop = useTransform(scrollY, [5050, 5150, 5350, 5450], [100, 0, 0, -100]);
    const heading9Opacity = useTransform(scrollY, [5050, 5150, 5350, 5450], [0, 1, 1, 0]);

    const heading10MarginTop = useTransform(scrollY, [5450, 5550, 5750, 5850], [100, 0, 0, -100]);
    const heading10Opacity = useTransform(scrollY, [5450, 5550, 5750, 5850], [0, 1, 1, 0]);

    const heading11MarginTop = useTransform(scrollY, [5950, 6050, 6250, 6350], [100, 0, 0, -100]);
    const heading11Opacity = useTransform(scrollY, [5950, 6050, 6250, 6350], [0, 1, 1, 0]);

    const [isRickrolling, setRickrolling] = useState(false);

    let player = createRef();

    const updateRickrollingState = () => {
        console.log(window.scrollY > 5950);
        setRickrolling(window.scrollY > 5950);
        setTimeout(updateRickrollingState, 10);
    }

    useEffect(() => scrollY.onChange(latest => {
        if (latest >= 600 && prev < 600) {
            player.current.play();
        }
        prev = latest;

        updateRickrollingState();
    }, []));

    return (
        <DefaultContainer className="pt-64">
            <motion.span className="text-white font-bold text-xl fixed" style={{
                bottom: 16,
                width: "100%",
                textAlign: "center",
                maxWidth: "1000px",
                opacity: scrollReminderOpacity
            }}>
                Herunterscrollen zum Fortfahren
            </motion.span>

            <motion.h1 className="text-white text-6xl lg:text-8xl font-extrabold fixed" style={{
                marginTop: heading1MarginTop,
                opacity: heading1Opacity,
                maxWidth: "1000px"
            }}>
                <span className="text-yellow-500">
                    Kernspaltung
                </span> und Moderation im Kernkraftwerk
            </motion.h1>

            <motion.h1 className="text-white text-5xl lg:text-7xl font-extrabold fixed" style={{
                marginTop: heading2MarginTop,
                opacity: heading2Opacity,
                maxWidth: "1000px"
            }}>
                by <span className="text-yellow-500">
                    Lukas
                </span>, <span className="text-yellow-500">
                    Marcel
                </span> und <span className="text-yellow-500">
                    Svenja
                </span>
            </motion.h1>

            <div style={{ opacity: explosionOpacity, display: explosionOpacity > 0 ? "block" : "none" }}>
                <Player
                    onEvent={event => {
                        event === "play" && setExplosionOpacity(1);
                        event === "complete" && setExplosionOpacity(0);
                    }}
                    ref={player}
                    src="https://assets6.lottiefiles.com/packages/lf20_1Urv0u.json"
                    style={{
                        height: "50%",
                        width: "50%",
                        position: "fixed"
                    }}
                />
            </div>

            <div className="text-white font-extrabold fixed w-full text-center" style={{
                fontSize: "10rem",
                width: "100vw",
                maxWidth: "1000px",
                pointerEvents: "none"
            }}>
                <motion.span style={{
                    opacity: dotsOpacity1
                }}>.</motion.span>
                <motion.p className="inline" style={{
                    opacity: dotsOpacity2
                }}>.</motion.p>
                <motion.p className="inline" style={{
                    opacity: dotsOpacity3
                }}>.</motion.p>
            </div>

            <motion.h1 className="text-white text-6xl lg:text-8xl font-extrabold fixed" style={{
                marginTop: heading3MarginTop,
                opacity: heading3Opacity,
                maxWidth: "1000px"
            }}>
                Was ist denn überhaupt <span className="text-yellow-500">
                    Kernspaltung
                </span>?
            </motion.h1>

            <motion.h1 className="text-white text-6xl font-extrabold fixed" style={{
                marginTop: heading4MarginTop,
                opacity: heading4Opacity,
                maxWidth: "1000px"
            }}>
                Bei <span className="text-yellow-500">
                    Kernspaltung
                </span> wird der Kern eines leicht instabilen Atoms
                wie Uran-235 durch Hinzugeben eines Neutrons
                zu einem stark instabilen Atom und
                spaltet sich in der Folge in zwei ähnlich schwere Atomkerne (Spaltprodukte)
            </motion.h1>

            <motion.div style={{
                marginTop: splitAnimationMarginTop,
                opacity: splitAnimationOpacity
            }}>
                <SplitAnimation />
            </motion.div>

            <motion.h1 className="text-white text-6xl font-extrabold fixed pt-16" style={{
                marginTop: heading5MarginTop,
                opacity: heading5Opacity,
                maxWidth: "1000px"
            }}>
                Bei diesem Vorgang werden zusätzlich ca. 3 Neutronen als Spaltprodukte freigesetzt.
                Diese können nun mit dem nächsten Uran-235 reagieren und führen so
                zu einer exponentiellen Kettenreaktion
            </motion.h1>

            <motion.h1 className="text-white text-6xl font-extrabold fixed pt-16" style={{
                marginTop: heading6MarginTop,
                opacity: heading6Opacity,
                maxWidth: "1000px"
            }}>
                Wird diese Kettenreaktion nicht kontrolliert,
                wird eine ungeheure Energie freigesetzt
                und eine Explosion ähnlich einer Atombombe entsteht
            </motion.h1>

            <motion.h1 className="text-white text-6xl font-extrabold fixed pt-16" style={{
                marginTop: heading7MarginTop,
                opacity: heading7Opacity,
                maxWidth: "1000px"
            }}>
                Durch Kontrollstäbe mit Stoffen,
                welche die Neutronen selbst aufnehmen,
                kann die Kettenreaktion kontrolliert und das Risiko
                minimiert werden
            </motion.h1>

            <div className="text-white font-extrabold fixed w-full text-center" style={{
                fontSize: "10rem",
                width: "100vw",
                maxWidth: "1000px",
                pointerEvents: "none"
            }}>
                <motion.span style={{
                    opacity: dots2Opacity1
                }}>.</motion.span>
                <motion.p className="inline" style={{
                    opacity: dots2Opacity2
                }}>.</motion.p>
                <motion.p className="inline" style={{
                    opacity: dots2Opacity3
                }}>.</motion.p>
            </div>

            <motion.h1 className="text-white text-9xl font-extrabold fixed pt-32" style={{
                marginTop: heading8MarginTop,
                opacity: heading8Opacity,
                maxWidth: "1000px"
            }}>
                Fazit
            </motion.h1>

            <motion.h1 className="text-white text-6xl font-extrabold fixed pt-16" style={{
                marginTop: heading9MarginTop,
                opacity: heading9Opacity,
                maxWidth: "1000px"
            }}>
                Mit den richtigen Sicherheitsvorkehrungen
                stellen Atomkraftwerke eine niedrigere Gefahr dar
                als fossile Energiequellen wie Kohlekraft
            </motion.h1>

            {/* <motion.h1 className="text-white text-6xl font-extrabold fixed pt-16" style={{
                marginTop: heading10MarginTop,
                opacity: heading10Opacity,
                maxWidth: "1000px"
            }}>
                Trotzdem stellt der Atomabfall eine Herausforderung dar,
                die wir nicht unterschätzen sollten
            </motion.h1> */}

            <motion.div className="fixed pt-16" style={{
                marginTop: heading10MarginTop,
                opacity: heading10Opacity,
                width: "1000px",
                height: "563px"
            }}>
                <iframe className="w-full h-full" src={isRickrolling ? "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" : ""} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </motion.div>
        </DefaultContainer>
    )
}

export default Index;