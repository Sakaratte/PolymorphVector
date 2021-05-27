/**
 * @typedef {Object} Indicator
 * @property {string} html of the indicator link.
 * @property {string} id of the indicator.
 * @property {string} class of the indicator
 */

/**
 * @typedef {Object} LogoOptions
 * @property {string} src of logo. Can be relative, absolute or data uri.
 * @property {string} [alt] text of logo.
 * @property {number} width of asset
 * @property {number} height of asset
 */

/**
 * @typedef {Object} ResourceLoaderSkinModuleLogos
 * @property {string} [icon] e.g. Wikipedia globe
 * @property {LogoOptions} [wordmark] e.g. Legacy Vector logo
 * @property {LogoOptions} [tagline] e.g. Legacy Vector logo
 */

/**
 * @typedef {Object} LogoTemplateData
 * @property {ResourceLoaderSkinModuleLogos} data-logos as configured,
 *  the return value of ResourceLoaderSkinModule::getAvailableLogos.
 * @property {string} msg-sitetitle alternate text for wordmark
	href the url to navigate to on click.
 * @property {string} msg-sitesubtitle alternate text for tagline.
 */

/**
 * @typedef {Object} SidebarData
 * @property {MenuDefinition} data-portals-languages
 * @property {MenuDefinition} data-portlets-first
 * @property {MenuDefinition[]} array-portlets-rest
 */

/**
 * @typedef {Object} SearchData
 * @property {string|null} msg-search
 * @property {string} [html-user-language-attributes]
 * @property {string} form-action URL
 * @property {string|null} html-input
 * @property {string|null} page-title the title of the search page
 * @property {string|null} html-button-search-fallback
 * @property {string|null} html-button-search
 * @property {string} [input-location] An identifier corresponding the position of the search
 *  widget on the page, e.g. "header-navigation"
 */

/**
 * @typedef {Object} MenuDefinition
 * @property {string} id
 * @property {string} label
 * @property {string} html-items
 * @property {string} [heading-class]
 * @property {string} [html-tooltip]
 * @property {string} [class] of menu
 * @property {string} [html-user-language-attributes]
 * @property {boolean} [is-dropdown]
 * @property {string} [html-after-portal] Additional HTML specific to portal menus.
 */

/**
 * @typedef {Object.<string, MenuDefinition>} MenuDefinitions
 */

/**
 * @typedef {Object} UserLinksDataDefinition
 * @property {string} html-login
 * @property {string} html-create-account
 * @property {string} html-vector-anon-user-menu-pages-learn
 */

/**
 * @typedef {MenuDefinition} UserMenuDefinition
 * @property {boolean} is-anon
 * @property {string} [msg-vector-anon-user-menu-pages]
 * @property {UserLinksDataDefinition} [data-userlinks]
 */

/**
 * @typedef {Object} UserLinksDefinition
 * @property {boolean} is-anon
 * @property {MenuDefinition} [data-notifications]
 * @property {MenuDefinition} [data-user-page]
 * @property {UserMenuDefinition} data-user-menu
 * @property {UserLinksDataDefinition}  [data-userlinks]
 */
