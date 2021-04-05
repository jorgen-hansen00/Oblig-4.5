const movie = {
    name: 'movie',
    title: 'Movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tittel',
            type: 'string',
            description: 'Skriv inn tittelen din her'
        },
        {
            name: 'actor',
            title: 'Actor',
            type: 'reference',
            to: [{type: 'actor'}]
        }
    ]
}

export default movie;