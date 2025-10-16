import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const supportedLanguages = [
	{ code: 'tk', name: "Türkmen", flag: '🇹🇲' },
	{ code: 'uz', name: "O'zbek", flag: '🇺🇿' },
	{ code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
	{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
	{ code: 'en', name: 'English', flag: '🇬🇧' },
] as const;

const resources = {
	tk: {
		translation: {
			nav: {
				home: 'Baş sahypa',
				about: 'Barada',
				skills: 'Başarnyklar',
				projects: 'Taslamalar',
				contact: 'Habarlaşmak',
			},
			hero: {
				name: 'Baydjayev Mulkomon',
				titles: ['Backend Dizaýneri', 'Telegram Bot Hünärmeni', 'FastAPI • Django • Aiogram'],
				ctaProjects: 'Taslamalary Gör',
				ctaContact: 'Meni Bilen Habarlaş',
				stats: {
					years: 'Ýyl tejribe',
					projects: 'Tamamlanan taslamalar',
					students: 'Okuwçylar',
					institutions: 'Institusiyalar',
				},
			},
			about: {
				heading: 'Barada',
				bio: 'Men Aiogram ulanyp Telegram botlaryny gurmakda we döwrebap web sahypalary döretmekde ýöriteleşýärin. Häzirki wagtda okaýan hem-de 10+ okuwça programmirleme öwredýän we innowasion taslamalary ösdürýän talyp.',
				timeline: 'Bilim',
				cv: 'CV Göçürip Al',
			},
			skills: {
				heading: 'Başarnyklar',
				categories: {
					backend: 'Backend',
					frontend: 'Frontend',
					databases: 'Maglumat Bazalary',
					tools: 'Gurluşlar we Gurallar',
				},
			},
			projects: {
				heading: 'Taslamalar',
				filter: { all: 'Hemmesi', web: 'Web', bot: 'Bot', tool: 'Gural' },
				items: {
					portfolio: {
						title: 'Şahsy Portfel',
						desc: 'Täze derejesi we aragatnaşyk maglumatlary bilen döwrebap kontakt sahypasy.',
					},
					qr: {
						title: 'QR Kod Generatory',
						desc: 'URL, tekst we kontaktlar üçin düzülip bilinýän dizaynly, derrew QR kod dörediji web guraly.'
					},
					quiz: {
						title: 'Programmirleme Viktorinasy',
						desc: 'Wagtlaýyn baha bermek we dessine jogap bilen interaktiw sorag-jogap platformasy.'
					},
					calc: {
						title: 'Täzelikçi Kalkulýator',
						desc: 'Ösen amallar we taryh bilen owadan görnüşli kalkulýator.'
					},
					uz: {
						title: 'Uzbek Latin-Kirill Konwertory',
						desc: 'Latyn we Kirill ýazuwlarynyň arasynda amatly öwüriji gural.'
					},
					shutup: {
						title: 'Shut Up Bot',
						desc: 'Spam dolandyrmak we arassa söhbet gurşawyny saklamak üçin administirleme kömekçi bogy.'
					},
					channel: {
						title: 'Channel Manager Bot',
						desc: 'Post meýilleşdirmek, abonent analitikalary we köp kanally paýlama üçin ösen dolandyryş.'
					},
					contactbot: {
						title: 'Kontakt Dolandyryş Bogy',
						desc: 'Gözleg, kategoriýalar we çalt tapmakly kontakt saklaýjy akylly bot.'
					},
				},
				buttons: { live: 'Demonstrasiýa', code: 'Kod' },
			},
			contact: {
				heading: 'Habarlaşmak',
				form: {
					name: 'Ady', namePh: 'Adyňyz',
					email: 'Email', emailPh: 'Email salgyňyz',
					message: 'Habar', messagePh: 'Habarňyzy ýazyň...',
					submit: 'Ugrat',
				},
			},
			footer: {
				text: '© {{year}} Baydjayev Mulkomon. Ähli hukuklar goralan.'
			},
			buttons: { downloadCV: 'CV Göçürip Al', viewMore: 'Has köp gör' },
		},
	},
	uz: {
		translation: {
			nav: { home: 'Bosh sahifa', about: 'Haqida', skills: 'Koʻnikmalar', projects: 'Loyihalar', contact: 'Bogʻlanish' },
			hero: { name: 'Baydjayev Mulkomon', titles: ["Backend Dasturchi", "Telegram Bot Mutaxassisi", 'FastAPI • Django • Aiogram'], ctaProjects: 'Loyihalarni ko‘rish', ctaContact: 'Men bilan bogʻlanish', stats: { years: 'Yillik tajriba', projects: 'Tugallangan loyihalar', students: 'O‘quvchilar', institutions: 'Muassasalar' } },
			about: { heading: 'Haqida', bio: 'Aiogram yordamida Telegram botlar qurish va zamonaviy veb-saytlar yaratishga ixtisoslashganman. Hozirda oʻqiyapman va 10+ oʻquvchiga dasturlash oʻrgatyapman hamda innovatsion loyihalarni rivojlantirmoqdaman.', timeline: 'Taʼlim', cv: 'CV Yuklab olish' },
			skills: { heading: 'Koʻnikmalar', categories: { backend: 'Backend', frontend: 'Frontend', databases: 'Maʼlumot bazalari', tools: 'Asboblar' } },
			projects: { heading: 'Loyihalar', filter: { all: 'Barchasi', web: 'Veb', bot: 'Bot', tool: 'Asbob' }, items: { portfolio: { title: 'Shaxsiy Portfolio', desc: 'Zamonaviy dizayn va aloqa maʼlumotlari bilan kontakt sahifa.' }, qr: { title: 'QR Kod Generator', desc: 'URL, matn va kontaktlar uchun sozlanadigan dizaynga ega QR kod yaratish vositasi.' }, quiz: { title: 'Dasturlash Viktorina', desc: 'Bir zumda baholash bilan interaktiv test platformasi.' }, calc: { title: 'Ijodiy Kalkulyator', desc: 'Kengaytirilgan amallar va tarixga ega chiroyli kalkulyator.' }, uz: { title: 'Oʻzbek Lotin-Kirill Konvertori', desc: 'Lotin va Kirill yozuvlari oʻrtasida qulay oʻgirish vositasi.' }, shutup: { title: 'Shut Up Bot', desc: 'Spamni boshqarish va chatni toza saqlashga yordam beruvchi moderator bot.' }, channel: { title: 'Channel Manager Bot', desc: 'Post rejalashtirish, obunachi analitikasi va ko‘p kanalga tarqatish avtomatlashtirish.' }, contactbot: { title: 'Kontakt Boshqaruv Boti', desc: 'Qidiruv va kategoriyalar bilan kontaktlarni saqlovchi aqlli bot.' } }, buttons: { live: 'Demo', code: 'Kod' } },
			contact: { heading: 'Bogʻlanish', form: { name: 'Ism', namePh: 'Ismingiz', email: 'Email', emailPh: 'Email manzilingiz', message: 'Xabar', messagePh: 'Xabaringizni yozing...', submit: 'Yuborish' } },
			footer: { text: '© {{year}} Baydjayev Mulkomon. Barcha huquqlar himoyalangan.' },
			buttons: { downloadCV: 'CV Yuklab olish', viewMore: 'Ko‘proq ko‘rish' },
		},
	},
	tr: {
		translation: {
			nav: { home: 'Ana Sayfa', about: 'Hakkımda', skills: 'Yetenekler', projects: 'Projeler', contact: 'İletişim' },
			hero: { name: 'Baydjayev Mulkomon', titles: ['Backend Geliştirici', 'Telegram Bot Uzmanı', 'FastAPI • Django • Aiogram'], ctaProjects: 'Projeleri Gör', ctaContact: 'İletişime Geç', stats: { years: 'Yıl deneyim', projects: 'Tamamlanan proje', students: 'Öğrenci', institutions: 'Kurum' } },
			about: { heading: 'Hakkımda', bio: 'Aiogram ile Telegram botları ve modern web siteleri geliştiriyorum. Şu anda okuyorum ve 10+ öğrenciye programlama öğretiyorum, yenilikçi projeler geliştiriyorum.', timeline: 'Eğitim', cv: 'CV İndir' },
			skills: { heading: 'Yetenekler', categories: { backend: 'Backend', frontend: 'Frontend', databases: 'Veritabanları', tools: 'Araçlar' } },
			projects: { heading: 'Projeler', filter: { all: 'Tümü', web: 'Web', bot: 'Bot', tool: 'Araç' }, items: { portfolio: { title: 'Kişisel Portföy', desc: 'Modern tasarım ve iletişim bilgileri ile şık bir iletişim sayfası.' }, qr: { title: 'QR Kod Oluşturucu', desc: 'URL, metin ve kişiler için özelleştirilebilir QR kod üreten web aracı.' }, quiz: { title: 'Programlama Quiz', desc: 'Anlık geri bildirimli interaktif quiz platformu.' }, calc: { title: 'Yaratıcı Hesap Makinesi', desc: 'Gelişmiş işlemler ve geçmiş ile şık hesap makinesi.' }, uz: { title: 'Özbek Latin-Kiril Dönüştürücü', desc: 'Latin ve Kiril yazıları arasında pratik dönüştürücü.' }, shutup: { title: 'Shut Up Bot', desc: 'Spam yönetimi ve temiz sohbet için moderasyon botu.' }, channel: { title: 'Channel Manager Bot', desc: 'Gönderi planlama, abone analitiği ve çok kanala dağıtım otomasyonu.' }, contactbot: { title: 'İletişim Yönetim Botu', desc: 'Arama ve kategorilerle kişileri saklayan akıllı bot.' } }, buttons: { live: 'Demo', code: 'Kod' } },
			contact: { heading: 'İletişim', form: { name: 'Ad', namePh: 'Adınız', email: 'E-posta', emailPh: 'E-posta adresiniz', message: 'Mesaj', messagePh: 'Mesajınızı yazın...', submit: 'Gönder' } },
			footer: { text: '© {{year}} Baydjayev Mulkomon. Tüm hakları saklıdır.' },
			buttons: { downloadCV: 'CV İndir', viewMore: 'Daha fazla gör' },
		},
	},
	ru: {
		translation: {
			nav: { home: 'Главная', about: 'Обо мне', skills: 'Навыки', projects: 'Проекты', contact: 'Контакты' },
			hero: { name: 'Байджаев Мулкомон', titles: ['Бэкенд-разработчик', 'Специалист по Telegram‑ботам', 'FastAPI • Django • Aiogram'], ctaProjects: 'Смотреть проекты', ctaContact: 'Связаться со мной', stats: { years: 'Лет опыта', projects: 'Завершённых проектов', students: 'Студентов', institutions: 'Учреждений' } },
			about: { heading: 'Обо мне', bio: 'Специализируюсь на создании Telegram‑ботов на Aiogram и современных сайтов. Учусь и обучаю 10+ студентов программированию, развивая инновационные проекты.', timeline: 'Образование', cv: 'Скачать CV' },
			skills: { heading: 'Навыки', categories: { backend: 'Бэкенд', frontend: 'Фронтенд', databases: 'Базы данных', tools: 'Инструменты' } },
			projects: { heading: 'Проекты', filter: { all: 'Все', web: 'Веб', bot: 'Бот', tool: 'Инструмент' }, items: { portfolio: { title: 'Личный Портфолио', desc: 'Стильная контакт‑страница с современным дизайном.' }, qr: { title: 'Генератор QR‑кодов', desc: 'Веб‑инструмент для мгновенного создания QR‑кодов с настройкой дизайна.' }, quiz: { title: 'Платформа Викторин', desc: 'Интерактивная викторина с мгновенной обратной связью.' }, calc: { title: 'Креативный Калькулятор', desc: 'Красивый калькулятор с расширенными функциями и историей.' }, uz: { title: 'Конвертер Узбекский Латиница‑Кириллица', desc: 'Удобный конвертер между латиницей и кириллицей.' }, shutup: { title: 'Shut Up Bot', desc: 'Бот‑модератор для борьбы со спамом и чистоты чатов.' }, channel: { title: 'Channel Manager Bot', desc: 'Автоматизация управления каналами, планирование постов и аналитика.' }, contactbot: { title: 'Бот Управления Контактами', desc: 'Умный бот для хранения и поиска контактов.' } }, buttons: { live: 'Демо', code: 'Код' } },
			contact: { heading: 'Контакты', form: { name: 'Имя', namePh: 'Ваше имя', email: 'Email', emailPh: 'Ваш email', message: 'Сообщение', messagePh: 'Введите сообщение...', submit: 'Отправить' } },
			footer: { text: '© {{year}} Baydjayev Mulkomon. Все права защищены.' },
			buttons: { downloadCV: 'Скачать CV', viewMore: 'Показать ещё' },
		},
	},
	en: {
		translation: {
			nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
			hero: { name: 'Baydjayev Mulkomon', titles: ['Backend Developer', 'Telegram Bot Specialist', 'FastAPI • Django • Aiogram'], ctaProjects: 'View Projects', ctaContact: 'Contact Me', stats: { years: 'Years Experience', projects: 'Projects Completed', students: 'Students Taught', institutions: 'Institutions' } },
			about: { heading: 'About', bio: 'I build Telegram bots using Aiogram and modern websites. Currently studying and teaching programming to 10+ students while developing innovative projects.', timeline: 'Education', cv: 'Download CV' },
			skills: { heading: 'Skills', categories: { backend: 'Backend', frontend: 'Frontend', databases: 'Databases', tools: 'Tools' } },
			projects: { heading: 'Projects', filter: { all: 'All', web: 'Web', bot: 'Bot', tool: 'Tool' }, items: { portfolio: { title: 'Personal Portfolio', desc: 'A sleek contact page with modern design and easy contact info.' }, qr: { title: 'QR Code Generator', desc: 'Instantly generates customizable QR codes for URLs, text, and contacts.' }, quiz: { title: 'Programming Quiz Platform', desc: 'Interactive quiz app with real-time scoring and instant feedback.' }, calc: { title: 'Creative Calculator', desc: 'Beautiful calculator with advanced math and history.' }, uz: { title: 'Uzbek Latin‑Cyrillic Converter', desc: 'Converter between Uzbek Latin and Cyrillic scripts.' }, shutup: { title: 'Shut Up Bot', desc: 'Group moderation bot to manage spam and keep chats clean.' }, channel: { title: 'Channel Manager Bot', desc: 'Automates channel tasks: scheduling, analytics, distribution.' }, contactbot: { title: 'Contact Management Bot', desc: 'Stores and organizes contacts with search and categories.' } }, buttons: { live: 'Live', code: 'Code' } },
			contact: { heading: 'Contact', form: { name: 'Name', namePh: 'Your name', email: 'Email', emailPh: 'Your email', message: 'Message', messagePh: 'Write your message...', submit: 'Send' } },
			footer: { text: '© {{year}} Baydjayev Mulkomon. All rights reserved.' },
			buttons: { downloadCV: 'Download CV', viewMore: 'View more' },
		},
	},
} as const;

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'tk',
		fallbackLng: 'en',
		interpolation: { escapeValue: false },
	});

export default i18n;
