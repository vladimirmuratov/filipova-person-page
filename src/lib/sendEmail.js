export async function sendEmail(data) {
  const res = await fetch('/api/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': ' application/json',
    },
    body: JSON.stringify(data),
  });

  return res.status;
}
