import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GreetingCharacter3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number>(0);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
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
    renderer.setSize(200, 200);
    renderer.setPixelRatio(pixelRatio);
    renderer.setClearColor(0x000000, 0);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional lights for better shading
    const mainLight = new THREE.DirectionalLight(0x6366f1, 1);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x8b5cf6, 0.5);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    // Create character body with gradient material - increased size
    const bodyGeometry = new THREE.SphereGeometry(1.2, 64, 64);
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      metalness: 0.8,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transmission: 0.2,
      ior: 1.5,
      envMapIntensity: 1
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    scene.add(body);

    // Create head with gradient material - increased size
    const headGeometry = new THREE.SphereGeometry(1, 64, 64);
    const headMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      metalness: 0.8,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transmission: 0.2,
      ior: 1.5,
      envMapIntensity: 1
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 2.2;
    scene.add(head);

    // Create stylish sunglasses - adjusted position for larger head
    const glassGeometry = new THREE.TorusGeometry(0.5, 0.06, 16, 32);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x000000,
      metalness: 1,
      roughness: 0.1,
      transmission: 0.9,
      ior: 2.5,
      thickness: 0.5
    });
    
    const leftGlass = new THREE.Mesh(glassGeometry, glassMaterial);
    leftGlass.position.set(-0.4, 2.3, 0.8);
    leftGlass.rotation.x = Math.PI / 2;
    scene.add(leftGlass);

    const rightGlass = new THREE.Mesh(glassGeometry, glassMaterial);
    rightGlass.position.set(0.4, 2.3, 0.8);
    rightGlass.rotation.x = Math.PI / 2;
    scene.add(rightGlass);

    // Create stylish hat - adjusted for larger head
    const hatGeometry = new THREE.ConeGeometry(0.75, 1, 32);
    const hatMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a1a1a,
      metalness: 0.9,
      roughness: 0.1
    });
    const hat = new THREE.Mesh(hatGeometry, hatMaterial);
    hat.position.y = 3.2;
    hat.rotation.x = Math.PI;
    scene.add(hat);

    // Create fancy waving arm - increased size
    const armGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.8, 32);
    const armMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      metalness: 0.8,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });
    const arm = new THREE.Mesh(armGeometry, armMaterial);
    arm.position.set(1.5, 0.6, 0);
    arm.rotation.z = Math.PI / 4;
    scene.add(arm);

    // Create fancy hand - increased size
    const handGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const handMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      metalness: 0.8,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });
    const hand = new THREE.Mesh(handGeometry, handMaterial);
    hand.position.set(2.2, 1, 0);
    scene.add(hand);

    // Add floating particles - increased area
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 120;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.06,
      color: 0x6366f1,
      transparent: true,
      opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Position camera - moved further back to see larger character
    camera.position.z = 6;
    camera.position.y = 1.5;

    // Animation
    let time = 0;
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      time += 0.01;

      // Animate waving arm with smooth motion
      arm.rotation.z = Math.PI / 4 + Math.sin(time * 2) * 0.5;
      hand.rotation.z = Math.sin(time * 2) * 0.5;
      
      // Update hand position to follow arm movement
      hand.position.x = 2.2 + Math.sin(time * 2) * 0.1;
      hand.position.y = 1 + Math.cos(time * 2) * 0.1;

      // Rotate character with smooth motion
      body.rotation.y = Math.sin(time * 0.5) * 0.2;
      head.rotation.y = Math.sin(time * 0.5) * 0.2;
      hat.rotation.y = Math.sin(time * 0.5) * 0.2;

      // Animate particles
      const positions = particlesGeometry.attributes.position.array;
      for(let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i) * 0.01;
        if(positions[i + 1] > 6) positions[i + 1] = -6;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(300, 300);
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
      className="w-[300px] h-[300px] relative"
    />
  );
};

export default GreetingCharacter3D; 