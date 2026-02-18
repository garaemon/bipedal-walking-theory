// Pyodide CDN URL
const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.27.4/full/";

interface PyodideInterface {
  runPythonAsync(code: string): Promise<unknown>;
  loadPackage(packages: string | string[]): Promise<void>;
}

let pyodideInstance: PyodideInterface | null = null;
let loadingPromise: Promise<PyodideInterface> | null = null;

export async function loadPyodide(): Promise<PyodideInterface> {
  if (pyodideInstance) {
    return pyodideInstance;
  }
  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = (async () => {
    // Dynamically load the Pyodide script from CDN
    const script = document.createElement("script");
    script.src = `${PYODIDE_CDN}pyodide.js`;
    await new Promise<void>((resolve, reject) => {
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Pyodide"));
      document.head.appendChild(script);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const globalLoadPyodide = (globalThis as any).loadPyodide;
    pyodideInstance = await globalLoadPyodide({ indexURL: PYODIDE_CDN });
    return pyodideInstance!;
  })();

  return loadingPromise;
}

export async function runPython(code: string): Promise<string> {
  const pyodide = await loadPyodide();

  // Capture stdout
  await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
  `);

  try {
    const result = await pyodide.runPythonAsync(code);
    const stdout = await pyodide.runPythonAsync("sys.stdout.getvalue()");
    const output = String(stdout || "");
    if (output) return output;
    if (result !== undefined && result !== null) return String(result);
    return "";
  } catch (error) {
    throw error;
  } finally {
    await pyodide.runPythonAsync("sys.stdout = sys.__stdout__");
  }
}
