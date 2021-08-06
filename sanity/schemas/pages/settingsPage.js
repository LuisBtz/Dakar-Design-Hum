export default {
    //
    name: 'settingsPage',
    title: 'Settings',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'descriptionSite',
            title: 'Description Site',
            type: 'longText'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'imageType'
        },
        {
            name: 'verticalLogo',
            title: 'Vertical Logo',
            type: 'imageType'
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'singleText'
        },
        {
            name: 'addressEn',
            title: 'Adress En',
            type: 'blockModule'
        },
        {
            name: 'addressFr',
            title: 'Adress Fr',
            type: 'blockModule'
        },
        {
            name: 'email',
            title: 'E-mail',
            type: 'string'
        },
        {
            name: 'socialMedia',
            title: 'Social Media',
            type: 'array',
            of: [{type:'link'}]
        }
    ],
}