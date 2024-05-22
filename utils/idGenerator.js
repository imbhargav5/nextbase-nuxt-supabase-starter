let currentId = 0;
const usedIds = new Set();

export function generateId() {
    currentId++;
    while (usedIds.has(currentId)) {
        currentId++;
    }
    usedIds.add(currentId);
    return currentId;
}

export function resetIdGenerator() {
    currentId = 0;
    usedIds.clear();
}
