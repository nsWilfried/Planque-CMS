export default {
    name: "post",  
    type: "document", 
    title: 'Post', 

    fields: [
        {
            name: 'title', 
            type: 'string', 
            title: 'Titre du post', 
            validation: Rule => {
                Rule.required().error('Champ requis')
                Rule.max(255).error('Le nombre de caractères doit être inférieur à 255')
            }
        }, 
        {
            name: 'description', 
            type: "richText", 
            title: "Description du post", 
            validation: Rule => Rule.required().error('Champ requis')
        }, 
        {
            name: 'date', 
            type: "datetime",
            title: 'Date de création', 
            validation: Rule => Rule.required().error('Champ requis')
        }, 
        {
            name: 'image', 
            type: 'figure', 
            title: 'Image du post', 
            validation: Rule => Rule.required().error('Champ requis')
        }, 
        {
            name: 'author', 
            title: 'Auteur', 
            type: 'reference', 
            to: [{type:'author'}]
        }
    ]
}