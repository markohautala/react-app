// GradientComponent.jsx

import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const GradientComponent = () => {
    const canvasRef = useRef(null);
    const gradientRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const config = {
          "colors": [
              {
                  "color": "#D5DFF4",
                  "enabled": true
              },
              {
                  "color": "#ECF2FF",
                  "enabled": true
              },
              {
                  "color": "#F3D4F2",
                  "enabled": true
              },
              {
                  "color": "#E0E7FF",
                  "enabled": true
              },
              {
                  "color": "#F6FFFF",
                  "enabled": true
              }
          ],
          "speed": 8,
          "horizontalPressure": 2,
          "verticalPressure": 5,
          "waveFrequencyX": 2,
          "waveFrequencyY": 4,
          "waveAmplitude": 8,
          "shadows": 7,
          "highlights": 6,
          "colorBrightness": 1.05,
          "colorSaturation": 1,
          "wireframe": false,
          "colorBlending": 7,
          "backgroundColor": "#0b3954",
          "backgroundAlpha": 1,
          "resolution": 2
      };

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            ...config,
        });

        return () => {
            if (gradientRef.current) {
                gradientRef.current.destroy();
            }
        };
    }, []);

    return (
        <canvas
            id="gradientCanvas"
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
            ref={canvasRef}
        />
    );
};

export default GradientComponent;
