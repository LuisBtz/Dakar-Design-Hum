// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import singleText from './objects/singleText'
import longText from './objects/longText'
import imageType from './objects/imageType'
import blockModule from './objects/blockModule'
import slide from './objects/slide'
import link from './objects/link'
import programDocument from './objects/programDocument'
import aplicationDocument from './objects/aplicationDocument'
import tuitionDocument from './objects/tuitionDocument'
import project from './objects/project'

import settingsPage from './pages/settingsPage'
import homePage from './pages/homePage'
import instituteOfDesign from './pages/instituteOfDesign'
import textilesOfSenegal from './pages/textilesOfSenegal'
import studioPage from './pages/studioPage'
import manufacturing from './pages/manufacturing'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    
    singleText,
    imageType,
    longText,
    blockModule,
    slide,
    link,
    programDocument,
    aplicationDocument,
    tuitionDocument,
    project,
    
    settingsPage,
    homePage,
    instituteOfDesign,
    textilesOfSenegal,
    studioPage,
    manufacturing
  ]),
})
