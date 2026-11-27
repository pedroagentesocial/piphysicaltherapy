/**
 * Verified Unsplash stock (HTTP 200 confirmed, canonical delivery params).
 * ⚠️ PLACEHOLDER imagery: replace with real clinic/team photos before launch
 * (better trust + local SEO). When you swap a photo, update its alt text too.
 *
 * Each entry is a bare Unsplash photo id; <Img> builds the responsive srcset.
 * Alt text is bilingual and intentionally theme-level (true for the photo's
 * category) so a placeholder swap never leaves a misleading description.
 */
export interface SiteImage {
  id: string;
  alt: { en: string; es: string };
}

export const images = {
  heroHome: {
    id: '1540205895360-4ad4cffb3aa8',
    alt: {
      en: 'A person working through a guided strengthening movement during recovery.',
      es: 'Una persona realizando un movimiento de fortalecimiento guiado durante su recuperación.',
    },
  },
  rehab: {
    id: '1649751361457-01d3a696c7e6',
    alt: {
      en: 'A physical therapist guiding an athlete through sports rehabilitation.',
      es: 'Un fisioterapeuta guiando a un atleta en su rehabilitación deportiva.',
    },
  },
  accident: {
    id: '1764314484083-cbd0de7e512c',
    alt: {
      en: 'A clinician assessing a patient recovering from an injury.',
      es: 'Un clínico evaluando a un paciente que se recupera de una lesión.',
    },
  },
  clinic: {
    id: '1630226040750-d934f017f0e4',
    alt: {
      en: 'A bright, modern physical therapy clinic treatment space.',
      es: 'Un espacio de tratamiento de terapia física luminoso y moderno.',
    },
  },
  team: {
    id: '1758654860100-32cd2e83e74a',
    alt: {
      en: 'A physical therapist working hands-on with a patient.',
      es: 'Un fisioterapeuta trabajando de forma directa con un paciente.',
    },
  },
  process: {
    id: '1770012905139-713758ded6ec',
    alt: {
      en: 'A therapist and patient reviewing a recovery plan together.',
      es: 'Un terapeuta y un paciente revisando juntos un plan de recuperación.',
    },
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

/**
 * Blog-only photos: one per article (EN and ES share it), so no two articles
 * show the same picture. Pexels License stock, optimized and hosted locally in
 * public/images/blog/: `{name}.jpg` is 1600px wide and `{name}-800.jpg` is
 * the 800px rendition for cards. Alt text describes the actual photo.
 */
export interface LocalImage {
  src: string;
  alt: { en: string; es: string };
}

export const blogImages = {
  kneeReplacementRehab: {
    src: '/images/blog/knee-replacement-rehab.jpg',
    alt: {
      en: 'A physical therapist working on a patient\'s knee.',
      es: 'Un fisioterapeuta trabajando en la rodilla de un paciente.',
    },
  },
  shoulderDislocation: {
    src: '/images/blog/shoulder-dislocation.jpg',
    alt: {
      en: 'A physical therapist assessing a patient\'s shoulder.',
      es: 'Un fisioterapeuta evaluando el hombro de un paciente.',
    },
  },
  whiplashUtah: {
    src: '/images/blog/whiplash-utah.jpg',
    alt: {
      en: 'A person holding the side of a sore neck.',
      es: 'Una persona sujetándose el costado del cuello adolorido.',
    },
  },
  wristFracture: {
    src: '/images/blog/wrist-fracture.jpg',
    alt: {
      en: 'A person adjusting a supportive wrist brace.',
      es: 'Una persona ajustándose una férula de soporte para la muñeca.',
    },
  },
  achillesTendinopathy: {
    src: '/images/blog/achilles-tendinopathy.jpg',
    alt: {
      en: 'A runner holding the back of a sore lower leg.',
      es: 'Un corredor sujetándose la parte posterior de la pierna adolorida.',
    },
  },
  deQuervain: {
    src: '/images/blog/de-quervain.jpg',
    alt: {
      en: 'A person holding a painful wrist near the base of the thumb.',
      es: 'Una persona sujetándose la muñeca adolorida cerca de la base del pulgar.',
    },
  },
  diastasisRecti: {
    src: '/images/blog/diastasis-recti.jpg',
    alt: {
      en: 'A mother stretching on an exercise mat at home with her child.',
      es: 'Una madre estirando sobre una colchoneta en casa con su hija.',
    },
  },
  frozenShoulder: {
    src: '/images/blog/frozen-shoulder.jpg',
    alt: {
      en: 'An older man holding a painful shoulder.',
      es: 'Un hombre mayor sujetándose el hombro adolorido.',
    },
  },
  lumbarSpinalStenosis: {
    src: '/images/blog/lumbar-spinal-stenosis.jpg',
    alt: {
      en: 'An older man walking along a city street.',
      es: 'Un hombre mayor caminando por una calle de la ciudad.',
    },
  },
  mortonsNeuroma: {
    src: '/images/blog/mortons-neuroma.jpg',
    alt: {
      en: 'A person massaging the ball of a sore foot.',
      es: 'Una persona masajeándose la planta del pie adolorida.',
    },
  },
  neckHeadache: {
    src: '/images/blog/neck-headache.jpg',
    alt: {
      en: 'A woman holding her head during a headache.',
      es: 'Una mujer sujetándose la cabeza durante un dolor de cabeza.',
    },
  },
  osteoporosisExercise: {
    src: '/images/blog/osteoporosis-exercise.jpg',
    alt: {
      en: 'An older woman exercising with light dumbbells.',
      es: 'Una mujer mayor haciendo ejercicio con mancuernas ligeras.',
    },
  },
  plantarFasciitis: {
    src: '/images/blog/plantar-fasciitis.jpg',
    alt: {
      en: 'A person rubbing the sole of a sore foot.',
      es: 'Una persona frotándose la planta del pie adolorida.',
    },
  },
  shoulderRotatorCuff: {
    src: '/images/blog/shoulder-rotator-cuff.jpg',
    alt: {
      en: 'An older woman doing a shoulder exercise with a resistance band.',
      es: 'Una mujer mayor haciendo un ejercicio de hombro con una banda elástica.',
    },
  },
  tmdJawPain: {
    src: '/images/blog/tmd-jaw-pain.jpg',
    alt: {
      en: 'A woman holding a cold pack against her jaw.',
      es: 'Una mujer sosteniendo una compresa fría contra la mandíbula.',
    },
  },
  vestibularNeuritis: {
    src: '/images/blog/vestibular-neuritis.jpg',
    alt: {
      en: 'A woman holding her forehead as she feels dizzy.',
      es: 'Una mujer sujetándose la frente mientras se siente mareada.',
    },
  },
  ankleFracture: {
    src: '/images/blog/ankle-fracture.jpg',
    alt: {
      en: 'A woman in a leg cast resting on a couch with crutches.',
      es: 'Una mujer con la pierna enyesada descansando en un sofá con muletas.',
    },
  },
  fallPrevention: {
    src: '/images/blog/fall-prevention.jpg',
    alt: {
      en: 'Older adults doing a balance exercise together.',
      es: 'Adultos mayores haciendo juntos un ejercicio de equilibrio.',
    },
  },
  kneeOsteoarthritis: {
    src: '/images/blog/knee-osteoarthritis.jpg',
    alt: {
      en: 'A man holding a stiff, painful knee.',
      es: 'Un hombre sujetándose la rodilla rígida y adolorida.',
    },
  },
  patellarDislocation: {
    src: '/images/blog/patellar-dislocation.jpg',
    alt: {
      en: 'A soccer player on the ground holding an injured knee.',
      es: 'Un jugador de fútbol en el suelo sujetándose la rodilla lesionada.',
    },
  },
  aclReturnToSport: {
    src: '/images/blog/acl-return-to-sport.jpg',
    alt: {
      en: 'An athlete in a knee brace doing an agility drill with cones.',
      es: 'Un atleta con rodillera haciendo un ejercicio de agilidad con conos.',
    },
  },
  adolescentScoliosis: {
    src: '/images/blog/adolescent-scoliosis.jpg',
    alt: {
      en: 'A clinician examining a patient\'s spine.',
      es: 'Un clínico examinando la columna de una paciente.',
    },
  },
  ankylosingSpondylitis: {
    src: '/images/blog/ankylosing-spondylitis.jpg',
    alt: {
      en: 'A man stretching his upper back and shoulders outdoors.',
      es: 'Un hombre estirando la espalda alta y los hombros al aire libre.',
    },
  },
  hipOsteoarthritis: {
    src: '/images/blog/hip-osteoarthritis.jpg',
    alt: {
      en: 'A person holding a sore hip.',
      es: 'Una persona sujetándose la cadera adolorida.',
    },
  },
  posteriorTibialTendon: {
    src: '/images/blog/posterior-tibial-tendon.jpg',
    alt: {
      en: 'A clinician treating a patient\'s foot and inner ankle.',
      es: 'Un clínico tratando el pie y la cara interna del tobillo de un paciente.',
    },
  },
  sciatica: {
    src: '/images/blog/sciatica.jpg',
    alt: {
      en: 'A person holding a painful lower back.',
      es: 'Una persona sujetándose la zona lumbar adolorida.',
    },
  },
  shinSplints: {
    src: '/images/blog/shin-splints.jpg',
    alt: {
      en: 'A runner\'s lower legs on an open road.',
      es: 'Las piernas de un corredor en una carretera abierta.',
    },
  },
  thumbArthritis: {
    src: '/images/blog/thumb-arthritis.jpg',
    alt: {
      en: 'An older person\'s hand squeezing a therapy ball.',
      es: 'La mano de una persona mayor apretando una pelota de terapia.',
    },
  },
  achillesRupture: {
    src: '/images/blog/achilles-rupture.jpg',
    alt: {
      en: 'A walking boot and crutches resting on a couch.',
      es: 'Una bota ortopédica y unas muletas sobre un sofá.',
    },
  },
  ankleSprain: {
    src: '/images/blog/ankle-sprain.jpg',
    alt: {
      en: 'A person holding a twisted ankle on the grass.',
      es: 'Una persona sujetándose el tobillo torcido sobre el césped.',
    },
  },
  clavicleFracture: {
    src: '/images/blog/clavicle-fracture.jpg',
    alt: {
      en: 'A man wearing an arm sling.',
      es: 'Un hombre con el brazo en cabestrillo.',
    },
  },
  cubitalTunnel: {
    src: '/images/blog/cubital-tunnel.jpg',
    alt: {
      en: 'A woman holding the inside of her elbow.',
      es: 'Una mujer sujetándose la parte interna del codo.',
    },
  },
  groinPainAthletes: {
    src: '/images/blog/groin-pain-athletes.jpg',
    alt: {
      en: 'A soccer player stretching on the field before training.',
      es: 'Un jugador de fútbol estirando en la cancha antes de entrenar.',
    },
  },
  hipImpingementFai: {
    src: '/images/blog/hip-impingement-fai.jpg',
    alt: {
      en: 'A physical therapist stretching a patient\'s hip on a treatment table.',
      es: 'Un fisioterapeuta estirando la cadera de un paciente en la camilla.',
    },
  },
  hipReplacementRehab: {
    src: '/images/blog/hip-replacement-rehab.jpg',
    alt: {
      en: 'An older woman walking down a hallway with a rolling walker.',
      es: 'Una mujer mayor caminando por un pasillo con un andador con ruedas.',
    },
  },
  itBandSyndrome: {
    src: '/images/blog/it-band-syndrome.jpg',
    alt: {
      en: 'A person rolling the outside of the leg on a foam roller.',
      es: 'Una persona usando un rodillo de espuma en la parte externa de la pierna.',
    },
  },
  jumpersKnee: {
    src: '/images/blog/jumpers-knee.jpg',
    alt: {
      en: 'A volleyball player jumping on the sand.',
      es: 'Un jugador de voleibol saltando en la arena.',
    },
  },
  osgoodSchlatter: {
    src: '/images/blog/osgood-schlatter.jpg',
    alt: {
      en: 'A young soccer player resting on the grass with a ball.',
      es: 'Un joven futbolista descansando en el césped con un balón.',
    },
  },
  rotatorCuffRepairRehab: {
    src: '/images/blog/rotator-cuff-repair-rehab.jpg',
    alt: {
      en: 'A therapist guiding a resistance band exercise for the shoulder.',
      es: 'Un terapeuta guiando un ejercicio de hombro con banda elástica.',
    },
  },
  runnersKnee: {
    src: '/images/blog/runners-knee.jpg',
    alt: {
      en: 'A runner holding a sore knee.',
      es: 'Una corredora sujetándose la rodilla adolorida.',
    },
  },
  tennisElbow: {
    src: '/images/blog/tennis-elbow.jpg',
    alt: {
      en: 'A therapist applying kinesiology tape to a forearm.',
      es: 'Un terapeuta colocando cinta kinesiológica en un antebrazo.',
    },
  },
  bppv: {
    src: '/images/blog/bppv.jpg',
    alt: {
      en: 'A clinician with a patient lying on a treatment table.',
      es: 'Una clínica junto a una paciente recostada en la camilla.',
    },
  },
  breastCancerLymphedema: {
    src: '/images/blog/breast-cancer-lymphedema.jpg',
    alt: {
      en: 'A therapist performing gentle manual therapy on an arm.',
      es: 'Un terapeuta aplicando terapia manual suave en un brazo.',
    },
  },
  carpalTunnel: {
    src: '/images/blog/carpal-tunnel.jpg',
    alt: {
      en: 'A person holding a painful wrist.',
      es: 'Una persona sujetándose la muñeca adolorida.',
    },
  },
  cervicalRadiculopathy: {
    src: '/images/blog/cervical-radiculopathy.jpg',
    alt: {
      en: 'A physical therapist treating a patient\'s neck.',
      es: 'Una fisioterapeuta tratando el cuello de un paciente.',
    },
  },
  concussion: {
    src: '/images/blog/concussion.jpg',
    alt: {
      en: 'A soccer player controlling the ball with his head and chest.',
      es: 'Un futbolista controlando el balón con la cabeza y el pecho.',
    },
  },
  hipFracture: {
    src: '/images/blog/hip-fracture.jpg',
    alt: {
      en: 'An older woman walking with a rolling walker in a park.',
      es: 'Una mujer mayor caminando con un andador con ruedas en un parque.',
    },
  },
  lowBackPainEarlyPt: {
    src: '/images/blog/low-back-pain-early-pt.jpg',
    alt: {
      en: 'A physical therapist showing a patient a back exercise.',
      es: 'Un fisioterapeuta enseñando a un paciente un ejercicio para la espalda.',
    },
  },
  neckPainDesk: {
    src: '/images/blog/neck-pain-desk.jpg',
    alt: {
      en: 'A woman rubbing the back of her stiff neck.',
      es: 'Una mujer frotándose la nuca rígida.',
    },
  },
  parkinsonsDisease: {
    src: '/images/blog/parkinsons-disease.jpg',
    alt: {
      en: 'A therapist helping an older man with an arm exercise.',
      es: 'Un terapeuta ayudando a un hombre mayor con un ejercicio de brazos.',
    },
  },
} as const satisfies Record<string, LocalImage>;

/** Any key a blog post may use: a site image or a blog-only photo. */
export type PostImageKey = ImageKey | keyof typeof blogImages;

export function isBlogImage(name: PostImageKey): name is keyof typeof blogImages {
  return name in blogImages;
}

/**
 * URL of one rendition, for places that need a single URL (JSON-LD, og:image).
 * Site images return an absolute Unsplash URL; blog photos return a root-relative
 * path, so resolve it against the site URL.
 */
export function imageUrl(name: PostImageKey, width = 1280): string {
  if (isBlogImage(name)) return blogImages[name].src;
  return `https://images.unsplash.com/photo-${images[name].id}?auto=format&fit=crop&q=80&w=${width}`;
}
