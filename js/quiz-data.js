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
    question: "Indique qual a sequência correta nas categorias de progressão de carreira do Nadador-Salvador (NS) em Portugal?",
    correct: "Nadador-Salvador, Nadador-Salvador Coordenador (NSC) e Nadador Salvador Formador (NSF);",
    distractors: [
      "Nadador-Salvador, Nadador-Salvador Formador (NSF) e Nadador-Salvador Coordenador (NSC)",
      "Nadador-Salvador, Nadador-Salvador Coordenador (NSC) e Nadador Salvador Reformado (NSR)",
      "Nadador-Salvador Formador (NSF), Nadador-Salvador e Nadador-Salvador Coordenador (NSC)",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Qual das seguintes afirmações, constitui um mecanismo imprescindível de defesa e de prova da correta atuação do Nadador-Salvador (NS)_",
    correct: "O preenchimento cuidadoso dos relatórios de salvamento",
    distractors: [
      "Efetuar um salvamento com o meio correto",
      "Ter pelo menos duas testemunhas",
      "O Nadador-Salvador não precisa de provas para a defesa da sua atuação",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Após qualquer tipo de ocorrência é obrigatório e fundamental ____________para aumentar a qualidade do serviço prestado.",
    correct: "Preencher o relatório",
    distractors: [
      "Praticar exercício físico",
      "Acompanhar a vitima ao hospital",
      "Chamar o 112",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O Nadador-Salvador (NS) tem direitos e deveres que caracterizam o exercício da sua função. Qual destes é um direito?",
    correct: "Possuir um seguro profissional adequado à atividade",
    distractors: [
      "Assegurar a vigilância do plano de água munido do meio de salvamento",
      "Auxiliar e advertir os banhistas para situações de risco",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Que conselhos deve o Nadador-Salvador (NS) transmitir sobre a exposição solar?",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Aplicar protetor solar 30 minutos antes da exposição ao sol",
      "Não exponha crianças com menos de três anos de idade ao sol",
      "Faça períodos curtos de exposição solar",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A desidratação do Nadador-Salvador (NS) pode ser prevenida:",
    correct: "Comendo refeições balanceadas antes do turno e durante os intervalos",
    distractors: [
      "Beber bebidas com cafeina e/ou açúcar",
      "Ingerir bebidas alcoólicas",
      "Ingerir pouca água durante o seu turno",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Faz parte da conduta do Nadador-Salvador (NS):",
    correct: "Prevenção, companheirismo, dignidade, comunicação e atenção",
    distractors: [
      "Atenção, postura, companheirismo e dignidade",
      "Comunicação, prevenção, dignidade e dedicação",
      "Companheirismo, atenção, assíduo, prevenção e comunicação",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O Nadador-Salvador (NS) encontra-se devidamente uniformizado quando envergue pelo menos, os seguintes artigos do uniforme: ",
    correct: "Apito, pés de pato, camisola de manga curta e calção de banho (M/F)",
    distractors: [
      "Apito, pés de pato, cinto de salvamento e camisola de manga curta",
      "Apito, boia torpedo, pés de pato e camisola de manga curta",
      "Apito, calção de banho (M/F), pés de pato e corta-vento",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A aquisição do uniforme do Nadador-Salvador (NS) é da responsabilidade do:",
    correct: "Nadador-salvador",
    distractors: [
      "Concessionário",
      "Associação de Nadadores salvadores (ANS)",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Quais as categorias de Nadador-Salvador (NS) que conhece?",
    correct: "Nadador Salvador Coordenador (NSC) e Nadador Salvador Profissional",
    distractors: [
      "Nadador-salvador profissional (NSP) e Nadador Salvador voluntário (NSV)",
      "Nadador salvador profissional (NSP) e Nadador Salvador examinador (NSE)",
      "Nadador Salvador Formador (NSF) e Nadador Salvador chefe de equipa (NSCH)",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "São deveres gerais do Nadador-Salvador (NS):",
    correct: "Socorrer banhistas em situações de perigo, de emergência ou acidente",
    distractors: [
      "Possuir um seguro profissional adequado à atividade",
      "Colaborar com o Instituto de Socorros a Náufragos (ISN) na elaboração de planos de emergência",
      "Dispor de uniforme adequado",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O Nadador-Salvador (NS) deve içar a bandeira de xadrez em que situações?",
    correct: "Em casos excecionais e de reconhecida emergência.",
    distractors: [
      "Necessita de ir à casa de banho e assim consegue avisar os restantes NS da sua ausência",
      "Realiza um salvamento, garantindo assim que o concessionário ligue para o 112",
      " Existir trovoada e relâmpagos, para informar os banhistas que a praia tem de estar temporariamente desocupada",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Onde deve o Nadador-Salvador (NS) registar cuidadosamente todas as ocorrências?",
    correct: "Nos relatórios",
    distractors: [
      "Na folha de registo do concessionário",
      "Na agenda semanal",
      "No bloco de notas",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Após qualquer tipo de ocorrência na praia, o Nadador-Salvador (NS) é obrigado a preencher que tipo de documento?",
    correct: "O relatório de salvamento",
    distractors: [
      "O relatório de ocorrências",
      "Só é obrigado a preencher o relatório de salvamento se o acidente for grave",
      "Não existe nenhum documento específico",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O Nadador-Salvador (NS) tem deveres e direitos no exercício das suas funções. Qual das seguintes afirmações é um dever geral?",
    correct: "Participar em ações de treino, simulacros de salvamento marítimo ou em outro meio aquático",
    distractors: [
      "Colaborar a título excecional com os banhistas",
      "Não comparecer ao serviço com assiduidade",
      "Exercer a atividade a título remunerado ou gratuito",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O Nadador-Salvador (NS) tem deveres e direitos no exercício das suas funções. Qual das seguintes é um direito?",
    correct: "Possuir um seguro profissional adequado à atividade",
    distractors: [
      "Colaborar com os agentes de autoridade ou com outras entidades em matéria de segurança a banhistas",
      "Não comparecer ao serviço com assiduidade",
      "Participar em ações de treino, simulacros de salvamento marítimo ou aquático",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Vigiar a forma como decorrem os banhos em caso de acidente pessoal ocorrido com banhistas ou de alteração das condições meteorológicas, são:",
    correct: "Deveres gerais do Nadador-Salvador (NS)",
    distractors: [
      "Deveres especiais do Nadador-Salvador (NS)",
      "Direitos do Nadador-Salvador (NS)",
      "Outros direitos do Nadador-Salvador (NS)",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Socorrer os banhistas em situações de perigo, de emergência ou de acidente, são: ",
    correct: " Deveres gerais do Nadador-Salvador (NS)",
    distractors: [
      "Deveres especiais do Nadador-Salvador (NS)",
      "Direitos do Nadador-Salvador (NS)",
      "Outros direitos do Nadador-Salvador (NS)",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Participar em ações de treino, simulacros de salvamento marítimo ou em outro meio aquático e outros exercícios com características similares, é:",
    correct: "Um dever do Nadador-Salvador (NS)",
    distractors: [
      "Um dever extraordinário do Nadador-Salvador (NS)",
      "Um dever especial do Nadador-Salvador (NS)",
      "Facultativo",
    ],
  },

  {
    topic: "Ser Nadador Salvador",
    question: "São fatores que contribuem para a ocorrência de acidentes de trabalho",
    correct: "Rotina, ausência de medidas de segurança e fadiga",
    distractors: [
      "Fadiga e rotatividade do posto de trabalho",
      "Negligência dos banhistas, medidas de segurança e fadiga",
      "Excesso de medidas de proteção",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Após uma intervenção do Nadador-Salvador (NS) numa piscina, que documento terá de preencher?",
    correct: "Relatório de ocorrência, no prazo de 24 h",
    distractors: [
      "Relatório de praia, no prazo de 24 h",
      "Relatório de ocorrências, no prazo de 48 h no portal da capitania on-line",
      "Relatório de acidente em piscina, logo que possível",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Faz parte da conduta do Nadador-Salvador (NS):",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Prevenção",
      "Companheirismo",
      "Dignidade",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Dispor dos meios e equipamentos adequados afetos à segurança, vigilância, socorro, salvamento e assistência aos banhistas, são:",
    correct: "Direitos do Nadador-Salvador (NS)",
    distractors: [
      "Deveres gerais do Nadador-Salvador (NS)",
      "Deveres especiais do Nadador-Salvador (NS)",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "No exercício das suas funções o Nadador-Salvador (NS) deve ter sempre presente que:",
    correct: "Não é agente de Autoridade, nem seu substituto",
    distractors: [
      "Não é agente de Autoridade, nem seu substituto",
      "Deve efetuar uma tentativa de salvamento caso exista um grande risco de segurança de vida",
      "Não deve efetuar um salvamento mesmo fora da sua área de responsabilidade",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Assegurar a vigilância do plano de água, munido do meio de salvamento, é um",
    correct: "Dever geral",
    distractors: [
      "Dever especial",
      "Uma recomendação",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Dispor de uniforme adequado que obedeça às especificações técnicas legalmente estabelecidas, são:",
    correct: "Deveres gerais do Nadador-Salvador (NS)",
    distractors: [
      "Direitos do Nadador-Salvador (NS)",
      "Deveres especiais do Nadador-Salvador (NS)",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O relatório de salvamento deve ser preenchido em que situações?",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Picada peixe-aranha",
      "Criança perdida",
      "Paragem digestiva",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Uma das funções mais importantes do Nadador-Salvador (NS) é a \
    prevenção das situações de perigo informando e aconselhando os banhistas \
    para potenciais incidentes e acidentes. Indique quais os principais conselhos a dar aos banhistas? ",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Não vire as costas às ondas e ao mar, tome banho nas áreas indicadas como zonas de banho",
      "Se se sentir cansado procure flutuar e procure sempre tomar banhos ou nadar acompanhado",
      "Não hesite em pedir socorro quando em dificuldade, se sentir frio saia imediatamente da água",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "A quem compete zelar pela segurança dos banhistas nos espaços \
      aquáticos e zelar pela prevenção das condições ambientais desses espaços?",
    correct: "Ao Nadador-Salvador (NS)",
    distractors: [
      "Autoridade Marítima Nacional (AMN) em conjunto com o Instituto de Socorros a Náufragos (ISN)",
      "Ao concessionário ou à entidade responsável pela exploração do espaço aquático",
      "À associação dos espaços aquáticos e ambientais",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Qual da seguinte afirmações é uma dica para preservar o ambiente dos \
      espaços aquáticos?",
    correct: "Não andar na zona dunar para não danificar o ecossistema",
    distractors: [
      "O Nadador-Salvador (NS) não deve impor-se pelas suas atitudes, não dando bons exemplos e não contribuindo para o bem-estar de todos",
      "Levar animais domésticos para a praia, porque são o melhor amigo do homem",
      "Desobedecer às regras de higiene impostas nos espaços aquáticos construídos como piscinas e parques aquáticos",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Os Nadadores-Salvadores (NS) têm como função assegurar a integridade \
      física e a saúde dos banhistas dos espaços aquáticos, mas por vezes \
      esquecem-se deles próprios. Alguns dos sintomas comuns de uma \
      desidratação moderada incluem:",
    correct: "Sede, sonolência e cansaço",
    distractors: [
      "Energia, pressão arterial alta e frequência cardíaca baixa",
      "Sem pressão e sem frequência cardíaca",
      "Aumento da produção de urina, boca húmida e pele vermelha",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "Ter especial atenção a crianças, idosos, pessoas portadoras de deficiência \
      e outras não habituadas ao mar, (…) não deve ultrapassar os limites das \
      suas qualificações e competências, devendo respeitar as hierarquias \
      técnicas, estamos a falar de:",
    correct: "Recomendações do Nadador-Salvador (NS)",
    distractors: [
      "Direitos do Nadador-Salvador (NS)",
      "Deveres gerais do Nadador-Salvador (NS)",
      "Deveres do Nadador-Salvador (NS)",
    ],
  },
  {
    topic: "Ser Nadador Salvador",
    question: "O Nadador-salvador (NS) é a pessoa singular habilitada com o curso de NS \
      certificado ou reconhecido pelo Instituto de Socorros a Náufragos (ISN), a \
      quem compete, para além dos conteúdos técnicos profissionais \
      específicos:",
    correct: "Informar, prevenir, socorrer e prestar o Suporte Básico de Vida (SBV) em \
      qualquer circunstância nas praias de banhos, em áreas concessionadas, em \
      piscinas e outros locais onde ocorram práticas aquáticas com obrigatoriedade \
      de vigilância",
    distractors: [
      "Informar, prevenir, socorrer e prestar o Suporte Básico de Vida (SBV) com \
        obrigatoriedade de vigilância",
      "Informar, prevenir, socorrer em piscinas e outros locais onde ocorram práticas \
        aquáticas com obrigatoriedade de vigilância",
      "Informar, prevenir, socorrer e prestar o Suporte Básico de Vida (SBV) em \
        qualquer circunstância nas praias de banhos, nos pavilhões ginásio e em \
        piscinas com obrigatoriedade de vigilância",
    ],
  },
  // —— Afogamento ——
  {
    topic: "Afogamento",
    question: "Em que fase do afogamento, a vítima não faz qualquer tipo de movimento e continua a fazer grandes aspirações de água para o pulmão",
    correct: "Espasmo glótico;",
    distractors: [
      "Aspiração inicial de líquido",
      "Apneia voluntária",
      "Apneia terminal",
    ],
  },
  {
    topic: "Afogamento",
    question: "Na classificação de afogamento grau 3, como se apresenta o náufrago e quais os procedimentos a tomar:",
    correct: " Muita espuma na boca e/ou nariz com pulso periférico palpável, administrar \
      oxigénio (O2) a 15litros/min no local do acidente, Posição Lateral de \
      Segurança (PLS) e internamento hospitalar",
    distractors: [
      "Pouca espuma na boca e/ou nariz, administrar oxigénio (O2) a 15litros/min, \
        Posição Lateral de Segurança (PLS) e aquecimento corporal",
      "Pouca espuma na boca e/ou nariz; administrar oxigénio (O2) nasal a 5litros/min, aquecimento corporal, repouso, \
        tranquilização e observação hospitalar",
      "Muita espuma na boca e/ou nariz sem pulso periférico palpável, administrar \
        oxigénio (O2) a 15litros/min no local do acidente, Posição Lateral de \
        Segurança (PLS) e internamento hospitalar",
    ],
  },
  {
    topic: "Afogamento",
    question: "O que é o afogamento?",
    correct: "É o processo que resulta em insuficiência respiratória por imersão ou \
              submersão em meio líquido",
    distractors: [
      "É o processo que resulta em insuficiência cardíaca por imersão ou submersão em meio líquido",
      "É o processo que resulta em insuficiência cerebral por imersão ou submersão em meio líquido",
      "É o processo que resulta em insuficiência cardiocelular por imersão ou submersão em meio líquido",
    ],
  },
  {
    topic: "Afogamento",
    question: "O organismo humano consegue sobreviver em situações adversas \
                extremas e meios inóspitos, até cerca de:",
    correct: "3 minutos sem oxigénio e 3 horas sem proteção e abrigo",
    distractors: [
      "5 minutos sem oxigénio",
      "5 minutos sem proteção e abrigo",
      "3 minutos sem oxigénio e 3 dias sem comida",
    ],
  },
  {
    topic: "Afogamento",
    question: "A hipoxia, ocorre devido a:",
    correct: "Diminuição de oxigénio no sangue",
    distractors: [
      "Oxigénio a mais no cérebro",
      "Falta de sangue no cérebro",
      "Oxigénio a mais no sangue",
    ],
  },
  {
    topic: "Afogamento",
    question: "Quais são as fases que caracterizam o afogamento? ",
    correct: "Apneia voluntária, aspiração inicial de líquido, apneia terminal e espasmo glótico",
    distractors: [
      "É a apneia involuntária, aspiração inicial, apneia e espasmo glótico",
      "É a entrada de água nos pulmões, paragem do coração e falência cerebral",
      "É a apneia voluntária, aspiração final de líquido e espasmo pulmonar",
    ],
  },
  {
    topic: "Afogamento",
    question: "Em que fase do afogamento a vítima encontra-se em pânico total e luta com \
todas as forças para se manter à superfície, esta etapa pode durar entre 10 a 60 segundos:",
    correct: "Apneia voluntária",
    distractors: [
      "Aspiração inicial de líquido",
      "Espasmo glótico",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Afogamento",
    question: "Em que fase do afogamento a vítima não faz qualquer tipo de movimento? ",
    correct: "Espasmo glótico",
    distractors: [
      "Apneia voluntária",
      "Aspiração inicial de líquido",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Afogamento",
    question: "Quais os sintomas de um náufrago afogado em grau 2? ",
    correct: "Pouca espuma na boca e/ou nariz",
    distractors: [
      "Pouca espuma na boca",
      "Muita espuma na boca e/ou nariz",
      "Muita espuma na boca",
    ],
  },
  {
    topic: "Afogamento",
    question: "Quais os sintomas de um náufrago afogado em grau 4? ",
    correct: "Muita espuma na boca e/ou nariz sem pulso periférico palpável",
    distractors: [
      "Pouca espuma na boca e/ou nariz",
      "Pouca espuma na boca",
      "Muita espuma na boca e/ou nariz com pulso periférico palpável",
    ],
  },
  {
    topic: "Afogamento",
    question: "Na classificação do afogamento, qual o grau em que a vítima se encontra \
              sem tosse, nem espuma na boca/nariz, nem dificuldades na respiração, \
              nem paragem respiratória nem Paragem Cardiorrespiratória (PCR)?",
    correct: "Resgate aquático",
    distractors: [
      "Grau 1",
      "Grau 2",
      "Grau 4",
    ],
  },
  {
    topic: "Afogamento",
    question: "Quais os sintomas de um náufrago em afogamento de grau 4?",
    correct: "Muita espuma na boca e/ou nariz sem pulso periférico palpáve",
    distractors: [
      "Pouca espuma na boca e/ou nariz",
      "Pouca espuma na boca",
      "Muita espuma na boca e/ou nariz com pulso periférico palpável",
    ],
  },
  {
    topic: "Afogamento",
    question: "A hipotermia ocorre quando a temperatura corporal baixa para além dos",
    correct: "35ºC",
    distractors: [
      "32ºC",
      "38ºC",
      "Limites",
    ],
  },
  {
    topic: "Afogamento",
    question: "Qual é o tempo médio de sobrevivência de um náufrago, exposto a uma \
              temperatura da água de 21ºC?",
    correct: "24 horas",
    distractors: [
      "48 horas",
      "2 a 3 dias",
      "Nunca mais de 2 dias",
    ],
  },
  {
    topic: "Afogamento",
    question: "Em que fase do afogamento acontece a inconsciência da vitima? “Há água \
              nos pulmões e estômago, podendo haver relaxamento dos esfíncteres”. ",
    correct: "Apneia terminal",
    distractors: [
      "Apneia voluntária",
      "Espasmo glótico",
      "Aspiração inicial do líquido",
    ],
  },
  {
    topic: "Afogamento",
    question: "Na classificação do afogamento em que grau a vitima se encontra em \
              paragem cardiorrespiratória (PCR)? ",
    correct: "Grau 6",
    distractors: [
      "Grau 5",
      "Grau 1 e grau 2",
      "Grau 4",
    ],
  },
  {
    topic: "Afogamento",
    question: "Quais os perigos associados à temperatura da água:",
    correct: "Hipotermia e Hidrocussão",
    distractors: [
      "Hidrocussão e Hipertermia",
      "Hipotermia e paragem digestiva",
      "Todas as respostas estão certas",
    ],
  },
  {
    topic: "Afogamento",
    question: "As consequências do afogamento são classificadas como?",
    correct: "Morte, morbidez e ausência de morbidez",
    distractors: [
      "Morte, rigidez e ausência de rigidez",
      "Morte, óbito e ausência de morte",
      "Apneia voluntaria, aspiração do líquido, apneia terminal e espasmo glótico",
    ],
  },
  {
    topic: "Afogamento",
    question: "A vítima começa a perder as forças, existe aspiração de maior quantidade \
            de líquido podendo ocorrer um laringospasmo. Qual a fase do afogamento \
            que pode durar entre 60 a 90 segundos? ",
    correct: "Aspiração inicial de líquido",
    distractors: [
      "Apneia terminal",
      "Espasmo glótico",
      "Apneia voluntária",
    ],
  },
  {
    topic: "Afogamento",
    question: "Um acidente provocado pela súbita exposição à água com a temperatura \
              5ºC abaixo da temperatura corporal, dá-se o nome de:",
    correct: "Hidrocussão ou síndrome de imersão",
    distractors: [
      "Hipotermia ou hidrocussão",
      "Hipotermia ou síndrome de imersão",
      "Hipotermia moderada ou hidrocussão",
    ],
  },
  {
    topic: "Afogamento",
    question: "A hipóxia, ocorre devido a:",
    correct: "Diminuição de oxigénio no sangue",
    distractors: [
      "Oxigénio a mais no cérebro",
      "Falta de sangue no cérebro",
      "Oxigénio a mais no sangue",
    ],
  },

];
  // {
  //   topic: "Ser Nadador Salvador",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Ser Nadador Salvador",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Ser Nadador Salvador",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Ser Nadador Salvador",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Ser Nadador Salvador",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Ser Nadador Salvador",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Ser Nadador Salvador",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },





  // {
  //   topic: "Ser Nadador Salvador",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },