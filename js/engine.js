// Algorithmic Skill Gap & Matching Engine
window.S2CEngine = {
    calculateParity(coveredCount, totalRequiredCount) {
        return Math.round((coveredCount / totalRequiredCount) * 100);
    },

    generateAIBullet(subjectName, labConcept) {
        const templates = [
            `Engineered robust modules implementing ${labConcept} during ${subjectName} coursework, optimizing time complexity by 35%.`,
            `Applied advanced principles of ${labConcept} from ${subjectName} to design scalable algorithmic solutions.`,
            `Developed automated testing scripts evaluating ${labConcept} benchmarks under high-load conditions.`
        ];
        const randomIndex = Math.floor(Math.random() * templates.length);
        return templates[randomIndex];
    },

    filterCareers(query) {
        const careers = window.S2C_DATA.careers;
        if (!query) return careers;
        const q = query.toLowerCase();
        return careers.filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
    }
};