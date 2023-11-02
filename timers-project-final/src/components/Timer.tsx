import Container from './UI/Container.tsx';
import { useTimersContext, type Timer as TimerProps } from '../store/timers-context.tsx';
import { useEffect, useRef, useState } from 'react';

const MILLISECONDS = 1000;
const INTERVAL = 50;
const TO_FIXED = 2;

export default function Timer({ name, duration }: TimerProps) {
	const interval = useRef<number | null>(null);
	const [remainingTime, setRemainingTime] = useState(duration * MILLISECONDS);
	const {isRunning} = useTimersContext();

	if (remainingTime <= 0 && interval.current)  {
		clearInterval(interval.current);
	}

	useEffect(() => {
		let timer: number;

		if (isRunning) {
			timer = setInterval(() => {
				setRemainingTime(prevTime => {
					if (prevTime <= 0) {
						return prevTime;
					}

					return prevTime - INTERVAL;
				});
			}, INTERVAL);

			interval.current = timer;
		} else if (interval.current) {
			clearInterval(interval.current);
		}

		return () => {
			clearInterval(timer);
		}
	}, [isRunning]);

	const formattedRemainingTime = (remainingTime / MILLISECONDS).toFixed(TO_FIXED);

	return (
		<Container as="article">
			<h2>{name}</h2>
			<p><progress max={duration * MILLISECONDS} value={remainingTime} /></p>
			<p>{formattedRemainingTime}</p>
		</Container>
	);
}
