export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" && process.env.BLOG_MODE !== "isolated") {
    const { checkLeadsAtStartup } = await import("./instrumentation-node");
    await checkLeadsAtStartup();
  }
}
