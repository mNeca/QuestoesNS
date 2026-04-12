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

  // —— Ser Nadador Salvador ——
  {
    topic: "Ser Nadador Salvador",
    question: "Qual a portaria que aprova o Regulamento de Uniformes do Nadador-Salvador (NS)?",
    correct: "Portaria n.º 321/2015 de 1 de outubro",
    distractors: [
      "Portaria nº 311/2015 de 1 de outubro",
      "Portaria n.º 321/2012 de 1 de outubro",
      "Portaria nº 311/2012 de 1 de outubro",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O nadador-salvador em praia tem como função central:",
    correct: "Vigilância, prevenção e socorro em ambiente aquático",
    distractors: [
      "Limpeza de areia apenas",
      "Venda de entradas para parques",
      "Manutenção de canos de esgoto",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A formação de um nadador-salvador inclui tipicamente:",
    correct: "Competências de natação, resgate e primeiros socorros",
    distractors: [
      "Apenas gestão hoteleira",
      "Pilotagem de aviões",
      "Contabilidade agrícola",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Durante a vigilância, a postura profissional exige:",
    correct: "Atenção contínua e prontidão para intervir",
    distractors: [
      "Uso exclusivo de telemóvel para entretenimento",
      "Ausência do posto de vigia",
      "Recusa de comunicação com o público",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O equipamento de proteção individual adequado ao contexto costeiro pode incluir:",
    correct: "Meios de flutuação, identificação visível e proteção solar",
    distractors: [
      "Apenas fato de treino de ginásio",
      "Equipamento de soldadura",
      "Capacete de motocross em todas as situações",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A remoção de vítima da água deve priorizar:",
    correct: "Segurança do salvador e da vítima, com técnica adequada",
    distractors: [
      "Velocidade máxima sem avaliação de risco",
      "Deixar a vítima na água indefinidamente",
      "Puxar sempre pelo pescoço",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A comunicação com o 112 em emergência deve ser:",
    correct: "Clara, com localização e natureza do problema",
    distractors: [
      "Vaga e sem morada",
      "Apenas por mensagens privadas em redes sociais",
      "Difícil de entender de propósito",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O trabalho em equipa no posto balnear permite:",
    correct: "Cobertura contínua e resposta mais segura",
    distractors: [
      "Eliminar a necessidade de formação",
      "Substituir sinalização",
      "Encerrar a praia sem critério",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Antes da época balnear, é comum verificar:",
    correct: "Meios, sinalização e planos de emergência",
    distractors: [
      "Apenas horários de discotecas",
      "Stock de jornais",
      "Rotas de camiões de lixo urbano",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A avaliação primária da vítima inclui verificar:",
    correct: "Responsividade, respiração e necessidade de RCP/suporte",
    distractors: [
      "Apenas cor dos óculos de sol",
      "Tipo de chinelos",
      "Marca do telemóvel",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Em aproximação a vítima consciente em água profunda, deve evitar-se:",
    correct: "Abraço frontal que arrisque submersão do salvador",
    distractors: [
      "Uso de boia de linha quando disponível",
      "Comunicação verbal calma",
      "Manter distância segura inicial",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A prevenção ativa inclui:",
    correct: "Informar utentes sobre correntes, profundidade e zonas perigosas",
    distractors: [
      "Ocultar informação sobre marés",
      "Desaconselhar qualquer contacto com o público",
      "Remover todas as bandeiras",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Após incidente com vítima estabilizada, procede-se frequentemente a:",
    correct: "Registo, relato e reflexão para melhorar procedimentos",
    distractors: [
      "Ignorar o ocorrido",
      "Apagar provas",
      "Proibir estudo de caso",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A condição física do nadador-salvador influencia:",
    correct: "Capacidade de resistência e segurança em resgates",
    distractors: [
      "Apenas o uniforme de cerimónia",
      "Horário dos transportes públicos",
      "Preço dos gelados",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O uso de torres ou postos elevados visa:",
    correct: "Ampliar o campo visual de vigilância",
    distractors: [
      "Reduzir a visibilidade de propósito",
      "Substituir binóculos por cortinas",
      "Isolar o NS do público sem vigilância",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Em calor extremo, o NS deve:",
    correct: "Hidratar-se, proteger-se do sol e gerir esforço",
    distractors: [
      "Evitar água durante todo o turno",
      "Expor-se propositalmente a insolação",
      "Ignorar sinais de desidratação",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A ética profissional no socorro implica:",
    correct: "Respeito, discrição e prioridade à vida humana",
    distractors: [
      "Divulgar dados sensíveis publicamente",
      "Recusar ajuda por preferências pessoais",
      "Abandonar cena sem entrega a outro profissional",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Coordenação com bombeiros/INEM em praia visa:",
    correct: "Continuidade assistencial e transporte quando necessário",
    distractors: [
      "Substituir totalmente o 112",
      "Impedir ambulâncias de aceder",
      "Cancelar primeiros socorros",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A prática regular de simulacros ajuda a:",
    correct: "Reduzir tempo de reação e erros em situações reais",
    distractors: [
      "Substituir formação teórica por completo",
      "Eliminar necessidade de equipamento",
      "Tornar obsoletos os protocolos",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A imagem institucional do NS reflete-se em:",
    correct: "Conduta, uniforme e clareza nas orientações ao público",
    distractors: [
      "Apenas redes sociais pessoais",
      "Ignorar normas de segurança",
      "Uniforme sem identificação",
    ],
  },

  // —— Afogamento ——
  {
    topic: "Afogamento",
    question: "A principal causa de morte por afogamento costuma estar ligada a:",
    correct: "Falta de supervisão e subestimação do perigo",
    distractors: [
      "Cor alimentar dos fatos de banho",
      "Tipo de areia da praia",
      "Horário de refeições escolares",
    ],
  },
  {
    topic: "Afogamento",
    question: "Crianças pequenas junto à água devem estar:",
    correct: "Sempre sob supervisão direta e contínua de adulto responsável",
    distractors: [
      "Sozinhas se souberem alguns metros de natação",
      "A cargo apenas de outras crianças",
      "Sem vigilância se houver boia",
    ],
  },
  {
    topic: "Afogamento",
    question: "Álcool antes de nadar:",
    correct: "Aumenta o risco de afogamento e altera o julgamento",
    distractors: [
      "Melhora a flutuação natural",
      "É irrelevante em água salgada",
      "Substitui o aquecimento",
    ],
  },
  {
    topic: "Afogamento",
    question: "Sinais de afogamento podem ser:",
    correct: "Discretos — braços a empurrar a água, dificuldade em chamar por ajuda",
    distractors: [
      "Sempre com braços acenando alto e gritos audíveis",
      "Inexistentes em adultos",
      "Apenas visíveis de noite",
    ],
  },
  {
    topic: "Afogamento",
    question: "Nadar sozinho em local isolado:",
    correct: "Aumenta o risco — deve evitar-se ou usar precauções extra",
    distractors: [
      "É sempre seguro se o mar estiver calmo",
      "É recomendado para treino",
      "Elimina risco de cansaço",
    ],
  },
  {
    topic: "Afogamento",
    question: "Após quase-afogamento, a vítima deve:",
    correct: "Ser avaliada por profissionais de saúde — podem existir complicações tardias",
    distractors: [
      "Ir para casa sem observação",
      "Voltar de imediato à água",
      "Ignorar tosse persistente",
    ],
  },
  {
    topic: "Afogamento",
    question: "Coletes salva-vidas adequados para crianças:",
    correct: "Reduzem significativamente o risco em embarcações e algumas atividades",
    distractors: [
      "Substituem supervisão adulta",
      "São desnecessários em água pouco profunda",
      "Funcionam igual sem tamanho certo",
    ],
  },
  {
    topic: "Afogamento",
    question: "Hiperventilar antes de mergulhos de apneia:",
    correct: "É perigoso e pode levar a perda de consciência na água",
    distractors: [
      "É prática segura recomendada",
      "Aumenta oxigénio de forma ilimitada",
      "Previne todos os blackouts",
    ],
  },
  {
    topic: "Afogamento",
    question: "Em piscina, portas e vedações servem para:",
    correct: "Impedir acesso não supervisionado de crianças à água",
    distractors: [
      "Decorar o jardim apenas",
      "Substituir aprendizagem de natação",
      "Armazenar brinquedos na água",
    ],
  },
  {
    topic: "Afogamento",
    question: "Correntes de retorno (rip current) exigem:",
    correct: "Manter calma, flutuar/sinalizar e sair lateralmente quando possível",
    distractors: [
      "Nadar sempre contra a corrente até exaustão",
      "Mergulhar até ao fundo sem ar",
      "Ignorar ajuda externa",
    ],
  },
  {
    topic: "Afogamento",
    question: "A natação em águas abertas difere da piscina porque:",
    correct: "Há fatores como marés, vento, temperatura e visibilidade",
    distractors: [
      "A água salgada não tem densidade diferente",
      "Não existe cansaço em mar aberto",
      "Profundidade é sempre igual",
    ],
  },
  {
    topic: "Afogamento",
    question: "Ensinar crianças a pedir ajuda é:",
    correct: "Parte essencial da prevenção de afogamento",
    distractors: [
      "Secundário face ao uso de chapéu",
      "Desnecessário se houver boia decorativa",
      "Apenas para adolescentes",
    ],
  },
  {
    topic: "Afogamento",
    question: "Em grupo, a vigilância designada (“water watcher”):",
    correct: "Deve ser uma pessoa sóbria e atenta, sem distrações",
    distractors: [
      "Pode ser qualquer pessoa a usar telemóvel",
      "Roda entre crianças",
      "Substitui coletes em embarcações",
    ],
  },
  {
    topic: "Afogamento",
    question: "Água fria aumenta o risco porque:",
    correct: "Pode causar choque térmico e perda rápida de força",
    distractors: [
      "Aumenta sempre a flutuação",
      "Elimina a necessidade de aquecimento",
      "Torna a respiração irrelevante",
    ],
  },
  {
    topic: "Afogamento",
    question: "Flutuadores infláveis no mar aberto:",
    correct: "Não substituem supervisão nem dispositivos aprovados para segurança",
    distractors: [
      "Garantem segurança total",
      "Substituem nadador-salvador",
      "Impedem qualquer deriva",
    ],
  },
  {
    topic: "Afogamento",
    question: "Se vir alguém em dificuldades, sem formação deve:",
    correct: "Lançar meio flutuante, gritar por ajuda e acionar emergência",
    distractors: [
      "Entrar sempre a nadar sem avaliação",
      "Filmar em vez de alertar",
      "Assumir que é brincadeira",
    ],
  },
  {
    topic: "Afogamento",
    question: "Cães e animais na água:",
    correct: "Também podem arriscar donos que tentam resgate sem técnica",
    distractors: [
      "Nunca causam incidentes humanos",
      "Substituem coletes humanos",
      "Nadadores profissionais automáticos",
    ],
  },
  {
    topic: "Afogamento",
    question: "A educação aquática precoce, bem orientada:",
    correct: "Complementa mas não substitui barreiras e supervisão",
    distractors: [
      "Torna crianças invulneráveis",
      "Elimina uso de piscinas vigiadas",
      "Substitui legislação",
    ],
  },
  {
    topic: "Afogamento",
    question: "Banhistas debilitados ou com crises de saúde:",
    correct: "Devem ter precauções extra e aconselhamento médico sobre banho",
    distractors: [
      "Estão sempre seguros em mar calmo",
      "Não precisam de companhia",
      "Água salgada cura todas as condições",
    ],
  },
  {
    topic: "Afogamento",
    question: "A mensagem “nunca nade sozinho” aplica-se especialmente a:",
    correct: "Todos, em particular crianças e menos experientes",
    distractors: ["Apenas idosos acima de 90 anos", "Só em piscinas interiores", "Nunca a desportistas"],
  },

  // —— Praias ——
  {
    topic: "Praias",
    question: "Escolher praia vigiada permite:",
    correct: "Vigilância profissional e resposta mais rápida a emergências",
    distractors: [
      "Garantir ausência total de risco",
      "Substituir supervisão parental",
      "Eliminar correntes",
    ],
  },
  {
    topic: "Praias",
    question: "Antes de entrar na água, deve informar-se sobre:",
    correct: "Sinalização, profundidade, correntes e condições meteorológicas",
    distractors: [
      "Apenas o menu da praia",
      "Horário de autocarros urbanos",
      "Marcas de champô",
    ],
  },
  {
    topic: "Praias",
    question: "Saltar de rochas ou estruturas para água desconhecida é:",
    correct: "Altamente perigoso — profundidade e obstáculos são incertos",
    distractors: [
      "Seguro se a água parecer funda",
      "Recomendado para iniciantes",
      "Sem risco de trauma vertebral",
    ],
  },
  {
    topic: "Praias",
    question: "Protetor solar e hidratação na praia:",
    correct: "Reduzem risco de queimaduras e golpes de calor",
    distractors: [
      "Substituem chapéu e sombra",
      "Tornam seguro expor-se horas sem pausa",
      "Eliminam necessidade de água potável",
    ],
  },
  {
    topic: "Praias",
    question: "Medusas ou fauna marinha irritante:",
    correct: "Exige cautela, informação local e, se necessário, ajuda profissional",
    distractors: [
      "Deve sempre ser tocada para verificar textura",
      "É irrelevante em água fria",
      "Nunca causa reação alérgica",
    ],
  },
  {
    topic: "Praias",
    question: "Areia quente e objetos cortantes:",
    correct: "Calçado e vigilância protegem contra queimaduras e feridas",
    distractors: [
      "São irrelevantes para segurança",
      "Só afetam crianças",
      "Curam sempre com água do mar",
    ],
  },
  {
    topic: "Praias",
    question: "Respeitar cordas e boias de delimitação:",
    correct: "Mantém banhistas em zonas mais seguras e vigiadas",
    distractors: [
      "É opcional para bons nadadores",
      "Serve só para decoração",
      "Aumenta risco de afogamento",
    ],
  },
  {
    topic: "Praias",
    question: "Pranchas e bodyboard em praias movimentadas:",
    correct: "Exigem regras de prioridade e atenção a outros utentes",
    distractors: [
      "Permitem colidir sem consequências",
      "Substituem formação de natação",
      "Eliminam necessidade de olhar à frente",
    ],
  },
  {
    topic: "Praias",
    question: "Deixar lixo na areia:",
    correct: "Prejudica ambiente e pode ferir pessoas e animais",
    distractors: [
      "É absorvido automaticamente pelo mar",
      "É obrigatório para fertilizar areia",
      "Não afeta segurança",
    ],
  },
  {
    topic: "Praias",
    question: "Tubarões e vida selvagem — boa prática:",
    correct: "Seguir orientações locais e evitar comportamentos de risco",
    distractors: [
      "Alimentar predadores para obter selfies",
      "Nadar ao amanhecer em áreas sinalizadas como de risco",
      "Ignorar avisos oficiais",
    ],
  },
  {
    topic: "Praias",
    question: "Maré e vento offshore:",
    correct: "Podem afastar rapidamente banhistas da costa",
    distractors: [
      "São irrelevantes em água rasa",
      "Só importam para navios oceânicos",
      "Nunca afetam pranchas",
    ],
  },
  {
    topic: "Praias",
    question: "Crianças na orla:",
    correct: "Devem jogar longe da linha de rebentação supervisionada",
    distractors: [
      "Podem correr para a água sem adulto",
      "Ondas pequenas são sempre seguras",
      "Areia molhada elimina quedas",
    ],
  },
  {
    topic: "Praias",
    question: "Álcool na praia:",
    correct: "Aumenta risco de acidentes aquáticos e térmicos",
    distractors: [
      "Melhora a natação",
      "Substitui água potável de forma segura",
      "Reduz exposição solar",
    ],
  },
  {
    topic: "Praias",
    question: "Primeiros socorros na areia incluem:",
    correct: "Proteger vítima, pedir ajuda e iniciar suporte básico se treinado",
    distractors: [
      "Mover vítima com trauma sem estabilização",
      "Dar bebidas alcoólicas",
      "Ignorar perigo de insolação",
    ],
  },
  {
    topic: "Praias",
    question: "Zonas de surf separadas de banhistas quando existem:",
    correct: "Reduzem colisões e traumatismos",
    distractors: [
      "Aumentam conflitos desnecessariamente",
      "Servem só para venda de gelados",
      "Eliminam ondas",
    ],
  },
  {
    topic: "Praias",
    question: "Calçado na passagem por rochas:",
    correct: "Previne escorregadelas e cortes",
    distractors: [
      "Aumenta sempre o risco",
      "É proibido em todas as praias",
      "Substitui o uso de mãos",
    ],
  },
  {
    topic: "Praias",
    question: "Banho ao pôr do sol ou com mar agitado:",
    correct: "Exige cautela extra — visibilidade e força das ondas mudam",
    distractors: [
      "É sempre mais seguro que de dia",
      "Elimina correntes",
      "Substitui sinalização",
    ],
  },
  {
    topic: "Praias",
    question: "Respeitar conselhos de não banho:",
    correct: "Protege a vida mesmo quando o mar parece calmo",
    distractors: [
      "É opcional para residentes locais",
      "Só vale para turistas",
      "Indica sempre água quente demais",
    ],
  },
  {
    topic: "Praias",
    question: "Grupos numerosos na água:",
    correct: "Devem manter-se próximos e com ponto de encontro em terra",
    distractors: [
      "Dispersam-se sem plano",
      "Confiam apenas em telemóveis sem cobertura",
      "Ignoram contagem de cabeças",
    ],
  },
  {
    topic: "Praias",
    question: "Insolação na praia manifesta-se por:",
    correct: "Febre elevada, confusão, pele quente — requer ajuda médica",
    distractors: [
      "Apenas fome de manhã",
      "Sede leve única",
      "Arrepios invernais sem calor",
    ],
  },

  // —— Piscinas ——
  {
    topic: "Piscinas",
    question: "Em piscina pública, as regras de segurança existem para:",
    correct: "Proteger todos os utentes e o pessoal de vigilância",
    distractors: [
      "Restringir diversão sem motivo",
      "Aumentar vendas de snacks",
      "Substituir manutenção de filtros apenas",
    ],
  },
  {
    topic: "Piscinas",
    question: "Correr à beira da piscina:",
    correct: "Aumenta risco de quedas e traumatismos — deve evitar-se",
    distractors: [
      "É seguro com chinelos",
      "É recomendado para aquecimento",
      "Não causa escorregadelas",
    ],
  },
  {
    topic: "Piscinas",
    question: "Mergulhar em zonas rasas:",
    correct: "Pode causar lesões graves na coluna cervical",
    distractors: [
      "É seguro se os braços estiverem à frente",
      "Só é perigoso em água salgada",
      "É a técnica preferida em todo o lado",
    ],
  },
  {
    topic: "Piscinas",
    question: "Higiene antes de entrar na piscina:",
    correct: "Reduz contaminação e protege a saúde coletiva",
    distractors: [
      "É opcional se a água tiver cloro",
      "Substitui tratamento de águas",
      "Só importa em rios",
    ],
  },
  {
    topic: "Piscinas",
    question: "Crianças em piscina residencial:",
    correct: "Requerem barreiras, portas e supervisão constante",
    distractors: [
      "Estão seguras com brinquedo inflável",
      "Basta ouvir de dentro de casa sem ver",
      "Água clara elimina risco",
    ],
  },
  {
    topic: "Piscinas",
    question: "Soco de drenagem e válvulas:",
    correct: "Podem prender cabelo ou membros — exigem cautela e normas",
    distractors: [
      "São inofensivos em qualquer posição",
      "Só existem em spas comerciais",
      "Nunca requerem sinalização",
    ],
  },
  {
    topic: "Piscinas",
    question: "Consumo de álcool na piscina:",
    correct: "Aumenta risco de submersão e má decisão",
    distractors: [
      "Melhora a flutuação",
      "Substitui vigilância",
      "É neutro para reflexos",
    ],
  },
  {
    topic: "Piscinas",
    question: "Doenças transmissíveis e piscina:",
    correct: "Não deve nadar com diarreia ou infeções abertas — siga indicações de saúde",
    distractors: [
      "Cloro mata tudo instantaneamente em qualquer dose",
      "Água salgada de piscina não existe",
      "Sintomas leves são irrelevantes sempre",
    ],
  },
  {
    topic: "Piscinas",
    question: "Salvamento aquático em piscina exige:",
    correct: "Técnica adequada ao espaço confinado e profundidade",
    distractors: [
      "Sempre saltar de grande altura",
      "Ignorar vítima inconsciente na superfície",
      "Empurrar para o fundo primeiro",
    ],
  },
  {
    topic: "Piscinas",
    question: "Aquecimento antes de natação intensa:",
    correct: "Ajuda a prevenir lesões musculares",
    distractors: [
      "É desnecessário em água quente",
      "Substitui hidratação",
      "Aumenta risco de cãibras sempre",
    ],
  },
  {
    topic: "Piscinas",
    question: "Uso de óculos de natação:",
    correct: "Melhora visibilidade subaquática e conforto ocular",
    distractors: [
      "Substitui supervisão de crianças",
      "Impede afogamento",
      "Substitui boias de braço aprovadas",
    ],
  },
  {
    topic: "Piscinas",
    question: "Piscina com excesso de gente:",
    correct: "Aumenta risco de colisões e dificulta ver quem precisa de ajuda",
    distractors: [
      "Reduz sempre o risco",
      "Elimina necessidade de regras",
      "Torna irrelevante o nadador-salvador",
    ],
  },
  {
    topic: "Piscinas",
    question: "Químicos da piscina devem ser:",
    correct: "Manuseados segundo instruções — evitar misturas perigosas",
    distractors: [
      "Misturados aleatoriamente para poupar",
      "Armazenados abertos junto a crianças sem rótulo",
      "Ignorados se a água estiver límpida",
    ],
  },
  {
    topic: "Piscinas",
    question: "Saídas de emergência em pavilhão de piscinas:",
    correct: "Devem ser conhecidas por utentes em caso de evacuação",
    distractors: [
      "São secretas propositadamente",
      "Substituem alarmes de incêndio",
      "Só para pessoal, nunca utentes",
    ],
  },
  {
    topic: "Piscinas",
    question: "Brincadeiras de imersão prolongada:",
    correct: "Podem causar perda de consciência — evitar desafios perigosos",
    distractors: [
      "São seguras entre amigos",
      "Fortalecem sempre o cérebro",
      "Sem risco se não houver álcool",
    ],
  },
  {
    topic: "Piscinas",
    question: "Tapetes antiderrapantes:",
    correct: "Reduzem quedas em zonas molhadas",
    distractors: [
      "Aumentam escorregadelas",
      "Substituem sinalização molhado",
      "São puramente decorativos sempre",
    ],
  },
  {
    topic: "Piscinas",
    question: "Aulas de natação para crianças:",
    correct: "Desenvolvem competências mas não tornam a criança “à prova de afogamento”",
    distractors: [
      "Garantem vigilância 24 h",
      "Substituem grades e portas",
      "Eliminam regras de piscina",
    ],
  },
  {
    topic: "Piscinas",
    question: "Água turva ou com cheiro forte:",
    correct: "Pode indicar problema de tratamento — informar responsáveis",
    distractors: [
      "É normal em todas as piscinas",
      "Significa sempre mais cloro seguro",
      "Deve ignorar-se se estiver quente",
    ],
  },
  {
    topic: "Piscinas",
    question: "Objetos de vidro junto à piscina:",
    correct: "Aumentam risco de cortes — preferir plásticos adequados",
    distractors: [
      "São seguros se forem finos",
      "O cloro dissolve vidro",
      "Não causam ferimentos nos pés",
    ],
  },
  {
    topic: "Piscinas",
    question: "Sinal “profundidade variável” alerta para:",
    correct: "Mudanças de profundidade que afetam mergulhos e saltos",
    distractors: [
      "Temperatura da água apenas",
      "Horário de limpeza",
      "Tipo de revestimento da cafetaria",
    ],
  },

  // —— O Salvamento ——
  {
    topic: "O Salvamento",
    question: "Prioridade no salvamento aquático é:",
    correct: "Garantir segurança do salvador e eficácia na ajuda à vítima",
    distractors: [
      "Velocidade a qualquer custo",
      "Evitar pedir ajuda para não alarmar",
      "Entrar sempre sem avaliação",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Abordagem recomendada a vítima consciente: ",
    correct: "Instruir, oferecer meio flutuante e controlar distância segura",
    distractors: [
      "Abraço imediato pela frente",
      "Afogar para “acordar”",
      "Ignorar comunicação verbal",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Linha de reboque ou arremesso de boia:",
    correct: "Permite contacto à distância, reduzindo risco para o salvador",
    distractors: [
      "Só serve em piscinas olímpicas",
      "É menos segura que nado direto sempre",
      "Substitui chamada ao 112 em emergência grave",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Vítima inconsciente na superfície:",
    correct: "Estabilizar vias aéreas, retirar da água com técnica segura e iniciar suporte",
    distractors: [
      "Aguardar acordar espontaneamente na água",
      "Caminhar para casa",
      "Dar comida",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Resgate com prancha:",
    correct: "Oferece flutuação e plataforma para transporte estável",
    distractors: [
      "Substitui sempre ventilação de emergência",
      "É irrelevante em mar",
      "Só para treino em ginásio",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Após retirada da água, se não respira normalmente:",
    correct: "Iniciar RCP conforme formação e pedir DEA/ajuda especializada",
    distractors: [
      "Agitar vigorosamente apenas",
      "Dar água com açúcar",
      "Ignorar porque saiu da água",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Salvamento em grupo coordena:",
    correct: "Papéis claros: quem chama ajuda, quem resgata, quem prepara receção",
    distractors: [
      "Todos fazem o mesmo gesto simultâneo",
      "Ninguém comunica para poupar tempo",
      "Dispersão imediata",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Hipotermia após longa exposição à água:",
    correct: "Requer reaquecimento gradual e avaliação médica",
    distractors: [
      "Banho de água muito quente imediato agressivo",
      "Ignorar tremores",
      "Caminhar sozinho para casa sempre",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Objetos improvisados flutuantes:",
    correct: "Podem ajudar se seguros e lançáveis, mas não substituem formação",
    distractors: [
      "São sempre melhores que equipamento certo",
      "Devem ser metálicos pesados",
      "Substituem colete em alto mar sempre",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Comunicação por gestos na praia:",
    correct: "Pode complementar orientação quando ruído ou distância dificultam voz",
    distractors: [
      "Substitui sempre sirenes médicas",
      "É ilegal em qualquer praia",
      "Só para surfistas profissionais",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Planeamento de emergência local inclui:",
    correct: "Rotas de acesso, pontos de encontro e contactos de emergência",
    distractors: [
      "Apenas horário de funcionamento da cafetaria",
      "Lista de músicas ambiente",
      "Mapa de estacionamento sem saídas",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Em rio com corrente, resgate deve considerar:",
    correct: "Obstáculos a jusante e ângulo de aproximação seguro",
    distractors: [
      "Apenas largura da margem",
      "Cor da água exclusivamente",
      "Ignorar profundidade",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Manutenção de equipamento de salvamento:",
    correct: "Garante funcionamento quando necessário",
    distractors: [
      "É opcional se pouco usado",
      "Deve fazer-se apenas uma vez por década sempre",
      "Substitui formação humana totalmente",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Evitar pânico na vítima passa por:",
    correct: "Voz calma, instruções simples e apoio flutuante",
    distractors: [
      "Gritos de alarme constantes",
      "Ordenar nado sprint sem pausa",
      "Soltar a vítima subitamente",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Sinalização durante operações na areia:",
    correct: "Protege público e canaliza trânsito de equipas",
    distractors: [
      "Aumenta curiosidade sem controlo",
      "Substitui desfibrilhação",
      "Elimina necessidade de comunicação",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Transporte manual em terreno acidentado:",
    correct: "Requer técnica para proteger coluna da vítima e da equipa",
    distractors: [
      "Arrastar sempre pelo membro mais próximo",
      "Transportar em pé sem apoio",
      "Ignorar estabilização cervical em qualquer caso",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Em resgate com corrente lateral, o salvador deve:",
    correct: "Posicionar-se de forma a usar a corrente a seu favor quando seguro",
    distractors: [
      "Sempre lutar frontalmente contra a corrente máxima",
      "Abandonar a vítima para poupar energia",
      "Mergulhar sem visibilidade",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Uso de colete salva-vidas pelo salvador em missão:",
    correct: "Pode ser indicado conforme protocolo e condições do meio",
    distractors: [
      "É sempre proibido",
      "Substitui natação básica em qualquer caso",
      "Elimina risco de hipotermia sempre",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Registo pós-evento de salvamento serve para:",
    correct: "Melhoria contínua e análise de segurança",
    distractors: [
      "Substituir relatórios médicos obrigatoriamente",
      "Punição automática da equipa",
      "Eliminar necessidade de seguros",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Prioridade na abordagem a múltiplas vítimas em água:",
    correct: "Avaliar quem pode ser ajudado com mais segurança e rapidez",
    distractors: [
      "Sempre a mais distante primeiro",
      "Ignorar inconscientes até ao fim",
      "Ordem alfabética de nomes",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Ventilação de resgate em ambiente aquático segue:",
    correct: "Protocolos de suporte básico/avançado conforme formação atual",
    distractors: [
      "Regras de trânsito rodoviário",
      "Apenas compressões sem considerar vias aéreas",
      "Métodos não baseados em evidência",
    ],
  },

  // —— Socorro ao Naufrago ——
  {
    topic: "Socorro ao Naufrago",
    question: "Em situação de naufrágio, a prioridade inicial costuma ser:",
    correct: "Contabilizar pessoas, flutuação e pedido de ajuda (ex.: canal 16 VHF / 112)",
    distractors: [
      "Salvar apenas bagagem de valor",
      "Abandonar embarcação sem plano",
      "Dispersar-se sem ponto de encontro",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Coletes salva-vidas em embarcação de recreio:",
    correct: "Devem estar acessíveis, em bom estado e adequados ao tamanho de cada pessoa",
    distractors: [
      "Podem estar trancados na arrecadação",
      "Substituem comunicação de emergência",
      "São opcionais em mar calmo",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Canal 16 VHF em emergência marítima:",
    correct: "É o canal internacional de chamada e socorro em muitas situações",
    distractors: [
      "É reservado apenas para meteorologia de iates",
      "Substitui o uso de telefone em terra sempre",
      "Não existe em águas portuguesas",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Antes de zarpar, o comandante da embarcação deve:",
    correct: "Verificar meteorologia, meios de segurança e plano de emergência",
    distractors: [
      "Ignorar previsão se o céu estiver limpo à partida",
      "Eliminar coletes para poupar espaço",
      "Desligar rádio para poupar bateria sempre",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Embarcação a tomar água — medida imediata:",
    correct: "Ação de emergência, localizar entrada de água, pedir ajuda e preparar abandono se necessário",
    distractors: [
      "Acelerar ao máximo sem investigar",
      "Ignorar alarmes de sentina",
      "Remover coletes para nadar melhor",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Homem ao mar — boa prática:",
    correct: "Marcar posição, comunicar, manobrar em segurança e lançar meios de recuperação",
    distractors: [
      "Seguir em frente e regressar no dia seguinte",
      "Atirar âncora sobre a pessoa",
      "Desligar motor sem observar posição da vítima",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Bote salva-vidas e rafts:",
    correct: "Devem ser inspecionados e a tripulação deve saber como os acionar",
    distractors: [
      "Servem apenas como decoração de convés",
      "Não precisam de manutenção",
      "Substituem o uso de colete individual",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "PIW (pessoa na água) em mar agitado:",
    correct: "Aproximação controlada, lançamento de meio flutuante e comunicação com comando",
    distractors: [
      "Aproximação à velocidade máxima sem olhar",
      "Ignorar oscilação do casco",
      "Resgate sem coordenação com ponte",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Sinalização visual de emergência (pirotecnia) deve:",
    correct: "Ser usada conforme regras e com cautela para não causar incêndio a bordo",
    distractors: [
      "Ser disparada em porões fechados",
      "Substituir chamada por rádio em todos os casos",
      "Guardada sem instruções de uso",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "EPERB / localização em emergência:",
    correct: "Dispositivos de alerta podem acelerar o resgate — devem estar registados e operacionais",
    distractors: [
      "Substituem colete e formação",
      "Funcionam sem bateria",
      "São ilegais em embarcações de recreio",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Ordem típica de abandono (quando inevitável):",
    correct: "Colete, meio de flutuação coletivo se possível, comunicação e abandono organizado",
    distractors: [
      "Primeiro bagagem e eletrónicos",
      "Saltar sem colete para nadar mais rápido",
      "Abandono em pânico sem contagem",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Hipertermia e exposição em mar:",
    correct: "Proteger da água e vento, agrupar-se e sinalizar",
    distractors: [
      "Remover coletes para “secar mais depressa”",
      "Nadar longe do meio de flutuação",
      "Dispersar-se para aquecer",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Combustível e segurança:",
    correct: "Evitar fugas, fumar/chamas próximas e ventilar compartimentos conforme manual",
    distractors: [
      "Armazenar gasolina em cabine fechada sem limites",
      "Ignorar cheiro a fuel",
      "Abrir porões sem ventilação com motores quentes",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Colisão entre embarcações:",
    correct: "Prestar assistência, trocar dados quando seguro e acionar autoridades se necessário",
    distractors: [
      "Fugir sempre sem identificar-se",
      "Abandonar feridos sem comunicar",
      "Ignorar danos estruturais",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Navegação de noite exige:",
    correct: "Iluminação adequada, vigia e carta/eletrónica em condições seguras",
    distractors: [
      "Velas máximas sem lanterna",
      "Desligar AIS e luzes para “poupar”",
      "Navegar à cega em canal movimentado",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Primeiros socorros a bordo:",
    correct: "Kit atualizado, formação básica e contacto com MRCC/coordenadores",
    distractors: [
      "Apenas álcool para desinfeção interna",
      "Substituir comunicação por “esperar em porto”",
      "Medicar sem formação sempre",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Rebentação na barra:",
    correct: "Exige planeamento, experiência e muitas vezes adiamento da entrada",
    distractors: [
      "Acelerar sempre contra as ondas sem avaliação",
      "Ignorar marés",
      "Entrar de noite sem luzes por poupança",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Salvamento aéreo ou de navio maior:",
    correct: "Seguir instruções do comando da operação e manter comunicação",
    distractors: [
      "Largar meios sem coordenação",
      "Cortar cabos de guincho sem ordem",
      "Ignorar sinais do helicóptero",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Documentação e seguro da embarcação:",
    correct: "Deve estar em ordem — facilita assistência e responsabilidades legais",
    distractors: [
      "É irrelevante em emergência",
      "Substitui coletes",
      "Elimina necessidade de inspeções",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Treino de abandono de emergência:",
    correct: "Ajuda a reduzir erro humano sob stress",
    distractors: [
      "Substitui equipamento obrigatório",
      "É proibido em recreio",
      "Só para navios de carga oceânica",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Ao avistar distress real (ex.: foguetes, chamadas):",
    correct: "Manter vigia, comunicar às autoridades e prestar auxílio dentro das capacidades",
    distractors: [
      "Ignorar para não atrasar cruzeiro",
      "Aproximar-se sem avaliar risco de colisão",
      "Filmar sem comunicar",
    ],
  },

  // —— Acidentes frequentes ——
  {
    topic: "Acidentes frequentes",
    question: "Escorregar em pavimento molhado em instalações aquáticas:",
    correct: "Pode causar traumatismos — calçado adequado e cautela reduzem risco",
    distractors: [
      "É impossível com sinalização",
      "Só acontece a idosos",
      "Nunca causa fraturas",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Golpe de calor em dia de praia:",
    correct: "Pode ser grave — sombra, hidratação e ajuda médica se sintomas avançados",
    distractors: [
      "Cura-se sempre com gelado",
      "Só ocorre com temperatura abaixo de 10 °C",
      "Ignorar se a pele não estiver vermelha",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Queimaduras solares graves:",
    correct: "Podem exigir avaliação médica e hidratação — prevenção é fundamental",
    distractors: [
      "São sempre benignas em crianças",
      "Protetor solar elimina necessidade de chapéu sempre",
      "Não aumentam risco futuro de cancro de pele",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Cortes em conchas ou vidro na areia:",
    correct: "Limpar, controlar hemorragia e procurar ajuda se profundo ou com corpo estranho",
    distractors: [
      "Sempre ignorar se parar de sangrar",
      "Enterrar o pé na areia quente",
      "Usar água do mar como único tratamento sempre",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Entorses por terreno irregular na duna:",
    correct: "Imobilizar, gelo/compressão se indicado e avaliação se não suportar peso",
    distractors: [
      "Continuar a corrida para “desentorcer”",
      "Sempre cirurgia imediata",
      "Ignorar inchaço",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Colisão prancha–banhista:",
    correct: "Traumatismos na cabeça/cervical — prevenção por zonas e regras de prioridade",
    distractors: [
      "Nunca requer avaliação médica",
      "Só acontece com vento offshore",
      "Eliminada com música alta",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Picada de medusa — medida geral:",
    correct: "Lavar conforme protocolo local, não esfregar, observar sinais de reação grave",
    distractors: [
      "Sempre aplicar água doce em todas as espécies sem informação",
      "Ignorar dificuldade respiratória",
      "Esfregar vigorosamente com areia sempre",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Ingestão acidental de água do mar em afogamento quase:",
    correct: "Pode complicar — observar tosse persistente, febre ou fadiga e procurar ajuda",
    distractors: [
      "É sempre inofensiva",
      "Cura com bebida alcoólica",
      "Elimina necessidade de vigilância médica sempre",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Quedas de crianças em equipamentos de playground junto à praia:",
    correct: "Supervisão e uso adequado à idade reduzem traumatismos",
    distractors: [
      "Equipamentos substituem pais",
      "Areia elimina qualquer risco de queda",
      "Alturas não importam",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Intoxicação alimentar em evento balnear:",
    correct: "Higiene da cadeia alimentar e temperatura adequada dos alimentos",
    distractors: [
      "Sol elimina bactérias em todos os pratos",
      "Gelo serve para “esterilizar”",
      "Cheiro agradável garante segurança",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Ferimentos por ganchos de pesca:",
    correct: "Não puxar de forma bruta — imobilizar anzol e procurar posto de saúde/hospital",
    distractors: [
      "Cortar sempre com tesoura sem ver estruturas",
      "Ignorar risco de tétano",
      "Retirar à força se estiver fundo",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Picadas de insetos e reações alérgicas:",
    correct: "Monitorizar respiração e inchaço — emergência se compromisso das vias aéreas",
    distractors: [
      "Sempre benignas em adultos",
      "Adrenalina caseira improvisada sem formação",
      "Ignorar história de anafilaxia",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Traumatismo por onda em zona rasa (cervical):",
    correct: "Mergulhos de cabeça em água rasa são de alto risco — evitar",
    distractors: [
      "Seguros se os braços estiverem atrás",
      "Só perigosos em piscina coberta",
      "Impossíveis em mar",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Desidratação em idosos no calor:",
    correct: "Hidratação regular e pausas à sombra — atenção a medicamentos",
    distractors: [
      "Sede é sempre um bom indicador tardio confiável",
      "Álcool hidrata melhor que água",
      "Não ocorre com temperatura moderada",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Feridas por corais ou rochas cortantes:",
    correct: "Lavar, verificar corpo estranho e sinais de infeção",
    distractors: [
      "Sempre ignorar se pequena",
      "Água parada qualquer serve igual",
      "Não há risco de infeção em mar",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Acidentes com bicicleta ou trotinete na orla:",
    correct: "Velocidade reduzida, capacete quando aplicável e respeito por peões",
    distractors: [
      "Areia molhada elimina inércia",
      "Nadadores são sempre visíveis",
      "Não há colisões possíveis",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Sobreaquecimento em fatos escuros ao sol:",
    correct: "Roupa clara, sombra e pausas reduzem risco térmico",
    distractors: [
      "Cor do fato não influencia calor",
      "Só importa em Inverno",
      "Protetor solar arrefece o organismo por dentro",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Quedas em escadas de acesso à praia:",
    correct: "Calçado adequado, uso de corrimão e atenção a superfícies escorregadias",
    distractors: [
      "Corrida acelera segurança",
      "Descalço é sempre melhor em degraus molhados",
      "Escadas não precisam de manutenção",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Lesões oculares por areia ou spray:",
    correct: "Lavar com solução adequada, não esfregar e procurar ajuda se persistir",
    distractors: [
      "Esfregar até sair “tudo”",
      "Ignorar visão turva",
      "Usar colírio desconhecido sem conselho",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Acidentes com guarda-sóis mal fixados:",
    correct: "Ventania pode projetar objetos — fixação segura e distância de utentes",
    distractors: [
      "Guarda-sol não voa nunca",
      "Peso na base é irrelevante",
      "Só perigoso em tempestade de neve",
    ],
  },
  {
    topic: "Acidentes frequentes",
    question: "Síncope por calor em filas ao sol:",
    correct: "Deitar com pernas elevadas, arrefecer e chamar ajuda se não recuperar rápido",
    distractors: [
      "Forçar a manter-se em pé",
      "Álcool energético",
      "Ignorar perda de consciência breve",
    ],
  },
];
