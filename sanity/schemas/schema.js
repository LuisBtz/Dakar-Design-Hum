// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import singleText from './objects/singleText'
import longText from './objects/longText'
import imageType from './objects/imageType'
import blockModule from './objects/blockModule'

import settingsPage from './pages/settingsPage'



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
    
    settingsPage,
  ]),
})