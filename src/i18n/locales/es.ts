import type { en } from './en';

/**
 * Spanish dictionary — US Spanish (es-US): neutral Latin American, Mexican-leaning.
 * RULES: usted/ustedes (never "vosotros"); "auto/carro", "manejar" (not
 * "coche/conducir"); dollars not euros; 801 area code; real Salt Lake County
 * cities; no Spain-only idioms ("coger", "vale", "ordenador"). No em dashes.
 * Typed as `typeof en` so the shape always matches the source dictionary.
 */
export const es: typeof en = {
  site: {
    name: 'PI Physical Therapy',
    tagline: 'Terapia física y rehabilitación de lesiones en Salt Lake City.',
  },

  nav: {
    home: 'Inicio',
    services: 'Servicios',
    rehab: 'Terapia física',
    accident: 'Después de un accidente',
    conditions: 'Condiciones',
    team: 'Nuestro equipo',
    firstVisit: 'Su primera visita',
    stories: 'Historias de pacientes',
    contact: 'Contacto',
    book: 'Solicitar una cita',
    call: 'Llamar',
    menu: 'Menú',
    skip: 'Saltar al contenido',
  },

  langSwitcher: { label: 'Elegir idioma' },

  common: {
    seHablaEspanol: 'Se habla español',
    directAccess: 'No necesita referido para empezar',
    sameWeek: 'Citas la misma semana',
    bilingual: 'Atención bilingüe',
    phoneLabel: 'Llámenos',
    backTo: 'Volver a',
    learnMore: 'Conocer más',
    treatedHere: 'Lo tratamos aquí',
    forAccidents: 'Rehabilitación de accidentes',
    bothPillars: 'Rehabilitación y accidentes',
  },

  seo: {
    home: {
      title: 'Terapia Física en Salt Lake City | PI Physical Therapy',
      description:
        'Atención de Doctor en Terapia Física en Salt Lake City para rehabilitación ortopédica, post-quirúrgica, deportiva y tras accidentes. Citas la misma semana, sin referido para empezar. Se habla español.',
    },
    servicesPT: {
      title: 'Terapia Física y Rehabilitación Deportiva en SLC',
      description:
        'Terapia física individual en Salt Lake City para dolor de espalda, recuperación post-quirúrgica y lesiones deportivas. Dirigida por DPT, atención manual. Empiece sin referido. Se habla español.',
    },
    servicesAccident: {
      title: 'Terapia Física Después de un Accidente de Auto en SLC',
      description:
        'Rehabilitación tras accidentes de auto y latigazo cervical en Salt Lake City. El PIP de Utah suele cubrir la atención sin importar la culpa. Coordinamos con su seguro y abogado. Se habla español.',
    },
    conditions: {
      title: 'Condiciones que Tratamos en Salt Lake City | PI Physical Therapy',
      description:
        'Dolor de espalda, cuello, hombro y rodilla, recuperación post-quirúrgica, lesiones deportivas y latigazo cervical. Vea cómo los tratan nuestros fisioterapeutas en Salt Lake City.',
    },
    team: {
      title: 'Conozca a Nuestros Doctores en Terapia Física en SLC',
      description:
        'Nuestros fisioterapeutas licenciados (DPT) en Salt Lake City aportan experiencia ortopédica, deportiva y en rehabilitación de accidentes. Atención bilingüe e individual.',
    },
    firstVisit: {
      title: 'Su Primera Visita de Terapia Física | Qué Esperar',
      description:
        'Qué esperar en su primera visita de terapia física en Salt Lake City: evaluación, tratamiento manual y un plan de recuperación. Sin referido para empezar. Se habla español.',
    },
    stories: {
      title: 'Historias de Éxito de Pacientes | PI Physical Therapy SLC',
      description:
        'Historias reales de recuperación de pacientes en Salt Lake City: dolor de espalda, rehabilitación post-quirúrgica, lesiones deportivas y atención tras accidentes.',
    },
    contact: {
      title: 'Contacto y Citas de Terapia Física en Salt Lake City',
      description:
        'Agende terapia física en Salt Lake City. Llame al (801) 555-0123 o solicite una cita en línea. Aceptamos seguros, se habla español.',
    },
    privacy: {
      title: 'Política de Privacidad | PI Physical Therapy',
      description: 'Cómo PI Physical Therapy recopila, usa y protege su información.',
    },
    terms: {
      title: 'Términos de Uso | PI Physical Therapy',
      description: 'Los términos que rigen el uso del sitio web de PI Physical Therapy.',
    },
    notFound: {
      title: 'Página no encontrada | PI Physical Therapy',
      description: 'La página que buscaba no está aquí. Regrese a PI Physical Therapy.',
    },
  },

  jsonld: {
    description:
      'PI Physical Therapy es una clínica de terapia física y rehabilitación en Salt Lake City, Utah, que atiende a pacientes ortopédicos, post-quirúrgicos, deportivos y de accidentes de auto / lesiones personales. Atención bilingüe en inglés y español.',
  },

  home: {
    hero: {
      eyebrow: 'Terapia física en Salt Lake City',
      title: 'Vuelva a moverse como antes.',
      subtitle:
        'Atención de Doctor en Terapia Física para lesiones cotidianas, recuperación post-quirúrgica y rehabilitación deportiva, y ayuda experta para recuperarse por completo después de un accidente de auto.',
      primary: 'Solicitar una cita',
    },
    pillarsTitle: 'Dos tipos de recuperación, un solo equipo',
    pillarsLead:
      'La mayoría de las clínicas elige un solo enfoque. Nosotros hacemos los dos bien, con la misma atención individual y un plan armado según su meta.',
    pillars: {
      rehab: {
        label: 'Terapia física',
        title: 'Rehabilitación y recuperación deportiva',
        body: 'Dolor de espalda, cuello y articulaciones, recuperación post-quirúrgica y lesiones deportivas, reconstruidos con atención manual y progresiva.',
        cta: 'Ver terapia física',
      },
      accident: {
        label: 'Después de un accidente',
        title: 'Rehabilitación tras accidentes de auto',
        body: '¿Se lastimó en un accidente de auto? Tratamos el latigazo cervical y las lesiones del choque, y coordinamos el seguro y el papeleo con usted.',
        cta: 'Recuperarse tras un accidente',
      },
    },
    trustTitle: 'Por qué los pacientes nos eligen',
    trust: [
      { title: 'Sin referido para empezar', body: 'En Utah puede iniciar terapia física sin referido médico. Confirme la cobertura con su plan.' },
      { title: 'Atención individual', body: 'Trabaja directamente con su Doctor en Terapia Física, no lo pasan con asistentes.' },
      { title: 'Citas la misma semana', body: 'El dolor no espera. Reservamos espacio para que empiece esta semana.' },
      { title: 'Equipo bilingüe', body: 'Atención, papeleo e instrucciones en inglés o español. Se habla español.' },
    ],
    processTitle: 'Cómo funciona la recuperación aquí',
    conditionsTitle: 'Lo que tratamos',
    conditionsLead: 'Desde una espalda lastimada hasta una rodilla post-quirúrgica o una lesión de accidente, aquí es donde empiezan la mayoría de los pacientes.',
    storiesTitle: 'La recuperación, en sus palabras',
    ctaTitle: '¿Listo para moverse mejor?',
    ctaBody: 'Cuéntenos qué pasó. Le devolvemos la llamada dentro de un día hábil para agendarlo.',
  },

  process: {
    steps: [
      { title: 'Agende en minutos', body: 'Llame o envíe el formulario. En Utah no se necesita referido para empezar.' },
      { title: 'Evaluación completa', body: 'Un Doctor en Terapia Física evalúa su movimiento, fuerza y la causa de fondo.' },
      { title: 'Tratamiento manual', body: 'Terapia manual más un plan de ejercicio progresivo, ajustado en cada visita.' },
      { title: 'De vuelta a su vida', body: 'Medimos el progreso y lo regresamos al trabajo, al deporte y a lo que ama.' },
    ],
  },

  servicePT: {
    eyebrow: 'Terapia física',
    title: 'Terapia física y rehabilitación deportiva en Salt Lake City',
    lead: 'Atención individual y manual para el dolor, la recuperación post-quirúrgica y las lesiones deportivas. Hecha para que vuelva a moverse, no solo a sobrellevar los síntomas.',
    introTitle: 'Atención que reconstruye capacidad, no solo calma el dolor',
    introBody:
      'Cada plan empieza con una evaluación completa de un Doctor en Terapia Física, y luego combina terapia manual con fortalecimiento progresivo para que la mejora se mantenga. Ve al mismo terapeuta en cada visita.',
    benefitsTitle: 'Qué puede esperar',
    benefits: [
      { title: 'Evaluación de causa raíz', body: 'Encontramos por qué duele, no solo dónde, para que el plan ataque el verdadero origen.' },
      { title: 'Manual y movimiento', body: 'Técnicas manuales junto con ejercicio que de verdad puede continuar en casa.' },
      { title: 'Progreso medible', body: 'Rango, fuerza y función medidos visita a visita, con metas claras.' },
      { title: 'Acceso directo', body: 'Empiece sin referido en Utah. Le ayudamos a confirmar qué cubre su plan.' },
    ],
    treatTitle: 'Motivos comunes por los que vienen los pacientes',
    faqTitle: 'Preguntas sobre terapia física',
    faq: [
      { question: '¿Necesito un referido para empezar terapia física en Utah?', answer: 'No. Utah permite el acceso directo, así que puede comenzar terapia física sin referido médico. Algunos planes de seguro aún pueden exigir un referido para cubrir el tratamiento, así que conviene revisar su plan específico.' },
      { question: '¿Cuánto dura cada visita?', answer: 'La mayoría de las visitas son de 45 a 60 minutos de atención individual con su Doctor en Terapia Física. Su primera visita incluye una evaluación completa.' },
      { question: '¿La terapia física me ayudará a evitar la cirugía?', answer: 'Para muchos problemas de espalda, rodilla y hombro, la terapia física es una primera opción eficaz. Le daremos una evaluación honesta y coordinaremos con su médico cuando la cirugía sea el mejor camino.' },
      { question: '¿Qué debo ponerme?', answer: 'Ropa cómoda con la que pueda moverse. Para la rodilla, traiga shorts; para el hombro, una camiseta sin mangas o suelta ayuda.' },
    ],
    ctaTitle: 'Empiece su recuperación esta semana',
  },

  serviceAccident: {
    eyebrow: 'Después de un accidente',
    title: 'Terapia física después de un accidente de auto en Salt Lake City',
    lead: 'Latigazo cervical, dolor de espalda y cuello, y lesiones del choque, tratados por Doctores en Terapia Física que manejan la parte del seguro con usted.',
    introTitle: '¿Se lastimó en un choque? Empiece la atención, nosotros nos encargamos del resto',
    introBody:
      'Después de un accidente, la prioridad es evaluarse y comenzar la atención correcta a tiempo. Documentamos todo con cuidado y coordinamos con su seguro de auto y, si tiene, con su abogado.',
    logisticsTitle: 'Cómo suele funcionar el pago en Utah',
    logistics: [
      { title: 'Utah es un estado no-fault', body: 'Su propia póliza de auto incluye Protección contra Lesiones Personales (PIP), con un mínimo estatal de $3,000 en cobertura médica.' },
      { title: 'El PIP paga sin importar la culpa', body: 'El PIP por lo general cubre la atención médica del accidente sin importar quién lo causó. La cobertura varía, así que confirme su póliza.' },
      { title: 'Coordinamos el papeleo', body: 'Documentamos su atención para su seguro y abogado y facturamos a quien corresponde, para que usted se concentre en recuperarse.' },
      { title: 'Trabajamos con su abogado', body: 'Colaboramos con su abogado y otros proveedores y mantenemos sus registros organizados.' },
    ],
    stepsTitle: 'Qué hacer después de un choque',
    steps: [
      { title: 'Evalúese pronto', body: 'Algunas lesiones como el latigazo cervical aparecen días después. Una evaluación temprana protege su salud y su reclamo.' },
      { title: 'Inicie atención documentada', body: 'Un tratamiento constante y documentado respalda su recuperación y su reclamo de PIP.' },
      { title: 'Manejamos el seguro', body: 'Coordinamos la facturación con su aseguradora de PIP y su abogado para que usted no persiga el papeleo.' },
      { title: 'Recupérese y regrese', body: 'Reconstruimos fuerza y movilidad y lo guiamos de vuelta a su vida normal.' },
    ],
    whiplashTitle: 'Latigazo cervical y lesiones del choque que tratamos',
    faqTitle: 'Preguntas tras un accidente',
    faq: [
      { question: '¿Quién paga mi rehabilitación después de un accidente de auto en Utah?', answer: 'Utah es un estado no-fault, así que la Protección contra Lesiones Personales (PIP) de su propio seguro de auto normalmente paga la atención médica del accidente sin importar quién tuvo la culpa. El mínimo estatal es de $3,000 de cobertura médica; su póliza puede incluir más. Le ayudamos a entender sus beneficios.' },
      { question: '¿Qué tan pronto debo venir después de un choque?', answer: 'Lo antes posible. Lesiones como el latigazo cervical suelen aparecer unos días después, y empezar atención documentada a tiempo ayuda a su recuperación y a su reclamo.' },
      { question: '¿Necesito un abogado para recibir tratamiento?', answer: 'No. Puede empezar la atención de inmediato. Si tiene abogado, coordinamos la documentación y la facturación con él.' },
      { question: '¿Y si mi accidente fue hace meses?', answer: 'Aún vale la pena una evaluación. El dolor persistente de cuello, espalda y los dolores de cabeza tras un choque son comunes y muchas veces tratables.' },
    ],
    ctaTitle: 'Empiece su recuperación tras el accidente',
    disclaimer:
      'Esta es información general sobre el seguro de auto de Utah y no es consejo legal ni médico. La cobertura depende de su póliza. Confirme sus beneficios con su aseguradora.',
  },

  conditionsHub: {
    eyebrow: 'Condiciones',
    title: 'Condiciones que tratamos',
    lead: 'Sea lo que sea que lo trajo aquí, la recuperación empieza por encontrar la verdadera causa. Estos son los problemas que más vemos, en lesiones cotidianas y tras accidentes.',
    rehabGroup: 'Rehabilitación y deporte',
    accidentGroup: 'Después de un accidente',
  },

  conditions: {
    back: {
      name: 'Dolor de espalda',
      lead: 'Desde un tirón repentino hasta un dolor crónico molesto, la mayoría de los problemas de espalda responden bien a la terapia física dirigida, muchas veces sin imágenes ni cirugía.',
      symptomsTitle: 'Señales comunes',
      symptoms: ['Rigidez o dolor en la espalda baja', 'Dolor que se irradia a la cadera o la pierna', 'Dificultad para agacharse, levantar o estar sentado mucho tiempo', 'Dolor que aumenta tras la actividad o en la mañana'],
      approachTitle: 'Cómo lo tratamos',
      approach: ['Encontrar los déficits de movimiento y fuerza que causan el dolor', 'Terapia manual para calmar los síntomas y recuperar el movimiento', 'Fortalecimiento progresivo del core y la cadera', 'Asesoría sobre cómo levantar, la postura y los hábitos diarios'],
    },
    neck: {
      name: 'Dolor de cuello',
      lead: 'Por estar frente al escritorio, mala postura al dormir o una lesión vieja, el dolor de cuello y los dolores de cabeza que lo acompañan suelen mejorar con atención manual y los ejercicios correctos.',
      symptomsTitle: 'Señales comunes',
      symptoms: ['Rigidez al girar la cabeza', 'Dolores de cabeza tensionales desde la base del cráneo', 'Dolor u hormigueo hacia el hombro o el brazo', 'Molestia tras tiempo de pantalla o manejar'],
      approachTitle: 'Cómo lo tratamos',
      approach: ['Evaluar la movilidad del cuello, la postura y la mecánica del hombro', 'Terapia manual para articulaciones rígidas y músculos tensos', 'Fortalecimiento profundo del cuello y la postura', 'Guía ergonómica y de su estación de trabajo'],
    },
    shoulder: {
      name: 'Dolor de hombro',
      lead: 'Lesiones del manguito rotador, pinzamiento, hombro congelado y hombros post-quirúrgicos se benefician de un plan preciso y progresivo para recuperar fuerza y alcance.',
      symptomsTitle: 'Señales comunes',
      symptoms: ['Dolor al alcanzar arriba o detrás de la espalda', 'Debilidad al levantar o cargar', 'Dolor nocturno al acostarse sobre el hombro', 'Chasquidos, atorones o rigidez'],
      approachTitle: 'Cómo lo tratamos',
      approach: ['Identificar las estructuras y los movimientos involucrados', 'Recuperar la movilidad con terapia manual', 'Reconstruir el control del manguito rotador y la escápula', 'Progresión de regreso a la actividad y al levantamiento'],
    },
    knee: {
      name: 'Dolor de rodilla',
      lead: 'Ya sea una lesión deportiva, artritis o una rodilla post-quirúrgica, reconstruimos la fuerza y la confianza para que pueda caminar, subir escaleras y correr sin cuidarla.',
      symptomsTitle: 'Señales comunes',
      symptoms: ['Dolor al subir escaleras, ponerse en cuclillas o arrodillarse', 'Hinchazón tras la actividad', 'Sensación de que la rodilla se afloja o falla', 'Rigidez tras estar sentado'],
      approachTitle: 'Cómo lo tratamos',
      approach: ['Evaluar la rodilla, la cadera y el tobillo como un sistema', 'Reducir la hinchazón y recuperar el movimiento', 'Trabajo progresivo de cuádriceps, cadera y equilibrio', 'Plan de regreso al deporte o al trabajo'],
    },
    postsurgical: {
      name: 'Rehabilitación post-quirúrgica',
      lead: 'Después de una cirugía, la rehabilitación correcta protege la reparación y lo lleva a recuperar la función más rápido. Seguimos el protocolo de su cirujano y lo avanzamos con seguridad.',
      symptomsTitle: 'En qué ayudamos',
      symptoms: ['Después de cirugía de LCA, menisco u otra de rodilla', 'Después de cirugía del manguito rotador o del hombro', 'Después de cirugía de espalda o cuello', 'Después de un reemplazo de articulación'],
      approachTitle: 'Cómo lo tratamos',
      approach: ['Seguir el protocolo de su cirujano paso a paso', 'Proteger la reparación mientras se recupera el movimiento temprano', 'Fortalecimiento progresivo hacia la función completa', 'Metas claras de regreso al trabajo y al deporte'],
    },
    sports: {
      name: 'Lesiones deportivas',
      lead: 'Esguinces, distensiones, tendinitis y lesiones por sobreuso, tratados para que regrese a su deporte más fuerte y con menos riesgo de volver a lesionarse.',
      symptomsTitle: 'Lesiones comunes',
      symptoms: ['Esguinces de tobillo e inestabilidad crónica', 'Distensiones de isquiotibiales, ingle y pantorrilla', 'Tendinitis (aquíleo, rotuliano, codo)', 'Lesiones por sobreuso y de corredores'],
      approachTitle: 'Cómo lo tratamos',
      approach: ['Diagnosticar la lesión y el movimiento detrás de ella', 'Recuperar la movilidad y la tolerancia a la carga', 'Trabajo de fuerza y potencia específico del deporte', 'Pruebas de regreso al juego y prevención de recaídas'],
    },
    whiplash: {
      name: 'Latigazo cervical',
      lead: 'El latigazo cervical de un accidente de auto puede causar dolor de cuello, dolores de cabeza y rigidez que duran semanas. Un tratamiento temprano y dirigido ayuda a recuperarse y respalda su reclamo.',
      symptomsTitle: 'Señales comunes',
      symptoms: ['Dolor y rigidez de cuello tras un choque', 'Dolores de cabeza desde la base del cráneo', 'Menos rango al girar la cabeza', 'Mareo, fatiga o dolor de hombro'],
      approachTitle: 'Cómo lo tratamos',
      approach: ['Evaluación y documentación minuciosas para su reclamo', 'Terapia manual suave para recuperar el movimiento', 'Fortalecimiento progresivo a medida que ceden los síntomas', 'Coordinación con su seguro y su abogado'],
    },
  },

  team: {
    eyebrow: 'Nuestro equipo',
    title: 'Conozca a sus fisioterapeutas',
    lead: 'La atención aquí está dirigida por Doctores en Terapia Física (DPT) licenciados. Ve al mismo terapeuta en cada visita, en inglés o español.',
    credentialsTitle: 'Credenciales que importan',
    credentialsBody:
      'Cada clínico es un fisioterapeuta licenciado. Fíjese en las siglas: DPT (Doctor en Terapia Física), OCS (Especialista Certificado en Ortopedia) y SCS (Especialista Certificado en Deportes).',
    members: {
      lead: { role: 'Doctor en Terapia Física, Director de la Clínica', bio: 'Dirige la clínica con enfoque en rehabilitación ortopédica y tras accidentes. [Bio de ejemplo: reemplazar con la trayectoria, escuela y enfoque reales del terapeuta.]' },
      ortho: { role: 'Doctor en Terapia Física, Especialista en Ortopedia', bio: 'Se enfoca en columna, post-quirúrgico y recuperación ortopédica compleja. [Bio de ejemplo: reemplazar con credenciales y experiencia reales.]' },
      sports: { role: 'Doctor en Terapia Física, Especialista en Deportes', bio: 'Trabaja con atletas en recuperación de lesiones y rendimiento de regreso al juego. [Bio de ejemplo: reemplazar con la trayectoria real.]' },
    },
    note: 'Los nombres y credenciales de arriba son de ejemplo. Reemplácelos con el equipo licenciado real de la clínica antes del lanzamiento.',
  },

  firstVisit: {
    eyebrow: 'Su primera visita',
    title: 'Qué esperar en su primera visita',
    lead: 'Su primera cita se trata de entender su problema y salir con un plan. Así es exactamente como funciona.',
    bringTitle: 'Qué traer',
    bring: ['Identificación con foto y su tarjeta del seguro', 'Para un accidente: su número de reclamo y aseguradora (y abogado, si tiene)', 'Ropa cómoda con la que pueda moverse', 'Una lista de sus medicamentos y cualquier reporte de imágenes o cirugía'],
    expectTitle: 'Durante la visita',
    directAccessTitle: '¿Necesito un referido?',
    directAccessBody:
      'No. Utah permite el acceso directo, así que puede empezar terapia física sin referido médico. Algunos planes de seguro aún piden un referido para cubrir la atención, así que le ayudamos a revisar su plan específico antes de que tenga algún costo inesperado.',
    faqTitle: 'Preguntas de la primera visita',
    faq: [
      { question: '¿Cuánto dura la primera visita?', answer: 'Calcule alrededor de una hora. Incluye una evaluación completa, el inicio del tratamiento y un plan claro.' },
      { question: '¿Recibiré tratamiento el primer día?', answer: 'Por lo general sí. La mayoría de los pacientes empieza el tratamiento manual y sale con ejercicios en la primera visita.' },
      { question: '¿Cuántas visitas voy a necesitar?', answer: 'Depende de su condición y sus metas. Después de la evaluación le daremos un estimado honesto.' },
    ],
  },

  stories: {
    eyebrow: 'Historias de pacientes',
    title: 'La recuperación, en sus palabras',
    lead: 'Resultados reales de pacientes en Salt Lake City, en lesiones cotidianas y atención tras accidentes.',
    disclaimer: 'Los testimonios reflejan experiencias individuales; los resultados varían según la persona y la condición. Se muestran historias de ejemplo hasta agregar reseñas reales y con consentimiento de pacientes.',
    items: [
      { quote: 'Llegué apenas pudiendo girar el cuello después de un choque por atrás. Doce semanas después volví a escalar. Además hicieron fácil la parte del seguro.', name: 'Paciente, West Valley City', context: 'Latigazo cervical tras un accidente de auto' },
      { quote: 'Después de mi cirugía de LCA tenía miedo de exigirme de más. Siguieron el plan de mi cirujano al pie de la letra y me regresaron a los senderos.', name: 'Paciente, Sandy', context: 'Rehabilitación post-quirúrgica de rodilla' },
      { quote: 'Años de dolor de espalda y pensé que lo siguiente era cirugía. Unos meses de terapia real e individual y vuelvo a cargar a mis hijos.', name: 'Paciente, Murray', context: 'Dolor crónico de espalda baja' },
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Agende su visita',
    lead: 'Llámenos o envíe el formulario y le contactamos dentro de un día hábil. Bienvenidos los pacientes nuevos, sin referido para empezar.',
    formTitle: 'Solicitar una cita',
    hoursTitle: 'Horario',
    locationTitle: 'Encuéntrenos',
    insuranceTitle: 'Seguros que aceptamos',
    insuranceNote: 'Aceptamos la mayoría de los planes principales y reclamos de accidentes de auto de Utah (PIP). ¿No ve el suyo? Llámenos, lo revisamos.',
    directionsLabel: 'Cómo llegar',
  },

  lead: {
    name: 'Nombre completo',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    service: '¿En qué necesita ayuda?',
    serviceOptions: { rehab: 'Terapia física / rehabilitación', accident: 'Después de un accidente de auto', other: 'Otra cosa' },
    preferredLang: 'Idioma preferido',
    langOptions: { en: 'Inglés', es: 'Español' },
    message: '¿Algo que debamos saber? (opcional)',
    submit: 'Solicitar cita',
    submitting: 'Enviando...',
    successTitle: 'Solicitud recibida',
    successBody: 'Gracias. Le devolveremos la llamada dentro de un día hábil. Si es urgente, llámenos al (801) 555-0123.',
    errorTitle: 'Algo salió mal',
    errorBody: 'No pudimos enviar su solicitud. Por favor llámenos al (801) 555-0123 y lo agendamos.',
    errors: {
      name: 'Por favor ingrese su nombre.',
      phone: 'Por favor ingrese un número de teléfono válido.',
      email: 'Por favor ingrese un correo válido.',
      service: 'Por favor elija una opción.',
    },
    privacyNote: 'Al enviar, acepta que lo contactemos sobre su solicitud. Por favor no incluya detalles médicos sensibles.',
  },

  footer: {
    rights: 'Todos los derechos reservados.',
    nap: 'Atendemos al condado de Salt Lake: Salt Lake City, West Valley City, Sandy, Murray, West Jordan y Taylorsville.',
    servicesTitle: 'Servicios',
    clinicTitle: 'Clínica',
    legalTitle: 'Legal',
    privacy: 'Política de privacidad',
    terms: 'Términos de uso',
    disclaimer: 'La información de este sitio es general y no es consejo médico ni legal. La cobertura del seguro depende de su plan y póliza individual.',
  },

  notFound: {
    title: 'No encontramos esa página',
    body: 'Es posible que la página se haya movido. Le ayudamos a regresar.',
    back: 'Volver al inicio',
  },

  legal: {
    updated: 'Última actualización',
    privacyIntro: 'Esta política de privacidad de ejemplo explica, en términos generales, cómo PI Physical Therapy maneja la información enviada a través de este sitio web. Reemplácela con una política revisada por un abogado antes del lanzamiento.',
    privacyBody: [
      { h: 'Información que recopilamos', p: 'Los datos de contacto que envía por nuestro formulario de citas (nombre, teléfono, correo y cualquier mensaje). A propósito no recopilamos historial médico detallado por este sitio.' },
      { h: 'Cómo la usamos', p: 'Solo para responder a su solicitud y agendar la atención. No vendemos su información.' },
      { h: 'Sus opciones', p: 'Contáctenos para acceder, corregir o eliminar la información que envió.' },
    ],
    termsIntro: 'Este aviso de términos de uso de ejemplo rige el uso de este sitio web. Reemplácelo con términos revisados por un abogado antes del lanzamiento.',
    termsBody: [
      { h: 'No es consejo médico', p: 'El contenido de este sitio es información general y no sustituye el consejo, diagnóstico o tratamiento médico profesional.' },
      { h: 'No es consejo de seguros ni legal', p: 'Las afirmaciones sobre el acceso directo y el seguro de auto (PIP) de Utah son generales. La cobertura depende de su plan y póliza; confirme con su aseguradora.' },
      { h: 'Uso del sitio', p: 'Use el sitio de forma legal. Podemos actualizar el contenido en cualquier momento.' },
    ],
  },
};
