// Supabase > Project Settings > API Keys : adresse du projet + clé publique ("publishable" ou "anon"). JAMAIS la clé secrète ni service_role.
window.OHAZI = { https://amnettapmatalwovsfjy.supabase.co }, key: sb_publishable_cOLrM3BGvbSxyQpvCHjQOw_X_FX-Cv2};

// Les nouvelles clés (sb_publishable_...) ne doivent être envoyées que dans l'en-tête apikey, sinon erreur "Invalid JWT".
if (window.OHAZI.key.startsWith('sb_')) {
  const f = window.fetch;
  window.fetch = (u, o = {}) => {
    const { Authorization, ...h } = o.headers || {};
    return f(u, { ...o, headers: h });
  };
}
