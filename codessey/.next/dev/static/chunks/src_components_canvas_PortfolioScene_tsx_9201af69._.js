(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/canvas/PortfolioScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Sparkles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/* -------------------- 3D Glowing Sparkles Component -------------------- */ const ThreeDGlowingSparkles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s(({ phase })=>{
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!groupRef.current) return;
            const time = clock.elapsedTime;
            try {
                groupRef.current.children.forEach({
                    "ThreeDGlowingSparkles.useFrame": (child, i)=>{
                        const sparkle = sparkles[i];
                        if (!sparkle) return;
                        const angle = time * sparkle.speed + i;
                        child.position.x = sparkle.position[0] + Math.cos(angle) * sparkle.orbitRadius;
                        child.position.y = sparkle.position[1] + Math.sin(time * sparkle.speed * 0.5 + i) * 2;
                        child.position.z = sparkle.position[2] + Math.sin(angle) * sparkle.orbitRadius;
                        child.rotation.x = time * sparkle.rotationSpeed;
                        child.rotation.y = time * sparkle.rotationSpeed * 1.5;
                        child.rotation.z = time * sparkle.rotationSpeed * 0.7;
                        const pulse = Math.sin(time * 2 + i) * 0.2 + 1;
                        child.scale.setScalar(sparkle.scale * pulse);
                    }
                }["ThreeDGlowingSparkles.useFrame"]);
            } catch (err) {
            // console.warn('ThreeDGlowingSparkles frame error', err)
            }
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
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 65,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0)),
                    sparkle.shape === 'diamond' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tetrahedronGeometry", {
                        args: [
                            0.4,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 66,
                        columnNumber: 43
                    }, ("TURBOPACK compile-time value", void 0)),
                    sparkle.shape === 'octahedron' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                        args: [
                            0.3,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 67,
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
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "6Y0SDFPjO7Jz1UpiRNTDM0kvB58=", false, function() {
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
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.TextureLoader();
            loader.load('/krishna-defeatingdevil.png.jpg', {
                "BackgroundImage.useEffect": (texture)=>{
                    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SRGBColorSpace ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.SRGBColorSpace : texture.colorSpace;
                    // Only set background if we're still in the background phase
                    scene.background = texture;
                }
            }["BackgroundImage.useEffect"], undefined, {
                "BackgroundImage.useEffect": ()=>{
                    // Fallback to black instead of blue during transitions
                    scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Color(0x000000);
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
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 150,
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
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffd700",
                        transparent: true,
                        opacity: 0.8,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.BackSide
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 151,
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
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s2(GoldenBoomTransition, "bqQE3fZmCGi+GMaEmPzI7+HmWAo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = GoldenBoomTransition;
/* -------------------- Scene Manager with 15-second Loop -------------------- */ function SceneManager({ isReducedMotion }) {
    _s3();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [currentPhase, setCurrentPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showBoom, setShowBoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBackground, setShowBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loopCount, setLoopCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const sceneDuration = 14 // Scene duration
    ;
    const boomDuration = 1 // Boom transition duration
    ;
    const backgroundDuration = 15 // 15 seconds for background display
    ;
    const loopInterval = sceneDuration + boomDuration + backgroundDuration // Total loop time
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SceneManager.useFrame": (state)=>{
            if (typeof document !== 'undefined' && document.hidden) return;
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
                scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Color(0x000000);
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
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            showBoom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoldenBoomTransition, {
                onComplete: handleBoomComplete
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 250,
                columnNumber: 20
            }, this),
            showBackground && !isTransitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundImage, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, this),
            !showBoom && !showBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YamunaRiver, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiverBank, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KrishnaCharacter, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KaliyaNaag, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineAura, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaterRipples, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightRays, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnergyWaves, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Villagers, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlyingBirds, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineSparkles, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineEnergyParticles, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VictoryEnergyDrops, {}, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            showBackground && !isTransitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedBackgroundSparkles, {}, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 278,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {
                isReducedMotion: isReducedMotion,
                phase: currentPhase,
                showBoom: showBoom,
                showBackground: showBackground && !isTransitioning
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s3(SceneManager, "3dFt+lQYPLDWm7fzyDUkkxqvEKU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = SceneManager;
/* -------------------- Enhanced Background Sparkles -------------------- */ function EnhancedBackgroundSparkles() {
    _s4();
    const sparklesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "EnhancedBackgroundSparkles.useFrame": ({ clock })=>{
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
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
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
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(EnhancedBackgroundSparkles, "tZ36culk/UQApv4MGXyDu+KTwb4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = EnhancedBackgroundSparkles;
/* -------------------- Divine Sparkles -------------------- */ function DivineSparkles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
        count: 30,
        scale: 10,
        size: 1.5,
        speed: 0.3,
        color: "#ffd700",
        opacity: 0.4
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 330,
        columnNumber: 10
    }, this);
}
_c5 = DivineSparkles;
/* -------------------- Yamuna River -------------------- */ function YamunaRiver() {
    _s5();
    const waterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const waterGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "YamunaRiver.useMemo[waterGeometry]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.PlaneGeometry(20, 8, 16, 16)
    }["YamunaRiver.useMemo[waterGeometry]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "YamunaRiver.useFrame": ({ clock })=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!waterRef.current) return;
            try {
                const t = clock.elapsedTime;
                const posAttr = waterGeometry.attributes && waterGeometry.attributes.position || null;
                const pos = posAttr?.array;
                if (!pos) return;
                for(let i = 0; i < pos.length; i += 3){
                    const x = pos[i];
                    const z = pos[i + 2];
                    pos[i + 1] = Math.sin(x * 0.2 + t) * 0.03 + Math.cos(z * 0.3 + t * 0.5) * 0.02;
                }
                posAttr.needsUpdate = true;
            } catch (err) {
            // console.warn('YamunaRiver frame error', err)
            }
        }
    }["YamunaRiver.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: waterRef,
        geometry: waterGeometry,
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
            color: "#1e3a8a",
            transparent: true,
            opacity: 0.8,
            roughness: 0.1,
            metalness: 0.7
        }, void 0, false, {
            fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
            lineNumber: 359,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 358,
        columnNumber: 5
    }, this);
}
_s5(YamunaRiver, "ppKBEwpJCySZKqGb6ZpWyXo7wbs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c6 = YamunaRiver;
/* -------------------- River Bank -------------------- */ function RiverBank() {
    _s6();
    const stones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RiverBank.useMemo[stones]": ()=>Array.from({
                length: 3
            }).map({
                "RiverBank.useMemo[stones]": ()=>({
                        x: -9 + Math.random() * 3,
                        z: -3 + Math.random() * 6
                    })
            }["RiverBank.useMemo[stones]"])
    }["RiverBank.useMemo[stones]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -11,
                    -0.5,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            4,
                            1,
                            10
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#8B4513",
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    11,
                    -0.5,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            4,
                            1,
                            10
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#8B4513",
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            stones.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        s.x,
                        -0.2,
                        s.z
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                            args: [
                                0.2,
                                6,
                                6
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#696969",
                            roughness: 0.9
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}
_s6(RiverBank, "C4QEUgKuKSbrGHPt/ARSofhI/Sk=");
_c7 = RiverBank;
/* -------------------- Krishna Character -------------------- */ function KrishnaCharacter() {
    _s7();
    const krishnaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "KrishnaCharacter.useFrame": ({ clock })=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!krishnaRef.current) return;
            try {
                const t = clock.elapsedTime;
                krishnaRef.current.position.y = Math.sin(t * 1.5) * 0.05 + 1;
                krishnaRef.current.rotation.y = t * 0.2;
            } catch (err) {
            // console.warn('KrishnaCharacter frame error', err)
            }
        }
    }["KrishnaCharacter.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: krishnaRef,
        position: [
            0,
            1,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.5,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.25,
                            0.25,
                            1,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f0c070"
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.15,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.18,
                            8,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f0c070"
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.3,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                        args: [
                            0.3,
                            0.4,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffd700",
                        transparent: true,
                        opacity: 0.3,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.DoubleSide
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 420,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 409,
        columnNumber: 5
    }, this);
}
_s7(KrishnaCharacter, "ZZ6CXmV72Dmhsi0QSwJUCQqbCAw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c8 = KrishnaCharacter;
/* -------------------- Kaliya Naag -------------------- */ function KaliyaNaag() {
    _s8();
    const naagRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "KaliyaNaag.useFrame": ({ clock })=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!naagRef.current) return;
            try {
                naagRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.03;
            } catch (err) {
            // console.warn('KaliyaNaag frame error', err)
            }
        }
    }["KaliyaNaag.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: naagRef,
        position: [
            0,
            -0.3,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.3,
                            0.4,
                            6,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#228B22",
                        metalness: 0.2,
                        roughness: 0.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            [
                0,
                1,
                2
            ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        Math.cos(index * 1.2) * 0.6,
                        3,
                        Math.sin(index * 1.2) * 0.6
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.25,
                                    6,
                                    6
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#32CD32",
                                metalness: 0.3,
                                roughness: 0.4
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 442,
        columnNumber: 5
    }, this);
}
_s8(KaliyaNaag, "v8Dk90B0WokSw2m1Mjci7UPYnDg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c9 = KaliyaNaag;
/* -------------------- Divine Aura -------------------- */ function DivineAura() {
    _s9();
    const auraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DivineAura.useFrame": ({ clock })=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!auraRef.current) return;
            try {
                auraRef.current.rotation.y = clock.elapsedTime * 0.08;
            } catch (err) {
            // console.warn('DivineAura frame error', err)
            }
        }
    }["DivineAura.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: auraRef,
        position: [
            0,
            1,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    1.2,
                    8,
                    8
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: "#ffd700",
                transparent: true,
                opacity: 0.04,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.BackSide
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 473,
        columnNumber: 5
    }, this);
}
_s9(DivineAura, "FzHzUgVw/Eor+NE4KQltNJ+6NDo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c10 = DivineAura;
/* -------------------- Water Ripples -------------------- */ function WaterRipples() {
    _s10();
    const ripplesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "WaterRipples.useFrame": ({ clock })=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!ripplesRef.current) return;
            try {
                const time = clock.elapsedTime;
                ripplesRef.current.children.forEach({
                    "WaterRipples.useFrame": (ripple, index)=>{
                        if (ripple) {
                            const rippleTime = time + index * 0.3;
                            const scale = 1 + Math.sin(rippleTime * 0.8) * 0.2;
                            ripple.scale.setScalar(scale);
                        }
                    }
                }["WaterRipples.useFrame"]);
            } catch (err) {
            // console.warn('WaterRipples frame error', err)
            }
        }
    }["WaterRipples.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ripplesRef,
        position: [
            0,
            -0.9,
            0
        ],
        children: Array.from({
            length: 2
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                            args: [
                                0.4,
                                0.6,
                                12
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                            lineNumber: 505,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                            color: "#4f8ff7",
                            transparent: true,
                            opacity: 0.2,
                            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.DoubleSide
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                            lineNumber: 506,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                    lineNumber: 504,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 503,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 501,
        columnNumber: 5
    }, this);
}
_s10(WaterRipples, "CHAHfvOIgjFQcsflT+GjxkkEWgc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c11 = WaterRipples;
/* -------------------- Light Rays -------------------- */ function LightRays() {
    _s11();
    const raysRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "LightRays.useFrame": ({ clock })=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!raysRef.current) return;
            try {
                raysRef.current.rotation.y = clock.elapsedTime * 0.03;
            } catch (err) {
            // console.warn('LightRays frame error', err)
            }
        }
    }["LightRays.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: raysRef,
        position: [
            0,
            1,
            0
        ],
        children: Array.from({
            length: 4
        }).map((_, i)=>{
            const angle = i / 4 * Math.PI * 2;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    0,
                    angle,
                    0
                ],
                position: [
                    0,
                    2,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            0.2,
                            3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 533,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffd700",
                        transparent: true,
                        opacity: 0.15,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.DoubleSide
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 534,
                        columnNumber: 13
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 532,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 528,
        columnNumber: 5
    }, this);
}
_s11(LightRays, "edrN8T2r0sgvoJbQeHGKobxkDnU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c12 = LightRays;
/* -------------------- Energy Waves -------------------- */ function EnergyWaves() {
    _s12();
    const wavesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "EnergyWaves.useFrame": ({ clock })=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!wavesRef.current) return;
            try {
                const time = clock.elapsedTime;
                wavesRef.current.children.forEach({
                    "EnergyWaves.useFrame": (wave, index)=>{
                        if (wave) {
                            const scale = 1 + Math.sin(time * 0.2 + index) * 0.3;
                            wave.scale.setScalar(scale);
                        }
                    }
                }["EnergyWaves.useFrame"]);
            } catch (err) {
            // console.warn('EnergyWaves frame error', err)
            }
        }
    }["EnergyWaves.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: wavesRef,
        position: [
            0,
            1,
            0
        ],
        children: Array.from({
            length: 1
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.8,
                            8,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 565,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ff6b6b",
                        transparent: true,
                        opacity: 0.06,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.BackSide
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 566,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 564,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 562,
        columnNumber: 5
    }, this);
}
_s12(EnergyWaves, "oV25PgtxytngU9qJCPX6deAnDDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c13 = EnergyWaves;
/* -------------------- Villagers -------------------- */ function Villagers() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: Array.from({
            length: 2
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -7 + i * 3,
                    0,
                    -4
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.12,
                            0.12,
                            0.6,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 579,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: `hsl(${30 + i * 40}, 60%, 50%)`
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 580,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 578,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 576,
        columnNumber: 5
    }, this);
}
_c14 = Villagers;
/* -------------------- Flying Birds -------------------- */ function FlyingBirds() {
    _s13();
    const birdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FlyingBirds.useFrame": ({ clock })=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!birdsRef.current) return;
            try {
                const time = clock.elapsedTime;
                birdsRef.current.children.forEach({
                    "FlyingBirds.useFrame": (bird, index)=>{
                        if (!bird) return;
                        bird.position.x = Math.sin(time * 0.2 + index) * 8;
                        bird.position.y = 5 + Math.sin(time * 0.8 + index) * 0.3;
                    }
                }["FlyingBirds.useFrame"]);
            } catch (err) {
            // console.warn('FlyingBirds frame error', err)
            }
        }
    }["FlyingBirds.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: birdsRef,
        children: Array.from({
            length: 3
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    5,
                    -5
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                        args: [
                            0.06,
                            0.15,
                            3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 609,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#333"
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 610,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 608,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 606,
        columnNumber: 5
    }, this);
}
_s13(FlyingBirds, "eGlqPzK/G433tEAnJ1qyG2nMTLA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c15 = FlyingBirds;
/* -------------------- Divine Energy Particles -------------------- */ function DivineEnergyParticles() {
    _s14();
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particleCount = 20;
    const frameSkip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DivineEnergyParticles.useMemo[data]": ()=>{
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);
            for(let i = 0; i < particleCount; i++){
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 10;
                positions[i3 + 1] = Math.random() * 5;
                positions[i3 + 2] = (Math.random() - 0.5) * 8;
                colors[i3] = 1.0;
                colors[i3 + 1] = 0.9;
                colors[i3 + 2] = 0.3;
            }
            return {
                positions,
                colors
            };
        }
    }["DivineEnergyParticles.useMemo[data]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DivineEnergyParticles.useFrame": ()=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            frameSkip.current = (frameSkip.current + 1) % 4;
            if (frameSkip.current !== 0) return;
            const points = particlesRef.current;
            if (!points?.geometry) return;
            try {
                const pos = points.geometry.attributes.position.array;
                for(let i = 0; i < particleCount; i++){
                    const i3 = i * 3;
                    pos[i3 + 1] += 0.01;
                    if (pos[i3 + 1] > 5) {
                        pos[i3 + 1] = 0;
                        pos[i3] = (Math.random() - 0.5) * 10;
                        pos[i3 + 2] = (Math.random() - 0.5) * 8;
                    }
                }
                points.geometry.attributes.position.needsUpdate = true;
            } catch (err) {
            // console.warn('DivineEnergyParticles frame error', err)
            }
        }
    }["DivineEnergyParticles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: particlesRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        count: particleCount,
                        array: data.positions,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-color",
                        count: particleCount,
                        array: data.colors,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 667,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 665,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.06,
                vertexColors: true,
                transparent: true,
                opacity: 0.5,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 669,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 664,
        columnNumber: 5
    }, this);
}
_s14(DivineEnergyParticles, "/dsxWw1qOtklBL5W7eSwFTObKY0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c16 = DivineEnergyParticles;
/* -------------------- Victory Energy Drops -------------------- */ function VictoryEnergyDrops() {
    _s15();
    const dropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropCount = 15;
    const frameSkip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VictoryEnergyDrops.useMemo[data]": ()=>{
            const positions = new Float32Array(dropCount * 3);
            const colors = new Float32Array(dropCount * 3);
            for(let i = 0; i < dropCount; i++){
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 8;
                positions[i3 + 1] = Math.random() * 4 + 3;
                positions[i3 + 2] = (Math.random() - 0.5) * 6;
                colors[i3] = 1.0;
                colors[i3 + 1] = 0.95;
                colors[i3 + 2] = 0.8;
            }
            return {
                positions,
                colors
            };
        }
    }["VictoryEnergyDrops.useMemo[data]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "VictoryEnergyDrops.useFrame": ()=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            frameSkip.current = (frameSkip.current + 1) % 4;
            if (frameSkip.current !== 0) return;
            const points = dropsRef.current;
            if (!points?.geometry) return;
            try {
                const pos = points.geometry.attributes.position.array;
                for(let i = 0; i < dropCount; i++){
                    const i3 = i * 3;
                    pos[i3 + 1] -= 0.02;
                    if (pos[i3 + 1] < -1) {
                        pos[i3 + 1] = Math.random() * 3 + 4;
                        pos[i3] = (Math.random() - 0.5) * 8;
                    }
                }
                points.geometry.attributes.position.needsUpdate = true;
            } catch (err) {
            // console.warn('VictoryEnergyDrops frame error', err)
            }
        }
    }["VictoryEnergyDrops.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: dropsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        count: dropCount,
                        array: data.positions,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 722,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-color",
                        count: dropCount,
                        array: data.colors,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 723,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 721,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.03,
                vertexColors: true,
                transparent: true,
                opacity: 0.6,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 725,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 720,
        columnNumber: 5
    }, this);
}
_s15(VictoryEnergyDrops, "1fWRMUSr/AfqS/KrFY3mFZ1/+Ys=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c17 = VictoryEnergyDrops;
/* -------------------- Camera Controller -------------------- */ function CameraController({ isReducedMotion, phase, showBoom, showBackground }) {
    _s16();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraController.useFrame": ({ clock })=>{
            if (typeof document !== 'undefined' && document.hidden) return;
            if (!start.current) start.current = clock.elapsedTime;
            if (!camera) return;
            try {
                const elapsed = clock.elapsedTime - start.current;
                if (isReducedMotion) {
                    camera.position.set(0, 2, 8);
                    camera.lookAt(0, 1, 0);
                    return;
                }
                let target;
                if (showBoom) {
                    // During boom transition, pull back camera for dramatic effect
                    target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3(0, 5, 20);
                } else if (showBackground) {
                    // Final position with background
                    target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3(0, 2, 8);
                } else {
                    // Normal scene transitions
                    if (elapsed < 5) {
                        target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3(Math.sin(elapsed * 0.1) * 2, 4, 10);
                    } else if (elapsed < 10) {
                        target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3(3, 3, 7);
                    } else {
                        target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3(0, 3, 6);
                    }
                }
                camera.position.lerp(target, 0.05);
                camera.lookAt(0, 1, 0);
            } catch (err) {
            // console.warn('CameraController frame error', err)
            }
        }
    }["CameraController.useFrame"]);
    return null;
}
_s16(CameraController, "TgsGfwiuMAHRwG7+dOHrCz1jgNo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c18 = CameraController;
function PortfolioScene({ isReducedMotion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        camera: {
            position: [
                0,
                4,
                10
            ],
            fov: 50
        },
        gl: {
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            depth: true,
            stencil: false
        },
        dpr: [
            1,
            1.5
        ],
        frameloop: "always",
        style: {
            background: 'transparent'
        },
        onCreated: ({ gl })=>{
            try {
                gl.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ACESFilmicToneMapping;
                gl.setClearColor('#0a0a2a');
                gl.shadowMap.enabled = false;
            } catch (err) {
            // console.warn('onCreated error', err)
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    '#0a0a2a'
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 812,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneManager, {
                isReducedMotion: isReducedMotion
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 813,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.4
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 814,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    0,
                    5,
                    0
                ],
                intensity: 0.5,
                color: "#ffd700"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 815,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "night"
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 816,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                multisampling: 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                        intensity: 0.6,
                        luminanceThreshold: 0.4,
                        luminanceSmoothing: 0.9
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 818,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                        eskil: false,
                        offset: 0.1,
                        darkness: 0.2
                    }, void 0, false, {
                        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                        lineNumber: 819,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
                lineNumber: 817,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/PortfolioScene.tsx",
        lineNumber: 790,
        columnNumber: 5
    }, this);
}
_c19 = PortfolioScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
__turbopack_context__.k.register(_c, "ThreeDGlowingSparkles");
__turbopack_context__.k.register(_c1, "BackgroundImage");
__turbopack_context__.k.register(_c2, "GoldenBoomTransition");
__turbopack_context__.k.register(_c3, "SceneManager");
__turbopack_context__.k.register(_c4, "EnhancedBackgroundSparkles");
__turbopack_context__.k.register(_c5, "DivineSparkles");
__turbopack_context__.k.register(_c6, "YamunaRiver");
__turbopack_context__.k.register(_c7, "RiverBank");
__turbopack_context__.k.register(_c8, "KrishnaCharacter");
__turbopack_context__.k.register(_c9, "KaliyaNaag");
__turbopack_context__.k.register(_c10, "DivineAura");
__turbopack_context__.k.register(_c11, "WaterRipples");
__turbopack_context__.k.register(_c12, "LightRays");
__turbopack_context__.k.register(_c13, "EnergyWaves");
__turbopack_context__.k.register(_c14, "Villagers");
__turbopack_context__.k.register(_c15, "FlyingBirds");
__turbopack_context__.k.register(_c16, "DivineEnergyParticles");
__turbopack_context__.k.register(_c17, "VictoryEnergyDrops");
__turbopack_context__.k.register(_c18, "CameraController");
__turbopack_context__.k.register(_c19, "PortfolioScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/PortfolioScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/canvas/PortfolioScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_canvas_PortfolioScene_tsx_9201af69._.js.map