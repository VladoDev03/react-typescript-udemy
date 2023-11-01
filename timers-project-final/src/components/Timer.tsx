import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/timers-context.tsx';
import { useEffect, useState } from 'react';

const MILLISECONDS = 1000;
const INTERVAL = 50;
const TO_FIXED = 2;

export default function Timer({ name, duration }: TimerProps) {
	const [remainingTime, setRemainingTime] = useState(duration * MILLISECONDS);

	useEffect(() => {
		setInterval(() => {
			setRemainingTime(prevTime => prevTime - INTERVAL);
		}, INTERVAL);
	}, []);

	const formattedRemainingTime = (remainingTime / MILLISECONDS).toFixed(TO_FIXED);

	return (
		<Container as="article">
			<h2>{name}</h2>
			<p><progress max={duration * MILLISECONDS} value={remainingTime} /></p>
			<p>{formattedRemainingTime}</p>
		</Container>
	);
}
