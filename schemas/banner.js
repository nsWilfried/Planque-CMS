export default {
    name: 'banner', 
    type: 'document', 
    title: 'Infos  du banner', 
    fields: [
        {
            name: 'title', 
            type: 'string', 
            title: 'Titre de l\'information', 
            validation: Rule => Rule.required().error('Champ requis').max(255).error('Le titre doit comporter moins de 255 caractères')

        },
        {
            name: 'description', 
            type: 'richText', 
            title: 'Description de l\'information', 
            validation: Rule => Rule.required().error('Champ requis')

        }
    ]
}