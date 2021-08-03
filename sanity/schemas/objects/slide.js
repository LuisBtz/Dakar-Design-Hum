export default {
    name: 'slide',
    title: 'Slide',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
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
          title: 'text.en',
          media: 'backgroundImage'
        },
      },
}