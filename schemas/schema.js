// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import post from './post'
import richText from './richText'
import figure from './figure'
import author from './author'
import banner from './banner'
import cycle from './cycle'
import faq from './faq'
import firstInfo from './firstInfo'
import agenda from './agenda'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    post, richText, figure, author, banner, cycle, faq, firstInfo, agenda
  ]),
})
