#!/usr/bin/env node
import {gameSkeleton} from '../bin/game-skeleton.js';


const greetText = 'Find the greatest common divisor of given numbers.';

const QuestionAndAnswer = () => {
	let operator1 = Math.ceil(Math.random() * 100);
	let operator2 = Math.ceil(Math.random() * 20);
	const questionText = `${operator1} ${operator2}`;

	let result = 0;

	while (operator1 != 0 && operator2 != 0) {
		if (operator1 > operator2) {
			operator1 %= operator2;
		} else {
			operator2 %= operator1;
		}
	}
	result = operator1 + operator2;

	return [questionText, result];
};

gameSkeleton(greetText, QuestionAndAnswer);