
export const fetchItemById = async (id) => {
    const storedItems = JSON.parse(localStorage.getItem('privateItems')) || [];
    return storedItems.find(item => item.id == id);
};
