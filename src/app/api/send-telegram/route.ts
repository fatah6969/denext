export async function POST(req: Request) {
  const body = await req.json();

  const { title, name, company = "", message } = body;

  const text = `
${title}
👤 Nama: ${name}
🏢 Perusahaan: ${company}
💬 Pesan:
${message}
`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      }),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Telegram Error:", err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
