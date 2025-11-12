(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,25227,e=>{"use strict";var t=e.i(20111),r=e.i(91719),i=e.i(42258),o=e.i(85994),a=e.i(54838),n=e.i(36311),s=e.i(37532),l=e.i(66180),c=e.i(15552),u=e.i(8978);let m=parseInt(s.REVISION.replace(/\D+/g,""));class f extends s.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${m>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}}let d=e=>e&&e.constructor===Float32Array,p=e=>e instanceof s.Vector2||e instanceof s.Vector3||e instanceof s.Vector4,h=e=>Array.isArray(e)?e:p(e)?e.toArray():[e,e,e];function g(e,t,r){return n.useMemo(()=>{if(void 0!==t)if(d(t))return t;else{if(t instanceof s.Color){let r=Array.from({length:3*e},()=>[t.r,t.g,t.b]).flat();return Float32Array.from(r)}if(p(t)||Array.isArray(t)){let r=Array.from({length:3*e},()=>h(t)).flat();return Float32Array.from(r)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},r)},[t])}let v=n.forwardRef(({noise:e=1,count:t=100,speed:r=1,opacity:i=1,scale:o=1,size:m,color:p,children:v,...x},y)=>{n.useMemo(()=>(0,l.extend)({SparklesImplMaterial:f}),[]);let b=n.useRef(null),j=(0,c.useThree)(e=>e.viewport.dpr),P=h(o),M=n.useMemo(()=>Float32Array.from(Array.from({length:t},()=>P.map(s.MathUtils.randFloatSpread)).flat()),[t,...P]),A=g(t,m,Math.random),R=g(t,i),C=g(t,r),E=g(3*t,e),I=g(void 0===p?3*t:t,d(p)?p:new s.Color(p),()=>1);return(0,u.useFrame)(e=>{b.current&&b.current.material&&(b.current.material.time=e.clock.elapsedTime)}),n.useImperativeHandle(y,()=>b.current,[]),n.createElement("points",(0,a.default)({key:`particle-${t}-${JSON.stringify(o)}`},x,{ref:b}),n.createElement("bufferGeometry",null,n.createElement("bufferAttribute",{attach:"attributes-position",args:[M,3]}),n.createElement("bufferAttribute",{attach:"attributes-size",args:[A,1]}),n.createElement("bufferAttribute",{attach:"attributes-opacity",args:[R,1]}),n.createElement("bufferAttribute",{attach:"attributes-speed",args:[C,1]}),n.createElement("bufferAttribute",{attach:"attributes-color",args:[I,3]}),n.createElement("bufferAttribute",{attach:"attributes-noise",args:[E,3]})),v||n.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:j,depthWrite:!1}))}),x=n.forwardRef(({children:e,enabled:t=!0,speed:r=1,rotationIntensity:i=1,floatIntensity:o=1,floatingRange:a=[-.1,.1],autoInvalidate:l=!1,...c},m)=>{let f=n.useRef(null);n.useImperativeHandle(m,()=>f.current,[]);let d=n.useRef(1e4*Math.random());return(0,u.useFrame)(e=>{var n,c;if(!t||0===r)return;l&&e.invalidate();let u=d.current+e.clock.elapsedTime;f.current.rotation.x=Math.cos(u/4*r)/8*i,f.current.rotation.y=Math.sin(u/4*r)/8*i,f.current.rotation.z=Math.sin(u/4*r)/20*i;let m=Math.sin(u/4*r)/10;m=s.MathUtils.mapLinear(m,-.1,.1,null!=(n=null==a?void 0:a[0])?n:-.1,null!=(c=null==a?void 0:a[1])?c:.1),f.current.position.y=m*o,f.current.updateMatrix()}),n.createElement("group",c,n.createElement("group",{ref:f,matrixAutoUpdate:!1},e))});var y=e.i(80602);function b({isReducedMotion:e}){return(0,t.jsxs)(r.Canvas,{camera:{position:[5,3,5],fov:50},style:{background:"linear-gradient(to bottom, #065f46, #1e3a8a)"},children:[(0,t.jsx)("ambientLight",{intensity:.4}),(0,t.jsx)("directionalLight",{position:[5,10,5],intensity:.8,color:"#86efac"}),(0,t.jsx)("pointLight",{position:[0,3,0],intensity:.3,color:"#bef264"}),(0,t.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-1,0],children:[(0,t.jsx)("planeGeometry",{args:[20,20,32,32]}),(0,t.jsx)("meshStandardMaterial",{color:"#166534",roughness:.8})]}),[-5,5,-8,8].map((e,r)=>(0,t.jsxs)("group",{children:[(0,t.jsxs)("mesh",{position:[e,0,-(2*r)],children:[(0,t.jsx)("cylinderGeometry",{args:[.3,.4,3,8]}),(0,t.jsx)("meshStandardMaterial",{color:"#7c2d12",roughness:.9})]}),(0,t.jsxs)("mesh",{position:[e,2,-(2*r)],children:[(0,t.jsx)("sphereGeometry",{args:[1.5,16,16]}),(0,t.jsx)("meshStandardMaterial",{color:"#166534",roughness:.7})]})]},r)),(0,t.jsx)(x,{speed:2*!e,rotationIntensity:+!e,floatIntensity:.5*!e,children:(0,t.jsxs)("mesh",{position:[0,2,0],rotation:[0,Math.PI/4,Math.PI/6],children:[(0,t.jsx)("cylinderGeometry",{args:[.05,.05,3,8]}),(0,t.jsx)("meshStandardMaterial",{color:"#fbbf24",emissive:"#f59e0b",emissiveIntensity:.3,metalness:.9,roughness:.1})]})}),(0,t.jsx)(v,{count:e?30:80,scale:15,size:1.5,speed:e?.2:1,color:"#fef3c7"}),(0,t.jsx)(o.Environment,{preset:"park"}),(0,t.jsx)(i.OrbitControls,{enableZoom:!1,enablePan:!1,maxPolarAngle:Math.PI/1.5,minPolarAngle:Math.PI/6,autoRotate:!e,autoRotateSpeed:.3}),(0,t.jsxs)(y.EffectComposer,{children:[(0,t.jsx)(y.Bloom,{intensity:.3,luminanceThreshold:.7}),(0,t.jsx)(y.Vignette,{eskil:!1,offset:.1,darkness:.6})]})]})}e.s(["default",()=>b],25227)},14649,e=>{e.n(e.i(25227))}]);