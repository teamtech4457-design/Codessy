(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/canvas/MeadowScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MeadowScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Sparkles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature(), _s17 = __turbopack_context__.k.signature(), _s18 = __turbopack_context__.k.signature(), _s19 = __turbopack_context__.k.signature(), _s20 = __turbopack_context__.k.signature(), _s21 = __turbopack_context__.k.signature(), _s22 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/* -------------------- GLOBAL PERFORMANCE TUNING -------------------- */ // How many render frames to skip between heavy update runs.
// Increase this to reduce CPU/GPU usage further (animations remain similar but less smooth).
const FRAME_SKIP = 2;
/* -------------------- 3D Glowing Sparkles Component -------------------- */ const ThreeDGlowingSparkles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s(({ phase })=>{
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Create multiple sparkle objects with different properties
    const sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThreeDGlowingSparkles.useMemo[sparkles]": ()=>{
            return Array.from({
                length: 25
            }).map({
                "ThreeDGlowingSparkles.useMemo[sparkles]": (_, i)=>({
                        id: i,
                        position: [
                            (Math.random() - 0.5) * 20,
                            (Math.random() - 0.5) * 15,
                            (Math.random() - 0.5) * 15 - 5
                        ],
                        scale: 0.3 + Math.random() * 0.5,
                        speed: 0.3 + Math.random() * 0.5,
                        rotationSpeed: 0.2 + Math.random() * 0.4,
                        orbitRadius: 2 + Math.random() * 3,
                        color: [
                            '#ffd700',
                            '#ffed4a',
                            '#fff5cc',
                            '#ffe4b5',
                            '#ffa500'
                        ][Math.floor(Math.random() * 5)],
                        shape: [
                            'star',
                            'diamond',
                            'octahedron'
                        ][Math.floor(Math.random() * 3)]
                    })
            }["ThreeDGlowingSparkles.useMemo[sparkles]"]);
        }
    }["ThreeDGlowingSparkles.useMemo[sparkles]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ThreeDGlowingSparkles.useFrame": ({ clock })=>{
            // Throttle heavy per-child updates to every FRAME_SKIP frames
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (!groupRef.current) return;
            const time = clock.elapsedTime;
            groupRef.current.children.forEach({
                "ThreeDGlowingSparkles.useFrame": (child, i)=>{
                    const sparkle = sparkles[i];
                    if (!sparkle) return;
                    // Circular orbital movement
                    const angle = time * sparkle.speed + i;
                    child.position.x = sparkle.position[0] + Math.cos(angle) * sparkle.orbitRadius;
                    child.position.y = sparkle.position[1] + Math.sin(time * sparkle.speed * 0.5 + i) * 2;
                    child.position.z = sparkle.position[2] + Math.sin(angle) * sparkle.orbitRadius;
                    // Rotation for sparkle effect
                    child.rotation.x = time * sparkle.rotationSpeed;
                    child.rotation.y = time * sparkle.rotationSpeed * 1.5;
                    child.rotation.z = time * sparkle.rotationSpeed * 0.7;
                    // Pulsing scale effect
                    const pulse = Math.sin(time * 2 + i) * 0.2 + 1;
                    child.scale.setScalar(sparkle.scale * pulse);
                }
            }["ThreeDGlowingSparkles.useFrame"]);
        }
    }["ThreeDGlowingSparkles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: sparkles.map((sparkle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: sparkle.position,
                children: [
                    sparkle.shape === 'star' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                        args: [
                            0.4,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 72,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0)),
                    sparkle.shape === 'diamond' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tetrahedronGeometry", {
                        args: [
                            0.4,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 73,
                        columnNumber: 43
                    }, ("TURBOPACK compile-time value", void 0)),
                    sparkle.shape === 'octahedron' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                        args: [
                            0.3,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 74,
                        columnNumber: 46
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: sparkle.color,
                        emissive: sparkle.color,
                        emissiveIntensity: 2,
                        metalness: 0.8,
                        roughness: 0.2,
                        transparent: true,
                        opacity: 0.9
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "qZWwduIud8b3bEOTTk70fuxpGuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c = ThreeDGlowingSparkles;
/* -------------------- Background Image Component -------------------- */ function BackgroundImage() {
    _s1();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundImage.useEffect": ()=>{
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            loader.load('/krishna-playing.jpg.png', {
                "BackgroundImage.useEffect": (texture)=>{
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    // Only set background if we're still in the background phase
                    scene.background = texture;
                }
            }["BackgroundImage.useEffect"], undefined, {
                "BackgroundImage.useEffect": ()=>{
                    // Fallback to black instead of blue during transitions
                    scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000);
                }
            }["BackgroundImage.useEffect"]);
            // Cleanup function to clear background when component unmounts
            return ({
                "BackgroundImage.useEffect": ()=>{
                    scene.background = null;
                }
            })["BackgroundImage.useEffect"];
        }
    }["BackgroundImage.useEffect"], [
        scene
    ]);
    return null;
}
_s1(BackgroundImage, "UhCC8wDD2cMyItT8qLKLhYRbhzM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c1 = BackgroundImage;
/* -------------------- Golden Boom Transition -------------------- */ function GoldenBoomTransition({ onComplete }) {
    _s2();
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
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 157,
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
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffd700",
                        transparent: true,
                        opacity: 0.8,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                count: 150,
                scale: 25,
                size: 3,
                speed: 0.2,
                color: "#ffd700",
                opacity: intensity
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s2(GoldenBoomTransition, "bqQE3fZmCGi+GMaEmPzI7+HmWAo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = GoldenBoomTransition;
/* -------------------- Scene Manager with 15-second Loop -------------------- */ const SceneManager = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s3(({ isReducedMotion })=>{
    _s3();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [currentPhase, setCurrentPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showBoom, setShowBoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBackground, setShowBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loopCount, setLoopCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const sceneDuration = 12 // Scene duration
    ;
    const boomDuration = 2 // Boom transition duration
    ;
    const backgroundDuration = 15 // 15 seconds for background display
    ;
    const loopInterval = sceneDuration + boomDuration + backgroundDuration // Total loop time
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SceneManager.useFrame": (state)=>{
            if (!startTime.current) startTime.current = state.clock.elapsedTime;
            const elapsed = state.clock.elapsedTime - startTime.current;
            const currentLoopTime = elapsed % loopInterval;
            // Calculate which phase we're in during the current loop
            if (currentLoopTime < sceneDuration) {
                // Scene phase
                if (currentPhase !== 0) {
                    setCurrentPhase(0);
                    // Clear background when starting new scenes
                    scene.background = null;
                    setIsTransitioning(true);
                }
                setShowBackground(false);
                setShowBoom(false);
            } else if (currentLoopTime < sceneDuration + boomDuration) {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeDGlowingSparkles, {
                phase: currentPhase
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showBoom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoldenBoomTransition, {
                onComplete: handleBoomComplete
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 255,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0)),
            showBackground && !isTransitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundImage, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !showBoom && !showBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransitionScene, {
                isReducedMotion: isReducedMotion
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showBackground && !isTransitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedBackgroundSparkles, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 269,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {
                phase: currentPhase,
                isReducedMotion: isReducedMotion,
                showBoom: showBoom,
                showBackground: showBackground && !isTransitioning
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
}, "3dFt+lQYPLDWm7fzyDUkkxqvEKU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c3 = SceneManager;
/* -------------------- Enhanced Background Sparkles -------------------- */ const EnhancedBackgroundSparkles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s4(()=>{
    _s4();
    const sparklesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "EnhancedBackgroundSparkles.useFrame": ({ clock })=>{
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (sparklesRef.current) {
                const time = clock.elapsedTime;
                sparklesRef.current.position.y = Math.sin(time * 0.1) * 0.5;
                sparklesRef.current.rotation.y = time * 0.05;
            }
        }
    }["EnhancedBackgroundSparkles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                ref: sparklesRef,
                count: 80,
                scale: [
                    30,
                    20,
                    30
                ],
                size: 3,
                speed: 0.6,
                color: "#ffd700",
                opacity: 1,
                position: [
                    0,
                    0,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                count: 40,
                scale: [
                    25,
                    15,
                    25
                ],
                size: 1.5,
                speed: 0.3,
                color: "#ffffff",
                opacity: 0.7,
                position: [
                    0,
                    5,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
}, "3dyodwp3fw+lWLhhS9S8uJJwvkk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c4 = EnhancedBackgroundSparkles;
/* -------------------- Enhanced Moving Sparkles Component -------------------- */ const MovingSparkles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s5(({ phase, count, scale, size, speed, color, opacity, position, movementType = "circular", speedMultiplier = 1 })=>{
    _s5();
    const sparklesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MovingSparkles.useFrame": ({ clock })=>{
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (!sparklesRef.current) return;
            const time = clock.elapsedTime * speedMultiplier;
            switch(movementType){
                case "circular":
                    sparklesRef.current.position.x = Math.sin(time * 0.4) * 4;
                    sparklesRef.current.position.z = Math.cos(time * 0.4) * 4;
                    sparklesRef.current.rotation.y = time * 0.2;
                    break;
                case "vertical":
                    sparklesRef.current.position.y = Math.sin(time * 0.25) * 3;
                    sparklesRef.current.rotation.x = time * 0.15;
                    break;
                case "diagonal":
                    sparklesRef.current.position.x = Math.sin(time * 0.3) * 3;
                    sparklesRef.current.position.y = Math.cos(time * 0.3) * 2;
                    sparklesRef.current.position.z = Math.sin(time * 0.25) * 3;
                    break;
                case "wave":
                    sparklesRef.current.position.x = Math.sin(time * 0.5) * 3;
                    sparklesRef.current.position.y = Math.sin(time * 0.4) * 2;
                    sparklesRef.current.rotation.z = time * 0.18;
                    break;
                case "spiral":
                    sparklesRef.current.position.x = Math.sin(time * 0.6) * 2;
                    sparklesRef.current.position.y = time % 4 - 2;
                    sparklesRef.current.position.z = Math.cos(time * 0.6) * 2;
                    sparklesRef.current.rotation.y = time * 0.3;
                    break;
                default:
                    sparklesRef.current.position.y = Math.sin(time * 0.2) * 2;
                    break;
            }
        }
    }["MovingSparkles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
        ref: sparklesRef,
        count: count,
        scale: scale,
        size: size,
        speed: speed,
        color: color,
        opacity: opacity,
        position: position
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 385,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "3dyodwp3fw+lWLhhS9S8uJJwvkk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c5 = MovingSparkles;
/* -------------------- Enhanced Transition Sparkles -------------------- */ const TransitionSparkles = ({ isReducedMotion })=>{
    _s6();
    const transitionSparklesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const giantTransitionSparklesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "TransitionSparkles.useFrame": ({ clock })=>{
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            const time = clock.elapsedTime;
            if (transitionSparklesRef.current) {
                transitionSparklesRef.current.position.y = Math.sin(time * 0.4) * 1.5;
                transitionSparklesRef.current.rotation.y = time * 0.25;
            }
            if (giantTransitionSparklesRef.current) {
                giantTransitionSparklesRef.current.position.x = Math.cos(time * 0.2) * 3;
                giantTransitionSparklesRef.current.position.z = Math.sin(time * 0.2) * 3;
            }
        }
    }["TransitionSparkles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                ref: transitionSparklesRef,
                count: isReducedMotion ? 25 : 50,
                scale: 15,
                size: 2.0,
                speed: 0.4,
                color: "#fef3c7"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                ref: giantTransitionSparklesRef,
                count: isReducedMotion ? 8 : 15,
                scale: 20,
                size: 8,
                speed: 0.3,
                color: "#ffd700",
                opacity: 0.9,
                position: [
                    0,
                    4,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MovingSparkles, {
                phase: 1,
                count: isReducedMotion ? 20 : 35,
                scale: 12,
                size: 1.5,
                speed: 0.6,
                color: "#ffd700",
                opacity: 0.6,
                position: [
                    0,
                    2,
                    0
                ],
                movementType: "circular",
                speedMultiplier: 1.5
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s6(TransitionSparkles, "0FwN/Y3NX3tQ2jxYVrPh9iHqItw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c6 = TransitionSparkles;
/* -------------------- Transition Scene -------------------- */ const TransitionScene = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(({ isReducedMotion })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeDEnvironment, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 462,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ButterDrops, {
                isAnimating: true
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 463,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MusicDrops, {
                isAnimating: true
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 464,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingFlowers, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 465,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatingLotus, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 466,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineOrbs, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 467,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlyingBirds, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 468,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkySparkles, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 469,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransitionSparkles, {
                isReducedMotion: isReducedMotion
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 470,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true));
_c7 = TransitionScene;
/* -------------------- Enhanced Sky Sparkles -------------------- */ const SkySparkles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s7(()=>{
    _s7();
    const skySparklesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const giantSkySparklesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SkySparkles.useFrame": ({ clock })=>{
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            const time = clock.elapsedTime;
            if (skySparklesRef.current) {
                skySparklesRef.current.position.y = 6 + Math.sin(time * 0.15) * 1;
                skySparklesRef.current.rotation.y = time * 0.1;
            }
            if (giantSkySparklesRef.current) {
                giantSkySparklesRef.current.position.x = Math.sin(time * 0.08) * 4;
                giantSkySparklesRef.current.position.z = Math.cos(time * 0.08) * 4;
            }
        }
    }["SkySparkles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                ref: skySparklesRef,
                count: 50,
                scale: [
                    22,
                    10,
                    22
                ],
                size: 2.0,
                speed: 0.3,
                position: [
                    0,
                    6,
                    0
                ],
                color: "#fffae0",
                opacity: 0.7
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                ref: giantSkySparklesRef,
                count: 12,
                scale: [
                    25,
                    12,
                    25
                ],
                size: 7,
                speed: 0.2,
                color: "#ffd700",
                opacity: 0.8,
                position: [
                    0,
                    8,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MovingSparkles, {
                phase: 1,
                count: 30,
                scale: [
                    20,
                    8,
                    20
                ],
                size: 1.5,
                speed: 0.5,
                color: "#ffd700",
                opacity: 0.5,
                position: [
                    0,
                    8,
                    0
                ],
                movementType: "vertical"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 521,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
}, "hzNS/p4DIk8KCOyW75+cED8OhuU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c8 = SkySparkles;
/* -------------------- 3D Environment -------------------- */ const ThreeDEnvironment = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s8(()=>{
    _s8();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ThreeDEnvironment.useFrame": ({ clock })=>{
            // throttle a bit
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (!ref.current) return;
            const t = clock.elapsedTime;
            ref.current.rotation.y = Math.sin(t * 0.05) * 0.2;
            ref.current.position.y = Math.sin(t * 0.1) * 0.1;
        }
    }["ThreeDEnvironment.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Terrain, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingTemples3D, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 554,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ForestEnvironment, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 555,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineLights3D, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowingStream, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 552,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "BXzRBxz75FfREtx+t+RVHwcAvlY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c9 = ThreeDEnvironment;
/* -------------------- Terrain -------------------- */ const Terrain = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s9(()=>{
    _s9();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Terrain.useMemo[geom]": ()=>{
            const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](25, 25, 16, 16);
            const pos = g.attributes.position.array;
            for(let i = 0; i < pos.length; i += 3){
                const x = pos[i], z = pos[i + 2];
                pos[i + 1] = Math.sin(x * 0.2) * Math.cos(z * 0.2) * 0.6 + Math.sin(x * 0.5 + z * 0.3) * 0.2;
            }
            g.computeVertexNormals();
            return g;
        }
    }["Terrain.useMemo[geom]"], []);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Terrain.useFrame": ({ clock })=>{
            // throttle vertex updates to be less frequent for performance
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (!ref.current) return;
            const t = clock.elapsedTime, p = geom.attributes.position.array;
            for(let i = 0; i < p.length; i += 3)p[i + 1] += Math.sin(t * 0.3 + p[i] * 0.1 + p[i + 2] * 0.1) * 0.003;
            geom.attributes.position.needsUpdate = true;
        }
    }["Terrain.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        geometry: geom,
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        position: [
            0,
            -2,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
            color: "#2d5016",
            roughness: 0.8,
            metalness: 0.1
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/MeadowScene.tsx",
            lineNumber: 592,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 591,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "WeCM2qOglpXkvBWopJAj6Qb+8FY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c10 = Terrain;
/* -------------------- Forest (optimized for mobile) -------------------- */ const ForestEnvironment = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s10(()=>{
    _s10();
    // small memoized geometry/material to avoid repeated allocations
    const trunkGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ForestEnvironment.useMemo[trunkGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.15, 0.2, 1.5, 6)
    }["ForestEnvironment.useMemo[trunkGeom]"], []);
    const foliageGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ForestEnvironment.useMemo[foliageGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.8, 6, 5)
    }["ForestEnvironment.useMemo[foliageGeom]"], []);
    const trunkMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ForestEnvironment.useMemo[trunkMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: '#8B4513'
            })
    }["ForestEnvironment.useMemo[trunkMat]"], []);
    const foliageMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ForestEnvironment.useMemo[foliageMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: '#228B22'
            })
    }["ForestEnvironment.useMemo[foliageMat]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: Array.from({
            length: 5
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    Math.cos(i) * 6,
                    0,
                    Math.sin(i) * 6
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            1,
                            0
                        ],
                        geometry: trunkGeom,
                        material: trunkMat
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 609,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            2,
                            0
                        ],
                        geometry: foliageGeom,
                        material: foliageMat
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 610,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 608,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 606,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "JueVyi98ODlZY20PkuM7mQrklxg="));
_c11 = ForestEnvironment;
/* -------------------- Flying Birds (mobile optimized) -------------------- */ const FlyingBirds = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s11(()=>{
    _s11();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const birds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlyingBirds.useMemo[birds]": ()=>Array.from({
                length: 4
            }).map({
                "FlyingBirds.useMemo[birds]": (_, i)=>({
                        angle: i / 4 * Math.PI * 2,
                        height: 4 + Math.random() * 2,
                        speed: 0.2 + Math.random() * 0.15,
                        radius: 6 + Math.random() * 1
                    })
            }["FlyingBirds.useMemo[birds]"])
    }["FlyingBirds.useMemo[birds]"], []);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FlyingBirds.useFrame": ({ clock })=>{
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (!ref.current || !ref.current.children.length) return;
            const t = clock.elapsedTime;
            ref.current.children.forEach({
                "FlyingBirds.useFrame": (bird, i)=>{
                    const d = birds[i];
                    if (!d) return;
                    const { radius, speed, angle, height } = d;
                    bird.position.x = Math.cos(t * speed + angle) * radius;
                    bird.position.z = Math.sin(t * speed + angle) * radius;
                    bird.position.y = height + Math.sin(t * 1.5 + i) * 0.2;
                }
            }["FlyingBirds.useFrame"]);
        }
    }["FlyingBirds.useFrame"]);
    // reuse a simple cone geometry and material for all birds
    const coneGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlyingBirds.useMemo[coneGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](0.08, 0.2, 6)
    }["FlyingBirds.useMemo[coneGeom]"], []);
    const birdMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlyingBirds.useMemo[birdMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: '#ffffff'
            })
    }["FlyingBirds.useMemo[birdMat]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        children: birds.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: coneGeom,
                material: birdMat
            }, i, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 655,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 653,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "SlDvHEq2NmMvh/56aXpZ5EfRZsk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c12 = FlyingBirds;
/* -------------------- Floating Temples (mobile optimized) -------------------- */ const FloatingTemples3D = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s12(()=>{
    _s12();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const temples = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingTemples3D.useMemo[temples]": ()=>Array.from({
                length: 4
            }).map({
                "FloatingTemples3D.useMemo[temples]": (_, i)=>{
                    const a = i / 4 * Math.PI * 2, r = 8 + Math.random() * 3;
                    return {
                        pos: [
                            Math.cos(a) * r,
                            1.5 + Math.random() * 2,
                            Math.sin(a) * r
                        ],
                        s: 0.3 + Math.random() * 0.2
                    };
                }
            }["FloatingTemples3D.useMemo[temples]"])
    }["FloatingTemples3D.useMemo[temples]"], []);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FloatingTemples3D.useFrame": ({ clock })=>{
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (!ref.current) return;
            const t = clock.elapsedTime;
            ref.current.children.forEach({
                "FloatingTemples3D.useFrame": (temple, i)=>{
                    const d = temples[i];
                    if (!d) return;
                    temple.position.y = d.pos[1] + Math.sin(t * 0.2 + i) * 0.3;
                }
            }["FloatingTemples3D.useFrame"]);
        }
    }["FloatingTemples3D.useFrame"]);
    // memoized small geometries/materials for temple parts
    const baseGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingTemples3D.useMemo[baseGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](1, 0.2, 1)
    }["FloatingTemples3D.useMemo[baseGeom]"], []);
    const midGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingTemples3D.useMemo[midGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.8, 1, 0.8)
    }["FloatingTemples3D.useMemo[midGeom]"], []);
    const topGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingTemples3D.useMemo[topGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](0.6, 0.8, 6)
    }["FloatingTemples3D.useMemo[topGeom]"], []);
    const brownMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingTemples3D.useMemo[brownMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: '#8B4513'
            })
    }["FloatingTemples3D.useMemo[brownMat]"], []);
    const goldMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingTemples3D.useMemo[goldMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: '#d4af37'
            })
    }["FloatingTemples3D.useMemo[goldMat]"], []);
    const topMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingTemples3D.useMemo[topMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: '#b8860b'
            })
    }["FloatingTemples3D.useMemo[topMat]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        children: temples.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: t.pos,
                scale: t.s,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        geometry: baseGeom,
                        material: brownMat
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 694,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0.6,
                            0
                        ],
                        geometry: midGeom,
                        material: goldMat
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 695,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            1.4,
                            0
                        ],
                        geometry: topGeom,
                        material: topMat
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 696,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 693,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 691,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "/z5NlNVkqJ1D8F3I6XXUNOZx9X8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c13 = FloatingTemples3D;
/* -------------------- Lights, Stream, Camera -------------------- */ const DivineLights3D = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: "#ffd87a",
                intensity: 2,
                distance: 15,
                position: [
                    6,
                    6,
                    6
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 706,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: "#9fc7ff",
                intensity: 1.5,
                distance: 12,
                position: [
                    -6,
                    4,
                    -6
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 707,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 705,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c14 = DivineLights3D;
const FlowingStream = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s13(()=>{
    _s13();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlowingStream.useMemo[geom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](6, 15, 12, 12)
    }["FlowingStream.useMemo[geom]"], []);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FlowingStream.useFrame": ({ clock })=>{
            // throttle vertex updates to reduce cost
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (!ref.current) return;
            const t = clock.elapsedTime, p = geom.attributes.position.array;
            for(let i = 0; i < p.length; i += 3)p[i + 1] = Math.sin(p[i] * 0.5 + t * 1.5) * 0.08;
            geom.attributes.position.needsUpdate = true;
        }
    }["FlowingStream.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        geometry: geom,
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        position: [
            0,
            -1.8,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
            color: "#1e90ff",
            transparent: true,
            opacity: 0.6,
            roughness: 0.1,
            metalness: 0.8
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/MeadowScene.tsx",
            lineNumber: 728,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 727,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "WeCM2qOglpXkvBWopJAj6Qb+8FY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c15 = FlowingStream;
const CameraController = ({ isReducedMotion, phase, showBoom, showBackground })=>{
    _s14();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraController.useFrame": ({ clock })=>{
            if (!camera) return;
            if (!start.current) start.current = clock.elapsedTime;
            const t = clock.elapsedTime - start.current;
            let target;
            if (showBoom) {
                // During boom transition, pull back camera for dramatic effect
                target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 5, 20);
            } else if (showBackground) {
                // Final position with background
                target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 6, 12);
            } else {
                // Normal scene transitions
                target = t < 4 ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 8, 15) : t < 8 ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 5, 10) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 3, 6);
            }
            camera.position.lerp(target, 0.05);
            camera.lookAt(0, 0, 0);
        }
    }["CameraController.useFrame"]);
    return null;
};
_s14(CameraController, "TgsGfwiuMAHRwG7+dOHrCz1jgNo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c16 = CameraController;
function MeadowScene({ isReducedMotion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        camera: {
            position: [
                0,
                8,
                15
            ],
            fov: 45
        },
        style: {
            background: 'transparent'
        },
        gl: {
            antialias: false,
            powerPreference: 'high-performance',
            alpha: true
        },
        dpr: [
            1,
            1
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneManager, {
                isReducedMotion: isReducedMotion
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 778,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "sunset"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 779,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                multisampling: 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                        intensity: 0.5,
                        luminanceThreshold: 0.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 781,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                        eskil: false,
                        offset: 0.1,
                        darkness: 0.3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 782,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 780,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 768,
        columnNumber: 5
    }, this);
}
_c17 = MeadowScene;
/* -------------------- Reusable Particles (mobile optimized) -------------------- */ function ButterDrops({ isAnimating }) {
    _s15();
    return useAnimatedSphere(isAnimating, [
        1.5,
        0.8,
        1
    ], '#fef3c7', 0.12);
}
_s15(ButterDrops, "NPbb8pimxBWvn75Xz7KUwt7q44k=", false, function() {
    return [
        useAnimatedSphere
    ];
});
_c18 = ButterDrops;
function MusicDrops({ isAnimating }) {
    _s16();
    return useCircularSpheres(isAnimating, 4, 1.5, '#fbbf24');
}
_s16(MusicDrops, "nr0SJrosTR713BdLjhwVwRjk6xg=", false, function() {
    return [
        useCircularSpheres
    ];
});
_c19 = MusicDrops;
const FloatingFlowers = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s17(()=>{
    _s17();
    return useFloatingMeshes(6, 'hsl(50, 70%, 60%)');
}, "bvp+/c4BtIqxwottm+3qLdYxJws=", false, function() {
    return [
        useFloatingMeshes
    ];
}));
_c20 = FloatingFlowers;
const RotatingLotus = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s18(()=>{
    _s18();
    return useFloatingMeshes(4, '#ff6b6b', 3);
}, "bvp+/c4BtIqxwottm+3qLdYxJws=", false, function() {
    return [
        useFloatingMeshes
    ];
}));
_c21 = RotatingLotus;
const DivineOrbs = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s19(()=>{
    _s19();
    return useFloatingMeshes(3, '#ffd700', 2);
}, "bvp+/c4BtIqxwottm+3qLdYxJws=", false, function() {
    return [
        useFloatingMeshes
    ];
}));
_c22 = DivineOrbs;
/* -------------------- Utility Hooks (mobile optimized) -------------------- */ const useAnimatedSphere = (animate, pos, color, size)=>{
    _s20();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "useAnimatedSphere.useFrame": ({ clock })=>{
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (animate && ref.current) ref.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.15 + 0.8;
        }
    }["useAnimatedSphere.useFrame"]);
    // reuse sphere geometry and material to avoid reallocation
    const sphereGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAnimatedSphere.useMemo[sphereGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](size, 12, 12)
    }["useAnimatedSphere.useMemo[sphereGeom]"], [
        size
    ]);
    const mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAnimatedSphere.useMemo[mat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color
            })
    }["useAnimatedSphere.useMemo[mat]"], [
        color
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        position: pos,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            geometry: sphereGeom,
            material: mat
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/MeadowScene.tsx",
            lineNumber: 815,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 814,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s20(useAnimatedSphere, "3hM1fj68E73AOFdu3UCGG9E3eMs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
const useCircularSpheres = (animate, count, r, color)=>{
    _s21();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "useCircularSpheres.useFrame": ({ clock })=>{
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (!ref.current || !animate) return;
            const t = clock.elapsedTime;
            ref.current.children.forEach({
                "useCircularSpheres.useFrame": (d, i)=>{
                    const a = i / count * Math.PI * 2;
                    d.position.set(Math.cos(a) * r, Math.sin(t + i) * 0.2 + 0.8, Math.sin(a) * r);
                }
            }["useCircularSpheres.useFrame"]);
        }
    }["useCircularSpheres.useFrame"]);
    const geom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCircularSpheres.useMemo[geom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.06, 8, 8)
    }["useCircularSpheres.useMemo[geom]"], []);
    const mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCircularSpheres.useMemo[mat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color
            })
    }["useCircularSpheres.useMemo[mat]"], [
        color
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        children: Array.from({
            length: count
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geom,
                material: mat
            }, i, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 838,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 836,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s21(useCircularSpheres, "PyubXUVB95mwnxaRYNjjLE5Bzzs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
const useFloatingMeshes = (count, color, radius = 0)=>{
    _s22();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "useFloatingMeshes.useFrame": ({ clock })=>{
            frameRef.current = (frameRef.current + 1) % FRAME_SKIP;
            if (frameRef.current !== 0) return;
            if (!ref.current) return;
            const t = clock.elapsedTime;
            ref.current.children.forEach({
                "useFloatingMeshes.useFrame": (m, i)=>{
                    m.position.y = 0.8 + Math.sin(t * 0.6 + i) * 0.2;
                }
            }["useFloatingMeshes.useFrame"]);
        }
    }["useFloatingMeshes.useFrame"]);
    const sphereGeom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFloatingMeshes.useMemo[sphereGeom]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.2, 6, 6)
    }["useFloatingMeshes.useMemo[sphereGeom]"], []);
    const mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFloatingMeshes.useMemo[mat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color
            })
    }["useFloatingMeshes.useMemo[mat]"], [
        color
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        children: Array.from({
            length: count
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: radius ? [
                    Math.cos(i) * radius,
                    0.8,
                    Math.sin(i) * radius
                ] : [
                    (i - count / 2) * 1.5,
                    0.8,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                        object: sphereGeom
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 862,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 864,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 861,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 859,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s22(useFloatingMeshes, "3hM1fj68E73AOFdu3UCGG9E3eMs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22;
__turbopack_context__.k.register(_c, "ThreeDGlowingSparkles");
__turbopack_context__.k.register(_c1, "BackgroundImage");
__turbopack_context__.k.register(_c2, "GoldenBoomTransition");
__turbopack_context__.k.register(_c3, "SceneManager");
__turbopack_context__.k.register(_c4, "EnhancedBackgroundSparkles");
__turbopack_context__.k.register(_c5, "MovingSparkles");
__turbopack_context__.k.register(_c6, "TransitionSparkles");
__turbopack_context__.k.register(_c7, "TransitionScene");
__turbopack_context__.k.register(_c8, "SkySparkles");
__turbopack_context__.k.register(_c9, "ThreeDEnvironment");
__turbopack_context__.k.register(_c10, "Terrain");
__turbopack_context__.k.register(_c11, "ForestEnvironment");
__turbopack_context__.k.register(_c12, "FlyingBirds");
__turbopack_context__.k.register(_c13, "FloatingTemples3D");
__turbopack_context__.k.register(_c14, "DivineLights3D");
__turbopack_context__.k.register(_c15, "FlowingStream");
__turbopack_context__.k.register(_c16, "CameraController");
__turbopack_context__.k.register(_c17, "MeadowScene");
__turbopack_context__.k.register(_c18, "ButterDrops");
__turbopack_context__.k.register(_c19, "MusicDrops");
__turbopack_context__.k.register(_c20, "FloatingFlowers");
__turbopack_context__.k.register(_c21, "RotatingLotus");
__turbopack_context__.k.register(_c22, "DivineOrbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/MeadowScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/canvas/MeadowScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_canvas_MeadowScene_tsx_50b54896._.js.map