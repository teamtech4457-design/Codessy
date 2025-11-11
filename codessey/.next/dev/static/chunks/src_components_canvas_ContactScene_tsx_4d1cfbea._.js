(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/canvas/ContactScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Contact.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ContactScene({ isReducedMotion }) {
    _s();
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Initialize particles
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactScene.useEffect": ()=>{
            if (isReducedMotion) return;
            const initialParticles = Array.from({
                length: 15
            }, {
                "ContactScene.useEffect.initialParticles": (_, i)=>({
                        id: i,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        size: Math.random() * 4 + 1,
                        speedX: (Math.random() - 0.5) * 0.3,
                        speedY: (Math.random() - 0.5) * 0.3,
                        opacity: Math.random() * 0.3 + 0.1
                    })
            }["ContactScene.useEffect.initialParticles"]);
            setParticles(initialParticles);
        }
    }["ContactScene.useEffect"], [
        isReducedMotion
    ]);
    // Mouse move effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactScene.useEffect": ()=>{
            if (isReducedMotion) return;
            const handleMouseMove = {
                "ContactScene.useEffect.handleMouseMove": (e)=>{
                    if (!sceneRef.current) return;
                    const rect = sceneRef.current.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width * 100;
                    const y = (e.clientY - rect.top) / rect.height * 100;
                    setMousePosition({
                        x,
                        y
                    });
                }
            }["ContactScene.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            return ({
                "ContactScene.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
            })["ContactScene.useEffect"];
        }
    }["ContactScene.useEffect"], [
        isReducedMotion
    ]);
    // Particle animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactScene.useEffect": ()=>{
            if (isReducedMotion || particles.length === 0) return;
            const interval = setInterval({
                "ContactScene.useEffect.interval": ()=>{
                    setParticles({
                        "ContactScene.useEffect.interval": (prev)=>prev.map({
                                "ContactScene.useEffect.interval": (particle)=>{
                                    let newX = particle.x + particle.speedX;
                                    let newY = particle.y + particle.speedY;
                                    // Boundary check with wrap-around
                                    if (newX > 100) newX = 0;
                                    if (newX < 0) newX = 100;
                                    if (newY > 100) newY = 0;
                                    if (newY < 0) newY = 100;
                                    // Mouse interaction
                                    const dx = particle.x - mousePosition.x;
                                    const dy = particle.y - mousePosition.y;
                                    const distance = Math.sqrt(dx * dx + dy * dy);
                                    let adjustedSpeedX = particle.speedX;
                                    let adjustedSpeedY = particle.speedY;
                                    if (distance < 20) {
                                        // Repel from mouse
                                        const force = (20 - distance) / 20;
                                        adjustedSpeedX += dx / distance * force * 0.5;
                                        adjustedSpeedY += dy / distance * force * 0.5;
                                    }
                                    return {
                                        ...particle,
                                        x: newX,
                                        y: newY,
                                        speedX: adjustedSpeedX,
                                        speedY: adjustedSpeedY
                                    };
                                }
                            }["ContactScene.useEffect.interval"])
                    }["ContactScene.useEffect.interval"]);
                }
            }["ContactScene.useEffect.interval"], 50);
            return ({
                "ContactScene.useEffect": ()=>clearInterval(interval)
            })["ContactScene.useEffect"];
        }
    }["ContactScene.useEffect"], [
        particles,
        mousePosition,
        isReducedMotion
    ]);
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: isReducedMotion ? 0 : 1.2,
                ease: "easeOut"
            }
        }
    };
    const floatingVariants = {
        float: {
            y: [
                -10,
                10,
                -10
            ],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    const shimmerVariants = {
        animate: {
            backgroundPosition: [
                '0% 50%',
                '100% 50%',
                '0% 50%'
            ],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: sceneRef,
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0.3
        },
        className: "contact-scene relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 pointer-events-none",
                variants: shimmerVariants,
                animate: "animate",
                style: {
                    background: `linear-gradient(
            45deg,
            rgba(180, 143, 86, 0.03) 0%,
            rgba(161, 98, 7, 0.05) 25%,
            rgba(120, 53, 15, 0.03) 50%,
            rgba(180, 143, 86, 0.05) 75%,
            rgba(161, 98, 7, 0.03) 100%
          )`,
                    backgroundSize: '400% 400%'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ContactScene.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            !isReducedMotion && particles.map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute rounded-full pointer-events-none",
                    style: {
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: `radial-gradient(circle, 
              rgba(180, 143, 86, ${particle.opacity}) 0%,
              rgba(180, 143, 86, ${particle.opacity * 0.3}) 70%,
              transparent 100%)`,
                        boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(180, 143, 86, ${particle.opacity * 0.5})`
                    },
                    variants: floatingVariants,
                    animate: "float",
                    transition: {
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }
                }, particle.id, false, {
                    fileName: "[project]/src/components/canvas/ContactScene.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)),
            !isReducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-32 h-32 rounded-full pointer-events-none opacity-10 blur-xl",
                        style: {
                            background: 'radial-gradient(circle, rgba(180, 143, 86, 0.3) 0%, transparent 70%)',
                            top: '20%',
                            left: '10%'
                        },
                        variants: floatingVariants,
                        animate: "float",
                        transition: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ContactScene.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-24 h-24 rounded-full pointer-events-none opacity-15 blur-lg",
                        style: {
                            background: 'radial-gradient(circle, rgba(161, 98, 7, 0.4) 0%, transparent 70%)',
                            top: '60%',
                            right: '15%'
                        },
                        variants: floatingVariants,
                        animate: "float",
                        transition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ContactScene.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-20 h-20 rounded-full pointer-events-none opacity-20 blur-md",
                        style: {
                            background: 'radial-gradient(circle, rgba(120, 53, 15, 0.3) 0%, transparent 70%)',
                            bottom: '30%',
                            left: '20%'
                        },
                        variants: floatingVariants,
                        animate: "float",
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/ContactScene.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 pointer-events-none",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                transition: {
                    duration: 2
                },
                style: {
                    background: `radial-gradient(
            ellipse at center,
            rgba(180, 143, 86, 0.1) 0%,
            rgba(161, 98, 7, 0.05) 30%,
            transparent 70%
          )`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ContactScene.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/canvas/ContactScene.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/ContactScene.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(ContactScene, "x42fzY53MkjuEG8yHpHgJfaKRuA=");
_c = ContactScene;
var _c;
__turbopack_context__.k.register(_c, "ContactScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/ContactScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/canvas/ContactScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_canvas_ContactScene_tsx_4d1cfbea._.js.map