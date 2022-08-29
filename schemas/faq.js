export default {
    name: "faq", 
    type: "document", 
    title: "Foire aux questions", 
    fields: [
        {
            name: 'question', 
            title: "Question",
            type:"string",
            validation: Rule => Rule.required().error('Champ requis')
        }, 
        {
            name: 'response', 
            title: "Réponse",
            type:"richText",
            validation: Rule => Rule.required().error('Champ requis')
        }
    ]
}