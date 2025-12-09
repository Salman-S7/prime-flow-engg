"use client";

import { useRef, useEffect, useState } from "react";

// Modern, high-quality images for the demo
// const IMAGES = [
//   "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2670&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2564&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2680&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1628191010210-a59de33e5941?q=80&w=2670&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
// ];

const IMAGES = [
  "./pumps/pump-1.jpg",
  "./pumps/pump-2.jpg",
  "./pumps/pump-1.jpg",
  "./pumps/pump-2.jpg",
  "./pumps/pump-1.jpg",
  "./pumps/pump-2.jpg",
  "./pumps/pump-1.jpg",
  "./pumps/pump-2.jpg",
];

export default function InfiniteCarousel() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Animation state
  // We use refs for state that updates 60 times a second to avoid React renders
  const scrollRef = useRef(0);
  const animationFrameRef = useRef(null);

  // --- CONFIGURATION ---
  const ITEM_WIDTH = 380; // Width of each card in px
  const GAP = 20; // Space between cards in px
  const TOTAL_WIDTH = ITEM_WIDTH + GAP;
  const SPEED = 0.5; // Speed of auto-scroll

  // We duplicate the images 4 times to ensure the buffer is long enough
  // for wide screens (4k monitors) without gaps.
  const DISPLAY_ITEMS = [...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES];

  useEffect(() => {
    // The core animation loop
    const animate = () => {
      if (!carouselRef.current) return;

      // 1. Move the scroll position
      if (!isHovered) {
        scrollRef.current += SPEED;
      }

      // 2. Loop Logic
      // Once we've scrolled past the length of the original set, reset to 0
      // This creates the seamless infinite illusion.
      const singleSetWidth = IMAGES.length * TOTAL_WIDTH;
      if (scrollRef.current >= singleSetWidth) {
        scrollRef.current -= singleSetWidth;
      }

      const containerCenter = 640;
      //window.innerWidth / 2;
      // @ts-expect-error
      const items = carouselRef.current.children;

      // 3. Update every single card
      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // Calculate the item's raw X position on screen
        // (Index * Width) - Current Scroll
        let xPos = i * TOTAL_WIDTH - scrollRef.current;

        // --- 3D TRANSFORM MATH ---
        // Find the center point of this specific item
        const itemCenter = xPos + ITEM_WIDTH / 2;

        // How far is this item from the center of the screen?
        const distanceFromCenter = itemCenter - containerCenter;

        // Normalize the distance:
        // 0 = Center of screen
        // 1 = Right edge of "effect zone"
        // -1 = Left edge of "effect zone"
        const EFFECT_ZONE = 800; // Pixels
        const normalizedDist = Math.max(
          -1,
          Math.min(1, distanceFromCenter / EFFECT_ZONE)
        );

        // CALCULATIONS:

        // A. Rotation (The "Cylinder" effect)
        // Items on left rotate +Y, items on right rotate -Y
        const rotateY = 0;

        // B. Scale (Depth)
        // Center = 1.0, Edges = 0.8
        const scale = 1;

        // C. Opacity & Blur (Focus)
        // Blur increases as items move away
        const blur = 0;
        const brightness = 1;
        const opacity = 1;

        // D. Z-Index
        // Center item must be on top of others
        const zIndex = 100;

        // Apply styles directly to DOM for 60fps performance
        item.style.transform = `
          translate3d(${xPos}px, 0, 0)
          perspective(1000px)
          rotateY(${rotateY}deg)
          scale(${scale})
        `;
        item.style.zIndex = zIndex;
        item.style.filter = `blur(${blur}px) brightness(${brightness})`;
        item.style.opacity = opacity;
      }
      // @ts-expect-error
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // @ts-expect-error
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isHovered, TOTAL_WIDTH]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center font-sans">
      <div
        className="relative w-full h-[500px] flex items-center justify-start mask-x-from-90%"
        style={{ perspective: "1200px" }}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={carouselRef}
          className="relative overflow-hidden w-full h-full"
        >
          {DISPLAY_ITEMS.map((src, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-0 w-[380px] p-2 h-[280px] -mt-[190px] rounded-xl  overflow-hidden shadow-xl will-change-transform cursor-pointer group border border-cyan-200"
              style={{
                // Hide initially to prevent layout shifts before JS kicks in
                transform: "translate3d(2000px,0,0)",
              }}
            >
              {/* Image */}
              <img
                src={src}
                alt="Gallery Item"
                className="w-full h-full rounded-md object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Card Content */}
              <div className="absolute bottom-6 left-5 transition-opacity duration-300 opacity-100">
                <div className="w-6 h-0.5 bg-white/50 mb-3" />
                <p className="text-white text-xs font-bold tracking-widest uppercase text-opacity-90">
                  Item {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
