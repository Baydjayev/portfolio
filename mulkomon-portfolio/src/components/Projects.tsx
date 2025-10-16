import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const allProjects = [
	{ key: 'portfolio', url: 'https://baydjayev.github.io/', code: 'https://github.com/Baydjayev', type: 'web', tech: ['HTML','CSS','JavaScript'] },
	{ key: 'qr', url: 'https://baydjayev.github.io/qr-code-generator/', code: 'https://github.com/Baydjayev/qr-code-generator', type: 'tool', tech: ['HTML','CSS','JavaScript'] },
	{ key: 'quiz', url: 'https://baydjayev.github.io/programming-quiz/', code: 'https://github.com/Baydjayev/programming-quiz', type: 'tool', tech: ['HTML','CSS','JavaScript'] },
	{ key: 'calc', url: 'https://baydjayev.github.io/creative-calculator/', code: 'https://github.com/Baydjayev/creative-calculator', type: 'tool', tech: ['HTML','CSS','JavaScript'] },
	{ key: 'uz', url: 'https://baydjayev.github.io/uz-latin-cyrillic/', code: 'https://github.com/Baydjayev/uz-latin-cyrillic', type: 'tool', tech: ['HTML','CSS','JavaScript'] },
	{ key: 'shutup', url: 'https://github.com/Baydjayev/shut-up', code: 'https://github.com/Baydjayev/shut-up', type: 'bot', tech: ['Python','Aiogram'] },
	{ key: 'channel', url: 'https://github.com/Baydjayev/Channel-Manager', code: 'https://github.com/Baydjayev/Channel-Manager', type: 'bot', tech: ['Python','Aiogram','PostgreSQL'] },
	{ key: 'contactbot', url: 'https://github.com/Baydjayev/Contact-Bot', code: 'https://github.com/Baydjayev/Contact-Bot', type: 'bot', tech: ['Python','Aiogram','SQLite'] },
];

type Filter = 'all' | 'web' | 'bot' | 'tool';

export default function Projects() {
	const { t } = useTranslation();
	const [filter, setFilter] = useState<Filter>('all');
	const items = useMemo(() => allProjects.filter(p => filter==='all' ? true : p.type===filter), [filter]);
	const filters: Array<{key: Filter, label: string}> = [
		{ key: 'all', label: t('projects.filter.all') },
		{ key: 'web', label: t('projects.filter.web') },
		{ key: 'bot', label: t('projects.filter.bot') },
		{ key: 'tool', label: t('projects.filter.tool') },
	];
	return (
		<section id="projects" className="mx-auto max-w-7xl px-4 py-16">
			<motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold">
				{t('projects.heading')}
			</motion.h2>
			<div className="mt-6 flex flex-wrap gap-2">
				{filters.map(f => (
					<button key={f.key} onClick={() => setFilter(f.key)} className={`px-4 py-1.5 rounded-full text-sm font-medium border ${filter===f.key ? 'bg-primary-500 text-white border-transparent' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}>
						{f.label}
					</button>
				))}
			</div>
			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{items.map((p, i) => (
					<motion.article key={p.key} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl p-5 bg-white/70 dark:bg-background-dark/60 shadow-glass backdrop-blur flex flex-col">
						<h3 className="font-semibold text-lg">{t(`projects.items.${p.key}.title`)}</h3>
						<p className="mt-1 text-sm text-black/70 dark:text-white/70">{t(`projects.items.${p.key}.desc`)}</p>
						<div className="mt-3 flex flex-wrap gap-2 text-xs text-black/70 dark:text-white/60">
							{p.tech.map(tk => <span key={tk} className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">{tk}</span>)}
						</div>
						<div className="mt-4 flex gap-3">
							<a href={p.url} target="_blank" className="px-3 py-1.5 rounded-lg bg-primary-500 text-white text-sm">{t('projects.buttons.live')}</a>
							<a href={p.code} target="_blank" className="px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 text-sm">{t('projects.buttons.code')}</a>
						</div>
					</motion.article>
				))}
			</div>
		</section>
	);
}
