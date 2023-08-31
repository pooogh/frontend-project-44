#!/usr/bin/env node
import gameSkeleton from './game-skeleton.js';

const greetText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const QuestionAndAnswer = () => {
  const question = Math.floor(Math.random() * 100);

  let keyAnswer = '';
  let mark = true;

  for (let i = 2; i <= question ** 0.5; i += 1) {
    if (question % i === 0) {
      mark = false;
    }
  }

  if (mark === false) {
    keyAnswer = 'no';
  } else {
    keyAnswer = 'yes';
  }

  return [question, keyAnswer];
};

gameSkeleton(greetText, QuestionAndAnswer);
