import Chance from 'chance';
const chance = new Chance();

export const randomUUID = () => chance.guid();
export const randomName = () => chance.name();
export const randomEmail = () => chance.email();
export const randomId = () => chance.fbid();
export const randomJobTitle = () => chance.profession();
export const randomCompanyNmae = () => chance.company();
export const randomSentence = (words = 5) => chance.sentence({words});
export const randomTitleText = (words = 5) => chance.sentence({words});
export const radomParagraph = (words = 5) => chance.paragraph({words});