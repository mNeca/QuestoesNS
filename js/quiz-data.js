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
      "Existir trovoada e relâmpagos, para informar os banhistas que a praia tem de estar temporariamente desocupada",
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
    correct: "Deveres gerais do Nadador-Salvador (NS)",
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
      "Pode desempenhar tarefas estranhas á sua atividade",
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
    correct: "Muita espuma na boca e/ou nariz com pulso periférico palpável, administrar \
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
// —— Praias ——
  {
    topic: "Praias",
    question: "Como é medida a amplitude (altura) da onda?",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Medida do distúrbio máximo durante um ciclo completo de oscilação",
      "É medida em relação á linha de equilíbrio da onda",
      "É medida em metros",
    ],
  },
  {
    topic: "Praias",
    question: "De quem é a responsabilidade de içar a bandeira, conforme a avaliação do \
              estado do mar, condições ambientais e/ou por determinação da Autoridade \
              Marítima Nacional (AMN)?",
    correct: "Nadador-Salvador",
    distractors: [
      "Concessionário",
      "Banhista",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Praias",
    question: "É da responsabilidade do Nadador-Salvador (NS): ",
    correct: "Içar/arriar as bandeiras de sinais",
    distractors: [
      "Içar/arriar a bandeira azul",
      "Içar/arriar a bandeira de ouro",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Praias",
    question: "A bandeira xadrez tem as seguintes cores",
    correct: "Azul e branca",
    distractors: [
      "Preto e branco",
      "Vermelho e amarelo",
      "Vermelho e branco",
    ],
  },
  {
    topic: "Praias",
    question: "Do seguinte material, qual não é obrigatório no posto de praia? ",
    correct: "Binóculos e telemóvel",
    distractors: [
      "Carretel e mastro de sinais",
      "Mala de 1º socorros",
      "Bandeiras de sinais",
    ],
  },
  {
    topic: "Praias",
    question: "Qual a cor das bandeirolas de zona de banhos?",
    correct: "Vermelha e Amarela",
    distractors: [
      "Amarela e verde",
      "Vermelha",
      "Amarela",
    ],
  },
  {
    topic: "Praias",
    question: "Quando a crista da onda rebenta à frente da mesma e surge principalmente \
            na vazante. Identifique qual o tipo de onda descrita? ",
    correct: "Onda progressiva",
    distractors: [
      "Onda mergulhante",
      "Onda de maré",
      "Onda espraiada",
    ],
  },
  {
    topic: "Praias",
    question: "Nas praias fluviais existem vários perigos, sendo característica de um \
            deles “…a água a cair de um obstáculo forma uma corrente de retorno \
            sobre ele próprio…”. Estamos a falar de: ",
    correct: "Retornos",
    distractors: [
      "Remoinhos",
      "Funil ou escoadouro",
      "Agueiros",
    ],
  },
  {
    topic: "Praias",
    question: "Quais são os fatores que influenciam o declive numa praia marítima?",
    correct: "O tamanho das partículas de sedimentos e a intensidade da ação das ondas",
    distractors: [
      "O tamanho e a intensidade da ação das ondas",
      "O tamanho e a intensidade da ação das ondas, assim como, o tipo de areia",
      "O vento, as ondas, tipo de areia e o fundo",
    ],
  },
  {
    topic: "Praias",
    question: "O que entende por mar total (set)?",
    correct: "Sobreposição de grupos de ondas geradas pelo vento na superfície do mar",
    distractors: [
      "É um conjunto de sete ondas que vai aumentando de tamanho",
      "Ondas geradas pelo vento com aspeto mais ou menos regular",
      "Ondas que se propagam para fora da zona de geração com aspeto regular e cristas longas.",
    ],
  },
  {
    topic: "Praias",
    question: "Ao conceito de onda, associam-se três em que o Nadador-Salvador (NS) \
            deve conhecer, para compreender as informações sobre a previsão do  \
            estado mar e atuar em conformidade. Estamos a falar de que conceitos? ",
    correct: "Comprimento da onda, período de onda e amplitude de onda",
    distractors: [
      "A vaga, ondulação e mar total (SET)",
      "Onda mergulhante, onda progressiva e onda espraiada",
      "Correntes de mar, correntes de maré e agueiros",
    ],
  },
  {
    topic: "Praias",
    question: "A onda mergulhante caracteriza-se por: ",
    correct: "Onda que rebenta sempre com força e pode, facilmente, atirar um nadador \
            para o fundo do mar e ocorre geralmente na maré baixa",
    distractors: [
      "Onda que rebenta com muita força enrola facilmente um nadador e ocorre na preia-mar",
      "Onda que rebenta à frente da sua crista e ocorre na vazante",
      "Onda que surge quando o mar fica encrespado e ocorre na enchente",
    ],
  },
  {
    topic: "Praias",
    question: "Onda que apenas rebenta quando chega à linha de praia, devido a uma \
              grande profundidade de água, de forma a que a onda não perde velocidade \
              e, portanto, não ganha altura, denomina-se por: ",
    correct: "Onda espraiada",
    distractors: [
      "Onda mergulhante",
      "Todos os tipos de ondas",
      "Onda progressiva",
    ],
  },
  {
    topic: "Praias",
    question: "O retorno ao mar da água das ondas e são normalmente mais fortes onde \
            a praia tem o gradiente mais acentuado. Estamos a falar de: ",
    correct: "Correntes de mar",
    distractors: [
      "Correntes alternas",
      "Correntes amovíveis",
      "Correntes de maré",
    ],
  },
  {
    topic: "Praias",
    question: "A água transportada para a praia acumula-se e procura retornar para o mar \
              aberto, na zona de maior profundidade. Estamos a falar de que tipo de \
              correntes? ",
    correct: "Agueiros ou “Rip current”",
    distractors: [
      "Correntes amovíveis",
      "Correntes de maré",
      "Correntes de mar",
    ],
  },
  {
    topic: "Praias",
    question: "Os agueiros podem ser",
    correct: "Estacionários quando o fundo é rochoso, mantêm-se permanentes ao longo do ano",
    distractors: [
      "Móveis quando aparecem subitamente, podendo ser muito fortes",
      "Estacionários quando estão no mesmo local todo o ano, devido ao seu fundo arenoso",
      "Móveis quando mudam de local diariamente, sendo extremamente perigosos",
    ],
  },
  {
    topic: "Praias",
    question: "Que tipos de agueiros conhece?",
    correct: "Os estacionários, móveis e súbitos",
    distractors: [
      "Os estacionários, os móveis e “rip current”",
      "Os móveis e os imóveis",
      "Os perigosos e os não perigosos",
    ],
  },
  {
    topic: "Praias",
    question: "Quais os sinais chaves que são indicadores de estar na presença de uma \
            “rip current”, agueiro ou golas?",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Ondas maiores e mais frequentes nos dois lados desta corrente",
      "Tremura da Água no agueiro, quando à sua volta é lisa",
      "Cor da água acastanhada devido ao arrastamento da areia do fundo",
    ],
  },
  {
    topic: "Praias",
    question: "Em Portugal, ocorrem duas marés altas e 2 marés baixas por dia, com \
intervalo de cerca de",
    correct: "6h12m entre cada maré alta e baixa e 12h25m entre 2 marés altas consecutivas.",
    distractors: [
      "12h25m entre a maré alta e a maré baixa e 6h12m entre duas marés altas consecutivas",
      "Só existe uma maré baixa e uma maré alta",
      "6h12m entre cada maré alta e maré baixa e 24h50 minutos entre 2 marés altas consecutivas",
    ],
  },
  {
    topic: "Praias",
    question: "O Nadador-Salvador (NS) perante um cenário de nevoeiro, que bandeira deve içar? ",
    correct: "Vermelha, porque é uma situação de risco",
    distractors: [
      "Verde, se as condições de mar estivessem boas",
      "Amarela, porque existe algum perigo",
      "Aquela que as condições de mar assim exigirem",
    ],
  },
  {
    topic: "Praias",
    question: "De quem é a responsabilidade da aquisição dos materiais e equipamentos \
destinados à assistência a banhistas numa zona de apoio balnear (ZAB)?",
    correct: "Do Concessionário",
    distractors: [
      "Da Autoridade Marítima Nacional (AMN)",
      "Do Nadador-Salvador (NS)",
      "Do Instituto de Socorros a Náufragos (ISN)",
    ],
  },
  {
    topic: "Praias",
    question: "O posto de praia e demais materiais complementares destinado à \
            informação, vigilância e prestação de salvamento, socorro a náufragos e \
            assistência a banhista, é instalado nas zonas de apoio balnear (ZAB) nos \
            termos determinados por? ",
    correct: "O Edital da Capitania do Porto",
    distractors: [
      "O Instituto de Socorros a Náufragos (ISN)",
      "Os concessionários",
      "Os concessionários",
    ],
  },
  {
    topic: "Praias",
    question: "Existe um conjunto de materiais complementares ao posto de praia que \
            não são obrigatórios. Quais são? ",
    correct: "Mota de água, viatura 4x4, embarcação de pequeno porte, moto 4x4 e apito",
    distractors: [
      "Cercado de proteção, boia torpedo, cinto de salvamento e bandeiras de sinais",
      "Prancha, carretel, vara e mala de 1os socorros",
      "Boia circular, boia torpedo e armação de praia",
    ],
  },
  {
    topic: "Praias",
    question: "O cercado de proteção serve para cercar todo o material que faz parte do posto de praia, quantos metros tem?",
    correct: "5 metros quadrados",
    distractors: [
      "6 metros quadrados",
      "2,5 metros quadrados",
      "Quatro metros quadrados",
    ],
  },
  {
    topic: "Praias",
    question: "De que bandeira estamos a falar quando há “condições aceitáveis para a \
pratica de banhos, assumindo as regras e recomendações de segurança”?",
    correct: "Bandeira amarela",
    distractors: [
      "Bandeira vermelha",
      "Bandeira azul",
      "Bandeira verde",
    ],
  },
  {
    topic: "Praias",
    question: "Para delimitar a área de banhos, deverão ser colocadas próximo da linha \
            de água e de forma visível duas bandeirolas. Quais as cores destas? ",
    correct: "Vermelha e Amarela",
    distractors: [
      "Amarela e Laranja",
      "Xadrez de Preto e Branco",
      "Verde e Amarela",
    ],
  },
  {
    topic: "Praias",
    question: "Ao período de acalmia entre cada set, dá-se o nome de?",
    correct: "Sota",
    distractors: [
      "Mar chão",
      "Correntes de maré",
      "Correntes de mar",
    ],
  },
  {
    topic: "Praias",
    question: "Classifique as correntes nas praias fluviais:",
    correct: "Remoinhos, Retornos, Funil ou Escoadouro",
    distractors: [
      "Retornos, Funil, Agueiros",
      "Funil ou Escoadouro, Corrente de Mar",
      "Agueiros, Retornos, Remoinhos",
    ],
  },
  {
    topic: "Praias",
    question: "Nos casos em que a frente de praia tem uma extensão igual ou superior a \
100 metros, é obrigatório manter quantos Nadadores-Salvadores (NS)?",
    correct: "Obrigatório manter um Nadador-Salvador (NS) por cada 50 metros",
    distractors: [
      "Obrigatório manter dois Nadadores-Salvadores (NS) por cada 50 metros",
      "Obrigatório manter um Nadador-Salvador (NS) por cada 25 metros",
      "Nenhumas destas respostas estão corretas",
    ],
  },
  {
    topic: "Praias",
    question: "A maré de sizígia ou maré viva ocorre quando",
    correct: "O Sol e a Lua estão alinhados com a Terra",
    distractors: [
      "O Sol e a Lua formam um ângulo de 90º com a Terra",
      "A Terra completa uma volta ao Sol",
      "A Terra completa uma volta no seu próprio eixo",
    ],
  },
  {
    topic: "Praias",
    question: "A maré de quadratura ou maré morta ocorre quando",
    correct: "A Lua e o Sol estão posicionados num ângulo de 90º com a Terra",
    distractors: [
      "O Sol e a Lua estão alinhados com a Terra",
      "Após 12 horas de preia-mar",
      "A Terra completa uma volta no seu próprio eixo",
    ],
  },
    // —— Piscinas ——
  {
    topic: "Piscinas",
    question: "Qual do seguinte material não pertence ao posto de piscina",
    correct: "Boia torpedo",
    distractors: [
      "Boia circular",
      "Plano rígido",
      "Mala de 1º socorros",
    ],
  },
  {
    topic: "Piscinas",
    question: "Na piscina, a vigilância pode ser feita de que forma?",
    correct: "Estática e dinâmica",
    distractors: [
      "Estática e em movimento",
      "Dinâmica",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Piscinas",
    question: "Quais os perigos associados às piscinas?",
    correct: "Ambientais e humanos",
    distractors: [
      "Balneários",
      "Crianças e idosos",
      "Utentes de mobilidade reduzida",
    ],
  },
  {
    topic: "Piscinas",
    question: "Do seguinte material qual é o obrigatório no posto de piscina?",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Plano rígido e mala de 1º socorros",
      "Vara de salvamento e cinto de salvamento",
      "Boia circular e armação de piscina",
    ],
  },
  {
    topic: "Piscinas",
    question: "Na sinalética utilizada em piscinas, enquadra-se os seguintes tipos de comunicação:",
    correct: "Sonora, gestual e verbal",
    distractors: [
      "Verbal, visual e acústica",
      "Visual, acústica e apito",
      "Apito, rádio e bandeiras",
    ],
  },
  {
    topic: "Piscinas",
    question: "Os sistemas de observação em piscinas, são técnicas de identificação \
            proactiva de sinais de afogamento. Quais os sistemas adotados em Portugal?",
    correct: "Observação total e de vigilância de emergência",
    distractors: [
      "Observação parcial e observação total",
      "Observação por zonas e observação completa",
      "Observação por zonas e de vigilância de emergência",
    ],
  },
  {
    topic: "Piscinas",
    question: "Na vigilância em piscina, os indicadores de emergência podem ser:",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Um banhista que sai da água com as mãos na cabeça",
      "Um banhista a flutuar em qualquer local da piscina",
      "Uma ou mais pessoas a apontar numa determinada direção, com uma \
      expressão facial preocupada",
    ],
  },
  {
    topic: "Piscinas",
    question: "Como se classifica os tanques em que as características morfológicas e \
            funcionais que os tornam particularmente adequados ao recreio e diversão \
            aquática através de acessórios lúdicos? ",
    correct: "Tanques de Recreio e Diversão",
    distractors: [
      "Tanques Desportivos",
      "Tanques Infantis ou Chapinheiros",
      "Tanque de Aprendizagem e Recreio",
    ],
  },
  {
    topic: "Piscinas",
    question: "Diga qual o tempo máximo para auxiliar o utente em caso de incidente em piscina?",
    correct: "20s",
    distractors: [
      "30s",
      "35s",
      "40s",
    ],
  },
  {
    topic: "Piscinas",
    question: "Qual dos Requisitos Técnicos de Segurança está correto?",
    correct: "Os ralos de fundo, devem estar protegidos por grelhas de segurança \
apropriadas para que não seja possível alguém ficar preso",
    distractors: [
      "Nos períodos de inatividade não deve ser garantido o isolamento do espelho \
de água prevenindo a ocorrência de acidentes",
      "As escadas não precisam ser mantidas em perfeitas condições de utilização \
evitando assim o risco de lesões; ",
      "As normas de funcionamento e os períodos de vigilância não devem estar \
afixados em local visível",
    ],
  },
  {
    topic: "Piscinas",
    question: "Identifique a sinalética(s) destinada á assistência a banhistas nas Piscinas:",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Placas de Interdição",
      "Perigos e Riscos",
      "Recomendações",
    ],
  },
  {
    topic: "Piscinas",
    question: "Nas piscinas de uso público a contratação dos Nadadores-Salvadores (NS) \
            é da responsabilidade da:",
    correct: "Entidade que concessiona a piscina",
    distractors: [
      "Assembleia da Câmara Municipal",
      "Associação de Natação local",
      "Instituto de Socorros a Náufragos (ISN)",
    ],
  },
  {
    topic: "Piscinas",
    question: "Quanto à natureza ambiental ou tipologia construtiva, as piscinas \
distinguem-se em:",
    correct: "Piscinas ao ar livre, cobertas, combinadas e convertíveis",
    distractors: [
      "Piscinas ao ar livre, cobertas, combinadas, transformáveis",
      "Piscinas cobertas, combinadas, transformáveis e convertíveis",
      "Piscinas cobertas, combinadas, convertíveis e privadas",
    ],
  },
  {
    topic: "Piscinas",
    question: "Quanto à valência ou tipologia funcional, as piscinas podem classificar-se \
            nos seguintes grupos principais:",
    correct: "Tanques desportivos, aprendizagem e recreio, infantis, recreio e diversão e \
            polivalentes",
    distractors: [
      "Tanques desportivos, aprendizagem e recreio e juniores",
      "Tanques desportivos, aprendizagem, infantis, recreio e juniores",
      "Tanques desportivos, aprendizagem e recreio, infantis, juvenis, juniores e polifuncionais",
    ],
  },
  {
    topic: "Piscinas",
    question: "Alguns dos banhistas nas piscinas, são considerados de risco por \
            reunirem um conjunto de características que faz deles pessoas mais \
            suscetíveis de sofrerem uma lesão. São grupo de risco:",
    correct: "As crianças",
    distractors: [
      "Os que não se encontram sob o efeito de álcool",
      "Os que tem boa mobilidade",
      "Os que sabem nadar",
    ],
  },
  {
    topic: "Piscinas",
    question: "O tipo da lesão e a capacidade de nadar do banhista vão determinar o seu \
            comportamento e indicar se se trata de uma vítima colaborante ou não. As \
            lesões mais comuns são? ",
    correct: "Fraturas, luxações, cãibras e hemorragias",
    distractors: [
      "Hemorragias nasais, internas e externas e extensões",
      "Fraturas, luxações hemorragias e extensões",
      "Cãibras, hemorragias, luxações e picadas",
    ],
  },
  {
    topic: "Piscinas",
    question: "Material e equipamento destinados à informação, vigilância, prestação de \
            socorro e salvamento, obrigatórios nos postos de piscinas, qual não \
            pertence ao posto de piscina:",
    correct: "Bandeiras",
    distractors: [
      "Armação de piscina",
      "Boia circular",
      "Vara de salvamento",
    ],
  },
  {
    topic: "Piscinas",
    question: "Ter as instruções do Instituto de Socorros a Náufragos (ISN) e ter os meios \
          de salvamento devidamente arrumados, estamos a falar de que material do \
          posto de piscina?",
    correct: "Armação piscina",
    distractors: [
      "Cadeira telescópica",
      "Placar informativo",
      "Edital de Piscina",
    ],
  },
  {
    topic: "Piscinas",
    question: "Para efeito de cálculo do número de Nadadores-Salvadores (NS) \
          empenhados nos dispositivos de segurança aquático em piscinas, deve \
          atender-se:",
    correct: "Um NS permanente, quando a lotação instantânea máxima de banhista é de até 400",
    distractors: [
      "Um NS permanente, quando a lotação instantânea mínima de banhista é de até 400",
      "Dois NS permanente, quando a lotação instantânea máxima de banhista é de até 400",
      "Dois NS permanente, quando a lotação instantânea mínima de banhista é de até 400",
    ],
  },
  {
    topic: "Piscinas",
    question: "No decorrer da vigilância o Nadador-Salvador (NS) deve:",
    correct: "Avisar o colega responsável pela outra zona de vigilância caso os banhistas \
            de risco mudem de zona.",
    distractors: [
      "Dedicar mais tempo aos banhistas que sabem nadar",
      "Desvalorizar qualquer comportamento que indique problemas",
      "Usar óculos de sol quando se encontra em piscinas cobertas",
    ],
  },
  {
    topic: "Piscinas",
    question: "O Nadador-Salvador (NS) deve ser capaz de verificar a sua zona de \
            vigilância e estar perto o suficiente para auxiliar em caso de incidente. Esta \
            pratica é reconhecida internacionalmente e é denominada por:",
    correct: "Sistema 10:20",
    distractors: [
      "Sistema 15:20",
      "Sistema 20:20",
      "Sistema 20:30",
    ],
  },
  {
    topic: "Piscinas",
    question: "Nas piscinas, as normas de funcionamento e os períodos de vigilância \
      devem ser afixados em local visível. Isto é considerado:",
    correct: "Requisito técnico de segurança",
    distractors: [
      "Indicadores de emergência",
      "Sistema de segurança",
      "Sistema de observação",
    ],
  },
  {
    topic: "Piscinas",
    question: "Em termos de sinalética entre Nadadores-Salvadores (NS), “elevar o braço \
          acima da cabeça agitando-o em movimentos circulares”. Corresponde a:",
    correct: "2ª Ajuda",
    distractors: [
      "OK",
      "Submerso",
      "Parar",
    ],
  },
  {
    topic: "Piscinas",
    question: "Segundo o Conselho Nacional da Qualidade (CNQ), as piscinas podem \
classificar-se com base nos seguintes critérios?",
    correct: "Ambiente ou tipologia construtiva e valência ou tipologia funcional",
    distractors: [
      "Prática desportiva e prática de lazer",
      "Tipologia ambiental e tipologia valenciana",
      "Aprendizagem e competição",
    ],
  },
  // —— O Salvamento ——
  {
    topic: "O Salvamento",
    question: "Quantos elos tem a cadeia de sobrevivência no afogamento?",
    correct: "5",
    distractors: [
      "6",
      "4",
      "3",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Na caracterização das fases do salvamento, no reconhecimento, qual a \
primeira ação que o Nadador-Salvador (NS) deve tomar?",
    correct: "Alerta SOS - 1º ajuda",
    distractors: [
      "Escolher o método de salvamento adequado a situação",
      "Avaliar as condições do mar e ambientais",
      "Entrar na água com o meio de salvamento escolhido",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Existem três fases do salvamento. Em que fase o Nadador-salvador (NS) \
tem que “pensar antes de agir”?",
    correct: "Planeamento",
    distractors: [
      "Reconhecimento",
      "Acão e planeamento",
      "Ação",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Existe sinalética especifica entre Nadadores-salvadores (NS). O NS que se \
              encontra em terra verificar que o outro NS se virou para terra e tem os dois \
              braços cruzados a cima da cabeça fora de água, o que lhe está a transmitir? ",
    correct: "Naufrago submerso",
    distractors: [
      "O NS necessita de apoio",
      "Pedido de 2º ajuda",
      "Naufrago encontra-se mais para trás",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Na cadeia de sobrevivência do afogamento, qual dos elos se considera de maior importância? ",
    correct: "Todos são de igual modo importantes",
    distractors: [
      "Prevenção",
      "Reconhecer o afogado e ligar 112",
      "Suporte Básico de Vida (SBV)",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Perante uma situação de múltiplos náufragos, o Nadador-Salvador (NS) \
            deverá considerar a seguinte triagem:",
    correct: "Primeiro os náufragos conscientes, entre estes, os não nadadores",
    distractors: [
      "Primeiro os náufragos inconscientes",
      "Primeiro os náufragos conscientes que sabem nadar",
      "Deverá efetuar o salvamento sem qualquer ordem porque o importante é \
salvar vidas",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Em que fase do salvamento, o Nadador-Salvador (NS) deve escolher o meio \
de salvamento:",
    correct: "No planeamento",
    distractors: [
      "No reconhecimento",
      "Na ação",
      "Na entrada na água",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Tendo em conta a sinalética usada entre Nadadores-Salvadores (NS), \
              quando este está na água virado para terra a efetuar movimentos com o \
              braço lateralizado para cima e para baixo, batendo com a mão na água, \
              significa que: ",
    correct: "Necessita de apoio",
    distractors: [
      "Está-se a afogar",
      "O naufrago está submerso",
      "Está a efetuar o 2º pedido de ajuda",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Dos métodos de salvamento abaixo, indique o de menor e o de maior risco \
para o Nadador-Salvador (NS)",
    correct: "Alcançar e rebocar;",
    distractors: [
      "Lançar e rebocar",
      "Caminhar e nadar",
      "Nadar e rebocar",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Em que fase do salvamento se encontra “reconhecer as prioridades da \
emergência e quais os procedimentos necessários”? ",
    correct: "Reconhecimento",
    distractors: [
      "Ação",
      "Planeamento",
      "Evacuação",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Qual dos métodos de salvamento oferece menos perigo para o Nadador\
Salvador (NS)?",
    correct: "Lançar",
    distractors: [
      "Remar",
      "Rebocar",
      "Caminhar",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Nos princípios do salvamento aquático, em que fase se encontra o \
“constatar a emergência e assumir a responsabilidade”?  ",
    correct: "Reconhecimento",
    distractors: [
      "Planeamento",
      "Evasão",
      "Ação",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Na fase da ação, existem várias formas de efetuar o salvamento e no que \
diz respeito ao grau de contacto com a vítima. Qual é o método em que \
utilizamos a vara de salvamento? ",
    correct: "Alcançar",
    distractors: [
      "Lançar",
      "Caminhar",
      "Nadar até a vítima",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Qual destes métodos de salvamento oferece mais perigo para o NadadorSalvador (NS)? ",
    correct: "Nadar",
    distractors: [
      "Remar",
      "Lançar",
      "Caminhar",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Em que fase do salvamento, o Nadador-Salvador (NS) confirma o número(s) de vítima(s)? ",
    correct: "No reconhecimento",
    distractors: [
      "Na evasão",
      "No planeamento",
      "Na ação",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Perante um náufrago consciente, o Nadador-Salvador (NS) deverá?",
    correct: "Ceder o meio de salvamento ao náufrago, criando uma barreira de \
interposição entre o NS e o náufrago",
    distractors: [
      "Acionar a 2 ajuda",
      "Dá-lhe 5 insuflações",
      "Verificar se respira espontaneamente",
    ],
  },
  {
    topic: "O Salvamento",
    question: "As componentes do resgate aquático na fase de ação, são",
    correct: "Entrada, aproximação, reboque e transporte",
    distractors: [
      "Reconhecimento, planeamento e ação",
      "Entrada, 2ª ajuda, aproximação e reboque",
      "Seleção do meio, entrada, reboque e transporte",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Ao chegar à distância de segurança e verificar que o náufrago está \
aparentemente inconsciente, qual deverá ser o seu procedimento? ",
    correct: "Acionar a 2ª ajuda",
    distractors: [
      "Pedir ajuda, retirar as vias respiratórias fora água e rebocá-lo",
      "Pede-lhe colaboração no resgate",
      "Agarrar o náufrago, trazendo-o à superfície se estiver submerso",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Após alcançar o náufrago e verificar que está aparentemente inconsciente \
como deverá proceder?  ",
    correct: "Segura o náufrago em reboque convencional, retira as vias respiratórias fora \
de água, verificar a respiração espontânea, se não ventilar dá-lhe 10 \
insuflações.",
    distractors: [
      "Iniciar o reboque para terra e dar-lhe 2 insuflações de 15 em 15 segundos",
      "Resgata para terra sem insuflações",
      "Retirar as vias respiratórias fora de água e dar-lhe 5 insuflações",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Perante uma vítima com suspeita de lesão na cervical, na ausência de \
alternativa e tendo de extrair a vítima da água. Que reboque utilizaria? ",
    correct: "Reboque braços em V",
    distractors: [
      "Reboque convencional",
      "Reboque pelos maxilares",
      "Reboque com boia circular",
    ],
  },
  {
    topic: "O Salvamento",
    question: "No algoritmo de salvamento aquático, indique, as operações a realizar na \
fase de reconhecimento? ",
    correct: "Alerta SOS, verificar o n.º de náufragos, localizar, avaliar condições de mar",
    distractors: [
      "Alerta SOS, aproximar, resgatar, relatar",
      "Localizar, transportar, avaliar, resgatar",
      "Verificar n.º de náufragos, localizar, planear, abordar, transportar",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Após o Nadador-Salvador (NS) alcançar o náufrago, verificar que está \
aparentemente inconsciente e que não respira, como deverá proceder?",
    correct: "Dá-lhe 10 insuflações e inicia o resgate para terra",
    distractors: [
      "Dá-lhe 3 insuflações, inicia o resgate para terra com 5 insuflações de 15 em 15 segundos",
      "Resgate sem insuflações",
      "Dá-lhe 5 insuflações, inicia o resgate para terra com 3 insuflações de 15 em 15 segundos",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Quais as técnicas de extração de náufragos em piscina?",
    correct: "Técnica de declive suave e de declive acentuado",
    distractors: [
      "Técnica de arrasto e a 2 nadadores salvadores",
      "Técnica de bombeiro e por arrasto",
      "Técnica de declive suave e a 2 nadadores salvadores",
    ],
  },
  {
    topic: "O Salvamento",
    question: "No sistema de sinalização com apito, é utilizado o seguinte código:",
    correct: "1 sopro curto para chamar à atenção individualmente de utentes e banhistas. \
3 sopros longos para sinalizar o inicio de procedimento de salvamento e \
emergência",
    distractors: [
      "1 sopro curto para chamar à atenção de outros Nadadores-Salvadores (NS). \
3 sopros longos para sinalizar o inicio de procedimento de salvamento e \
emergência",
      "2 sopros curtos para chamar à atenção de utentes e banhistas. 1 sopro curto \
para chamar à atenção de outros Nadadores-Salvadores (NS)",
      "2 sopros curtos para sinalizar o inicio de procedimento de salvamento e \
emergência. 3 sopros longos para chamar à atenção de outros Nadadores\
Salvadores (NS)",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Na cadeia de sobrevivência no afogamento, “caso necessário ligar 112”, \
refere-se a que elo?",
    correct: "Reconheça o afogado",
    distractors: [
      "Prevenção",
      "Forneça flutuação",
      "Retire da água",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Quais os elos da cadeia de sobrevivência no afogado?",
    correct: "Prevenção, reconheça o afogado, forneça flutuação, retire da água e Suporte \
Básico de Vida (SBV)",
    distractors: [
      "112, Suporte Básico de Vida (SBV), Desfibrilhador Automático Externo (DAE) \
e Suporte Avançado de Vida (SAV)",
      "Reconheça o afogado, Suporte Avançado de Vida (SAV), fornecer flutuação \
e prevenção",
      "112, reconheça o afogado, Suporte Básico de Vida (SBV) e Desfibrilhador \
Automático Externo (DAE)",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Quais os cuidados a ter durante os reboques?",
    correct: "Todas as respostas estão corretas.",
    distractors: [
      "Que a vitima tenha sempre as vias respiratórias fora de água",
      "Que seja seguro para o Nadador-Salvador (NS) e para o náufrago",
      "Que seja eficiente para o Nadador-Salvador (NS), de forma a que ao chegar \
a terra não esteja exausto para efetuar manobras de Suporte Básico de Vida \
(SBV)",
    ],
  },
  {
    topic: "O Salvamento",
    question: "A máscara de reanimação (pocket mask) deve ser utilizada como mecanismo de barreira",
    correct: "Para diminuir a transmissão de bactérias",
    distractors: [
      "Para aumentar as probabilidades de sucesso",
      "Para evitar a troca de oxigénio com o dióxido de carbono;",
      "Para a vítima reanimar mais rapidamente",
    ],
  },
  {
    topic: "O Salvamento",
    question: "Como deve proceder o Nadador-Salvador (NS) na abordagem ao náufrago consciente? ",
    correct: "Todas as respostas estão corretas",
    distractors: [
      "Dar indicações curtas, claras e precisas;",
      "Ceder o meio de salvamento",
      "Evitar situações de submersão",
    ],
  },



  {
    topic: "Socorro ao Naufrago",
    question: "O Nadador-Salvador (NS) encontra um banhista aparentemente \
inconsciente na praia, reúne as condições de segurança e avalia o estado \
de consciência. Como faz para a avaliação da função respiratória?",
    correct: " Permeabilização da via aérea e VOS",
    distractors: [
      "AVDS",
      "ABCDE",
      "Avalia a função cardiocirculatória",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Numa vitima inconsciente, criança e sabendo que é uma obstrução grave \
da via aérea, o que deve fazer?  ",
    correct: "Ligar 112",
    distractors: [
      " Iniciar RCP",
      " Dar 30:2",
      " Dar 5 insuflações seguidas de 15:2",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "O Nadador-Salvador (NS) depara-se com um banhista em paragem \
respiratória e tem o kit de oxigenoterapia consigo. Que material deve \
utilizar?",
    correct: " Insuflador manual com balonete",
    distractors: [
      " Mascara facial simples",
      " Mascara facial composta",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Qual o débito que o Nadador-Salvador (NS) deve administrar utilizando os \
óculos nasais?",
    correct: " Não utilizar débitos superiores a 5 litros/min de 02",
    distractors: [
      " Não utilizar débitos superiores a 10 litros/min de 02",
      " Não utilizar débitos superiores a 15 litros/min de 02",
      " Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Perante uma obstrução da via aérea grave numa criança, ficando esta \
inconsciente, o Nadador-Salvador (NS) deve:",
    correct: "Ligar 112 e iniciar RCP (15:2)",
    distractors: [
      " Permeabilizar a via aérea, dar 5 insuflações seguidas de 1 min de SBV",
      " Teste VOS, dar 5 insuflações e observar sinais de vida",
      " Iniciar RCP",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Qual dos seguintes meios deve utilizar para administrar oxigénio por inalação? ",
    correct: " Máscara facial composta",
    distractors: [
      "Boca-a-boca",
      " Insuflador manual com balonete",
      "Todas as respostas estão corretas",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "No grau 3 do afogamento e após a recuperação num adulto, qual a \
quantidade de oxigénio a administrar? ",
    correct: "15 l/min",
    distractors: [
      "10 l/min",
      "5 l/min",
      "3 l/min",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "A permeabilização das vias aéreas, é uma técnica realizada em 2 passos, \
quais são?",
    correct: " Extensão da cabeça e elevação da mandíbula, exceto quando houver \
suspeita de trauma",
    distractors: [
      " Extensão da cabeça e elevação da mandíbula",
      "Hiperextensão da cabeça e elevação do queixo",
      " A cabeça deve estar sempre na posição neutra",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Quais os objetivos da posição lateral de segurança?",
    correct: "Manter as vias aéreas permeáveis e evitar a aspiração do vómito",
    distractors: [
      "Realiza-se sempre que a vítima não responde e não respira",
      "Evitar a aspiração do vómito e manter a cabeça em flexão",
      "Evitar a pressão sobre o coração e o pulmão direito",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Quais os cuidados a ter na aplicação das insuflações?",
    correct: " Inspirar normalmente, colocar a boca no bocal da máscara, insuflar o ar de \
forma homogénea e ao mesmo tempo verificar se o tórax se eleva",
    distractors: [
      " Manter a cabeça da vítima em posição neutra, para o ar ir diretamente para \
os pulmões",
      " Inspiração forte, selar bem a boca do Nadador-Salvador (NS) com a da vítima \
e realizar a insuflação rapidamente, verificando se o tórax se eleva",
      "As 2 insuflações aplicadas pelo Nadador-Salvador (NS) não devem durar \
mais de 2 segundos",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Qual a sequência correta do Suporte Básico de Vida (SBV)?",
    correct: " Avaliar condições de segurança, avaliar o estado de consciência e \
permeabilizar a via aérea",
    distractors: [
      "Permeabilizar a via aérea, teste de VOS e avaliar do estado de consciência",
      " Avaliar condições de segurança, permeabilizar a via aérea, teste de VOS",
      " Ligar 112, permeabilizar a via aérea e 5 insuflações",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Sempre que o Suporte Básico de Vida (SBV), é aplicado na sequência do \
resgate aquático, que passos podem ser suprimidos com o objetivo de \
ganhar tempo? ",
    correct: "Avaliar o estado de consciência, gritar por ajuda e ligar 112",
    distractors: [
      " Avaliar as condições de segurança e avaliar o estado de consciência",
      "Avaliar condições de segurança e ligar 112",
      "Teste de VOS e ligar 112",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "No Suporte Básico de Vida (SBV) há uma fase denominada por “avaliação \
do estado de consciência”, o que deverá fazer o Nadador-Salvador (NS) \
para avaliar esse estado? ",
    correct: " Abanar a vitima nos ombros e pergunta em voz alta: “Está bem? Está-me a ouvir?",
    distractors: [
      " Havendo condições de segurança agarra um objeto pontiagudo e pica \
levemente a vítima para ver se há resposta",
      " Presta-lhe 1 minuto de SBV, se a vítima se encontrar inconsciente",
      " Se estão asseguradas as condições de segurança, aciona a 2ª ajuda",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Numa situação em que o náufrago se encontre em paragem \
cardiorrespiratória, quando é que o Nadador-Salvador (NS) deixa de prestar \
o Suporte Básico de Vida (SBV)?",
    correct: "Quando a vítima respirar normalmente, chegar a ajuda diferenciada que tome \
conta da situação ou exaustão do NS",
    distractors: [
      " Até a vítima mexer os olhos, ou ficar uma marca vermelha na zona onde o NS faz as compressões",
      " Até chegarem os familiares da vítima",
      " Ao fim de 3 ciclos de compressões e insuflações",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "No algoritmo do suporte básico de vida (SBV), se a vitima não ventila e \
após ligar 112, qual é o próximo passo?",
    correct: "Ressuscitação Cárdio Pulmonar (RCP)",
    distractors: [
      " Faz a permeabilização da via aérea",
      " Verifica a respiração (VOS)",
      "Coloca em posição lateral de segurança (PLS)",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Sendo caso pediátrico e estando sozinho, quando é que o Nadador\
Salvador (NS) aciona 2ª ajuda?",
    correct: "Após um minuto de Suporte Básico de Vida (SBV)",
    distractors: [
      "Após verificar que não ventila",
      " Após a permeabilização da via aérea",
      " Após 5 insuflações",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Ao efetuar o patrulhamento na sua área de responsabilidade o Nadador \
Salvador (NS) depara-se com um banhista adulto inconsciente no areal. \
Após verificar que não ventila, o que deverá fazer?",
    correct: " Aciona a 2ª ajuda",
    distractors: [
      " Inicia Suporte Básico de Vida (SBV) 30:2",
      " Dá 2 insuflações, inicia Suporte Básico de Vida (SBV) 30:2",
      "Dá 5 insuflações, 1 minuto de Suporte Básico de Vida (SBV) e ativa o 112",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "Não sendo caso de afogamento, quando é que o Nadador-Salvador (NS) \
aciona a 2ª ajuda? ",
    correct: "Após verificar que a vitima não ventila",
    distractors: [
      " Após um minuto de Suporte Básico de Vida (SBV)",
      "Após a permeabilização da via aérea",
      "Após testar a consciência",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "O Nadador-Salvador (NS) encontra um banhista no areal, inanimado e que \
não respira. Após acionar a 2ª ajuda qual é o passo seguinte em termos de \
Suporte Básico de Vida (SBV)? ",
    correct: " Aplica 30 compressões",
    distractors: [
      "Presta um minuto de SBV",
      " Gritar por ajuda",
      "Aplica 5 insuflações",
    ],
  },
  {
    topic: "Socorro ao Naufrago",
    question: "“A incapacidade de chorar, ruído agudo alto à inspiração ou ausência total \
de ruído, cianose…”, são sinais e sintomas de obstrução da via aérea. \
Perante esta descrição, como a classifica quanto à sua gravidade?",
    correct: "Grave",
    distractors: [
      "Ligeira",
      "Total",
      "Parcial",
    ],
  },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   topic: "Socorro ao Naufrago",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },


  
];

  // {
  //   topic: "",
  //   question: "",
  //   correct: "",
  //   distractors: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },