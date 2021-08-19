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
        S.listItem()
          .title('Institute Of Design')
          .icon(() => '🎨')
          .child(
            S.document()
              .schemaType('instituteOfDesign')
              .documentId('instituteOfDesign')
        ),
        S.listItem()
          .title('Textiles Of Senegal')
          .icon(() => '🧢')
          .child(
            S.document()
              .schemaType('textilesOfSenegal')
              .documentId('textilesOfSenegal')
        ),
        S.listItem()
          .title('Studio')
          .icon(() => '🎙')
          .child(
            S.document()
              .schemaType('studioPage')
              .documentId('studioPage')
        ),
        S.listItem()
          .title('Manufacturing')
          .icon(() => '👷🏻‍♀️')
          .child(
            S.document()
              .schemaType('manufacturing')
              .documentId('manufacturing')
        ),
        S.listItem()
          .title('Mobility')
          .icon(() => '🚙')
          .child(
            S.document()
              .schemaType('movility')
              .documentId('movility')
        ),
        ...S.documentTypeListItems().filter(listItem => !['settingsPage', 'homePage', 'instituteOfDesign', 'textilesOfSenegal', 'studioPage', 'manufacturing', 'movility'].includes(listItem.getId()))
    ])