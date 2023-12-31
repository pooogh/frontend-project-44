#!/usr/bin/env node
import gameSkeleton from './game-skeleton.js';

const greetText = 'What number is missing in the progression?';

const QuestionAndAnswer = () => {
  const progressionCount = [5, 6, 7, 8, 9, 10];
  const progressionLengthIndex = Math.floor(Math.random() * progressionCount.length);
  const progressionLength = progressionCount[progressionLengthIndex];

  const progressionStep = Math.ceil(Math.random() * 30);
  const progressionMin = Math.floor(Math.random() * 100);

  const progression = [progressionMin];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  const keyAnswerIndex = Math.ceil(Math.random() * (progression.length - 1));
  const keyAnswer = progression[keyAnswerIndex];

  const leftSide = progression.slice(0, keyAnswerIndex).join(' ');
  const rightSide = progression.slice(keyAnswerIndex + 1).join(' ');

  return [`${leftSide} .. ${rightSide}`, keyAnswer];
};

gameSkeleton(greetText, QuestionAndAnswer);
