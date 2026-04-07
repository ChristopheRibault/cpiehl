import homepage from './homepage/homepage'
import settings from './settings'
import page from './page/page'
import {components} from './components'
import {homePageSections} from './homepage/sections'
import {pageSections} from './page/sections'

export const schemaTypes = [
  homepage,
  settings,
  page,
  ...homePageSections,
  ...pageSections,
  ...components,
]
