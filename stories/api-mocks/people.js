import faker from 'faker';
import { many } from './helpers';

// eslint-disable-next-line
export const createPerson = ({
    name = faker.name.findName(), key, avatar = faker.image.avatar()
} = {}) => {
    const person = {
        name,
        displayName: name,
        avatar,
        key: key || faker.helpers.slugify(name).toLowerCase(),
        username: key || faker.helpers.slugify(name).toLowerCase()
    };
    return person;
};


export const createPersonsList = many(createPerson);
