import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { useTranslation } from 'react-i18next'
import { supportedLanguages } from './i18n'

function Header() {
	const { i18n, t } = useTranslation();
	const current = supportedLanguages.find(l => l.code === i18n.language) || supportedLanguages[0];
	return (
		<header className="sticky top-0 z-20 backdrop-blur bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(26,29,41,0.6)] border-b border-white/20 dark:border-white/5">
			<div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
				<nav className="hidden md:flex gap-6 text-sm font-medium">
					<a href="#home" className="hover:text-primary-500">{t('nav.home')}</a>
					<a href="#about" className="hover:text-primary-500">{t('nav.about')}</a>
					<a href="#skills" className="hover:text-primary-500">{t('nav.skills')}</a>
					<a href="#projects" className="hover:text-primary-500">{t('nav.projects')}</a>
					<a href="#contact" className="hover:text-primary-500">{t('nav.contact')}</a>
				</nav>
				<div className="relative">
					<details className="group">
						<summary className="list-none cursor-pointer rounded-full px-3 py-1.5 bg-white/80 dark:bg-background-dark text-sm shadow-glass flex items-center gap-2">
							<span className="text-lg">{current.flag}</span>
							<span className="hidden sm:block">{current.name}</span>
						</summary>
						<div className="absolute right-0 mt-2 w-44 rounded-xl bg-white/90 dark:bg-background-dark shadow-glass p-2 backdrop-blur">
							{supportedLanguages.map(l => (
								<button key={l.code} onClick={() => i18n.changeLanguage(l.code)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary-500/10 flex items-center gap-2">
									<span className="text-lg">{l.flag}</span>
									<span>{l.name}</span>
								</button>
							))}
						</div>
					</details>
				</div>
			</div>
		</header>
	);
}

function Footer() {
	const { t } = useTranslation();
	const year = new Date().getFullYear();
	return (
		<footer className="mt-20 py-8 text-center text-sm text-black/70 dark:text-white/60">
			{t('footer.text', { year })}
		</footer>
	)
}

function Root() {
	return (
		<React.StrictMode>
			<Header />
			<App />
			<Footer />
		</React.StrictMode>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Root />
)
