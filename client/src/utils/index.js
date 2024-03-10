import {surpriseMePrompts} from '../constants';

export function getRandomPrompt (prompt){
    const randomIndex = math.floor(math.random() * surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[randomIndex];


    if (randomPrompt === prompt ) return getRandomPrompt(prompt)
    return randomPrompt;
}