"use client";

interface InteractiveDemoProps {
  title: string;
  children?: React.ReactNode;
}

export function InteractiveDemo({ title, children }: InteractiveDemoProps) {
  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-6">
      <h3 className="mb-4 text-lg font-semibold text-blue-900">{title}</h3>
      <div className="rounded bg-white p-4">
        {children ?? (
          <p className="text-sm text-gray-500">
            Interactive demo coming soon...
          </p>
        )}
      </div>
    </div>
  );
}
