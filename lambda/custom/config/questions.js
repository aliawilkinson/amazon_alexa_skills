'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 * 
 * Use this file to create your own set of questions.
 * 
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 * 
 * When adding or updating questions and answers, you must take the list of all values 
 * in each of the 'answers' arrays for all questions and add them to a custom slot 
 * in your skill called 'answers'.
 * 
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order 
 * to maximize the accuracy of the model.
 * 
 * For example: 
 *      AnswerOnlyIntent {answers}
 * 
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 * 
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 * 
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions: {
        'en': {
            'us': [
                {
                    index: 1,
                    question: 'What is the capital of Argentina?',
                    answers: ['Sucre', 'Asunción', 'Montevideo', 'Buenos Aires'],
                    correct_answer: 'Buenos Aires'
                },
                {
                    index: 2,
                    question: 'What is the capital of Bolivia?',
                    answers: ['Santiago', 'Asunción', 'Montevideo', 'Sucre'],
                    correct_answer: 'Sucre'
                },
                {
                    index: 3,
                    question: 'What is the capital of Chile?',
                    answers: ['Sucre', 'Bogotá', 'Buenos Aires', 'Santiago'],
                    correct_answer: 'Santiago'
                },
                {
                    index: 4,
                    question: 'What is the capital of Brasil?',
                    answers: ['Sucre', 'Santiago', 'Buenos Aires', 'Brasília'],
                    correct_answer: 'Brasília'
                },
                {
                    index: 5,
                    question: 'What is the capital of Colombia?',
                    answers: ['Sucre', 'Santiago', 'Montevideo', 'Bogotá'],
                    correct_answer: 'Bogotá'
                },
                {
                    index: 6,
                    question: 'What is the capital of Ecuador?',
                    answers: ['Sucre', 'Santiago', 'Montevideo', 'Quito'],
                    correct_answer: 'Quito'
                },
                {
                    index: 7,
                    question: 'What is the capital of Guyana?',
                    answers: ['Brasília', 'Quito', 'Paramaribo', 'Georgetown'],
                    correct_answer: 'Georgetown'
                },
                {
                    index: 8,
                    question: 'What is the capital of Paraguay?',
                    answers: ['Brasília', 'Quito', 'Paramaribo', 'Asunción'],
                    correct_answer: 'Asunción'
                },
                {
                    index: 9,
                    question: 'What is the capital of Peru?',
                    answers: ['Caracas', 'Asunción', 'Paramaribo', 'Lima'],
                    correct_answer: 'Lima'
                },
                {
                    index: 10,
                    question: 'What is the capital of Suriname?',
                    answers: ['Caracas', 'Bogotá', 'Lima', 'Paramaribo'],
                    correct_answer: 'Paramaribo'
                },
                {
                    index: 11,
                    question: 'What is the capital of Uruguay?',
                    answers: ['Caracas', 'Bogotá', 'Paramaribo', 'Montevideo'],
                    correct_answer: 'Montevideo'
                },
                {
                    index: 12,
                    question: 'What is the capital of Venezuela?',
                    answers: ['Sucre', 'Bogotá', 'Paramaribo', 'Caracas'],
                    correct_answer: 'Caracas'
                },
            ]
        }
    }
});
