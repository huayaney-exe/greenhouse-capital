import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isVisible = useRef(true);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let animationFrameId: number;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Cancel any pending animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Schedule cursor update
      animationFrameId = requestAnimationFrame(() => {
        if (dot && outline) {
          dot.style.left = `${mousePos.current.x}px`;
          dot.style.top = `${mousePos.current.y}px`;
          outline.style.left = `${mousePos.current.x}px`;
          outline.style.top = `${mousePos.current.y}px`;
        }
      });
    };

    // Mouse down handler
    const handleMouseDown = () => {
      if (dot) {
        dot.classList.add('clicking');
      }
    };

    // Mouse up handler
    const handleMouseUp = () => {
      if (dot) {
        dot.classList.remove('clicking');
      }
    };

    // Mouse enter handler
    const handleMouseEnter = () => {
      if (isVisible.current && dot && outline) {
        dot.classList.remove('hidden');
        outline.classList.remove('hidden');
      }
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      if (dot && outline) {
        dot.classList.add('hidden');
        outline.classList.add('hidden');
      }
    };

    // Hover effect for interactive elements
    const handleElementHover = () => {
      if (outline) {
        outline.classList.add('hovering');
      }
    };

    const handleElementLeave = () => {
      if (outline) {
        outline.classList.remove('hovering');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
};

export default CustomCursor;
