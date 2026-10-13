const urls = [
  "https://shrey-portfolio-black.vercel.app/",
  "https://github.com/Shrey317",
  "https://www.linkedin.com/in/shrey-patel-36a5b8343/",
];
for (const url of urls) {
  try {
    const r = await fetch(url, {
      signal: AbortSignal.timeout(20000),
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    console.log(
      JSON.stringify({
        url,
        status: r.status,
        finalUrl: r.url,
        title: (await r.text()).match(/<title[^>]*>(.*?)<\/title>/s)?.[1],
      }),
    );
  } catch (error) {
    console.log(JSON.stringify({ url, error: error.message }));
  }
}
