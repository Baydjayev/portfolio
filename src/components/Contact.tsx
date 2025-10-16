import { motion } from 'framer-motion';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
	const { t } = useTranslation();
	const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus('sending');
		try {
			await new Promise(res => setTimeout(res, 800));
			setStatus('sent');
		} catch (e) {
			setStatus('error');
		}
	}

	return (
		<section id="contact" className="mx-auto max-w-7xl px-4 py-16">
			<motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold">
				{t('contact.heading')}
			</motion.h2>
			<form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-2xl">
				<label className="grid gap-1">
					<span className="text-sm">{t('contact.form.name')}</span>
					<input required placeholder={t('contact.form.namePh') as string} className="rounded-lg px-3 py-2 bg-white/80 dark:bg-background-dark/60 border border-black/10 dark:border-white/10" />
				</label>
				<label className="grid gap-1">
					<span className="text-sm">{t('contact.form.email')}</span>
					<input type="email" required placeholder={t('contact.form.emailPh') as string} className="rounded-lg px-3 py-2 bg-white/80 dark:bg-background-dark/60 border border-black/10 dark:border-white/10" />
				</label>
				<label className="grid gap-1">
					<span className="text-sm">{t('contact.form.message')}</span>
					<textarea required rows={5} placeholder={t('contact.form.messagePh') as string} className="rounded-lg px-3 py-2 bg-white/80 dark:bg-background-dark/60 border border-black/10 dark:border-white/10" />
				</label>
				<div className="flex items-center gap-3">
					<button disabled={status==='sending'} className="px-4 py-2 rounded-lg bg-primary-500 text-white">
						{t('contact.form.submit')}
					</button>
					{status==='sent' && <span className="text-emerald-600">✓</span>}
				</div>
			</form>
		</section>
	);
}
