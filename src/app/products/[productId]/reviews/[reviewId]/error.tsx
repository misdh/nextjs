"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div>{error.message}</div>
      <button onClick={reset}>reset</button>
    </>
  );
}
