import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check screen width for mobile optimization
    const isMobile = window.innerWidth < 768;

    // Dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = isMobile ? 8.5 : 7.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group to hold all interactive 3D objects for mouse-follow parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- 1. LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f5ff, 2.5, 15);
    cyanLight.position.set(-3, 2, 3);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 2.5, 15);
    purpleLight.position.set(3, -2, 3);
    scene.add(purpleLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 5, 5);
    scene.add(directionalLight);

    // --- 2. FLOATING LAPTOP / TERMINAL ---
    const laptopGroup = new THREE.Group();
    mainGroup.add(laptopGroup);

    // Screen base texture (Code display)
    const textCanvas = document.createElement('canvas');
    textCanvas.width = 512;
    textCanvas.height = 384;
    const ctx = textCanvas.getContext('2d');
    ctx.fillStyle = '#0a0f1f';
    ctx.fillRect(0, 0, 512, 384);
    
    // Draw Terminal interface
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, 512, 40);
    // Red, yellow, green buttons
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(20, 20, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath(); ctx.arc(40, 20, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#10b981';
    ctx.beginPath(); ctx.arc(60, 20, 6, 0, Math.PI * 2); ctx.fill();
    
    // Terminal Title
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px Space Grotesk, monospace';
    ctx.fillText('bash - harsh.dev', 120, 25);

    // Code lines
    ctx.fillStyle = '#00f5ff';
    ctx.font = '18px Courier New, monospace';
    ctx.fillText('🚀 console.log("Harsh.dev");', 30, 80);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('const developer = {', 30, 120);
    ctx.fillText('  role: "Frontend Developer",', 30, 150);
    ctx.fillText('  education: "BCA Student",', 30, 180);
    ctx.fillText('  skills: ["React", "JS", "C++"],', 30, 210);
    ctx.fillText('  passion: "3D Web & UI/UX"', 30, 240);
    ctx.fillText('};', 30, 270);
    
    ctx.fillStyle = '#8b5cf6';
    ctx.fillText('⚡ npm run dev', 30, 310);
    ctx.fillStyle = '#10b981';
    ctx.fillText('✔ Port 5173 successfully loaded!', 30, 340);

    const screenTexture = new THREE.CanvasTexture(textCanvas);
    
    // Laptop Screen Mesh
    const screenGeo = new THREE.BoxGeometry(2.6, 1.8, 0.1);
    const screenMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x1e293b }), // Right
      new THREE.MeshStandardMaterial({ color: 0x1e293b }), // Left
      new THREE.MeshStandardMaterial({ color: 0x1e293b }), // Top
      new THREE.MeshStandardMaterial({ color: 0x1e293b }), // Bottom
      new THREE.MeshStandardMaterial({ map: screenTexture }), // Front (Code)
      new THREE.MeshStandardMaterial({ color: 0x0f172a }), // Back
    ];
    const laptopScreen = new THREE.Mesh(screenGeo, screenMaterials);
    laptopScreen.position.y = 0.5;
    laptopGroup.add(laptopScreen);

    // Laptop Screen Border Glow
    const borderGeo = new THREE.BoxGeometry(2.65, 1.85, 0.08);
    const borderMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const screenBorder = new THREE.Mesh(borderGeo, borderMat);
    screenBorder.position.y = 0.5;
    laptopGroup.add(screenBorder);

    // Laptop Base Mesh
    const baseGeo = new THREE.BoxGeometry(2.8, 0.1, 1.8);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.8
    });
    const laptopBase = new THREE.Mesh(baseGeo, baseMat);
    laptopBase.position.y = -0.45;
    laptopBase.position.z = 0.6;
    laptopBase.rotation.x = 0.08; // slightly slope up
    laptopGroup.add(laptopBase);

    // Laptop Keyboard Trackpad Area
    const keyboardGeo = new THREE.BoxGeometry(2.4, 0.02, 0.9);
    const keyboardMat = new THREE.MeshStandardMaterial({ color: 0x1e293b });
    const keyboard = new THREE.Mesh(keyboardGeo, keyboardMat);
    keyboard.position.set(0, -0.38, 0.4);
    keyboard.rotation.x = 0.08;
    laptopGroup.add(keyboard);

    // Position laptop group in screen
    laptopGroup.position.set(-1.2, 0.4, 0);
    laptopGroup.rotation.y = 0.35; // Tilted slightly to face right

    // --- 3. FLOATING REACT LOGO ---
    const reactGroup = new THREE.Group();
    mainGroup.add(reactGroup);

    // Center Core Sphere
    const coreGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      emissive: 0x00f5ff,
      emissiveIntensity: 0.8,
      roughness: 0.1
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    reactGroup.add(core);

    // React Rings (3 scaled toruses)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00a8ff,
      transparent: true,
      opacity: 0.7,
      wireframe: true
    });

    const ringGroup = new THREE.Group();
    const ringGeo = new THREE.TorusGeometry(1, 0.04, 8, 48);

    // Ring 1
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.scale.set(1.0, 0.35, 1.0);
    ringGroup.add(ring1);

    // Ring 2
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.scale.set(1.0, 0.35, 1.0);
    ring2.rotation.z = Math.PI / 3;
    ringGroup.add(ring2);

    // Ring 3
    const ring3 = new THREE.Mesh(ringGeo, ringMat);
    ring3.scale.set(1.0, 0.35, 1.0);
    ring3.rotation.z = -Math.PI / 3;
    ringGroup.add(ring3);

    reactGroup.add(ringGroup);

    // React position
    reactGroup.position.set(1.4, -0.6, 0.5);
    reactGroup.scale.set(0.9, 0.9, 0.9);

    // --- 4. FLOATING GEOMETRIC SHAPES ---
    // Cyan wireframe Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(0.35, 0.12, 64, 8);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const torusKnot = new THREE.Mesh(knotGeo, knotMat);
    torusKnot.position.set(1.8, 1.8, -1);
    mainGroup.add(torusKnot);

    // Small Gold Floating Cube
    const cubeGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      roughness: 0.3,
      metalness: 0.8
    });
    const floatingCube = new THREE.Mesh(cubeGeo, cubeMat);
    floatingCube.position.set(-1.8, -1.8, -0.5);
    mainGroup.add(floatingCube);

    // --- 5. PARTICLE SYSTEM (STARS / GLOWING DUST) ---
    const starCount = isMobile ? 120 : 350;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      // Random coordinates between -5 and 5
      starPositions[i] = (Math.random() - 0.5) * 12;
      starPositions[i + 1] = (Math.random() - 0.5) * 12;
      starPositions[i + 2] = (Math.random() - 0.5) * 10 - 2; // Keep slightly behind
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    // Particle texture
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 16;
    particleCanvas.height = 16;
    const pCtx = particleCanvas.getContext('2d');
    const grad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    pCtx.fillStyle = grad;
    pCtx.fillRect(0, 0, 16, 16);
    
    const pTexture = new THREE.CanvasTexture(particleCanvas);

    const starMat = new THREE.PointsMaterial({
      size: 0.15,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x00f5ff
    });

    const starParticles = new THREE.Points(starGeo, starMat);
    scene.add(starParticles);

    // --- 6. MOUSE TRACKING & INTERACTIVE PARALLAX ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      // Normalize values between -0.5 and 0.5
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- 7. ANIMATION LOOP ---
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // Smooth mouse follow parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 0.4;
      mainGroup.rotation.x = targetY * 0.3;

      // Drifting stars
      starParticles.rotation.y = time * 0.015;
      starParticles.rotation.x = time * 0.005;

      // Laptop floats and rotates subtly
      laptopGroup.position.y = 0.4 + Math.sin(time * 1.5) * 0.08;
      laptopGroup.rotation.z = Math.sin(time * 0.8) * 0.03;

      // React Logo rotates and floats
      reactGroup.position.y = -0.6 + Math.cos(time * 1.8) * 0.12;
      ringGroup.rotation.y = time * 0.3;
      ringGroup.rotation.x = time * 0.15;
      core.rotation.y = -time * 0.6;

      // Floating Shapes rotate
      torusKnot.rotation.x = time * 0.4;
      torusKnot.rotation.y = time * 0.25;
      torusKnot.position.y = 1.8 + Math.sin(time * 2) * 0.06;

      floatingCube.rotation.x = time * 0.3;
      floatingCube.rotation.z = time * 0.4;
      floatingCube.position.y = -1.8 + Math.cos(time * 1.2) * 0.1;

      // Render
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // --- 8. RESIZE HANDLER ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // --- CLEANUP ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Clean up ThreeJS buffers
      scene.clear();
      screenGeo.dispose();
      screenTexture.dispose();
      borderGeo.dispose();
      borderMat.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      keyboardGeo.dispose();
      keyboardMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      pTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="three-canvas-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'none' // Allows clicking through the canvas to reach elements behind it if needed, mouse move is tracked globally anyway
      }}
    />
  );
}
