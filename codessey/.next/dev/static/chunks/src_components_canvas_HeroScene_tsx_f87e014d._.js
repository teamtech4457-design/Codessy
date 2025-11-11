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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature();
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
 */ /* -------------------- Scene Manager (central timeline) -------------------- */ function SceneManager({ isReducedMotion }) {
    _s();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [currentPhase, setCurrentPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // 0: Prison (15s), 1: Krishna only
    ;
    const animationStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SceneManager.useFrame": (state)=>{
            if (animationStartTime.current === 0) {
                animationStartTime.current = state.clock.elapsedTime;
            }
            const elapsed = state.clock.elapsedTime - animationStartTime.current;
            // After 15 seconds, switch to Krishna background only (remove prison)
            if (elapsed > 15 && currentPhase === 0) {
                setCurrentPhase(1);
            }
        }
    }["SceneManager.useFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneManager.useEffect": ()=>{
            // Clear background during prison phase (run once ideally)
            if (currentPhase === 0) {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrisonCell, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrisonBars, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chains, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParentSilhouettes, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineLight, {
                        isReducedMotion: isReducedMotion,
                        phase: currentPhase
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonBeam, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DustParticles, {
                        isReducedMotion: isReducedMotion
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            currentPhase === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KrishnaBackground, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudSystem, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RainSystem, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeaWater, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightningStorm, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OceanMist, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineLight, {
                        isReducedMotion: isReducedMotion,
                        phase: currentPhase
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {
                isReducedMotion: isReducedMotion,
                phase: currentPhase
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 78,
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
/* -------------------- Krishna Background (load texture once) -------------------- */ function KrishnaBackground() {
    _s1();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    // load texture once
    const texture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KrishnaBackground.useMemo[texture]": ()=>{
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.TextureLoader();
            let tex = null;
            // We do not actually trigger load here (load is async). We'll call loader in effect to ensure it's client-only.
            return {
                loader,
                url: '/krishna-birth-bg.jpg.png',
                texRef: ({
                    "KrishnaBackground.useMemo[texture]": ()=>tex
                })["KrishnaBackground.useMemo[texture]"]
            };
        }
    }["KrishnaBackground.useMemo[texture]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KrishnaBackground.useEffect": ()=>{
            if (!scene) return;
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.TextureLoader();
            loader.load('/krishna-birth-bg.jpg.png', {
                "KrishnaBackground.useEffect": (tex)=>{
                    // Ensure correct color space and set background
                    try {
                        // @ts-ignore - colorSpace exists on newer three; fallback handled
                        tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SRGBColorSpace ?? tex.colorSpace;
                    } catch (e) {
                    // ignore
                    }
                    scene.background = tex;
                }
            }["KrishnaBackground.useEffect"], undefined, {
                "KrishnaBackground.useEffect": (error)=>{
                    console.error('Error loading texture:', error);
                    scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Color(0x1a237e);
                }
            }["KrishnaBackground.useEffect"]);
            return ({
                "KrishnaBackground.useEffect": ()=>{
                    if (scene) {
                        scene.background = null;
                    }
                }
            })["KrishnaBackground.useEffect"];
        }
    }["KrishnaBackground.useEffect"], [
        scene
    ]);
    return null;
}
_s1(KrishnaBackground, "rTkvQZTCc87ThdJ58E/RR3bEyhs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c1 = KrishnaBackground;
/* -------------------- CloudSystem (throttled update) -------------------- */ function CloudSystem() {
    _s2();
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
                        lineNumber: 172,
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
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s2(CloudSystem, "zmrjesVcJArTEvwFPg7p+lgW/AE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = CloudSystem;
/* -------------------- RainSystem (reduced count + throttled) -------------------- */ function RainSystem() {
    _s3();
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
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 233,
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
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_s3(RainSystem, "0XgxqaZwlZ0jcWpUUxT1i5uewdA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = RainSystem;
/* -------------------- Sea Water (lighter geometry detail) -------------------- */ function SeaWater() {
    _s4();
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
                lineNumber: 273,
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
                lineNumber: 274,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
}
_s4(SeaWater, "gk7H3b1Z+0pThM8KOrriM4ByL2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = SeaWater;
/* -------------------- LightningStorm (keeps behavior but lightweight) -------------------- */ function LightningStorm() {
    _s5();
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
                        light.intensity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.MathUtils.lerp(light.intensity, lightningIntensity, 0.2);
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
                lineNumber: 324,
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
                lineNumber: 334,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
_s5(LightningStorm, "Cwsm5WrtRPUOooHZJKYQRcnW0gw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c5 = LightningStorm;
/* -------------------- OceanMist (reduced count + throttled) -------------------- */ function OceanMist() {
    _s6();
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
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-size",
                        count: mistCount,
                        array: mist.sizes,
                        itemSize: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                color: "#e0f2fe",
                size: 0.18,
                transparent: true,
                opacity: 0.38,
                sizeAttenuation: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.AdditiveBlending
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
}
_s6(OceanMist, "kAhrizrEHGsjzC6mN94NpEsdHEY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c6 = OceanMist;
/* -------------------- DivineLight (kept behavior but reduced sphere detail) -------------------- */ function DivineLight({ isReducedMotion, phase }) {
    _s7();
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
                // Prison phase - faster divine light animation (15 seconds total)
                if (elapsed < 3) {
                    coreRef.current.scale.setScalar(0.01);
                    coreRef.current.material.opacity = 0;
                    pointLightRef.current.intensity = 0;
                } else if (elapsed < 6) {
                    const progress = (elapsed - 3) / 3;
                    coreRef.current.scale.setScalar(0.01 + progress * 0.3);
                    coreRef.current.material.opacity = progress * 0.7;
                    pointLightRef.current.intensity = progress * 0.8;
                } else if (elapsed < 12) {
                    const progress = (elapsed - 6) / 6;
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
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffd87a",
                        transparent: true,
                        opacity: 0,
                        toneMapped: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 465,
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
                lineNumber: 476,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 464,
        columnNumber: 5
    }, this);
}
_s7(DivineLight, "xF8KSHoks9GU6zP89lCi2228ITM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c7 = DivineLight;
/* -------------------- CameraController -------------------- */ function CameraController({ isReducedMotion, phase }) {
    _s8();
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
            if (phase === 0) {
                // Prison phase camera - faster dolly (15 seconds total)
                if (elapsed > 6) {
                    camera.position.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3(0, 1.5, 4), 0.1);
                } else {
                    camera.position.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3(0, 2, 8), 0.1);
                }
                camera.lookAt(0, 1, -1);
            } else {
                // Krishna phase camera - show the full scene with sky
                camera.position.lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3(0, 5, 15), 0.05);
                camera.lookAt(0, 2, 0);
            }
        }
    }["CameraController.useFrame"]);
    return null;
}
_s8(CameraController, "u903Kbn0iScjdWA/tuYFtkkG1YY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c8 = CameraController;
/* -------------------- Prison / Props (kept as-is but lowered some geometry detail) -------------------- */ function PrisonCell() {
    _s9();
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
                        lineNumber: 531,
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
                        lineNumber: 532,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 530,
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
                        lineNumber: 542,
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
                        lineNumber: 543,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 541,
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
                        lineNumber: 552,
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
                        lineNumber: 553,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 551,
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
                        lineNumber: 563,
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
                        lineNumber: 564,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 562,
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
                        lineNumber: 574,
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
                        lineNumber: 575,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 573,
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
                        lineNumber: 585,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#9fc7ff",
                        transparent: true,
                        opacity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 586,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 584,
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
                            lineNumber: 591,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#4b5563",
                            metalness: 0.8,
                            roughness: 0.2
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/HeroScene.tsx",
                            lineNumber: 592,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/canvas/HeroScene.tsx",
                    lineNumber: 590,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 529,
        columnNumber: 5
    }, this);
}
_s9(PrisonCell, "HqyHGXmA3Jr5v7TareAkbAdIE2k=");
_c9 = PrisonCell;
function PrisonBars() {
    _s10();
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
                            lineNumber: 606,
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
                            lineNumber: 607,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/canvas/HeroScene.tsx",
                    lineNumber: 605,
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
                        lineNumber: 618,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#374151",
                        metalness: 0.9,
                        roughness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 617,
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
                        lineNumber: 622,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#374151",
                        metalness: 0.9,
                        roughness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 623,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 603,
        columnNumber: 5
    }, this);
}
_s10(PrisonBars, "Onb+FIb9bAzgcv4sx4IAri2lH8Y=");
_c10 = PrisonBars;
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
                                lineNumber: 635,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#6b7280",
                                metalness: 0.9,
                                roughness: 0.1
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 634,
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
                                lineNumber: 639,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#4b5563",
                                metalness: 0.8,
                                roughness: 0.2
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                                lineNumber: 640,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 638,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 633,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 631,
        columnNumber: 5
    }, this);
}
_c11 = Chains;
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
                        lineNumber: 652,
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
                        lineNumber: 653,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 651,
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
                        lineNumber: 664,
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
                        lineNumber: 665,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 663,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 650,
        columnNumber: 5
    }, this);
}
_c12 = ParentSilhouettes;
function MoonBeam() {
    _s11();
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
                lineNumber: 690,
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
                        lineNumber: 702,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#9fc7ff",
                        transparent: true,
                        opacity: 0.1,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.BackSide
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 703,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 689,
        columnNumber: 5
    }, this);
}
_s11(MoonBeam, "Dd/3IGyrDu95T6dV1a+dsZ06wPA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c13 = MoonBeam;
/* -------------------- DustParticles (reduced + throttled) -------------------- */ function DustParticles({ isReducedMotion }) {
    _s12();
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
                        lineNumber: 768,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-color",
                        count: count,
                        array: particles.colors,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 774,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-size",
                        count: count,
                        array: particles.sizes,
                        itemSize: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 780,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 767,
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
                lineNumber: 787,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 766,
        columnNumber: 5
    }, this);
}
_s12(DustParticles, "cb/BHQONO8zcjNHCCLlXs/DBM1s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c14 = DustParticles;
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
                lineNumber: 809,
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
                lineNumber: 811,
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
                        lineNumber: 823,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                        eskil: false,
                        offset: 0.12,
                        darkness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/HeroScene.tsx",
                        lineNumber: 829,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 822,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "park"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/HeroScene.tsx",
                lineNumber: 833,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/HeroScene.tsx",
        lineNumber: 801,
        columnNumber: 5
    }, this);
}
_c15 = HeroScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "SceneManager");
__turbopack_context__.k.register(_c1, "KrishnaBackground");
__turbopack_context__.k.register(_c2, "CloudSystem");
__turbopack_context__.k.register(_c3, "RainSystem");
__turbopack_context__.k.register(_c4, "SeaWater");
__turbopack_context__.k.register(_c5, "LightningStorm");
__turbopack_context__.k.register(_c6, "OceanMist");
__turbopack_context__.k.register(_c7, "DivineLight");
__turbopack_context__.k.register(_c8, "CameraController");
__turbopack_context__.k.register(_c9, "PrisonCell");
__turbopack_context__.k.register(_c10, "PrisonBars");
__turbopack_context__.k.register(_c11, "Chains");
__turbopack_context__.k.register(_c12, "ParentSilhouettes");
__turbopack_context__.k.register(_c13, "MoonBeam");
__turbopack_context__.k.register(_c14, "DustParticles");
__turbopack_context__.k.register(_c15, "HeroScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/canvas/HeroScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_canvas_HeroScene_tsx_f87e014d._.js.map