/**
 * Each item: topic (exact label), question, correct answer, three distractors.
 * Option order is randomized at runtime in app.js.
 */
const QUIZ_BANK = [
  // —— ISN ——
  {
    topic: "ISN",
    question:
      "Em que ano o Real Instituto Socorros a Náufragos (RISN) criou o primeiro serviço de assistência a banhistas nas praias?",
    correct: "1909",
    distractors: ["1910", "1957", "1892"],
  },
  {
    topic: "ISN",
    question: "Qual a portaria que aprova o Regulamento de Uniformes do Nadador-Salvador (NS)?",
    correct: "Portaria n.º 321/2015 de 1 de outubro",
    distractors: [
      "Portaria nº 311/2015 de 1 de outubro",
      "Portaria nº 321/2012 de 1 de outubro",
      "Portaria nº 311/2012 de 1 de outubro",
    ],
  },
  {
    topic: "ISN",
    question: "O Instituto de Socorros a Náufragos assegura o reconhecimento e certificação nos seguintes domínios da atividade de nadador-salvador?",
    correct: "Todas as opções estão corretas",
    distractors: [
      "Nadador-salvador",
      "Cursos e entidades formadoras",
      "Material e equipamento",
    ],
  },
  {
    topic: "ISN",
    question: "Constitui contraordenação punível com coima de 100 a 1000€, o seguinte ato praticado pelo Nadador-Salvador (NS)?",
    correct: "Afastamento injustificado da área de vigilância e socorro, durante o horário de serviço",
    distractors: [
      "Não efetuar uma inspeção aos meios de salvamento do posto de praia",
      "Içar a bandeira vermelha sem autorização da Polícia Marítima (PM)",
      "Não usar os pés de pato durante um salvamento",
    ],
  },
  {
    topic: "ISN",
    question: "Em que ano o Instituto de Socorros a Náufragos se tornou membro fundador da International Life Saving Federation (ILS)",
    correct: "1993",
    distractors: ["1959", "1998", "2000"],
  },
  {
    topic: "ISN",
    question: "O Decreto-Lei n.º 96-A/2006 de 2 de junho, aprovou o regime contraordenacional. A não participação de acidentes na Zona de Assistência a Banhistas (ZAB) à autoridade marítima no prazo de 24 horas, é punível com?",
    correct: "Coima de 250€ a 2500€ a pagar pelo titular de licença ou concessões de Zona de Assistência a Banhistas (ZAB)",
    distractors: [
      "Coima de 100€ a 1000€ a pagar pelo Nadador-Salvador (NS)", 
      "Coima de 100€ a 1000€ a pagar pelo titular da licença da Zona de Assistência a Banhistas (ZAB)", 
      "Coima de 250€ a 2500€ a pagar pelo Nadador-Salvador (NS)"],
  },
  {
    topic: "ISN",
    question: "Em que praia portuguesa, o Real Instituto de Socorros a Náufragos (RISN), criou o primeiro serviço de assistência a banhistas?",
    correct: "Na praia da Trafaria",
    distractors: [
      "Na praia de Caxias", 
      "Na praia de Albufeira", 
      "Na praia de Algés"],
  },
  {
    topic: "ISN",
    question: "O Nadador-Salvador (NS) afasta-se injustificadamente da área de vigilância e socorro, durante o horário de serviço?",
    correct: "Constitui uma contraordenação punível com coima de 100€ a 1000€",
    distractors: [
      "Constitui uma contraordenação punível com coima de 50€ a 1000€",
      "Constitui uma contraordenação punível com coima de 50€ a 250€",
      "Constitui um crime punível com prisão até 30 dias",
    ],
  },
  {
    topic: "ISN",
    question: "Em que ano foi criado o Real Instituto de Socorros a Náufragos (RISN) e por quem?",
    correct: "Em 1892, pela Rainha D. Amélia",
    distractors: [
      "Em 1883, pelo Rei D. Carlos",
      "Em 1901, pelo Rei D. Carlos",
      "Em 1910, pela Rainha D. Amélia",
    ],
  },
  {
    topic: "ISN",
    question: "O Real Instituto de Socorros a Náufragos (RISN), foi criado pela:",
    correct: "Rainha D. Amélia",
    distractors: [
      "Rainha D. Amália",
      "Rainha D. Leonor",
      "Rainha D. Beatriz",
    ],
  },
  {
    topic: "ISN",
    question: "Atualmente, o Instituto de Socorros a Náufragos (ISN), é um organismo de que estrutura?",
    correct: "Direção-Geral da Autoridade Marítima (DGAM)",
    distractors: [
      "Direção Geral de Viação (DGV)",
      "Direção da Defesa Nacional (DDN)",
      "Autoridade Nacional de Proteção Civil (ANPC)",
    ],
  },
  {
    topic: "ISN",
    question: "Ao abrigo da Lei n.º 68/2014 artigo 32.º, atividade de Nadador-Salvador (NS) está sujeita a controlo e fiscalizações técnicas periódicas, são da competência de:",
    correct: "Órgão Local Autoridade Marítima Nacional, Instituto de Socorros a Náufragos (ISN) e Agência Portuguesa do Ambiente (APA)",
    distractors: [
      "Autoridade Marítima Nacional (AMN), Polícia Marítima (PM) e Guarda Nacional Republicana (GNR)", 
      "Autoridade Marítima Nacional (AMN), Instituto de Socorros a Náufragos (ISN) e Polícia Segurança Pública (PSP)", 
      "Autoridade Marítima Nacional (AMN), Guarda Nacional Republicana (GNR) e Agência Portuguesa do Ambiente (APA)"],
  },
  {
    topic: "ISN",
    question: "Qual a validade da categoria de Nadador-Salvador (NS)",
    correct: "3 Anos",
    distractors: ["4 anos", "5 anos", "Vitalício"],
  },
  {
    topic: "ISN",
    question: "Qual o órgão regulador a nível Nacional na estrutura da Autoridade Marítima Nacional (AMN), competente para o reconhecimento das qualificações profissionais, no âmbito da profissão regulamentada prevista na alínea b) do nº1 do artigo 2º, da portaria 88/2012 de 30 de março",
    correct: "Instituto Socorros a Náufragos (ISN)",
    distractors: [
      "Direção-Geral da Autoridade Marítima (DGAM)",
      "Polícia Marítima (PM)",
      "Escola de Autoridade Marítima (EAM)",
    ],
  },
  {
    topic: "ISN",
    question: "A quem compete definir as especificações técnicas dos materiais e equipamentos destinados às atividades de informação, apoio, vigilância, segurança, socorro a náufragos e salvamento prestado a banhistas?",
    correct: "Ao Instituto de Socorros a Náufragos (ISN)",
    distractors: [
      "À Autoridade Marítima Local",
      "Às autoridades Locais",
      "À Capitania do Porto",
    ],
  },
  {
    topic: "ISN",
    question: "Não estar devidamente uniformizado, o Nadador-Salvador (NS) incorre numa:",
    correct: "Contraordenação punível com coima de 100 a 1000 euros",
    distractors: [
      "Contraordenação punível com coima de 50 a 1000 euros",
      "Contraordenação punível com coima de 50 a 250 euros",
      "Crime punível com prisão ate 30 dias",
    ],
  },
  {
    topic: "ISN",
    question: "O Instituto de Socorros a Náufragos (ISN) é responsável pela doutrina da assistência a banhistas, certificando os Nadadores-Salvadores (NS) para:",
    correct: "A prestação da assistência a banhistas nos espaços aquáticos a nível nacional",
    distractors: [
      "A prestação da assistência a banhistas nas piscinas privadas",
      "A prestação de socorro a nível nacional e internacional",
      "A nível nacional a prestação de socorro e assistência a banheiros",
    ],
  },
  {
    topic: "ISN",
    question: "Em que ano, o Real Instituto de Socorros a Náufragos (RISN), passou a designar-se pelo atual nome, Instituto de Socorros a Náufragos (ISN)?",
    correct: "Em 1910",
    distractors: [
      "Em 1892",
      "Em 1990",
      "Em 1882",
    ],
  },
  {
    topic: "ISN",
    question: "Em que ano foi realizado o primeiro curso de nadador-salvador em Portugal?",
    correct: "1956",
    distractors: [
      "1910",
      "1900",
      "1892",
    ],
  },
  {
    topic: "ISN",
    question: "Compete ao Instituto de Socorros a Náufragos (ISN):",
    correct: "Informar as entidades requerentes sobre a organização do respetivo processo de certificação",
    distractors: [
      "Autuar os concessionários quando o material do posto de praia não se encontre em perfeitas condições de utilização",
      "Celebrar contratos de nadador-salvador",
      "Todas as opções estão corretas",
    ],
  },
  {
    topic: "ISN",
    question: "O que se entende por frente de praia?",
    correct: "O comprimento da faixa de areal sujeita a ocupação balnear",
    distractors: [
      "A ocupação de areal para banhos com a maré cheia",
      "São praias qualificadas como tal com diploma legal",
      "A largura da ocupação balnear",
    ],
  },
  {
    topic: "ISN",
    question: "A quem compete certificar e emitir o cartão de identificação d@ Nadador-Salvador (NS)?",
    correct: "Instituto de Socorros a Náufragos (ISN)",
    distractors: [
      "Escola de Autoridade Marítima (EAM)",
      "Escolas de Formação Profissionais de Nadadores-Salvadores (EFPNS)",
      "Associações de Nadadores-Salvadores (ANS)",
    ],
  },
  {
    topic: "ISN",
    question: "Qual a entidade competente para a coordenação e controlo das ações de fiscalização da conformidade do exercício da atividade de Nadador-Salvador (NS) profissional?",
    correct: "Instituto de Socorros a Náufragos (ISN)",
    distractors: [
      "Autoridade Marítima Nacional (AMN)",
      "Agência Portuguesa do Ambiente (APA)",
      "Câmaras Municipais (CM), Agência Portuguesa do Ambiente (APA) e Instituto de Socorros a Náufragos (ISN)",
    ],
  },
  {
    topic: "ISN",
    question: "Qual a lei ou decreto-lei, que define o regime jurídico do exercício da atividade e aprova o regulamento da atividade de Nadador-Salvador (NS)?",
    correct: "Lei n.º 68/2014 de 29 de agosto",
    distractors: [
      "Decreto-Lei n.º 96-A/2006 de 02 de junho",
      "Decreto-Lei n.º 16/2008 de 26 de agosto",
      "Lei n.º 44/2004 de 19 de agosto",
    ],
  },
  {
    topic: "ISN",
    question: "O ano de 1995 foi particularmente importante para a segurança nas praias, atendendo que nesse ano, surgiram novos meios de salvamento aquático, nomeadamente:",
    correct: "Todas as opções estão corretas",
    distractors: [
      "Cinto de salvamento",
      "Boia torpedo",
      "Prancha de salvamento",
    ],
  },
  {
    topic: "ISN",
    question: "Qual a entidade com competências para certificar ou reconhecer @ nadador-salvador profissional?",
    correct: "Instituto de Socorros a Náufragos (ISN)",
    distractors: [
      "Autoridade Marítima Nacional (AMN)",
      "Associações Nadadores–Salvadores (ANS)",
      "Capitanias",
    ],
  },
  {
    topic: "ISN",
    question: "Qual a entidade que compete promover as ações necessárias para a avaliação externa do sistema?",
    correct: "Instituto de Socorros a Náufragos",
    distractors: [
      "Autoridade Marítima Nacional",
      "Associações Nadadores-Salvadores",
      "Capitanias locais",
    ],
  },
  {
    topic: "ISN",
    question: "A atividade de Nadador-Salvador (NS) está sujeita a controlo e fiscalizações técnicas periódicas, a efetuar por:",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Autoridade Marítima Nacional (AMN)",
      "Instituto de Socorros a Náufragos (ISN)",
      "Agência Portuguesa do Ambiente (APA)",
    ],
  },
  {
    topic: "ISN",
    question: "A quem compete emitir os certificados de Nadador-Salvador (NS)?",
    correct: "À Escola de Autoridade Marítima (EAM) ou estabelecimento de ensino reconhecido",
    distractors: [
      "Ao Instituto de Socorros a Náufragos (ISN)",
      "Ao Formador do curso",
      "Às Associações de Nadadores-Salvadores (ANS)",
    ],
  },
  {
    topic: "ISN",
    question: "Atendendo a uma Unidade Balnear (UB) com uma frente de praia de 200 metros, qual o dispositivo de segurança que deverá existir de acordo com a Lei n.º 68/2014 de 29 de agosto",
    correct: "Quatro Nadadores-Salvadores (NS) e dois postos de praia",
    distractors: [
      "Um Nadador-Salvador (NS) para cada posto de praia",
      "Três Nadadores-Salvadores (NS) e dois postos de praia",
      "Dois Nadadores-Salvadores (NS) e dois postos de praia",
    ],
  },
  {
    topic: "ISN",
    question: "Em 1800, em que cidade Portuguesa surge a primeira embarcação salva-vidas?",
    correct: "Porto",
    distractors: [
      "Faro",
      "Lisboa",
      "Aveiro",
    ],
  },
];
