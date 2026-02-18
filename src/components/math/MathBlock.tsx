"use client";

import katex from "katex";
import { useMemo } from "react";

interface MathBlockProps {
  tex: string;
  displayMode?: boolean;
}

export function MathBlock({ tex, displayMode = true }: MathBlockProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, {
        displayMode,
        throwOnError: false,
      });
    } catch {
      return `<span class="text-red-500">Error rendering: ${tex}</span>`;
    }
  }, [tex, displayMode]);

  if (displayMode) {
    return (
      <div
        className="my-4 overflow-x-auto text-center"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
