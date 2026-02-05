"use client";

export function ScrollBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{ backgroundColor: "var(--bg)" }}
      aria-hidden="true"
    />
  );
}
