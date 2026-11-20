export async function editorialRequest(path: string, payload?: unknown) {
  const response = await fetch("/api/editorial/" + path, {
    method: "POST",
    body: payload instanceof Blob ? payload : payload === undefined ? undefined : JSON.stringify(payload),
    headers: payload !== undefined && !(payload instanceof Blob) ? { "Content-Type": "application/json" } : undefined,
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "The request could not be completed");
  return data;
}
