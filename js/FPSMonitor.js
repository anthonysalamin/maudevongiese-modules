/**
 * MAUDEVONGIESE.CH | FPSMonitor
 * Shows a lightweight on-screen FPS counter for staging diagnostics.
 * @build 24.12.25
 * @updated 00:00 PHT
 * @author TONYTONY Sàrl
 */

export class FPSMonitor {
    constructor() {
      this.frames = 0;
      this.lastTime = performance.now();
      this.fpsElement = null;
      this.rafId = null;
    }
  
    init() {
      this.fpsElement = document.createElement("div");
  
      Object.assign(this.fpsElement.style, {
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "5px",
        zIndex: "9999",
        fontFamily: "monospace",
        fontSize: "12px"
      });
  
      document.body.appendChild(this.fpsElement);
  
      this.loop();
    }
  
    loop() {
      this.frames++;
  
      const now = performance.now();
      const delta = now - this.lastTime;
  
      if (delta >= 1000) {
        const fps = Math.round((1000 * this.frames) / delta);
  
        if (this.fpsElement) {
          this.fpsElement.textContent = `FPS: ${fps}`;
        }
  
        this.frames = 0;
        this.lastTime = now;
      }
  
      this.rafId = requestAnimationFrame(() => this.loop());
    }
  
    destroy() {
      cancelAnimationFrame(this.rafId);
      this.fpsElement?.remove();
    }
  }