// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Settings')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
          .title('Home')
          .icon(() => '🏡')
          .child(
            S.document()
              .schemaType('homePage')
              .documentId('homePage')
        ),
        ...S.documentTypeListItems().filter(listItem => !['settingsPage', 'homePage'].includes(listItem.getId()))
    ])