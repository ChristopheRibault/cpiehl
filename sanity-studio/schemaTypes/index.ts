import homepage from './homepage'
import settings from './settings'
import page from './page'
import {components} from './components'
import {homePageSections} from './homePageSections'

export const schemaTypes = [homepage, settings, page, ...homePageSections, ...components]
