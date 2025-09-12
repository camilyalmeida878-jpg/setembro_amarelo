const mensagens = [
  "Falar é a melhor solução. 🗣️"
  "Você importa. Sua vida importa. 💛"
  "Setembro Amarelo: a vida em primeiro lugar. 🌻"
  "Acolher, ouvir, apoiar. 🤝"
  "Não é drama, é dor. Cuide da saúde mental. 🧠"
  "Dê voz à vida. 🎤"
  "Juntos pela valorização da vida. 💬"
  "Setembro é amarelo, mas o cuidado é o ano todo. 🕊️"
  "Uma conversa pode salvar uma vida. 📞"
  "Prevenção também é afeto. ❤️"
  "A vida é a melhor escolha. 🌟"
  "Você não está sozinho. 🤗"
  "Falar salva vidas. 🧡"
  "Amar é escutar sem julgar. 👂"
  ];

document.getElementById("btnMensagem").addEventListener("click", () => {
 const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
 document.getElementById("mensagem").innerText = aleatoria;
});
