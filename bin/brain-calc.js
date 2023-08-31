#!/usr/bin/env node
import {gameSkeleton} from '../bin/game-skeleton.js';


const greetText = 'What is the result of the expression?';
const QuestionAndAnswer = () => {
	const operator1 = Math.floor(Math.random() * 10);
	const operator2 = Math.floor(Math.random() * 10);
	const operands = ['+', '-', '*'];
	const operandInd = Math.floor(Math.random() * operands.length);
	const operand = operands[operandInd];
	const questionText = `${operator1} ${operand} ${operator2}`;
    
	let keyAnswer = 0;
	if (operandInd == 0) {
		keyAnswer = operator1 + operator2;
	}
	if (operandInd == 1) {
		keyAnswer = operator1 - operator2;
	}
	if (operandInd == 2) {
		keyAnswer = operator1 * operator2;
	}
    
	return [questionText, String(keyAnswer)];
};

gameSkeleton(greetText, QuestionAndAnswer);