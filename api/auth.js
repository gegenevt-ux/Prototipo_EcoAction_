import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { email, nome } = req.body;

    try {
      let { data: usuario } = await supabase
        .from('usuarios')
        .select('*')
        .eq('email', email)
        .single();

      if (!usuario) {
        const { data: newUser } = await supabase
          .from('usuarios')
          .insert([{ email, nome: nome || email.split('@')[0] }])
          .select()
          .single();
        usuario = newUser;
      }

      const token = Buffer.from(JSON.stringify({ 
        id: usuario.id, 
        email: usuario.email,
        nome: usuario.nome 
      })).toString('base64');

      return res.status(200).json({ success: true, usuario, token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Método não permitido' });
}