export type Locale = 'en' | 'ru';

type SiteContent = {
  locale: Locale;
  name: string;
  nickname: string;
  images: {
    hero: { src: string; alt: string; position: string };
    portrait: { src: string; alt: string; position: string };
    apartment: { src: string; alt: string; position: string };
  };
  meta: { title: string; description: string };
  nav: string[];
  hero: { eyebrow: string; name: string; tagline: string; since: string; badges: string[]; about: string; landlords: string; scroll: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; facts: [string, string][] };
  apartment: { eyebrow: string; title: string; intro: string; cards: { icon: string; title: string; text: string }[] };
  setup: { eyebrow: string; title: string; intro: string; items: string[] };
  health: { eyebrow: string; title: string; intro: string; statuses: string[]; note: string };
  travels: { eyebrow: string; title: string; intro: string; trips: { city: string; date: string; type: string; note: string; image: string }[] };
  gallery: { eyebrow: string; title: string; images: { src: string; alt: string; caption: string; width: number; height: number; position?: string }[] };
  landlords: { eyebrow: string; title: string; paragraphs: string[]; checklist: string[]; cta: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  contact: { eyebrow: string; title: string; text: string; telegram: string; email: string };
  footer: string;
};

export const content: Record<Locale, SiteContent> = {
  en: {
    locale: 'en',
    name: 'Perseus',
    nickname: 'Persik',
    images: {"hero": {"src": "/images/cat/perseus-suitcase.webp", "alt": "Perseus sitting on a suitcase", "position": "50% 42%"}, "portrait": {"src": "/images/cat/perseus-portrait.webp", "alt": "Portrait of Perseus resting on a chair", "position": "50% 35%"}, "apartment": {"src": "/images/cat/perseus-window-nap.webp", "alt": "Perseus sleeping on a cushion by the window", "position": "50% 55%"}},
    meta: { title: 'Perseus — Traveling Cat Profile', description: 'Meet Perseus, an indoor and travel-experienced cat. A pet profile for hosts, landlords and fellow travelers.' },
    nav: ['Perseus', 'Home life', 'Health', 'Travels', 'For landlords'],
    hero: { eyebrow: 'Felis catus · Travel companion', name: 'Perseus', tagline: 'Persik to his friends. Always part of the journey.', since: 'Our ginger companion, at home and on the road. His carrier, blanket and familiar things come along for every stay.', badges: ['Indoor cat', 'Vaccinated', 'Litter-trained', 'Travel experienced'], about: 'View profile', landlords: 'For landlords', scroll: 'Field notes' },
    about: { eyebrow: '01 / Profile', title: 'Calm company, wherever home is', paragraphs: ['Perseus, or Persik, is our cat and travel companion. His photos tell the story: naps by the window, a favourite blanket and time together on the road.', 'Outdoors, he explores in a harness and on a lead. His own carrier, portable litter box and scratching post are part of his travel kit.'], facts: [['Species', 'Felis catus'], ['Lifestyle', 'Indoor'], ['Coat', 'Ginger tabby'], ['Nickname', 'Persik'], ['Temperament', 'Calm / Curious']] },
    apartment: { eyebrow: '02 / Home life', title: 'A considerate little guest', intro: 'Observed home behaviour · Familiar routines and our own equipment help every new place feel safe — for Perseus and for the home.', cards: [
      { icon: '◇', title: 'Litter trained', text: 'Uses his own litter box and it is cleaned regularly.' }, { icon: '╱', title: 'Scratching post', text: 'Travels with his own scratching post.' }, { icon: '○', title: 'Own supplies', text: 'Food bowls, litter box, carrier and other essentials travel with us.' }, { icon: '⌂', title: 'Walks in a harness', text: 'Perseus does not go outside unattended.' }, { icon: '◎', title: 'Supervised', text: 'He is not left alone for long periods during travel.' }, { icon: '✦', title: 'Cleaning', text: 'We clean the apartment carefully before leaving.' }
    ] },
    setup: { eyebrow: 'Travel inventory', title: 'Perseus’s travel kit', intro: 'Everything needed for everyday life travels with him.', items: ['Carrier · approx. 40 × 30 × 30 cm', 'Portable litter box · 45 × 36 × 15 cm', 'Scratching post', 'Toys', 'Blanket', 'Camera'] },
    health: { eyebrow: '03 / Health · Health record', title: 'Well cared for, always', intro: 'Perseus has all his vaccinations and a microchip.', statuses: ['All vaccinations', 'Microchipped'], note: 'Veterinary documents are available upon request.' },
    travels: { eyebrow: '04 / Travels · Field journal', title: 'Perseus’s travel journal', intro: 'A growing record of windows inspected, chairs approved and naps taken.', trips: [{"city": "On the road", "date": "", "type": "By car", "note": "Watching the world from a familiar blanket.", "image": "/images/cat/perseus-car-ride.webp"}, {"city": "A cosy corner", "date": "", "type": "Together", "note": "A blanket and a harness for the journey.", "image": "/images/cat/perseus-train-companion.webp"}, {"city": "A walk in the woods", "date": "", "type": "In a harness", "note": "Exploring the forest on a lead.", "image": "/images/cat/perseus-forest-walk.webp"}, {"city": "A quiet pause", "date": "", "type": "On the terrace", "note": "Watching the trees from the terrace.", "image": "/images/cat/perseus-terrace-watch.webp"}] },
    gallery: {"eyebrow": "Photo album", "title": "Little moments together", "images": [{"src": "/images/cat/perseus-home-portrait.webp", "alt": "Portrait of Perseus at home", "caption": "A moment at home", "position": "50% 45%", "width": 1227, "height": 1600}, {"src": "/images/cat/perseus-forest-portrait.webp", "alt": "Perseus in a harness among forest plants", "caption": "Exploring together", "position": "50% 45%", "width": 960, "height": 1280}, {"src": "/images/cat/perseus-playtime.webp", "alt": "Perseus playing with a toy on the floor", "caption": "Time to play", "position": "50% 45%", "width": 848, "height": 983}, {"src": "/images/cat/perseus-carrier-nap.webp", "alt": "Perseus sleeping inside his carrier", "caption": "A nap on the road", "position": "50% 45%", "width": 960, "height": 1280}]},
    landlords: { eyebrow: '05 / For landlords', title: 'For hosts & landlords', paragraphs: ['Traveling with a cat sometimes raises reasonable questions for property owners. Perseus is an indoor, litter-trained cat accustomed to staying in apartments.', 'We take full responsibility for our pet and any damage caused by him.', 'We travel with his own litter box, scratching post, carrier, bowls and other supplies. We also clean the property carefully before departure. Veterinary documents can be provided upon request.'], checklist: ['Indoor cat', 'Litter-trained', 'Own scratching post', 'Own travel equipment', 'Vaccinated & microchipped', 'Responsible owners', 'Cleaning before departure'], cta: 'Ask us about Perseus' },
    faq: { eyebrow: 'Good to know', title: 'Questions from landlords', items: [
      { q: 'Does Perseus scratch furniture?', a: 'He uses his own scratching post. We always bring one when traveling.' }, { q: 'Is he litter-trained?', a: 'Yes. He consistently uses his litter box.' }, { q: 'Does he stay alone in the apartment?', a: 'Usually only for short periods.' }, { q: 'Does he go outdoors?', a: 'He goes for walks in a harness and on a lead, with us.' }, { q: 'Can you provide vaccination records?', a: 'Yes. Veterinary documents can be provided privately upon request.' }, { q: 'What happens if the cat damages something?', a: 'We take responsibility for damage caused by our pet.' }
    ] },
    contact: { eyebrow: 'Planning to host us?', title: 'Let’s talk about Perseus', text: 'If you have questions about Perseus, reply in the conversation where we shared this profile.', telegram: 'Telegram placeholder', email: 'Email placeholder' },
    footer: 'Perseus’s travel profile · Made for thoughtful stays'
  },
  ru: {
    locale: 'ru',
    name: 'Персей',
    nickname: 'Персик',
    images: {"hero": {"src": "/images/cat/perseus-suitcase.webp", "alt": "Персей сидит на чемодане", "position": "50% 42%"}, "portrait": {"src": "/images/cat/perseus-portrait.webp", "alt": "Портрет Персея на кресле", "position": "50% 35%"}, "apartment": {"src": "/images/cat/perseus-window-nap.webp", "alt": "Персей спит на подушке у окна", "position": "50% 55%"}},
    meta: { title: 'Персей — профиль путешествующего кота', description: 'Знакомьтесь: Персей — домашний кот с опытом путешествий. Профиль для хозяев жилья и путешественников.' },
    nav: ['Персей', 'Дома', 'Здоровье', 'Поездки', 'Арендодателям'],
    hero: { eyebrow: 'Felis catus · Спутник в путешествиях', name: 'Персей', tagline: 'Для своих — Персик. В путешествиях — вместе.', since: 'Наш рыжий спутник дома и в дороге. Переноска, плед и знакомые вещи помогают ему освоиться на новом месте.', badges: ['Домашний кот', 'Вакцинирован', 'Приучен к лотку', 'Привык к поездкам'], about: 'Посмотреть профиль', landlords: 'Арендодателям', scroll: 'Полевые заметки' },
    about: { eyebrow: '01 / Профиль', title: 'Спокойная компания в любом доме', paragraphs: ['Персей, или просто Персик, — наш кот и спутник в путешествиях. На его фотографиях — сон у окна, любимый плед и дорога вместе с нами.', 'На прогулках он исследует мир в шлейке и на поводке. В поездках с ним его переноска, портативный лоток и когтеточка.'], facts: [['Вид', 'Felis catus'], ['Образ жизни', 'Домашний'], ['Окрас', 'Рыжий полосатый'], ['Ласково', 'Персик'], ['Характер', 'Спокойный / Любопытный']] },
    apartment: { eyebrow: '02 / Жизнь дома', title: 'Деликатный маленький гость', intro: 'Наблюдения за поведением дома · Привычный распорядок и собственные вещи помогают бережно освоиться на новом месте.', cards: [
      { icon: '◇', title: 'Приучен к лотку', text: 'Пользуется своим лотком, который регулярно убирается.' }, { icon: '╱', title: 'Когтеточка', text: 'Путешествует со своей когтеточкой.' }, { icon: '○', title: 'Свои вещи', text: 'Миски, лоток, переноска и всё необходимое всегда с нами.' }, { icon: '⌂', title: 'Прогулки на шлейке', text: 'Персей не выходит на улицу без присмотра.' }, { icon: '◎', title: 'Под присмотром', text: 'В поездках он не остаётся один надолго.' }, { icon: '✦', title: 'Уборка', text: 'Перед отъездом мы тщательно убираем квартиру.' }
    ] },
    setup: { eyebrow: 'Дорожный инвентарь', title: 'Дорожный набор Персея', intro: 'Всё необходимое для повседневной жизни путешествует вместе с ним.', items: ['Переноска · около 40 × 30 × 30 см', 'Портативный лоток · 45 × 36 × 15 см', 'Когтеточка', 'Игрушки', 'Плед', 'Камера'] },
    health: { eyebrow: '03 / Здоровье · Карта здоровья', title: 'Всегда под заботой', intro: 'У Персея есть все прививки и микрочип.', statuses: ['Все прививки', 'Есть микрочип'], note: 'Ветеринарные документы предоставим по запросу.' },
    travels: { eyebrow: '04 / Поездки · Полевой журнал', title: 'Журнал путешествий Персея', intro: 'Коллекция проверенных окон, удобных кресел и отличных мест для сна.', trips: [{"city": "В дороге", "date": "", "type": "В машине", "note": "Наблюдает за дорогой с привычного пледа.", "image": "/images/cat/perseus-car-ride.webp"}, {"city": "Уютный уголок", "date": "", "type": "Рядом с нами", "note": "Плед и шлейка — спутники в пути.", "image": "/images/cat/perseus-train-companion.webp"}, {"city": "Прогулка в лесу", "date": "", "type": "На шлейке", "note": "Изучает лес на поводке.", "image": "/images/cat/perseus-forest-walk.webp"}, {"city": "Тихая остановка", "date": "", "type": "На террасе", "note": "Наблюдает за лесом с террасы.", "image": "/images/cat/perseus-terrace-watch.webp"}] },
    gallery: {"eyebrow": "Фотоальбом", "title": "Маленькие моменты вместе", "images": [{"src": "/images/cat/perseus-home-portrait.webp", "alt": "Домашний портрет Персея", "caption": "Домашние мгновения", "position": "50% 45%", "width": 1227, "height": 1600}, {"src": "/images/cat/perseus-forest-portrait.webp", "alt": "Персей в шлейке среди лесных растений", "caption": "Исследуем мир вместе", "position": "50% 45%", "width": 960, "height": 1280}, {"src": "/images/cat/perseus-playtime.webp", "alt": "Персей играет с игрушкой на полу", "caption": "Время играть", "position": "50% 45%", "width": 848, "height": 983}, {"src": "/images/cat/perseus-carrier-nap.webp", "alt": "Персей спит в переноске", "caption": "Сон в дороге", "position": "50% 45%", "width": 960, "height": 1280}]},
    landlords: { eyebrow: '05 / Арендодателям', title: 'Для хозяев жилья', paragraphs: ['Путешествие с котом может вызывать разумные вопросы у владельцев жилья. Персей — домашний кот, приученный к лотку и проживанию в квартирах.', 'Мы полностью отвечаем за питомца и любой причинённый им ущерб.', 'Мы берём его собственный лоток, когтеточку, переноску, миски и другие вещи. Перед отъездом тщательно убираем жильё. Ветеринарные документы предоставим по запросу.'], checklist: ['Домашний кот', 'Приучен к лотку', 'Своя когтеточка', 'Своё снаряжение', 'Прививки и микрочип', 'Ответственные хозяева', 'Уборка перед отъездом'], cta: 'Спросить о Персее' },
    faq: { eyebrow: 'Полезно знать', title: 'Вопросы арендодателей', items: [
      { q: 'Персей царапает мебель?', a: 'Он пользуется своей когтеточкой, которую мы всегда берём в поездки.' }, { q: 'Он приучен к лотку?', a: 'Да, Персей всегда пользуется своим лотком.' }, { q: 'Он остаётся один?', a: 'Обычно только на короткое время.' }, { q: 'Он выходит на улицу?', a: 'Гуляет с нами в шлейке и на поводке.' }, { q: 'Можно увидеть документы о вакцинации?', a: 'Да, ветеринарные документы предоставим лично по запросу.' }, { q: 'Что будет, если кот что-то повредит?', a: 'Мы берём ответственность за ущерб, причинённый питомцем.' }
    ] },
    contact: { eyebrow: 'Планируете принять нас?', title: 'Давайте поговорим о Персее', text: 'Если у вас остались вопросы о Персее, напишите нам в том чате, где мы отправили вам этот профиль.', telegram: 'Telegram — заглушка', email: 'Email — заглушка' },
    footer: 'Профиль путешествий Персея · Для бережных остановок'
  }
};
