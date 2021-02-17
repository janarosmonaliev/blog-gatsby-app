import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { EffectComposer, SSAO } from "react-postprocessing";
import { ContactShadows } from "@react-three/drei";
// import { EdgeDetectionMode } from 'postprocessing'
import { a, useTransition, useSpring } from "@react-spring/three";
import create from "zustand";

const useStore = create((set) => {
  new THREE.FontLoader().load(
    "https://raw.githubusercontent.com/janarosmonaliev/blog-gatsby-app/extended/src/files/font.json",
    (font) => {
      const config = {
        font,
        size: 15,
        height: 2,
        curveSegments: 4,
        evelEnabled: false,
      };
      set({
        items: [
          {
            position: [0.25, 1.8, -6],
            r: 0,
            geometry: new THREE.TextGeometry("</>", {
              font,
              size: 3.5,
              height: 1,
              curveSegments: 4,
              evelEnabled: true,
            }),
          },
          // {
          //   position: [0.25, 1.8, -6],
          //   r: 0.5,
          //   geometry: new THREE.SphereBufferGeometry(1, 32, 32),
          // },
          {
            position: [-1.6, 0, 2],
            r: 0.2,
            geometry: new THREE.TextGeometry("{", {
              font,
              size: 3,
              height: 1,
              curveSegments: 4,
              evelEnabled: false,
            }),
          },
          // {
          //   position: [-1.5, 0, 2],
          //   r: 0.2,
          //   geometry: new THREE.TetrahedronBufferGeometry(2),
          // },
          {
            position: [0.3, -1.2, 4],
            r: 0.3,
            geometry: new THREE.TetrahedronBufferGeometry(1.5),
          },
          {
            position: [-0.7, 0.5, 6],
            r: 0.4,
            geometry: new THREE.ConeGeometry(1.1, 1.7, 32),
          },
          {
            position: [0.5, -1.3, -6],
            r: 0.0,
            geometry: new THREE.TextGeometry("0", {
              font,
              size: 4,
              height: 1,
              curveSegments: 4,
              evelEnabled: false,
            }),
          },
          // {
          //   position: [0.5, -1.2, -6],
          //   r: 0.9,
          //   geometry: new THREE.SphereBufferGeometry(1.5, 32, 32),
          // },
          {
            position: [-0.5, 2.5, -2],
            r: 0.6,
            geometry: new THREE.IcosahedronBufferGeometry(2),
          },
          {
            position: [-0.8, -0.75, 3],
            r: 0.35,
            geometry: new THREE.TorusBufferGeometry(1.1, 0.35, 16, 32),
          },
          {
            position: [1.5, 0.2, -2],
            r: 0.1,
            geometry: new THREE.TextGeometry("1", {
              font,
              size: 3,
              height: 1,
              curveSegments: 4,
              evelEnabled: false,
            }),
          },
          // {
          //   position: [1.5, 0.5, -2],
          //   r: 0.8,
          //   geometry: new THREE.OctahedronGeometry(2),
          // },
          // {
          //   position: [-1, -0.5, -6],
          //   r: 0.5,
          //   geometry: new THREE.SphereBufferGeometry(1.5, 32, 32),
          // },
          // {
          //   position: [1, 1.9, -1],
          //   r: 0.2,
          //   geometry: new THREE.BoxBufferGeometry(2.5, 2.5, 2.5),
          // },
          {
            position: [-2, -2, -10],
            r: 0,
            geometry: new THREE.TextGeometry("J", config),
          },
        ],
      });
    }
  );
  return { items: [], material: new THREE.MeshStandardMaterial() };
});

function Geometry({ r, position, ...props }) {
  const [hovered, setHover] = useState(false);
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z +=
      0.004 * r;
    ref.current.position.y =
      position[1] +
      Math[r > 0.5 ? "cos" : "sin"](state.clock.getElapsedTime() * r) * r;
    // TODO Finish the hover animation
    // if (hovered && ref.current.position.z < 10) {
    //   ref.current.position.z += Math.cos(state.clock.getElapsedTime());
    // }
  });
  return (
    <group
      position={position}
      ref={ref}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHover(true);
      }}
      onPointerOut={(event) => {
        setHover(false);
      }}
    >
      <a.mesh {...props}>
        <meshPhongMaterial
          transparent={true}
          shininess={100}
          // wireframeLinewidth={5}
          // wireframe={hovered ? true : false}
          color={hovered ? "#ff642e" : "white"}
        />
      </a.mesh>
      <a.fog></a.fog>
    </group>
  );
}

function Geometries() {
  const { items, material } = useStore();
  const transition = useTransition(items, {
    from: { scale: [0, 0, 0], rotation: [0, 0, 0] },
    enter: ({ r }) => ({ scale: [1, 1, 1], rotation: [r * 3, r * 3, r * 3] }),
    leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    config: { mass: 5, tension: 1000, friction: 100 },
    trail: 100,
  });
  return transition((props, { position: [x, y, z], r, geometry }) => (
    <Geometry
      position={[x * 3, y * 3, z]}
      // material={material}
      geometry={geometry}
      r={r}
      {...props}
    ></Geometry>
  ));
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 1, mouse.y * 1, camera.position.z),
      0.1
    )
  );
}

export default function(props) {
  const [hovered, setHover] = useState(false);
  const { color } = useSpring({
    color: 1,
    from: { color: 0 },
    config: { friction: 30 },
  });
  return (
    <div id="canvas-wrapper">
      <Canvas
        concurrent
        colorManagement={true}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
          alpha: true,
        }}
        pixelRatio={1}
        camera={{ position: [0, 0, 33], near: 1, far: 70, fov: 50 }}
        shadowMap={true}
        id="canvas"
        onPointerOver={(event) => {
          setHover(true);
          // color.reverse();
          color.reset();
        }}
        onPointerOut={(event) => {
          setHover(false);
          color.reset();
        }}
      >
        <color
          attach={props.darkTheme ? "null" : "background"}
          args={[props.darkTheme ? "#1d1d1d" : "white"]}
        />
        <a.fog
          attach="fog"
          args={["#f6f8fc", 10, 50]}
          color={
            !hovered
              ? color.to(
                  [0, 1],
                  [props.darkTheme ? "#454545" : "#ebebeb", "#9776f9"]
                )
              : color.to(
                  [1, 0],
                  [props.darkTheme ? "#454545" : "#ebebeb", "#9776f9"]
                )
          }
        />

        <ambientLight intensity={0.1} />
        <directionalLight castShadow position={[-5, 12, 12]} intensity={3} />
        <pointLight position={[20, 20, 20]} intensity={1} />
        <pointLight position={[-20, -20, -20]} intensity={0.1} />
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -8, 0]}
            opacity={props.darkTheme ? 0.0 : 1}
            width={30}
            height={50}
            blur={1}
            far={10}
          />
          <EffectComposer multisampling={0}>
            <SSAO
              samples={25}
              intensity={40}
              luminanceInfluence={0.5}
              radius={20}
              scale={1}
              bias={0.5}
            />
          </EffectComposer>
        </Suspense>
        <Rig />
      </Canvas>
    </div>
  );
}
