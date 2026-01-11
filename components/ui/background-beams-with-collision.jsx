"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
    children,
    className
}) => {
    const containerRef = useRef(null);
    const parentRef = useRef(null);

    const beams = [
        {
            initialX: 10,
            translateX: 10,
            duration: 7,
            repeatDelay: 3,
            delay: 2,
        },
        {
            initialX: 600,
            translateX: 600,
            duration: 3,
            repeatDelay: 3,
            delay: 4,
        },
        {
            initialX: 100,
            translateX: 100,
            duration: 7,
            repeatDelay: 7,
            className: "h-6",
        },
        {
            initialX: 400,
            translateX: 400,
            duration: 5,
            repeatDelay: 14,
            delay: 4,
        },
        {
            initialX: 800,
            translateX: 800,
            duration: 11,
            repeatDelay: 2,
            className: "h-20",
        },
        {
            initialX: 1000,
            translateX: 1000,
            duration: 4,
            repeatDelay: 2,
            className: "h-12",
        },
        {
            initialX: 1200,
            translateX: 1200,
            duration: 6,
            repeatDelay: 4,
            delay: 2,
            className: "h-6",
        },
        {
            initialX: 50,
            translateX: 50,
            duration: 8,
            repeatDelay: 5,
            delay: 1,
            className: "h-8",
        },
        {
            initialX: 300,
            translateX: 300,
            duration: 6,
            repeatDelay: 3,
            delay: 3,
        },
        {
            initialX: 700,
            translateX: 700,
            duration: 9,
            repeatDelay: 4,
            className: "h-10",
        },
        {
            initialX: 900,
            translateX: 900,
            duration: 5,
            repeatDelay: 2,
            delay: 2,
            className: "h-6",
        },
        {
            initialX: 1100,
            translateX: 1100,
            duration: 7,
            repeatDelay: 5,
            delay: 1,
        },
        {
            initialX: 150,
            translateX: 150,
            duration: 10,
            repeatDelay: 6,
            className: "h-12",
        },
        {
            initialX: 500,
            translateX: 500,
            duration: 4,
            repeatDelay: 2,
            delay: 3,
            className: "h-8",
        },
        // Right side beams
        {
            initialX: 1300,
            translateX: 1400,
            duration: 7,
            repeatDelay: 3,
            delay: 2,
            className: "h-10",
        },
        {
            initialX: 1400,
            translateX: 1550,
            duration: 5,
            repeatDelay: 4,
            delay: 1,
            className: "h-8",
        },
        {
            initialX: 1350,
            translateX: 1500,
            duration: 8,
            repeatDelay: 5,
            delay: 3,
            className: "h-6",
        },
        {
            initialX: 1450,
            translateX: 1600,
            duration: 6,
            repeatDelay: 3,
            delay: 2,
            className: "h-12",
        },
        {
            initialX: 1500,
            translateX: 1700,
            duration: 9,
            repeatDelay: 4,
            className: "h-8",
        },
        {
            initialX: 1550,
            translateX: 1750,
            duration: 7,
            repeatDelay: 2,
            delay: 1,
            className: "h-10",
        },
    ];

    return (
        <div
            ref={parentRef}
            className={cn(
                "relative w-full min-h-screen",
                className
            )}>
            <div className="fixed inset-0 bg-transparent pointer-events-none overflow-hidden z-50">
                {beams.map((beam) => (
                    <CollisionMechanism
                        key={beam.initialX + "beam-idx"}
                        beamOptions={beam}
                        containerRef={containerRef}
                        parentRef={parentRef} />
                ))}
                <div
                    ref={containerRef}
                    className="absolute bottom-0 bg-neutral-100 w-full inset-x-0"
                    style={{
                        boxShadow:
                            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
                    }}></div>
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

const CollisionMechanism = React.forwardRef(({ parentRef, containerRef, beamOptions = {} }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({
        detected: false,
        coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    useEffect(() => {
        const checkCollision = () => {
            if (
                beamRef.current &&
                containerRef.current &&
                parentRef.current &&
                !cycleCollisionDetected
            ) {
                const beamRect = beamRef.current.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const parentRect = parentRef.current.getBoundingClientRect();

                if (beamRect.bottom >= containerRect.top) {
                    const relativeX =
                        beamRect.left - parentRect.left + beamRect.width / 2;
                    const relativeY = beamRect.bottom - parentRect.top;

                    setCollision({
                        detected: true,
                        coordinates: {
                            x: relativeX,
                            y: relativeY,
                        },
                    });
                    setCycleCollisionDetected(true);
                }
            }
        };

        const animationInterval = setInterval(checkCollision, 50);

        return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef]);

    useEffect(() => {
        if (collision.detected && collision.coordinates) {
            setTimeout(() => {
                setCollision({ detected: false, coordinates: null });
                setCycleCollisionDetected(false);
            }, 2000);

            setTimeout(() => {
                setBeamKey((prevKey) => prevKey + 1);
            }, 2000);
        }
    }, [collision]);

    return (
        <>
            <motion.div
                key={beamKey}
                ref={beamRef}
                animate="animate"
                initial={{
                    translateY: beamOptions.initialY || "-200px",
                    translateX: beamOptions.initialX || "0px",
                    rotate: beamOptions.rotate || 0,
                }}
                variants={{
                    animate: {
                        translateY: beamOptions.translateY || "1800px",
                        translateX: beamOptions.translateX || "0px",
                        rotate: beamOptions.rotate || 0,
                    },
                }}
                transition={{
                    duration: beamOptions.duration || 8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    delay: beamOptions.delay || 0,
                    repeatDelay: beamOptions.repeatDelay || 0,
                }}
                className={cn(
                    "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
                    beamOptions.className
                )} />
            <AnimatePresence>
                {collision.detected && collision.coordinates && (
                    <Explosion
                        key={`${collision.coordinates.x}-${collision.coordinates.y}`}
                        className=""
                        style={{
                            left: `${collision.coordinates.x}px`,
                            top: `${collision.coordinates.y}px`,
                            transform: "translate(-50%, -50%)",
                        }} />
                )}
            </AnimatePresence>
        </>
    );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({
    ...props
}) => {
    const spans = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        initialX: 0,
        initialY: 0,
        directionX: Math.floor(Math.random() * 80 - 40),
        directionY: Math.floor(Math.random() * -50 - 10),
    }));

    return (
        <div {...props} className={cn("absolute z-50 h-4 w-4", props.className)}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -inset-x-20 top-0 m-auto h-4 w-20 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"></motion.div>
            {spans.map((span) => (
                <motion.span
                    key={span.id}
                    initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
                    animate={{
                        x: span.directionX,
                        y: span.directionY,
                        opacity: 0,
                    }}
                    transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
                    className="absolute h-3 w-3 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
            ))}
        </div>
    );
};
