export default {
    name: "first-information", 
    title: "Information d'urgence", 
    type: "document", 
    fields: [
        {
            name: "information", 
            title: "Information", 
            type: "richText", 
            validation: Rule => Rule.required().error('Champ requis')
        }
    ]
}