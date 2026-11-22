export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" && process.env.BLOG_MODE !== "isolated") {
    const { checkLeadsAtStartup } = await import("./instrumentation-node");
    await checkLeadsAtStartup();
  }
  if (process.env.NEXT_RUNTIME === "nodejs") {
    if (process.env.BLOG_MODE === "live" || process.env.BLOG_MODE === "isolated") {
      const { startEditorialScheduler } = await import("./lib/editorial/scheduler");
      startEditorialScheduler();
    }
  }
}
