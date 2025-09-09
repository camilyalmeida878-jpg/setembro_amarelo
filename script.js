const mensagens = [
  "Você e mais forte do que imagina 💛",
  "Nunca se esquesa: sua vida importa 🌻",
  "Você não eta sozinho, estamos juntos 🤝",
  "Acredite: dias melhores virõa ☀️",
  "Sempre existe esperança 🌈"
  ];

document.getElementById("btnMensagem").addEventListener("click", () => {
 const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
 document.getElementById("mensagem").innerText = aleatoria;
});
