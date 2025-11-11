(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/canvas/MeadowScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/canvas/MeadowScene.tsx
__turbopack_context__.s([
    "default",
    ()=>MeadowScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Sparkles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SceneManager({ isReducedMotion }) {
    _s();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [currentPhase, setCurrentPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 0: Transition (10s), 1: Static background
    ;
    const animationStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SceneManager.useFrame": (state)=>{
            if (animationStartTime.current === 0) {
                animationStartTime.current = state.clock.elapsedTime;
            }
            const elapsed = state.clock.elapsedTime - animationStartTime.current;
            // After 10 seconds, switch to static background
            if (elapsed > 10 && currentPhase === 0) {
                setCurrentPhase(1);
            }
        }
    }["SceneManager.useFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneManager.useEffect": ()=>{
            // Set background to Krishna image after transition
            if (currentPhase === 1) {
                const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
                loader.load('/krishna-playing.jpg.png', {
                    "SceneManager.useEffect": (texture)=>{
                        scene.background = texture;
                        texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    }
                }["SceneManager.useEffect"], undefined, {
                    "SceneManager.useEffect": (error)=>{
                        console.error('Error loading texture:', error);
                        scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x1a237e);
                    }
                }["SceneManager.useEffect"]);
            } else {
                scene.background = null;
            }
        }
    }["SceneManager.useEffect"], [
        currentPhase,
        scene
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            currentPhase === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransitionEnvironment, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ButterDrops, {
                        isAnimating: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MusicDrops, {
                        isAnimating: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GopiDrops, {
                        isAnimating: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineDrops, {
                        isAnimating: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FallingButterDrops, {
                        isAnimating: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SprinkleDrops, {
                        isAnimating: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransitionSparkles, {
                        isReducedMotion: isReducedMotion
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ButterDrops, {
                isAnimating: currentPhase === 0
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MusicDrops, {
                isAnimating: currentPhase === 0
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {
                isReducedMotion: isReducedMotion,
                phase: currentPhase
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SceneManager, "VdeIuRHeXO+Tsawj/C7tx4Rq6Vs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = SceneManager;
// NEW: Sprinkle Drops Component - Only shows during 10-second transition
function SprinkleDrops({ isAnimating }) {
    _s1();
    const sprinklesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sprinkleCount = 50;
    const { positions, colors, sizes, velocities } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SprinkleDrops.useMemo": ()=>{
            const positions = new Float32Array(sprinkleCount * 3);
            const colors = new Float32Array(sprinkleCount * 3);
            const sizes = new Float32Array(sprinkleCount);
            const velocities = new Float32Array(sprinkleCount * 3);
            for(let i = 0; i < sprinkleCount; i++){
                const i3 = i * 3;
                // Start positions - spread around the scene
                positions[i3] = (Math.random() - 0.5) * 25;
                positions[i3 + 1] = Math.random() * 15 + 5; // Start above the scene
                positions[i3 + 2] = (Math.random() - 0.5) * 20;
                // Random velocities - falling with some horizontal movement
                velocities[i3] = (Math.random() - 0.5) * 0.02; // X velocity
                velocities[i3 + 1] = -0.05 - Math.random() * 0.03; // Y velocity (falling)
                velocities[i3 + 2] = (Math.random() - 0.5) * 0.02; // Z velocity
                // Color variations - golden, white, and light blue sprinkles
                const colorType = Math.random();
                if (colorType < 0.6) {
                    // Golden sprinkles (60%)
                    colors[i3] = 1.0;
                    colors[i3 + 1] = 0.9;
                    colors[i3 + 2] = 0.3;
                } else if (colorType < 0.8) {
                    // White sprinkles (20%)
                    colors[i3] = 1.0;
                    colors[i3 + 1] = 1.0;
                    colors[i3 + 2] = 1.0;
                } else {
                    // Light blue sprinkles (20%)
                    colors[i3] = 0.6;
                    colors[i3 + 1] = 0.8;
                    colors[i3 + 2] = 1.0;
                }
                // Random sizes
                sizes[i] = Math.random() * 0.04 + 0.02;
            }
            return {
                positions,
                colors,
                sizes,
                velocities
            };
        }
    }["SprinkleDrops.useMemo"], [
        sprinkleCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SprinkleDrops.useFrame": (state)=>{
            if (sprinklesRef.current?.geometry && isAnimating) {
                const time = state.clock.elapsedTime;
                const positions = sprinklesRef.current.geometry.attributes.position.array;
                for(let i = 0; i < sprinkleCount; i++){
                    const i3 = i * 3;
                    // Apply velocity
                    positions[i3] += velocities[i3];
                    positions[i3 + 1] += velocities[i3 + 1];
                    positions[i3 + 2] += velocities[i3 + 2];
                    // Add subtle swaying motion
                    positions[i3] += Math.sin(time * 3 + i) * 0.002;
                    positions[i3 + 2] += Math.cos(time * 2 + i) * 0.002;
                    // Add slight rotation effect
                    const rotation = time * 0.5 + i;
                    const radius = 0.1;
                    positions[i3] += Math.sin(rotation) * radius * 0.01;
                    positions[i3 + 2] += Math.cos(rotation) * radius * 0.01;
                    // Reset sprinkles that fall below the scene
                    if (positions[i3 + 1] < -5) {
                        positions[i3] = (Math.random() - 0.5) * 25;
                        positions[i3 + 1] = Math.random() * 10 + 15; // Reset to top
                        positions[i3 + 2] = (Math.random() - 0.5) * 20;
                        // Reset velocity with some variation
                        velocities[i3] = (Math.random() - 0.5) * 0.02;
                        velocities[i3 + 1] = -0.05 - Math.random() * 0.03;
                        velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
                    }
                    // Flickering effect - random opacity changes
                    const material = sprinklesRef.current.material;
                    if (Math.random() > 0.95) {
                        material.opacity = 0.3 + Math.random() * 0.5;
                    }
                }
                sprinklesRef.current.geometry.attributes.position.needsUpdate = true;
            }
        }
    }["SprinkleDrops.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: sprinklesRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        count: sprinkleCount,
                        array: positions,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-color",
                        count: sprinkleCount,
                        array: colors,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-size",
                        count: sprinkleCount,
                        array: sizes,
                        itemSize: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.06,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s1(SprinkleDrops, "fWjmGLVsLE5PXb3EnjKj6r5S4W0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = SprinkleDrops;
// Enhanced Transition Environment with animated elements
function TransitionEnvironment() {
    _s2();
    const environmentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "TransitionEnvironment.useFrame": (state)=>{
            if (environmentRef.current) {
                const time = state.clock.elapsedTime;
                // Gentle overall movement
                environmentRef.current.rotation.y = Math.sin(time * 0.1) * 0.1;
            }
        }
    }["TransitionEnvironment.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: environmentRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedGround, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingTemples, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineLights, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_s2(TransitionEnvironment, "8iDrtWGoogruFDMDtz5bFqHoniY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = TransitionEnvironment;
function AnimatedGround() {
    _s3();
    const groundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "AnimatedGround.useFrame": (state)=>{
            if (groundRef.current) {
                const time = state.clock.elapsedTime;
                // Subtle pulsing effect
                const material = groundRef.current.material;
                material.emissiveIntensity = 0.1 + Math.sin(time * 2) * 0.05;
            }
        }
    }["AnimatedGround.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: groundRef,
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        position: [
            0,
            -1,
            0
        ],
        receiveShadow: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    20,
                    20,
                    32,
                    32
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#2d5016",
                emissive: "#1a3a08",
                roughness: 0.8,
                metalness: 0.1
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_s3(AnimatedGround, "TDznZoPmjGRmZwmBK5sGEldA/cs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = AnimatedGround;
function FloatingTemples() {
    _s4();
    const templesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const templeCount = 4;
    const temples = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingTemples.useMemo[temples]": ()=>{
            const templeData = [];
            for(let i = 0; i < templeCount; i++){
                const angle = i / templeCount * Math.PI * 2;
                const radius = 8;
                templeData.push({
                    position: [
                        Math.cos(angle) * radius,
                        Math.random() * 2 + 1,
                        Math.sin(angle) * radius
                    ],
                    scale: 0.3 + Math.random() * 0.2
                });
            }
            return templeData;
        }
    }["FloatingTemples.useMemo[temples]"], [
        templeCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FloatingTemples.useFrame": (state)=>{
            if (templesRef.current?.children) {
                const time = state.clock.elapsedTime;
                templesRef.current.children.forEach({
                    "FloatingTemples.useFrame": (temple, index)=>{
                        // Gentle floating motion
                        temple.position.y = temples[index].position[1] + Math.sin(time * 0.5 + index) * 0.3;
                        temple.rotation.y = time * 0.2 + index;
                    }
                }["FloatingTemples.useFrame"]);
            }
        }
    }["FloatingTemples.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: templesRef,
        children: temples.map((temple, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: temple.position,
                scale: temple.scale,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    1,
                                    2,
                                    1
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#d4af37",
                                emissive: "#d4af37",
                                emissiveIntensity: 0.1
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            1.5,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                                args: [
                                    0.8,
                                    1,
                                    4
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#b8860b"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 300,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
}
_s4(FloatingTemples, "nJdZ2yXgDXeQFJn16l4LwLFIbZA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = FloatingTemples;
function DivineLights() {
    _s5();
    const lightsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DivineLights.useFrame": (state)=>{
            if (lightsRef.current) {
                const time = state.clock.elapsedTime;
                lightsRef.current.rotation.y = time * 0.1;
            }
        }
    }["DivineLights.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: lightsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: "#ffd87a",
                intensity: 2,
                distance: 15,
                position: [
                    5,
                    5,
                    5
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: "#9fc7ff",
                intensity: 1.5,
                distance: 12,
                position: [
                    -5,
                    3,
                    -5
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
_s5(DivineLights, "WMmacxsShUEEgtBOSL+ud3ruU2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c5 = DivineLights;
function TransitionSparkles({ isReducedMotion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
        count: isReducedMotion ? 30 : 80,
        scale: 20,
        size: 2,
        speed: isReducedMotion ? 0.2 : 1,
        color: "#fef3c7"
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, this);
}
_c6 = TransitionSparkles;
// Updated ButterDrops with phase control
function ButterDrops({ isAnimating }) {
    _s6();
    const butterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const butterJarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ButterDrops.useFrame": (state)=>{
            if (butterRef.current && butterJarRef.current && isAnimating) {
                const time = state.clock.elapsedTime;
                // Gentle floating up and down for butter
                butterRef.current.position.y = Math.sin(time * 1.5) * 0.2 + 1;
                // Butter jar subtle floating
                butterJarRef.current.position.y = Math.sin(time * 0.8) * 0.1 + 2;
            }
        }
    }["ButterDrops.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: butterRef,
                position: [
                    2,
                    1,
                    1
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                            args: [
                                0.15,
                                16,
                                16
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#fef3c7",
                            emissive: "#fef3c7",
                            emissiveIntensity: 0.2
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                    lineNumber: 361,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: butterJarRef,
                position: [
                    -2,
                    2,
                    1
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.25,
                                    0.2,
                                    0.5,
                                    16
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#a16207"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0.25,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.2,
                                    16,
                                    16
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#fef3c7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s6(ButterDrops, "2j/dwcBQx/PVRQ5GTml28d3wk/4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c7 = ButterDrops;
// Updated MusicDrops with phase control
function MusicDrops({ isAnimating }) {
    _s7();
    const dropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropCount = 6;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MusicDrops.useFrame": (state)=>{
            if (dropsRef.current && isAnimating) {
                const time = state.clock.elapsedTime;
                dropsRef.current.children.forEach({
                    "MusicDrops.useFrame": (drop, index)=>{
                        const angle = index / dropCount * Math.PI * 2;
                        const radius = 2.5;
                        drop.position.x = Math.cos(angle) * radius;
                        drop.position.z = Math.sin(angle) * radius;
                        // Gentle floating up and down
                        drop.position.y = Math.sin(time * 1.2 + index * 0.5) * 0.3 + 1;
                        // Subtle scale pulsing
                        const pulse = Math.sin(time * 2 + index) * 0.1 + 0.9;
                        drop.scale.setScalar(pulse);
                    }
                }["MusicDrops.useFrame"]);
            }
        }
    }["MusicDrops.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: dropsRef,
        children: Array.from({
            length: dropCount
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.08,
                            12,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#fbbf24",
                        emissive: "#f59e0b",
                        emissiveIntensity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 417,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 415,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, this);
}
_s7(MusicDrops, "+eagBMRs02MxceSr7MWPDA+TjJA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c8 = MusicDrops;
// Updated GopiDrops with phase control
function GopiDrops({ isAnimating }) {
    _s8();
    const dropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropCount = 4;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "GopiDrops.useFrame": (state)=>{
            if (dropsRef.current && isAnimating) {
                const time = state.clock.elapsedTime;
                dropsRef.current.children.forEach({
                    "GopiDrops.useFrame": (drop, index)=>{
                        const angle = index / dropCount * Math.PI * 2 + time * 0.2;
                        const radius = 3;
                        drop.position.x = Math.cos(angle) * radius;
                        drop.position.z = Math.sin(angle) * radius;
                        // Gentle floating
                        drop.position.y = Math.sin(time * 1 + index * 0.7) * 0.2 + 0.5;
                    }
                }["GopiDrops.useFrame"]);
            }
        }
    }["GopiDrops.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: dropsRef,
        children: Array.from({
            length: dropCount
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.12,
                            12,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: `hsl(${i * 90}, 70%, 60%)`
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 453,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, this);
}
_s8(GopiDrops, "+eagBMRs02MxceSr7MWPDA+TjJA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c9 = GopiDrops;
// Updated DivineDrops with phase control
function DivineDrops({ isAnimating }) {
    _s9();
    const dropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropCount = 30;
    const { positions, colors, sizes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DivineDrops.useMemo": ()=>{
            const positions = new Float32Array(dropCount * 3);
            const colors = new Float32Array(dropCount * 3);
            const sizes = new Float32Array(dropCount);
            for(let i = 0; i < dropCount; i++){
                const i3 = i * 3;
                // Spread drops around the scene
                positions[i3] = (Math.random() - 0.5) * 15;
                positions[i3 + 1] = Math.random() * 8;
                positions[i3 + 2] = (Math.random() - 0.5) * 10;
                // Golden divine colors
                colors[i3] = 1.0;
                colors[i3 + 1] = 0.9;
                colors[i3 + 2] = 0.3;
                // Random sizes
                sizes[i] = Math.random() * 0.08 + 0.03;
            }
            return {
                positions,
                colors,
                sizes
            };
        }
    }["DivineDrops.useMemo"], [
        dropCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DivineDrops.useFrame": (state)=>{
            if (dropsRef.current?.geometry && isAnimating) {
                const time = state.clock.elapsedTime;
                const positions = dropsRef.current.geometry.attributes.position.array;
                for(let i = 0; i < dropCount; i++){
                    const i3 = i * 3;
                    // Gentle floating motion
                    positions[i3 + 1] += Math.sin(time * 0.5 + i) * 0.005;
                    // Reset drops that go too high
                    if (positions[i3 + 1] > 8) {
                        positions[i3 + 1] = 0;
                        positions[i3] = (Math.random() - 0.5) * 15;
                        positions[i3 + 2] = (Math.random() - 0.5) * 10;
                    }
                }
                dropsRef.current.geometry.attributes.position.needsUpdate = true;
            }
        }
    }["DivineDrops.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: dropsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        count: dropCount,
                        array: positions,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-color",
                        count: dropCount,
                        array: colors,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-size",
                        count: dropCount,
                        array: sizes,
                        itemSize: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.1,
                vertexColors: true,
                transparent: true,
                opacity: 0.7,
                sizeAttenuation: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 516,
        columnNumber: 5
    }, this);
}
_s9(DivineDrops, "NTyY1tJmtLRiZLSv0/kangpXusU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c10 = DivineDrops;
// Updated FallingButterDrops with phase control
function FallingButterDrops({ isAnimating }) {
    _s10();
    const dropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropCount = 20;
    const { positions, colors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FallingButterDrops.useMemo": ()=>{
            const positions = new Float32Array(dropCount * 3);
            const colors = new Float32Array(dropCount * 3);
            for(let i = 0; i < dropCount; i++){
                const i3 = i * 3;
                // Start positions for falling drops
                positions[i3] = (Math.random() - 0.5) * 12;
                positions[i3 + 1] = Math.random() * 10 + 5;
                positions[i3 + 2] = (Math.random() - 0.5) * 8;
                // Butter yellow colors
                colors[i3] = 1.0;
                colors[i3 + 1] = 0.95;
                colors[i3 + 2] = 0.6;
            }
            return {
                positions,
                colors
            };
        }
    }["FallingButterDrops.useMemo"], [
        dropCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FallingButterDrops.useFrame": (state)=>{
            if (dropsRef.current?.geometry && isAnimating) {
                const time = state.clock.elapsedTime;
                const positions = dropsRef.current.geometry.attributes.position.array;
                for(let i = 0; i < dropCount; i++){
                    const i3 = i * 3;
                    // Falling motion
                    positions[i3 + 1] -= 0.05;
                    // Gentle side-to-side sway
                    positions[i3] += Math.sin(time * 2 + i) * 0.01;
                    // Reset drops that fall too low
                    if (positions[i3 + 1] < -2) {
                        positions[i3 + 1] = Math.random() * 5 + 8;
                        positions[i3] = (Math.random() - 0.5) * 12;
                        positions[i3 + 2] = (Math.random() - 0.5) * 8;
                    }
                }
                dropsRef.current.geometry.attributes.position.needsUpdate = true;
            }
        }
    }["FallingButterDrops.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: dropsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        count: dropCount,
                        array: positions,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-color",
                        count: dropCount,
                        array: colors,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 603,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.05,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 617,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 602,
        columnNumber: 5
    }, this);
}
_s10(FallingButterDrops, "zgN7vMOsNyhFwz11NxBjVGVHnJk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c11 = FallingButterDrops;
// Camera Controller for 10-second transition
function CameraController({ isReducedMotion, phase }) {
    _s11();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const animationStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraController.useFrame": (state)=>{
            if (isReducedMotion) {
                camera.position.set(0, 3, 10);
                camera.lookAt(0, 1, 0);
                return;
            }
            if (animationStartTime.current === 0) {
                animationStartTime.current = state.clock.elapsedTime;
            }
            const elapsed = state.clock.elapsedTime - animationStartTime.current;
            if (phase === 0) {
                // 10-second transition phase - dynamic camera movement
                if (elapsed < 3) {
                    // First 3 seconds - wide overview
                    camera.position.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 6, 12), 0.1);
                } else if (elapsed < 7) {
                    // Middle 4 seconds - medium view
                    camera.position.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 4, 8), 0.1);
                } else {
                    // Last 3 seconds - close view
                    camera.position.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 2, 6), 0.1);
                }
                camera.lookAt(0, 1, 0);
            } else {
                // Static phase - fixed position
                camera.position.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 3, 10), 0.05);
                camera.lookAt(0, 1, 0);
            }
        }
    }["CameraController.useFrame"]);
    return null;
}
_s11(CameraController, "u903Kbn0iScjdWA/tuYFtkkG1YY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c12 = CameraController;
function MeadowScene({ isReducedMotion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        camera: {
            position: [
                0,
                6,
                12
            ],
            fov: 50
        },
        style: {
            background: 'transparent'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneManager, {
                isReducedMotion: isReducedMotion
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 675,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "sunset"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                enableZoom: false,
                enablePan: false,
                maxPolarAngle: Math.PI / 2,
                minPolarAngle: Math.PI / 6,
                enabled: false
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                        intensity: 0.6,
                        luminanceThreshold: 0.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 688,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                        eskil: false,
                        offset: 0.1,
                        darkness: 0.4
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                        lineNumber: 689,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/MeadowScene.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/MeadowScene.tsx",
        lineNumber: 671,
        columnNumber: 5
    }, this);
}
_c13 = MeadowScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "SceneManager");
__turbopack_context__.k.register(_c1, "SprinkleDrops");
__turbopack_context__.k.register(_c2, "TransitionEnvironment");
__turbopack_context__.k.register(_c3, "AnimatedGround");
__turbopack_context__.k.register(_c4, "FloatingTemples");
__turbopack_context__.k.register(_c5, "DivineLights");
__turbopack_context__.k.register(_c6, "TransitionSparkles");
__turbopack_context__.k.register(_c7, "ButterDrops");
__turbopack_context__.k.register(_c8, "MusicDrops");
__turbopack_context__.k.register(_c9, "GopiDrops");
__turbopack_context__.k.register(_c10, "DivineDrops");
__turbopack_context__.k.register(_c11, "FallingButterDrops");
__turbopack_context__.k.register(_c12, "CameraController");
__turbopack_context__.k.register(_c13, "MeadowScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/MeadowScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/canvas/MeadowScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_canvas_MeadowScene_tsx_50b54896._.js.map