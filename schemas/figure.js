export default {
    name: 'figure', 
    type: 'object', 
    title: 'Insérer une image', 
    fields: [
        {
            name: 'image', 
            title: 'Image', 
            type: 'image', 
            validation: Rule => Rule.required().error('Champ requis')
        }, 
        {
            name: 'alt', 
            type: 'string', 
            title: 'Text alternatif', 
            validation: Rule => Rule.required().error('Champ requis')
        }, 
       
    ]
}