export default {
    name: "agenda", 
    title: "Agenda de l'année", 
    type: "document", 
    fields: [
        {
            name: "title", 
            title: "Titre de l'évènement", 
            type: "string", 
            validation: Rule => Rule.required().error('Champ requis')
        }, 
        {
            name: "description", 
            title: "Description",
            type: "richText", 
            validation: Rule => Rule.required().error('Champ requis')
        }, 
        {
            name: "date", 
            title: "Date de l'évènement", 
            type: "date", 
            validation: Rule => Rule.required().error('Champ requis')
        }
    ]
}