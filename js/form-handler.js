// ⚠️ IMPORTANT: Replace with YOUR Telegram Bot Token and Chat ID
// Steps to get them:
// 1. Talk to @BotFather on Telegram → /newbot → get TOKEN
// 2. Talk to your bot, then visit: https://api.telegram.org/bot<TOKEN>/getUpdates → get chat_id

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';

document.getElementById('projectForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const message = `
🚀 *NEW PROJECT REQUEST*

👤 *Name:* ${data.name}
📋 *Project Type:* ${data.projectType}
💰 *Budget:* ₹${data.budget}
📅 *Deadline:* ${data.deadline}
📝 *Details:* ${data.details}
📞 *Phone:* ${data.phone}

_Sent from NexusAI Website_
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      }
    );

    if (response.ok) {
      document.getElementById('successMessage').classList.add('show');
      e.target.reset();
      setTimeout(() => {
        document.getElementById('projectModal').classList.remove('active');
        document.getElementById('successMessage').classList.remove('show');
      }, 3000);
    } else {
      alert('Failed to send. Please try WhatsApp instead.');
    }
  } catch (error) {
    console.error(error);
    alert('Error sending message. Please try WhatsApp instead.');
  }
});
