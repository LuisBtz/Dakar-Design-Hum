export default {
    name: 'project',
    title: 'Project',
    type: 'object',
    fields: [
        {
            name: 'projectName',
            title: 'Project Name',
            type: 'singleText',
        },
        {
            name: 'studentName',
            title: 'Student Name',
            type: 'singleText'
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'singleText'
        },
        {
            name: 'quoteFrom',
            title: 'Quote From',
            type: 'singleText'
        },
        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'imageType'
        }
        
    ],
    preview: {
        select: {
            title: 'projectName.en',
            subtitle: 'studentName.en',
            media: 'backgroundImage'
        },
      },
}