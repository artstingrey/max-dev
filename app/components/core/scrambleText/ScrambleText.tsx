'use client';
import React, {useEffect, useMemo, useState, HTMLAttributes, MouseEvent, useRef, useCallback, useLayoutEffect} from "react";
import clsx from "clsx";
import styles from "./ScrambleText.module.scss";


type ScrambleCharState = {
  char: string;
  color?: string;
  opacity?: number;
};

const WIDTH_GROUP_STRINGS = [
" .,:;|!iIl1'`", // think
  "abcdeghknopqrsuvxyz234567890", // medium
  "BCDEFHJKLNPRSTUVXZ", // large
  "mwMW@#$%^&*()[]{}<>/?\\", // very large
];

const WIDTH_GROUPS = WIDTH_GROUP_STRINGS.map((group) => group.split(""));
const DEFAULT_COLORS = ["#ffffff", "#0500a1", "#970665", "#fe1d17", "#249acf", "#000000", "#eaae02"];

function getWidthGroupIndex(ch: string): number {
  for (let i = 0; i < WIDTH_GROUPS.length; i++) {
    if (WIDTH_GROUPS[i].includes(ch)) return i;
  }
  return 1;
}

function randomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomCharForGroup(groupIndex: number): string {
  const group = WIDTH_GROUP_STRINGS[groupIndex];
  if (!group.length) return " ";
  return group[Math.floor(Math.random() * group.length)];
}

function classNameWidth (index: number = 1) {
    let style = '';
    switch (index) {
        case 0:
            style = styles.scrambleTextCharW0;
        break;
        case 1:
            style = styles.scrambleTextCharW1;
        break;
        case 2:
            style = styles.scrambleTextCharW2;
        break;
        case 3:
            style = styles.scrambleTextCharW3;
        break;

        default:
            style = styles.scrambleTextCharW0;
        break;
    }

    return style;
    
}

type ScrambleTextProps = Omit<HTMLAttributes<HTMLSpanElement>,"children"> & {
  text: string;
  active?: boolean;
  mixChance?: number;
  duration?: number;
  glitchFraction?: number;
  stepDelay?: number;
  colors?: string[];
};


export function ScrambleText({text, active, stepDelay = 40, glitchFraction = 0.3, duration = 400, mixChance = 0.9, colors = DEFAULT_COLORS, className, onMouseEnter, onMouseLeave, ...spanProps}:ScrambleTextProps) {
    const [hovered, setHovered] = useState(false);
    const isActive = active ?? hovered;
    const baseChars = useMemo(() => text.split(''),[text]);

    const widthGroups = useMemo(() => {
        return baseChars.map((ch) => getWidthGroupIndex(ch));
    }, [baseChars]);

    const [display, setDisplay] = useState<ScrambleCharState[] | null>(null);

    const charRefs = useRef<Array<HTMLSpanElement | null>>([]);
    // посчитанные ширины (px) на каждый символ
    const [charWidths, setCharWidths] = useState<number[] | null>(null);

    useEffect(() => {
        setDisplay(null);
        setCharWidths(null);
    }, [text]);

     const measureWidths = useCallback(() => {
        // меряем именно текущие DOM-спаны
        const widths = baseChars.map((_, i) => {
        const el = charRefs.current[i];
        if (!el) return 0;
        // getBoundingClientRect стабильнее, чем offsetWidth при трансформациях/сабпикселях
        return el.getBoundingClientRect().width;
        });

        // если все 0 — значит DOM ещё не готов
        const hasAny = widths.some((w) => w > 0);
        if (hasAny) setCharWidths(widths);
    }, [baseChars]);

    useLayoutEffect(() => {
        // 1) после первого рендера
        measureWidths();

        // 2) когда догрузятся шрифты (если есть)
        // чтобы ширины пересчитались под финальный font-face
        // (в Safari document.fonts может быть undefined — проверяем)
        const fonts = document.fonts;
        if (fonts?.ready) {
        fonts.ready.then(() => {
            // requestAnimationFrame на всякий, чтобы дождаться рефлоу
            requestAnimationFrame(measureWidths);
        });
        } else {
        // fallback: ещё один кадр
            requestAnimationFrame(measureWidths);
        }
    }, [measureWidths]);

    useEffect(() => {
        if (!isActive) {
            setDisplay(null);
            return;
        }

        const totalSteps = Math.max(1,Math.ceil(duration / stepDelay));

        let step = 0;

        const glitchCount = Math.max(1,Math.round(baseChars.length * glitchFraction));
        const glitchSet = new Set<number>();

        while (glitchSet.size < glitchCount) {
            const i = Math.floor(Math.random() * baseChars.length);
            if (baseChars[i] !== " " && baseChars[i] !== "\n") {
                glitchSet.add(i);
            }
        }

        const glitchIndexes = Array.from(glitchSet);

        const intervalId = window.setInterval(() => {
            step++;

            const next: ScrambleCharState[] = baseChars.map((original, index) => {
                if (original === " " || original === "\n") {
                    return { char: original };
                }

                if (!glitchIndexes.includes(index)) {
                    return { char: original };
                }

                if (Math.random() > mixChance) {
                    return { char: original };
                }

                const groupIndex = widthGroups[index];
                const newChar = randomCharForGroup(groupIndex);
                const color = randomFromArray(colors);
                const opacity = 0.4 + Math.random() * 0.5; // 0.4–0.9

                return {
                    char: newChar,
                    color,
                    opacity,
                };
            });

            setDisplay(next);

            if (step >= totalSteps) {
                window.clearInterval(intervalId);
                setDisplay(null);
            }
        },stepDelay);

        return () => {
            window.clearInterval(intervalId);
        };

    },[isActive, baseChars, duration, stepDelay, glitchFraction, mixChance, widthGroups, colors]);

    const handleMouseEnter = (e: MouseEvent<HTMLSpanElement>) => {
        if (active === undefined) {
            setHovered(true);
        }
        onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLSpanElement>) => {
        if (active === undefined) {
            setHovered(false);
        }
        onMouseLeave?.(e);
    };

    const charsToRender: ScrambleCharState[] = display ?? baseChars.map((c) => ({ char: c }));

    return (
    <span
      className={clsx(styles.scrambleText, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...spanProps}
    >
      {charsToRender.map((item, index) => {
        const isSpace = item.char === " ";
        const renderedChar = isSpace ? "\u00A0" : item.char;

        return (
          <span
            key={index}
            ref={(el) => {
              charRefs.current[index] = el;
            }}
            className={styles.scrambleTextChar}
            style={{
              // фиксируем ширину каждого символа в px (как в vanilla)
              width: charWidths?.[index] ? `${charWidths[index]}px` : undefined,
              ...(item.color || item.opacity !== undefined
                ? { color: item.color, opacity: item.opacity }
                : null),
            }}
          >
            {renderedChar}
          </span>
        );
      })}
    </span>
    );
}