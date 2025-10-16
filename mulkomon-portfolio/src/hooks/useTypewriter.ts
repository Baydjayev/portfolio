import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], typingSpeedMs = 90, pauseMs = 1200) {
	const [index, setIndex] = useState(0);
	const [text, setText] = useState('');
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		let timeoutId: number;
		const current = words[index % words.length];

		if (!deleting && text.length < current.length) {
			timeoutId = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeedMs);
		} else if (!deleting && text.length === current.length) {
			timeoutId = window.setTimeout(() => setDeleting(true), pauseMs);
		} else if (deleting && text.length > 0) {
			timeoutId = window.setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeedMs / 2);
		} else if (deleting && text.length === 0) {
			setDeleting(false);
			setIndex((prev) => (prev + 1) % words.length);
		}

		return () => window.clearTimeout(timeoutId);
	}, [text, deleting, index, words, typingSpeedMs, pauseMs]);

	return text;
}
