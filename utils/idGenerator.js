import { v4 as uuidv4 } from 'uuid';

const usedIds = new Set();

export function generateId() {
    let newId = uuidv4();
    while (usedIds.has(newId)) {
        newId = uuidv4();
    }
    usedIds.add(newId);
    return newId;
}

export function resetIdGenerator() {
    usedIds.clear();
}
