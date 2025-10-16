import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const education = [
	{ place: 'Polytechnic Institute', duration: 'Sep 2025 - Present', field: 'Computer Science/Programming' },
	{ place: 'Al-Khorezmi Vorislari (IT Academy)', duration: 'Sep 2024 - Present', field: 'Backend Development & Telegram Bots' },
	{ place: 'Secondary School', duration: 'Sep 2016 - 2025', field: '' },
];

export default function About() {
	const { t } = useTranslation();
	return (
		<section id="about" className="mx-auto max-w-7xl px-4 py-16">
			<motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold">
				{t('about.heading')}
			</motion.h2>
			<motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-4 text-lg text-black/80 dark:text-white/80">
				{t('about.bio')}
			</motion.p>
			<div className="mt-8">
				<div className="text-sm uppercase tracking-wide text-black/60 dark:text-white/60">{t('about.timeline')}</div>
				<ol className="mt-4 relative border-s border-black/10 dark:border-white/10">
					{education.map((e, i) => (
						<li key={e.place} className="mb-8 ms-6">
							<span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-white">{i+1}</span>
							<h3 className="font-semibold">{e.place}</h3>
							<p className="text-sm text-black/60 dark:text-white/60">{e.duration}</p>
							{e.field && <p className="mt-1">{e.field}</p>}
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}

