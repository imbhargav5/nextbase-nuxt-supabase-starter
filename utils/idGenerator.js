let currentId = 0;
const usedIds = new Set();

export function generateId() {
    if (currentId < 1000) {
        currentId++;
        usedIds.add(currentId);
        return currentId;
    } else {
        throw new Error("No more available IDs");
    }
}

export function resetIdGenerator() {
    currentId = 0;
    usedIds.clear();
}
