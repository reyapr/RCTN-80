
const names = ['Bambang', 'Udin', 'Rian', 'Asep', 'Rizal', 'Ayu', 'Nurul', 'Siti', 'Saputra', 'Sri']

export const buildIdCombination = (id, str) => `ID: ${id}-${str}`
export const generateRandomId = () => Math.floor(Math.random() * 1000000000)
export const generateRandomName = () => names[Math.floor(Math.random() * names.length)]


export default names;