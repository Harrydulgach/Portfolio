import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number>(0);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.left = '0';
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
    }

    // Set renderer size and pixel ratio
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(pixelRatio);
    renderer.setClearColor(0x000000, 0);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light for shadows
    const directionalLight = new THREE.DirectionalLight(0x6366f1, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create a large plane for the shadow surface
    const planeGeometry = new THREE.PlaneGeometry(20, 20, 50, 50);
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.1,
      roughness: 0.8,
      transparent: true,
      opacity: 0.8
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -2;
    scene.add(plane);

    // Create floating orbs
    interface Orb {
      mesh: THREE.Mesh;
      speed: number;
      amplitude: number;
    }
    const orbs: Orb[] = [];
    const orbCount = 5;
    const orbGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const orbMaterial = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      metalness: 0.7,
      roughness: 0.2,
      transparent: true,
      opacity: 0.6
    });

    for (let i = 0; i < orbCount; i++) {
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orb.position.set(
        (Math.random() - 0.5) * 10,
        Math.random() * 5,
        (Math.random() - 0.5) * 10
      );
      scene.add(orb);
      orbs.push({
        mesh: orb,
        speed: Math.random() * 0.02 + 0.01,
        amplitude: Math.random() * 2 + 1
      });
    }

    // Position camera
    camera.position.z = 10;
    camera.position.y = 5;

    // Animation
    let time = 0;
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      time += 0.01;

      // Animate orbs
      orbs.forEach((orb, index) => {
        orb.mesh.position.y = Math.sin(time * orb.speed) * orb.amplitude;
        orb.mesh.rotation.x += 0.01;
        orb.mesh.rotation.y += 0.01;
      });

      // Animate plane vertices for wave effect
      const positions = plane.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(x * 0.5 + time) * 0.2 + Math.sin(z * 0.5 + time) * 0.2;
      }
      plane.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ 
        opacity: 0.7,
        mixBlendMode: 'overlay'
      }}
    />
  );
};

export default Background3D; 