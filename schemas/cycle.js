export default {
    name: 'cycle', 
    type: 'document', 
    title: 'Cycles', 
    fields: [
        {
            name: 'title', 
            type: 'string', 
            title: 'Titre du cycle', 
            validation: Rule => Rule.required().error('Champ requis').max(255).error('Le titre doit comporter moins de 255 caractères')

        },
        {
            name: 'description', 
            type: 'richText', 
            title: 'Description du cycle', 
            validation: Rule => Rule.required().error('Champ requis')

        }
    ]
}