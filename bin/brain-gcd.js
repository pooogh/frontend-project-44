#!/usr/bin/env node
import {gameSkeleton} from '../bin/game-skeleton.js';


const greetText = 'Find the greatest common divisor of given numbers.';

const QuestionAndAnswer = () => {
	let operator1 = Math.floor(Math.random() * 100) + 1;
	let operator2 = Math.floor(Math.random() * 20) + 1;
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