(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/codessey/src/components/canvas/HeroScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codessey/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/codessey/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/codessey/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/codessey/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codessey/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codessey/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codessey/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codessey/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codessey/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function PrisonCell() {
    _s();
    const wallsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stoneColors = [
        '#0b0f15',
        '#1a2430',
        '#111827',
        '#0f172a'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: wallsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2,
                    -3
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            8,
                            4,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: stoneColors[0],
                        roughness: 0.9,
                        metalness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            6,
                            4,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: stoneColors[1],
                        roughness: 0.9,
                        metalness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            6,
                            4,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: stoneColors[1],
                        roughness: 0.9,
                        metalness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            8,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#0b0f15",
                        roughness: 0.95,
                        metalness: 0.05
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            8,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: stoneColors[2],
                        roughness: 0.9,
                        metalness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            1,
                            0.5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#9fc7ff",
                        transparent: true,
                        opacity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            [
                -0.3,
                0,
                0.3
            ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        2 + x,
                        3,
                        -2.85
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.05,
                                0.5,
                                0.05
                            ]
                        }, void 0, false, {
                            fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#4b5563",
                            metalness: 0.8,
                            roughness: 0.2
                        }, void 0, false, {
                            fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(PrisonCell, "HqyHGXmA3Jr5v7TareAkbAdIE2k=");
_c = PrisonCell;
function PrisonBars() {
    _s1();
    const barsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: barsRef,
        position: [
            0,
            2,
            1.5
        ],
        children: [
            Array.from({
                length: 9
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        i - 4,
                        0,
                        0
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.08,
                                4,
                                0.08
                            ]
                        }, void 0, false, {
                            fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#374151",
                            metalness: 0.9,
                            roughness: 0.1
                        }, void 0, false, {
                            fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    3,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            8,
                            0.08,
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#374151",
                        metalness: 0.9,
                        roughness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            8,
                            0.08,
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#374151",
                        metalness: 0.9,
                        roughness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s1(PrisonBars, "Onb+FIb9bAzgcv4sx4IAri2lH8Y=");
_c1 = PrisonBars;
function Chains() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: Array.from({
            length: 4
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            -3.5 + i * 2,
                            2.5,
                            -2.8
                        ],
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.06,
                                    0.06,
                                    0.8,
                                    8
                                ]
                            }, void 0, false, {
                                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#6b7280",
                                metalness: 0.9,
                                roughness: 0.1
                            }, void 0, false, {
                                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            -3.5 + i * 2,
                            1.5,
                            -2.8
                        ],
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.1,
                                    8,
                                    6
                                ]
                            }, void 0, false, {
                                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#4b5563",
                                metalness: 0.8,
                                roughness: 0.2
                            }, void 0, false, {
                                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_c2 = Chains;
function ParentSilhouettes() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.4,
                            0.3,
                            1.2,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#1e293b",
                        emissive: "#1e293b",
                        emissiveIntensity: 0.1,
                        roughness: 1
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.4,
                            0.3,
                            1.2,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#1e293b",
                        emissive: "#1e293b",
                        emissiveIntensity: 0.1,
                        roughness: 1
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c3 = ParentSilhouettes;
function DivineLight({ isReducedMotion }) {
    _s2();
    const lightGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const auraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spotLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        startTime: 0,
        hasStarted: false,
        phase: 0 // 0: dark, 1: initial glow, 2: full light, 3: settled
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DivineLight.useFrame": (state)=>{
            if (!timeline.current.hasStarted) {
                timeline.current.startTime = state.clock.elapsedTime;
                timeline.current.hasStarted = true;
            }
            const elapsed = state.clock.elapsedTime - timeline.current.startTime;
            const loopTime = 30 // 30-second loop
            ;
            const loopElapsed = elapsed % loopTime;
            if (isReducedMotion) {
                // Reduced motion: stay in settled state
                if (coreRef.current) {
                    coreRef.current.scale.setScalar(1);
                    coreRef.current.material.opacity = 0.8;
                }
                if (auraRef.current) {
                    auraRef.current.scale.setScalar(3);
                    auraRef.current.material.opacity = 0.3;
                }
                if (pointLightRef.current) {
                    pointLightRef.current.intensity = 2;
                }
                if (spotLightRef.current) {
                    spotLightRef.current.intensity = 1.5;
                }
                return;
            }
            // Phase 0-6s: Dark cell
            if (loopElapsed < 6) {
                timeline.current.phase = 0;
                if (coreRef.current) {
                    coreRef.current.scale.setScalar(0.01);
                    coreRef.current.material.opacity = 0;
                }
                if (auraRef.current) {
                    auraRef.current.scale.setScalar(0.01);
                    auraRef.current.material.opacity = 0;
                }
                if (pointLightRef.current) {
                    pointLightRef.current.intensity = 0;
                }
                if (spotLightRef.current) {
                    spotLightRef.current.intensity = 0;
                }
            } else if (loopElapsed < 8) {
                timeline.current.phase = 1;
                const progress = (loopElapsed - 6) / 2;
                if (coreRef.current) {
                    coreRef.current.scale.setScalar(0.01 + progress * 0.2);
                    coreRef.current.material.opacity = progress * 0.5;
                }
                if (pointLightRef.current) {
                    pointLightRef.current.intensity = progress * 0.5;
                }
            } else if (loopElapsed < 12) {
                timeline.current.phase = 2;
                const progress = (loopElapsed - 8) / 4;
                if (coreRef.current) {
                    coreRef.current.scale.setScalar(0.21 + progress * 0.8);
                    coreRef.current.material.opacity = 0.5 + progress * 0.3;
                }
                if (auraRef.current) {
                    auraRef.current.scale.setScalar(progress * 3);
                    auraRef.current.material.opacity = progress * 0.3;
                }
                if (pointLightRef.current) {
                    pointLightRef.current.intensity = 0.5 + progress * 1.5;
                }
                if (spotLightRef.current) {
                    spotLightRef.current.intensity = progress * 1.5;
                }
            } else {
                timeline.current.phase = 3;
                const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
                if (coreRef.current) {
                    coreRef.current.scale.setScalar(1 * pulse);
                }
                if (auraRef.current) {
                    auraRef.current.scale.setScalar(3 * pulse);
                    auraRef.current.material.opacity = 0.3 * pulse;
                }
                if (pointLightRef.current) {
                    pointLightRef.current.intensity = 2 * pulse;
                }
                if (spotLightRef.current) {
                    spotLightRef.current.intensity = 1.5;
                }
            }
        }
    }["DivineLight.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: lightGroupRef,
        position: [
            0,
            1,
            -1
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: coreRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.3,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffd87a",
                        transparent: true,
                        opacity: 0,
                        toneMapped: false
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: auraRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffc05a",
                        transparent: true,
                        opacity: 0,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                        toneMapped: false
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                scale: [
                    2,
                    2,
                    2
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#8b5cf6",
                        transparent: true,
                        opacity: 0.1,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                        toneMapped: false
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: pointLightRef,
                color: "#ffd87a",
                intensity: 0,
                distance: 8,
                decay: 2
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                ref: spotLightRef,
                color: "#ffd87a",
                intensity: 0,
                distance: 10,
                angle: Math.PI / 3,
                penumbra: 0.5,
                decay: 2,
                position: [
                    0,
                    0,
                    0
                ],
                "target-position": [
                    0,
                    0,
                    -5
                ]
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
_s2(DivineLight, "kziElr1HKDxg5BUtpFa3NDwSR4o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = DivineLight;
function MoonBeam() {
    _s3();
    const beamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const volumeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MoonBeam.useFrame": (state)=>{
            if (volumeRef.current) {
                volumeRef.current.rotation.z = state.clock.elapsedTime * 0.1;
            }
        }
    }["MoonBeam.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            2,
            3,
            -2.8
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                ref: beamRef,
                color: "#9fc7ff",
                intensity: 0.3,
                distance: 6,
                angle: Math.PI / 8,
                penumbra: 0.8,
                decay: 2,
                position: [
                    0,
                    0,
                    0
                ],
                "target-position": [
                    0,
                    -2,
                    -1
                ]
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: volumeRef,
                position: [
                    0,
                    -1,
                    -0.5
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.1,
                            0.8,
                            2,
                            8,
                            1,
                            true
                        ]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#9fc7ff",
                        transparent: true,
                        opacity: 0.1,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"]
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
        lineNumber: 342,
        columnNumber: 5
    }, this);
}
_s3(MoonBeam, "Dd/3IGyrDu95T6dV1a+dsZ06wPA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c5 = MoonBeam;
function DustParticles({ isReducedMotion }) {
    _s4();
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const count = 150;
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DustParticles.useMemo[particles]": ()=>{
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const sizes = new Float32Array(count);
            const phases = new Float32Array(count);
            for(let i = 0; i < count; i++){
                const i3 = i * 3;
                // Random positions in the cell
                positions[i3] = (Math.random() - 0.5) * 7;
                positions[i3 + 1] = Math.random() * 3.5;
                positions[i3 + 2] = (Math.random() - 0.5) * 5;
                // Dust colors - mostly gray with some catching light
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DustParticles.useFrame": (state)=>{
            if (particlesRef.current && !isReducedMotion) {
                const time = state.clock.elapsedTime;
                const positions = particlesRef.current.geometry.attributes.position.array;
                for(let i = 0; i < count; i++){
                    const i3 = i * 3;
                    const phase = particles.phases[i];
                    positions[i3 + 1] += Math.sin(time + phase) * 0.001; // Gentle floating
                }
                particlesRef.current.geometry.attributes.position.needsUpdate = true;
            }
        }
    }["DustParticles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: particlesRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        count: count,
                        array: particles.positions,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-color",
                        count: count,
                        array: particles.colors,
                        itemSize: 3
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-size",
                        count: count,
                        array: particles.sizes,
                        itemSize: 1
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.05,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, this);
}
_s4(DustParticles, "6U3X4nuEaYm1tAaVFlZXvVGwQm4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c6 = DustParticles;
function CameraController({ isReducedMotion }) {
    _s5();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const startPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 2, 8));
    const targetPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1.5, 4));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraController.useFrame": (state)=>{
            if (isReducedMotion) {
                camera.position.lerp(startPosition.current, 0.1);
                return;
            }
            const elapsed = state.clock.elapsedTime;
            const loopTime = 30;
            const loopElapsed = elapsed % loopTime;
            // Start dolly-in at 12s, complete by 18s
            if (loopElapsed > 12) {
                const dollyProgress = Math.min((loopElapsed - 12) / 6, 1);
                camera.position.lerpVectors(startPosition.current, targetPosition.current, dollyProgress);
            } else {
                camera.position.lerp(startPosition.current, 0.1);
            }
            camera.lookAt(0, 1, -1);
        }
    }["CameraController.useFrame"]);
    return null;
}
_s5(CameraController, "vPl+ZWRkeIiR4OAwLx5LWFL7woI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c7 = CameraController;
function HeroScene({ isReducedMotion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        camera: {
            position: [
                0,
                2,
                8
            ],
            fov: 50
        },
        shadows: true,
        style: {
            background: 'linear-gradient(to bottom, #000000, #0b0f15)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    '#000000'
                ]
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.1,
                color: "#9fc7ff"
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrisonCell, {}, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrisonBars, {}, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chains, {}, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParentSilhouettes, {}, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DivineLight, {
                isReducedMotion: isReducedMotion
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonBeam, {}, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DustParticles, {
                isReducedMotion: isReducedMotion
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {
                isReducedMotion: isReducedMotion
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "night"
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                enableZoom: false,
                enablePan: false,
                maxPolarAngle: Math.PI / 2,
                minPolarAngle: Math.PI / 6,
                maxDistance: 10,
                minDistance: 3,
                enabled: false
            }, void 0, false, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                        intensity: 1.2,
                        luminanceThreshold: 0.4,
                        luminanceSmoothing: 0.9,
                        height: 300
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codessey$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                        eskil: false,
                        offset: 0.15,
                        darkness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                        lineNumber: 526,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/codessey/src/components/canvas/HeroScene.tsx",
        lineNumber: 482,
        columnNumber: 5
    }, this);
}
_c8 = HeroScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "PrisonCell");
__turbopack_context__.k.register(_c1, "PrisonBars");
__turbopack_context__.k.register(_c2, "Chains");
__turbopack_context__.k.register(_c3, "ParentSilhouettes");
__turbopack_context__.k.register(_c4, "DivineLight");
__turbopack_context__.k.register(_c5, "MoonBeam");
__turbopack_context__.k.register(_c6, "DustParticles");
__turbopack_context__.k.register(_c7, "CameraController");
__turbopack_context__.k.register(_c8, "HeroScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/codessey/src/components/canvas/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/codessey/src/components/canvas/HeroScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=codessey_src_components_canvas_HeroScene_tsx_480f85f7._.js.map