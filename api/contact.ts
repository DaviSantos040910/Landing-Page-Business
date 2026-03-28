import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, service, message } = request.body;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return response.status(500).json({ error: 'Configuração de e-mail ausente' });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Site Portfolio <onboarding@resend.dev>', // Ou email verificado
        to: ['davisantossousa2@gmail.com'],
        subject: `Novo Orçamento: ${service}`,
        html: `
          <h1>Novo contato pelo site</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Serviço:</strong> ${service}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (res.ok) {
      return response.status(200).json({ success: true });
    } else {
      const error = await res.json();
      console.error('Resend API error:', error);
      return response.status(500).json({ error: 'Falha ao enviar e-mail' });
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return response.status(500).json({ error: 'Erro interno no servidor' });
  }
}
