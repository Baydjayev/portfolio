import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const data = {
	backend: ['Python', 'FastAPI', 'Django', 'Flask', 'Aiogram'],
	frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TailwindCSS'],
	databases: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'],
	tools: ['Git', 'GitHub', 'Linux', 'REST APIs'],
};

export default function Skills() {
	const { t } = useTranslation();
	const categories: Array<{ key: keyof typeof data; color: string }> = [
		{ key: 'backend', color: 'bg-primary-500/10 text-primary-500' },
		{ key: 'frontend', color: 'bg-warmblue-500/10 text-warmblue-500' },
		{ key: 'databases', color: 'bg-purple-500/10 text-purple-500' },
		{ key: 'tools', color: 'bg-emerald-500/10 text-emerald-600' },
	];
	return (
		<section id="skills" className="mx-auto max-w-7xl px-4 py-16">
			<motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold">
				{t('skills.heading')}
			</motion.h2>
			<div className="mt-8 grid md:grid-cols-2 gap-6">
				{categories.map((c, idx) => (
					<motion.div key={c.key} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="rounded-2xl p-6 bg-white/70 dark:bg-background-dark/60 shadow-glass backdrop-blur">
						<div className="text-sm uppercase tracking-wide text-black/60 dark:text-white/60">{t(`skills.categories.${c.key}`)}</div>
						<div className="mt-4 flex flex-wrap gap-2">
							{data[c.key].map(s => (
								<span key={s} className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${c.color}`}>
									{s}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

