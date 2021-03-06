// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Settings')
          .icon(() => 'โ๏ธ')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
          .title('Home')
          .icon(() => '๐ก')
          .child(
            S.document()
              .schemaType('homePage')
              .documentId('homePage')
        ),
        S.listItem()
          .title('Institute Of Design')
          .icon(() => '๐จ')
          .child(
            S.document()
              .schemaType('instituteOfDesign')
              .documentId('instituteOfDesign')
        ),
        S.listItem()
          .title('Textiles Of Senegal')
          .icon(() => '๐งข')
          .child(
            S.document()
              .schemaType('textilesOfSenegal')
              .documentId('textilesOfSenegal')
        ),
        S.listItem()
          .title('Studio')
          .icon(() => '๐')
          .child(
            S.document()
              .schemaType('studioPage')
              .documentId('studioPage')
        ),
        S.listItem()
          .title('Manufacturing')
          .icon(() => '๐ท๐ปโโ๏ธ')
          .child(
            S.document()
              .schemaType('manufacturing')
              .documentId('manufacturing')
        ),
        S.listItem()
          .title('Mobility')
          .icon(() => '๐')
          .child(
            S.document()
              .schemaType('movility')
              .documentId('movility')
        ),
        ...S.documentTypeListItems().filter(listItem => !['settingsPage', 'homePage', 'instituteOfDesign', 'textilesOfSenegal', 'studioPage', 'manufacturing', 'movility'].includes(listItem.getId()))
    ])