"use client";

import { useState, useCallback } from "react";
import { runPython } from "@/lib/pyodide";

const IMAGE_DATA_PREFIX = "data:image/png;base64,";

interface CodeEditorProps {
  initialCode: string;
}

function parseOutputSegments(
  raw: string,
): Array<{ type: "text" | "image"; content: string }> {
  const segments: Array<{ type: "text" | "image"; content: string }> = [];
  const lines = raw.split("\n");
  let textBuffer: string[] = [];

  const flushText = () => {
    if (textBuffer.length > 0) {
      segments.push({ type: "text", content: textBuffer.join("\n") });
      textBuffer = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith(IMAGE_DATA_PREFIX)) {
      flushText();
      segments.push({ type: "image", content: line });
    } else {
      textBuffer.push(line);
    }
  }
  flushText();

  return segments;
}

export function CodeEditor({ initialCode }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    setError(null);
    setOutput("");
    try {
      const result = await runPython(code);
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsRunning(false);
    }
  }, [code]);

  const segments = output ? parseOutputSegments(output) : [];
  const hasOutput = segments.length > 0 || error;

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-gray-200">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2">
        <span className="text-sm font-medium text-gray-600">Python</span>
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700 disabled:opacity-50"
        >
          {isRunning ? "Running..." : "Run"}
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full resize-none bg-gray-900 p-4 font-mono text-sm text-gray-100 focus:outline-none"
        rows={Math.max(code.split("\n").length, 4)}
        spellCheck={false}
      />
      {hasOutput && (
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          {error ? (
            <pre className="whitespace-pre-wrap font-mono text-sm text-red-600">
              {error}
            </pre>
          ) : (
            segments.map((segment, index) =>
              segment.type === "image" ? (
                /* eslint-disable-next-line @next/next/no-img-element */
              <img
                  key={index}
                  src={segment.content}
                  alt="Simulation plot"
                  className="my-2 max-w-full rounded"
                />
              ) : (
                <pre
                  key={index}
                  className="whitespace-pre-wrap font-mono text-sm text-gray-800"
                >
                  {segment.content}
                </pre>
              ),
            )
          )}
        </div>
      )}
    </div>
  );
}
