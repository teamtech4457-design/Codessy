(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/canvas/HeroScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/**
 * PERFORMANCE NOTES (kept minimal & safe):
 * - Reduced particle counts slightly (rain, mist, dust)
 * - Throttled expensive useFrame updates by skipping frames when possible
 * - Lowered geometry segments for decorative spheres where acceptable
 * - Lowered postprocessing intensity/height
 * - Canvas dpr limited and antialias disabled
 */ /* -------------------- Background Image Component -------------------- */ function KrishnaBackground() {
    _s();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KrishnaBackground.useEffect": ()=>{
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            loader.load('/krishna-birth-bg.jpg.png', {
                "KrishnaBackground.useEffect": (texture)=>{
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    // Only set background if we're still in the background phase
                    scene.background = texture;
                }
            }["KrishnaBackground.useEffect"], undefined, {
                "KrishnaBackground.useEffect": (error)=>{
                    console.error('Error loading texture:', error);
                    // Fallback to black instead of blue during transitions
                    scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000);
                }
            }["KrishnaBackground.useEffect"]);
            // Cleanup function to clear background when component unmounts
            return ({
                "KrishnaBackground.useEffect": ()=>{
                    scene.background = null;
                }
            })["KrishnaBackground.useEffect"];
        }
    }["KrishnaBackground.useEffect"], [
        scene
    ]);
    return null;
}
_s(KrishnaBackground, "UhCC8wDD2cMyItT8qLKLhYRbhzM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = KrishnaBackground;
/* -------------------- Golden Boom Transition -------------------- */ function GoldenBoomTransition({ onComplete }) {
    _s1();
    const lightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sphereRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [intensity, setIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "GoldenBoomTransition.useFrame": ({ clock })=>{
            if (startTime.current === null) startTime.current = clock.elapsedTime;
            const elapsed = clock.elapsedTime - startTime.current;
            // Boom animation: quick expansion then fade
            if (elapsed < 0.5) {
                // Expand quickly
                const progress = elapsed / 0.5;
                setIntensity(progress);
            } else if (elapsed < 1.5) {
                // Hold and fade
                const progress = (elapsed - 0.5) / 1.0;
                setIntensity(1 - progress);
            } else {
                // Complete
                onComplete();
            }
            // Update light and sphere
            if (lightRef.current) {
                lightRef.current.intensity = intensity * 15;
            }
            if (sphereRef.current) {
                sphereRef.current.scale.setScalar(intensity * 10);
                const mat = sphereRef.current.material;
                if (mat) mat.opacity = (1 - intensity) * 0.8;
            }
        }
    }["GoldenBoomTransition.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: lightRef,
                color: "#ffd700",
                intensity: 0,
                distance: 50
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: sphereRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffd700",
                        transparent: true,
                        opacity: 0.8,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s1(GoldenBoomTransition, "bqQE3fZmCGi+GMaEmPzI7+HmWAo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = GoldenBoomTransition;
/* -------------------- Scene Manager with 15-second Loop -------------------- */ function SceneManager({ isReducedMotion }) {
    _s2();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [currentPhase, setCurrentPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showBoom, setShowBoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBackground, setShowBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loopCount, setLoopCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const prisonDuration = 7 // Prison scene duration
    ;
    const boomDuration = 2 // Boom transition duration
    ;
    const backgroundDuration = 15 // 15 seconds for background display
    ;
    const loopInterval = prisonDuration + boomDuration + backgroundDuration // Total loop time
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SceneManager.useFrame": (state)=>{
            if (!startTime.current) startTime.current = state.clock.elapsedTime;
            const elapsed = state.clock.elapsedTime - startTime.current;
            const currentLoopTime = elapsed % loopInterval;
            // Calculate which phase we're in during the current loop
            if (currentLoopTime < prisonDuration) {
                // Prison phase
                if (currentPhase !== 0) {
                    setCurrentPhase(0);
                    // Clear background when starting new scenes
                    scene.background = null;
                    setIsTransitioning(true);
                }
                setShowBackground(false);
                setShowBoom(false);
            } else if (currentLoopTime < prisonDuration + boomDuration) {
                // Boom transition phase
                if (!showBoom) {
                    setShowBoom(true);
                    setShowBackground(false);
                    setCurrentPhase(1);
                    // Clear background during boom transition
                    scene.background = null;
                    setIsTransitioning(true);
                }
            } else {
                // Background phase (15 seconds)
                if (showBoom) {
                    setShowBoom(false);
                }
                if (!showBackground) {
                    setShowBackground(true);
                    setIsTransitioning(false);
                }
            }
            // Track loop count (for internal logic only, not displayed)
            const newLoopCount = Math.floor(elapsed / loopInterval);
            if (newLoopCount !== loopCount) {
                setLoopCount(newLoopCount);
                // When loop restarts, ensure background is cleared
                scene.background = null;
                setIsTransitioning(true);
            }
        }
    }["SceneManager.useFrame"]);
    const handleBoomComplete = ()=>{
        setShowBoom(false);
        setShowBackground(true);
        setIsTransitioning(false);
    };
    // Clear background when component unmounts or when transitioning
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneManager.useEffect": ()=>{
            return ({
                "SceneManager.useEffect": ()=>{
                    scene.background = null;
                }
            })["SceneManager.useEffect"];
        }
    }["SceneManager.useEffect"], [
        scene
    ]);
    // Set black background during transitions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneManager.useEffect": ()=>{
            if (isTransitioning && !showBackground) {
                scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000);
            }
        }
    }["SceneManager.useEffect"], [
        isTransitioning,
        showBackground,
        scene
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showBoom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoldenBoomTransition, {
                onComplete: handleBoomComplete
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 184,
                columnNumber: 20
            }, this),
            showBackground && !isTransitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KrishnaBackground, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this),
            !showBoom && !showBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrisonCell, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrisonBars, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chains, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParentSilhouettes, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineLight, {
                        isReducedMotion: isReducedMotion,
                        phase: currentPhase
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonBeam, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DustParticles, {
                        isReducedMotion: isReducedMotion
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            showBackground && !isTransitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudSystem, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RainSystem, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeaWater, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightningStorm, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OceanMist, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineLight, {
                        isReducedMotion: isReducedMotion,
                        phase: currentPhase
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {
                isReducedMotion: isReducedMotion,
                phase: currentPhase,
                showBoom: showBoom,
                showBackground: showBackground && !isTransitioning
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(SceneManager, "3dFt+lQYPLDWm7fzyDUkkxqvEKU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = SceneManager;
/* -------------------- CloudSystem (throttled update) -------------------- */ function CloudSystem() {
    _s3();
    const cloudsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cloudCount = 8;
    const clouds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CloudSystem.useMemo[clouds]": ()=>{
            const cloudData = [];
            for(let i = 0; i < cloudCount; i++){
                cloudData.push({
                    position: [
                        (Math.random() - 0.5) * 15,
                        4 + Math.random() * 3,
                        -8 + Math.random() * 4
                    ],
                    scale: 0.5 + Math.random() * 0.8,
                    speed: 0.08 + Math.random() * 0.15
                });
            }
            return cloudData;
        }
    }["CloudSystem.useMemo[clouds]"], [
        cloudCount
    ]);
    // frame skip for throttling
    const frameSkipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CloudSystem.useFrame": (state)=>{
            frameSkipRef.current = (frameSkipRef.current + 1) % 2; // update every 2 frames
            if (frameSkipRef.current !== 0) return;
            if (cloudsRef.current?.children) {
                const time = state.clock.elapsedTime;
                cloudsRef.current.children.forEach({
                    "CloudSystem.useFrame": (cloud, index)=>{
                        if (index < clouds.length) {
                            const cloudInfo = clouds[index];
                            cloud.position.x = cloudInfo.position[0] + Math.sin(time * cloudInfo.speed + index) * 2;
                            cloud.position.y = cloudInfo.position[1] + Math.sin(time * cloudInfo.speed * 0.5 + index) * 0.5;
                        }
                    }
                }["CloudSystem.useFrame"]);
            }
        }
    }["CloudSystem.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: cloudsRef,
        children: clouds.map((cloud, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: cloud.position,
                scale: cloud.scale,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            8,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#ffffff",
                        transparent: true,
                        opacity: 0.6,
                        roughness: 0.8,
                        metalness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
_s3(CloudSystem, "zmrjesVcJArTEvwFPg7p+lgW/AE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = CloudSystem;
/* -------------------- RainSystem (reduced count + throttled) -------------------- */ function RainSystem() {
    _s4();
    const rainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rainCount = 250 // reduced from 500 -> lighter but still dense
    ;
    const rain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RainSystem.useMemo[rain]": ()=>{
            const positions = new Float32Array(rainCount * 3);
            const velocities = new Float32Array(rainCount);
            for(let i = 0; i < rainCount; i++){
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 20;
                positions[i3 + 1] = Math.random() * 10 + 5;
                positions[i3 + 2] = (Math.random() - 0.5) * 15 - 5;
                velocities[i] = 0.5 + Math.random() * 0.5;
            }
            return {
                positions,
                velocities
            };
        }
    }["RainSystem.useMemo[rain]"], [
        rainCount
    ]);
    // throttle updates
    const frameSkipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "RainSystem.useFrame": (state)=>{
            frameSkipRef.current = (frameSkipRef.current + 1) % 2; // update every 2 frames
            if (frameSkipRef.current !== 0) return;
            if (rainRef.current?.geometry) {
                const positions = rainRef.current.geometry.attributes.position.array;
                for(let i = 0; i < rainCount; i++){
                    const i3 = i * 3;
                    positions[i3 + 1] -= rain.velocities[i] * 0.12; // slightly faster to keep rhythm
                    if (positions[i3 + 1] < -2) {
                        positions[i3] = (Math.random() - 0.5) * 20;
                        positions[i3 + 1] = Math.random() * 5 + 8;
                        positions[i3 + 2] = (Math.random() - 0.5) * 15 - 5;
                    }
                }
                rainRef.current.geometry.attributes.position.needsUpdate = true;
            }
        }
    }["RainSystem.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: rainRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                    attach: "attributes-position",
                    count: rainCount,
                    array: rain.positions,
                    itemSize: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/HeroScene.tsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                color: "#9fc7ff",
                size: 0.02,
                transparent: true,
                opacity: 0.6,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, this);
}
_s4(RainSystem, "0XgxqaZwlZ0jcWpUUxT1i5uewdA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = RainSystem;
/* -------------------- Sea Water (lighter geometry detail) -------------------- */ function SeaWater() {
    _s5();
    const waterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SeaWater.useFrame": (state)=>{
            if (waterRef.current) {
                const time = state.clock.elapsedTime;
                const wave1 = Math.sin(time * 1.5) * 0.08;
                const wave2 = Math.cos(time * 0.8) * 0.04;
                const wave3 = Math.sin(time * 2.2 + 2) * 0.06;
                waterRef.current.rotation.x = wave1;
                waterRef.current.rotation.z = wave2;
                waterRef.current.position.y = -1 + wave3 * 0.1;
            }
        }
    }["SeaWater.useFrame"]);
    // lowered subdivisions from 32 -> 16 to reduce vertex count
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: waterRef,
        position: [
            0,
            -1,
            0
        ],
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    25,
                    25,
                    16,
                    16
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#1e3a8a",
                transparent: true,
                opacity: 0.85,
                roughness: 0.2,
                metalness: 0.8
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 370,
        columnNumber: 5
    }, this);
}
_s5(SeaWater, "gk7H3b1Z+0pThM8KOrriM4ByL2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c5 = SeaWater;
/* -------------------- LightningStorm (keeps behavior but lightweight) -------------------- */ function LightningStorm() {
    _s6();
    const [lightningActive, setLightningActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightningIntensity, setLightningIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const lightningRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // small throttle: trigger check every few frames using internal time-based random
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "LightningStorm.useFrame": (state)=>{
            const time = state.clock.elapsedTime;
            if (Math.random() > 0.92 && !lightningActive) {
                setLightningActive(true);
                setLightningIntensity(12);
                setTimeout({
                    "LightningStorm.useFrame": ()=>{
                        setLightningIntensity(0);
                        setTimeout({
                            "LightningStorm.useFrame": ()=>{
                                setLightningIntensity(6);
                                setTimeout({
                                    "LightningStorm.useFrame": ()=>{
                                        setLightningIntensity(0);
                                        setLightningActive(false);
                                    }
                                }["LightningStorm.useFrame"], 50);
                            }
                        }["LightningStorm.useFrame"], 100);
                    }
                }["LightningStorm.useFrame"], 100);
            }
            lightningRefs.current.forEach({
                "LightningStorm.useFrame": (light)=>{
                    if (light) {
                        light.intensity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(light.intensity, lightningIntensity, 0.2);
                    }
                }
            }["LightningStorm.useFrame"]);
        }
    }["LightningStorm.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: (ref)=>{
                    if (ref) lightningRefs.current[0] = ref;
                },
                color: "#4f46e5",
                intensity: 0,
                distance: 25,
                position: [
                    3,
                    8,
                    -5
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: (ref)=>{
                    if (ref) lightningRefs.current[1] = ref;
                },
                color: "#6366f1",
                intensity: 0,
                distance: 20,
                position: [
                    -4,
                    7,
                    -3
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_s6(LightningStorm, "Cwsm5WrtRPUOooHZJKYQRcnW0gw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c6 = LightningStorm;
/* -------------------- OceanMist (reduced count + throttled) -------------------- */ function OceanMist() {
    _s7();
    const fogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mistCount = 60 // reduced from 100
    ;
    const mist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OceanMist.useMemo[mist]": ()=>{
            const positions = new Float32Array(mistCount * 3);
            const sizes = new Float32Array(mistCount);
            for(let i = 0; i < mistCount; i++){
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 12;
                positions[i3 + 1] = Math.random() * 3;
                positions[i3 + 2] = (Math.random() - 0.5) * 8 - 2;
                sizes[i] = Math.random() * 0.25 + 0.08;
            }
            return {
                positions,
                sizes
            };
        }
    }["OceanMist.useMemo[mist]"], [
        mistCount
    ]);
    const frameSkipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "OceanMist.useFrame": (state)=>{
            frameSkipRef.current = (frameSkipRef.current + 1) % 2; // update every 2 frames
            if (frameSkipRef.current !== 0) return;
            if (fogRef.current?.geometry) {
                const time = state.clock.elapsedTime;
                const positions = fogRef.current.geometry.attributes.position.array;
                for(let i = 0; i < mistCount; i++){
                    const i3 = i * 3;
                    positions[i3 + 1] += Math.sin(time * 0.5 + i) * 0.004;
                    positions[i3 + 0] += Math.cos(time * 0.3 + i) * 0.002;
                }
                fogRef.current.geometry.attributes.position.needsUpdate = true;
            }
        }
    }["OceanMist.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: fogRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        count: mistCount,
                        array: mist.positions,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-size",
                        count: mistCount,
                        array: mist.sizes,
                        itemSize: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                color: "#e0f2fe",
                size: 0.18,
                transparent: true,
                opacity: 0.38,
                sizeAttenuation: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 501,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 486,
        columnNumber: 5
    }, this);
}
_s7(OceanMist, "kAhrizrEHGsjzC6mN94NpEsdHEY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c7 = OceanMist;
/* -------------------- DivineLight (kept behavior but reduced sphere detail) -------------------- */ function DivineLight({ isReducedMotion, phase }) {
    _s8();
    const lightGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DivineLight.useFrame": (state)=>{
            if (!coreRef.current || !pointLightRef.current) return;
            if (animationStartTime.current === 0) {
                animationStartTime.current = state.clock.elapsedTime;
            }
            const elapsed = state.clock.elapsedTime - animationStartTime.current;
            if (phase === 0) {
                // Prison phase - faster divine light animation (7 seconds total)
                if (elapsed < 1.5) {
                    coreRef.current.scale.setScalar(0.01);
                    coreRef.current.material.opacity = 0;
                    pointLightRef.current.intensity = 0;
                } else if (elapsed < 3) {
                    const progress = (elapsed - 1.5) / 1.5;
                    coreRef.current.scale.setScalar(0.01 + progress * 0.3);
                    coreRef.current.material.opacity = progress * 0.7;
                    pointLightRef.current.intensity = progress * 0.8;
                } else if (elapsed < 6) {
                    const progress = (elapsed - 3) / 3;
                    coreRef.current.scale.setScalar(0.31 + progress * 0.7);
                    coreRef.current.material.opacity = 0.7 + progress * 0.2;
                    pointLightRef.current.intensity = 0.8 + progress * 1.2;
                } else {
                    const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
                    coreRef.current.scale.setScalar(1 * pulse);
                    pointLightRef.current.intensity = 2 * pulse;
                }
            } else {
                // Krishna phase - enhanced divine light in the sky
                const pulse = Math.sin(state.clock.elapsedTime * 3) * 0.2 + 1;
                coreRef.current.scale.setScalar(2 * pulse);
                coreRef.current.position.y = 5;
                coreRef.current.material.opacity = 1;
                pointLightRef.current.intensity = 8 * pulse;
                pointLightRef.current.position.y = 5;
            }
        }
    }["DivineLight.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: lightGroupRef,
        position: [
            0,
            1,
            -1
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: coreRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.5,
                            16,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffd87a",
                        transparent: true,
                        opacity: 0,
                        toneMapped: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 563,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: pointLightRef,
                color: "#ffd87a",
                intensity: 0,
                distance: 25,
                decay: 2
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 574,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 562,
        columnNumber: 5
    }, this);
}
_s8(DivineLight, "xF8KSHoks9GU6zP89lCi2228ITM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c8 = DivineLight;
/* -------------------- CameraController -------------------- */ function CameraController({ isReducedMotion, phase, showBoom, showBackground }) {
    _s9();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const animationStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraController.useFrame": (state)=>{
            if (isReducedMotion) {
                camera.position.set(0, 2, 8);
                return;
            }
            if (animationStartTime.current === 0) {
                animationStartTime.current = state.clock.elapsedTime;
            }
            const elapsed = state.clock.elapsedTime - animationStartTime.current;
            let target;
            if (showBoom) {
                // During boom transition, pull back camera for dramatic effect
                target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 5, 20);
            } else if (showBackground) {
                // Krishna phase camera - show the full scene with sky
                target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 5, 15);
            } else {
                // Prison phase camera - faster dolly (7 seconds total)
                if (elapsed > 3) {
                    target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1.5, 4);
                } else {
                    target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 2, 8);
                }
            }
            camera.position.lerp(target, 0.05);
            if (showBackground) {
                camera.lookAt(0, 2, 0);
            } else {
                camera.lookAt(0, 1, -1);
            }
        }
    }["CameraController.useFrame"]);
    return null;
}
_s9(CameraController, "u903Kbn0iScjdWA/tuYFtkkG1YY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c9 = CameraController;
/* -------------------- Prison / Props (kept as-is but lowered some geometry detail) -------------------- */ function PrisonCell() {
    _s10();
    const wallsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stoneColors = [
        '#0b0f15',
        '#1a2430',
        '#111827',
        '#0f172a'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: wallsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2,
                    -3
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            8,
                            4,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: stoneColors[0],
                        roughness: 0.9,
                        metalness: 0.1,
                        transparent: true,
                        opacity: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -4,
                    2,
                    0
                ],
                rotation: [
                    0,
                    Math.PI / 2,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            6,
                            4,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: stoneColors[1],
                        roughness: 0.9,
                        metalness: 0.1,
                        transparent: true,
                        opacity: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 652,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 650,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    4,
                    2,
                    0
                ],
                rotation: [
                    0,
                    Math.PI / 2,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            6,
                            4,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: stoneColors[1],
                        roughness: 0.9,
                        metalness: 0.1,
                        transparent: true,
                        opacity: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    0,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            8,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 672,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#0b0f15",
                        roughness: 0.95,
                        metalness: 0.05,
                        transparent: true,
                        opacity: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 673,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    4,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            8,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 683,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: stoneColors[2],
                        roughness: 0.9,
                        metalness: 0.1,
                        transparent: true,
                        opacity: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 684,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 682,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    2,
                    3,
                    -2.9
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            1,
                            0.5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 694,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#9fc7ff",
                        transparent: true,
                        opacity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 695,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 693,
                columnNumber: 7
            }, this),
            [
                -0.3,
                0,
                0.3
            ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        2 + x,
                        3,
                        -2.85
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.05,
                                0.5,
                                0.05
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/HeroScene.tsx",
                            lineNumber: 700,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#4b5563",
                            metalness: 0.8,
                            roughness: 0.2
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/HeroScene.tsx",
                            lineNumber: 701,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/canvas/HeroScene.tsx",
                    lineNumber: 699,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 638,
        columnNumber: 5
    }, this);
}
_s10(PrisonCell, "HqyHGXmA3Jr5v7TareAkbAdIE2k=");
_c10 = PrisonCell;
function PrisonBars() {
    _s11();
    const barsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: barsRef,
        position: [
            0,
            2,
            1.5
        ],
        children: [
            Array.from({
                length: 9
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        i - 4,
                        0,
                        0
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.08,
                                4,
                                0.08
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/HeroScene.tsx",
                            lineNumber: 715,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#374151",
                            metalness: 0.9,
                            roughness: 0.1,
                            transparent: true,
                            opacity: 0.9
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/HeroScene.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/canvas/HeroScene.tsx",
                    lineNumber: 714,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    3,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            8,
                            0.08,
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#374151",
                        metalness: 0.9,
                        roughness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 728,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 726,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            8,
                            0.08,
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 731,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#374151",
                        metalness: 0.9,
                        roughness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 732,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 730,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 712,
        columnNumber: 5
    }, this);
}
_s11(PrisonBars, "Onb+FIb9bAzgcv4sx4IAri2lH8Y=");
_c11 = PrisonBars;
function Chains() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: Array.from({
            length: 4
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            -3.5 + i * 2,
                            2.5,
                            -2.8
                        ],
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.06,
                                    0.06,
                                    0.8,
                                    8
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                                lineNumber: 744,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#6b7280",
                                metalness: 0.9,
                                roughness: 0.1
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                                lineNumber: 745,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 743,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            -3.5 + i * 2,
                            1.5,
                            -2.8
                        ],
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.1,
                                    8,
                                    6
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                                lineNumber: 748,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#4b5563",
                                metalness: 0.8,
                                roughness: 0.2
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                                lineNumber: 749,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 747,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 742,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 740,
        columnNumber: 5
    }, this);
}
_c12 = Chains;
function ParentSilhouettes() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.5,
                    0.5,
                    -2
                ],
                rotation: [
                    0,
                    0.3,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.4,
                            0.3,
                            1.2,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 761,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#1e293b",
                        emissive: "#1e293b",
                        emissiveIntensity: 0.1,
                        roughness: 1,
                        transparent: true,
                        opacity: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 762,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 760,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.5,
                    0.5,
                    -2
                ],
                rotation: [
                    0,
                    -0.3,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.4,
                            0.3,
                            1.2,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 773,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#1e293b",
                        emissive: "#1e293b",
                        emissiveIntensity: 0.1,
                        roughness: 1,
                        transparent: true,
                        opacity: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 774,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 772,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 759,
        columnNumber: 5
    }, this);
}
_c13 = ParentSilhouettes;
function MoonBeam() {
    _s12();
    const beamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const volumeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MoonBeam.useFrame": (state)=>{
            if (volumeRef.current) {
                volumeRef.current.rotation.z = state.clock.elapsedTime * 0.06;
            }
        }
    }["MoonBeam.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            2,
            3,
            -2.8
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                ref: beamRef,
                color: "#9fc7ff",
                intensity: 0.28,
                distance: 6,
                angle: Math.PI / 8,
                penumbra: 0.8,
                decay: 2,
                position: [
                    0,
                    0,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 799,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: volumeRef,
                position: [
                    0,
                    -1,
                    -0.5
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.1,
                            0.8,
                            2,
                            8,
                            1,
                            true
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#9fc7ff",
                        transparent: true,
                        opacity: 0.1,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 812,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 810,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 798,
        columnNumber: 5
    }, this);
}
_s12(MoonBeam, "Dd/3IGyrDu95T6dV1a+dsZ06wPA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c14 = MoonBeam;
/* -------------------- DustParticles (reduced + throttled) -------------------- */ function DustParticles({ isReducedMotion }) {
    _s13();
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const count = 100 // reduced from 150
    ;
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DustParticles.useMemo[particles]": ()=>{
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const sizes = new Float32Array(count);
            const phases = new Float32Array(count);
            for(let i = 0; i < count; i++){
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 7;
                positions[i3 + 1] = Math.random() * 3.5;
                positions[i3 + 2] = (Math.random() - 0.5) * 5;
                const isGolden = Math.random() > 0.8;
                colors[i3] = isGolden ? 0.98 : 0.6 + Math.random() * 0.2;
                colors[i3 + 1] = isGolden ? 0.75 : 0.5 + Math.random() * 0.2;
                colors[i3 + 2] = isGolden ? 0.12 : 0.4 + Math.random() * 0.2;
                sizes[i] = Math.random() * 0.05 + 0.02;
                phases[i] = Math.random() * Math.PI * 2;
            }
            return {
                positions,
                colors,
                sizes,
                phases
            };
        }
    }["DustParticles.useMemo[particles]"], [
        count
    ]);
    const frameSkipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DustParticles.useFrame": (state)=>{
            // skip updates if reduced motion
            if (isReducedMotion) return;
            frameSkipRef.current = (frameSkipRef.current + 1) % 2;
            if (frameSkipRef.current !== 0) return;
            if (particlesRef.current?.geometry) {
                const time = state.clock.elapsedTime;
                const positions = particlesRef.current.geometry.attributes.position.array;
                for(let i = 0; i < count; i++){
                    const i3 = i * 3;
                    const phase = particles.phases[i];
                    positions[i3 + 1] += Math.sin(time + phase) * 0.0012;
                }
                particlesRef.current.geometry.attributes.position.needsUpdate = true;
            }
        }
    }["DustParticles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: particlesRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        count: count,
                        array: particles.positions,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 877,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-color",
                        count: count,
                        array: particles.colors,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 883,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-size",
                        count: count,
                        array: particles.sizes,
                        itemSize: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 889,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 876,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.05,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 896,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 875,
        columnNumber: 5
    }, this);
}
_s13(DustParticles, "cb/BHQONO8zcjNHCCLlXs/DBM1s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c15 = DustParticles;
function HeroScene({ isReducedMotion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        camera: {
            position: [
                0,
                2,
                8
            ],
            fov: 50
        },
        // Performance-oriented settings:
        dpr: [
            1,
            1.5
        ],
        gl: {
            antialias: false,
            powerPreference: 'high-performance'
        },
        shadows: false,
        style: {
            background: 'transparent'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneManager, {
                isReducedMotion: isReducedMotion
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 918,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                enableZoom: false,
                enablePan: false,
                maxPolarAngle: Math.PI / 2,
                minPolarAngle: Math.PI / 6,
                maxDistance: 10,
                minDistance: 3,
                enabled: false
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 920,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                        intensity: 0.9,
                        luminanceThreshold: 0.35,
                        luminanceSmoothing: 0.9,
                        height: 180
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 932,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                        eskil: false,
                        offset: 0.12,
                        darkness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 938,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 931,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "park"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 942,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 910,
        columnNumber: 5
    }, this);
}
_c16 = HeroScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "KrishnaBackground");
__turbopack_context__.k.register(_c1, "GoldenBoomTransition");
__turbopack_context__.k.register(_c2, "SceneManager");
__turbopack_context__.k.register(_c3, "CloudSystem");
__turbopack_context__.k.register(_c4, "RainSystem");
__turbopack_context__.k.register(_c5, "SeaWater");
__turbopack_context__.k.register(_c6, "LightningStorm");
__turbopack_context__.k.register(_c7, "OceanMist");
__turbopack_context__.k.register(_c8, "DivineLight");
__turbopack_context__.k.register(_c9, "CameraController");
__turbopack_context__.k.register(_c10, "PrisonCell");
__turbopack_context__.k.register(_c11, "PrisonBars");
__turbopack_context__.k.register(_c12, "Chains");
__turbopack_context__.k.register(_c13, "ParentSilhouettes");
__turbopack_context__.k.register(_c14, "MoonBeam");
__turbopack_context__.k.register(_c15, "DustParticles");
__turbopack_context__.k.register(_c16, "HeroScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/canvas/HeroScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_canvas_HeroScene_tsx_f87e014d._.js.map