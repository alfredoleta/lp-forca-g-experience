export const BUSINESS_INFO = {
  name: "Força G Experience",
  pilot: "Tenente-Coronel Salvatore (Alfredo Leta)",
  pilotTitle: "Líder da Esquadrilha CEU",
  pilotExperience: "Mais de 3.000 horas de voo",
  location: "Clube da Aeronáutica, Barra da Tijuca / Recreio, Rio de Janeiro",
  duration: {
    total: "Cerca de 50 minutos",
    flight: "20 minutos de voo",
  },
  aircraft: "RV-7A (Projetado para acrobacias)",
  maneuvers: [
    {
      nomeManobra: "Looping",
      descricaoManobra:
        "Giro de 360° na vertical puxando. Sinta a força G de 3 a 4 Gs'",
    },
    {
      nomeManobra: "Oito Cubano",
      descricaoManobra:
        "Manobra em forma de oito, com rotações controladas. Sinta a dinâmica do voo em movimento contínuo.",
    },
    {
      nomeManobra: "Tunô Barril",
      descricaoManobra:
        "Movimento em forma de barril, com rotações suaves e controle preciso. Uma experiência única de acrobacia.",
    },
    {
      nomeManobra: "Tunô Lento",
      descricaoManobra:
        "Giro de 360° com uso dos comandos. Sinta a força G positiva e negativa na amplitude máxima.",
    },
  ],
  // maneuvers: ["Looping", "Oito Cubano", "Tunô Barril", "Tunô Lento"],
  pricing: {
    base: 1200,
    withEditedVideo: 1300,
  },
  requirements: ["Maiores de 18 anos", "Até 100kg", "Boas condições de saúde"],
  whatsapp: "(21) 99111-3067",
  instagram: "@salvatoreceu",
};

export const FAQ = [
  {
    question: "O que é o Força G Experience?",
    answer:
      "Um voo acrobático de 20 minutos com o piloto de caça Alfredo Leta, cheio de adrenalina, sobre a Barra da Tijuca, Recreio e Grumari, decolando do Clube da Aeronáutica.",
  },
  {
    question: "Posso pilotar o avião?",
    answer:
      "Sim, você pode assumir o manche por alguns minutos, com supervisão do piloto.",
  },
  {
    question: "O voo é seguro?",
    answer:
      "Sim, o piloto Tenente-Coronel Salvatore tem mais de 3.000 horas de voo em aeronave de caça, e o avião RV-7A é projetado especificamente para acrobacias, seguindo rigorosos protocolos de segurança.",
  },
  {
    question: "Vou enjoar no voo?",
    answer:
      "Se você tende a enjoar, informe antes. Podemos adaptar as manobras para seu total conforto.",
  },
  {
    question: "Como funciona o agendamento?",
    answer:
      "Combinamos um dia e horário com pelo menos 5 dias de antecedência via WhatsApp. Há necessidade de efetuar o pagamento de um sinal. O pagamento do restante é feito após o voo",
  },
];

export const TESTIMONIALS = [
  {
    name: "Carlos Eduardo",
    role: "Empresário",
    text: "A melhor experiência da minha vida! Sentir a força G em um looping sobre o mar do Rio de Janeiro é indescritível. O Salvatore passa uma segurança incrível.",
    rating: 5,
    image: "/assets/images/depoimentos/depoimento_1.jpg",
  },
  {
    name: "Mariana Silva",
    role: "Aventureira",
    text: "Sempre sonhei em voar como num filme. O Força G Experience superou todas as expectativas. Assumir o manche foi o ponto alto do voo!",
    rating: 5,
    image: "/assets/images/depoimentos/depoimento_2.jpg",
  },
  {
    name: "Rafael Costa",
    role: "Engenheiro",
    text: "Profissionalismo do início ao fim. O briefing é muito claro e o voo é pura adrenalina. Vale cada centavo, recomendo o pacote com vídeo!",
    rating: 5,
    image: "/assets/images/depoimentos/depoimento_3.jpg",
  },
  {
    name: "Juliana Mendes",
    role: "Fotógrafa",
    text: "As manobras são de tirar o fôlego e a vista lá de cima é espetacular. O vídeo editado ficou perfeito, uma lembrança para a vida toda.",
    rating: 5,
    image: "/assets/images/depoimentos/depoimento_4.jpg",
  },
  {
    name: "Fernando Alves",
    role: "Piloto Privado",
    text: "Como piloto, posso atestar o altíssimo nível técnico do Tenente-Coronel Salvatore. Voar com um líder da Esquadrilha da Fumaça é um privilégio.",
    rating: 5,
    image: "/assets/images/depoimentos/depoimento_5.jpg",
  },
  {
    name: "Breno Rocha",
    role: "Estudante",
    text: "Dei de presente para o meu pai e ele chorou de emoção! A equipe foi super atenciosa e o voo foi inesquecível. Recomendo de olhos fechados.",
    rating: 5,
    image: "/assets/images/depoimentos/depoimento_6.jpg",
  },
];

export const WHATSAPP_LINK = `https://wa.me/55${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}`;

export const INSTAGRAM_LINK = `https://instagram.com/${BUSINESS_INFO.instagram.replace("@", "")}`;
