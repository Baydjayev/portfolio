import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const stats = [
	{ label: 'Years Experience', value: 1 },
	{ label: 'Projects Completed', value: 8 },
	{ label: 'Students Taught', value: 10 },
	{ label: 'Institutions', value: 2 },
];

function Counter({ to }: { to: number }) {
	const ref = useRef<HTMLSpanElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(containerRef, { once: true, margin: '-100px' });

	useEffect(() => {
		if (!ref.current) return;
		ref.current.textContent = '0';
		if (isInView) {
			const controls = animate(0, to, {
				duration: Math.min(2, 0.05 * to + 0.8),
				ease: 'easeOut',
				onUpdate: (latest) => {
					if (ref.current) ref.current.textContent = Math.round(latest).toString();
				},
			});
			return () => controls.stop();
		}
	}, [to, isInView]);

	return (
		<div ref={containerRef}>
			<span ref={ref} />
		</div>
	);
}

export default function Hero() {
	const typed = useTypewriter([
		'Backend Developer',
		'Telegram Bot Specialist',
		'FastAPI • Django • Aiogram',
	]);

	return (
		<section className="relative overflow-hidden bg-background-light dark:bg-background-dark">
			{/* Softer gradient in light mode, stronger in dark */}
			<div className="absolute inset-0 -z-10 opacity-20 dark:opacity-60 bg-sunset-gradient" />
			<div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-6xl font-extrabold text-black dark:text-white drop-shadow"
				>
					Baydjayev Mulkomon
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 0.6 }}
					className="mt-4 text-lg md:text-2xl text-black/80 dark:text-white/90"
				>
					{typed}
					<span className="animate-pulse">_</span>
				</motion.p>

				<div className="mt-10 flex flex-wrap gap-4">
					<a href="#projects" className="rounded-xl px-6 py-3 bg-background-dark text-white font-semibold shadow-glass hover:-translate-y-0.5 transition">
						View Projects
					</a>
					<a href="#contact" className="rounded-xl px-6 py-3 bg-white text-background-dark font-semibold shadow-glass hover:-translate-y-0.5 transition">
						Contact Me
					</a>
				</div>

				<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
					{stats.map((s, i) => (
						<motion.div
							key={s.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
							className="rounded-2xl bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(37,42,58,0.24)] backdrop-blur-md shadow-glass p-6 text-center text-black dark:text-white/90"
						>
							<div className="text-3xl md:text-4xl font-extrabold"><Counter to={s.value} />+</div>
							<div className="mt-1 text-sm md:text-base">{s.label}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
