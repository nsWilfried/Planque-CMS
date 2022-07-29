export default {
    name: 'author', 
    type: 'document', 
    title: 'Auteur', 
    fields: [
        {
            name: 'author', 
            type: 'string', 
            title: 'Auteur', 
            validation: Rule => Rule.required().error('Champ requis').max(30).error("Le champ doit comporter moins de 30 caractères")
        }
    ]
}