import React, { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ImageViewerContext = createContext(null);

export const useImageViewer = () => useContext(ImageViewerContext);

export const ImageViewerProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  const openImage = (src, caption) => setImage({ src, caption });
  const closeImage = () => setImage(null);

  useEffect(() => {
    if (!image) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeImage();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [image]);

  return (
    <ImageViewerContext.Provider value={{ openImage, closeImage }}>
      {children}
      {image &&
        createPortal(
          <div
            onClick={closeImage}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(26, 26, 46, 0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              cursor: "zoom-out",
              animation: "fadeIn 0.2s ease",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="hud-frame"
              style={{
                position: "relative",
                maxWidth: "92vw",
                maxHeight: "88vh",
                cursor: "default",
              }}
            >
              <span className="hud-bl" />
              <span className="hud-br" />
              <img
                src={image.src}
                alt={image.caption || "Full view"}
                style={{
                  display: "block",
                  maxWidth: "92vw",
                  maxHeight: "88vh",
                  objectFit: "contain",
                }}
              />
              <div className="hud-scanlines" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.6 }} />

              <div
                className="font-mono-hud"
                style={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  fontSize: 10,
                  color: "#0d8a6e",
                  background: "rgba(245, 241, 232, 0.9)",
                  padding: "2px 8px",
                }}
              >
                FULL_VIEW
              </div>
              <button
                type="button"
                onClick={closeImage}
                className="font-mono-hud"
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  fontSize: 10,
                  color: "#0d8a6e",
                  background: "rgba(245, 241, 232, 0.9)",
                  padding: "2px 8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                [ESC] × CLOSE
              </button>

              {image.caption && (
                <div
                  className="font-mono-hud"
                  style={{
                    position: "absolute",
                    bottom: 8,
                    left: 8,
                    right: 8,
                    fontSize: 10,
                    color: "#F5F1E8",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    pointerEvents: "none",
                  }}
                >
                  <span style={{ height: 1, flex: 1, background: "rgba(13, 138, 110, 0.5)" }} />
                  <span style={{ color: "#0d8a6e" }}>{image.caption}</span>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </ImageViewerContext.Provider>
  );
};
