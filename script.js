const mensagens = [
  "Você e mais forte do que imagina 💛",
  "Nunca se esquesa: sua vida importa 🌻",
  "Você não eta sozinho, estamos juntos 🤝",
  "Acredite: dias melhores virõa ☀️",
  "Sempre existe esperança 🌈"
  ];

document.getElementByid("btnMensagem").addEventlistener("click", () => {
 const aleatoria = mensagem[Math.random() * mensagens.length)];
 document.getElementByid("mensagem").innerText = aleatoria;
});
