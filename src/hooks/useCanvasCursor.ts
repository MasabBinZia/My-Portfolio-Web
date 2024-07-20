"use client";

import { useEffect } from "react";
import {
  LineOptions,
  NodeType,
  OscillatorOptions,
  Position,
} from "@/types/canvas-cursor-types";

class Oscillator {
  private phase: number;
  private offset: number;
  private frequency: number;
  private amplitude: number;
  private value: number;

  constructor(options: OscillatorOptions = {}) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
    this.value = 0;
  }

  update(): number {
    this.phase += this.frequency;
    this.value = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.value;
  }

  getValue(): number {
    return this.value;
  }
}

class Node implements NodeType {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
}

class Line {
  private spring: number;
  private friction: number;
  nodes: NodeType[];

  constructor(options: LineOptions) {
    this.spring = options.spring + 0.1 * Math.random() - 0.02;
    this.friction = E.friction + 0.01 * Math.random() - 0.002;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) {
      const node = new Node();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  }

  update(): void {
    let spring = this.spring;
    const firstNode = this.nodes[0];
    firstNode.vx += (pos.x - firstNode.x) * spring;
    firstNode.vy += (pos.y - firstNode.y) * spring;

    for (let i = 0, len = this.nodes.length; i < len; i++) {
      const node = this.nodes[i];
      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * spring;
        node.vy += (prevNode.y - node.y) * spring;
        node.vx += prevNode.vx * E.dampening;
        node.vy += prevNode.vy * E.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= E.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let i = 1, len = this.nodes.length - 2; i < len; i++) {
      const node = this.nodes[i];
      const nextNode = this.nodes[i + 1];
      x = (node.x + nextNode.x) * 0.5;
      y = (node.y + nextNode.y) * 0.5;
      ctx.quadraticCurveTo(node.x, node.y, x, y);
    }

    const penultimateNode = this.nodes[this.nodes.length - 2];
    const lastNode = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(
      penultimateNode.x,
      penultimateNode.y,
      lastNode.x,
      lastNode.y
    );
    ctx.stroke();
    ctx.closePath();
  }
}

const E = {
  debug: true,
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

let ctx: CanvasRenderingContext2D & { running?: boolean; frame?: number };
let oscillator: Oscillator;
let pos: Position = { x: 0, y: 0 };
let lines: Line[] = [];

function onMousemove(e: MouseEvent | TouchEvent): void {
  function initLines(): void {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
    }
  }

  function updatePosition(e: MouseEvent | TouchEvent): void {
    if ("touches" in e) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    e.preventDefault();
  }

  function updateTouchPosition(e: TouchEvent): void {
    if (e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }

  document.removeEventListener("mousemove", onMousemove);
  document.removeEventListener("touchstart", onMousemove as EventListener);
  document.addEventListener("mousemove", updatePosition);
  document.addEventListener("touchmove", updatePosition as EventListener);
  document.addEventListener("touchstart", updateTouchPosition);

  updatePosition(e);
  initLines();
  render();
}

function render(): void {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},50%,50%,0.2)`;
    ctx.lineWidth = 1;

    for (let i = 0; i < E.trails; i++) {
      const line = lines[i];
      line.update();
      line.draw(ctx);
    }

    ctx.frame!++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas(): void {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

const useCanvasCursor = (): void => {
  const renderCanvas = (): void => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D & {
      running?: boolean;
      frame?: number;
    };
    ctx.running = true;
    ctx.frame = 1;

    oscillator = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove as EventListener);
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => {
      if (!ctx.running) {
        ctx.running = true;
        render();
      }
    });
    window.addEventListener("blur", () => {
      ctx.running = true;
    });
    resizeCanvas();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove as EventListener);
      document.body.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", () => {
        if (!ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.removeEventListener("blur", () => {
        ctx.running = true;
      });
    };
  }, []);
};

export default useCanvasCursor;
