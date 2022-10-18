'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pokemon-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-512c6a342df43f6793902eb6df7af0fd1b687b43b46687908e686eae1de1917f6b5ef82ece3bf8dc09f62eb3dd0466163e7440a94a4471e48f52e59de129b153"' : 'data-target="#xs-components-links-module-AppModule-512c6a342df43f6793902eb6df7af0fd1b687b43b46687908e686eae1de1917f6b5ef82ece3bf8dc09f62eb3dd0466163e7440a94a4471e48f52e59de129b153"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-512c6a342df43f6793902eb6df7af0fd1b687b43b46687908e686eae1de1917f6b5ef82ece3bf8dc09f62eb3dd0466163e7440a94a4471e48f52e59de129b153"' :
                                            'id="xs-components-links-module-AppModule-512c6a342df43f6793902eb6df7af0fd1b687b43b46687908e686eae1de1917f6b5ef82ece3bf8dc09f62eb3dd0466163e7440a94a4471e48f52e59de129b153"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-4fce817313c556abe81f649c9ec38447e5002c88e7ca3774552e3caa9aae3d96893bf62a97468945897cacdde888ee0353a2c242ce3bdb7224edd3ed13db3d35"' : 'data-target="#xs-components-links-module-ComponentsModule-4fce817313c556abe81f649c9ec38447e5002c88e7ca3774552e3caa9aae3d96893bf62a97468945897cacdde888ee0353a2c242ce3bdb7224edd3ed13db3d35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-4fce817313c556abe81f649c9ec38447e5002c88e7ca3774552e3caa9aae3d96893bf62a97468945897cacdde888ee0353a2c242ce3bdb7224edd3ed13db3d35"' :
                                            'id="xs-components-links-module-ComponentsModule-4fce817313c556abe81f649c9ec38447e5002c88e7ca3774552e3caa9aae3d96893bf62a97468945897cacdde888ee0353a2c242ce3bdb7224edd3ed13db3d35"' }>
                                            <li class="link">
                                                <a href="components/PkmButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PkmButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PkmCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PkmCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PkmFavButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PkmFavButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PkmTopBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PkmTopBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-8dc22798f002590c5261734c373900300f71dfae9a1a8bcbb8de5c2b3ab1ca313577997ba968fab1255f731367003d8583c3ce6a333ff9d041ff4af04143ad61"' : 'data-target="#xs-components-links-module-PagesModule-8dc22798f002590c5261734c373900300f71dfae9a1a8bcbb8de5c2b3ab1ca313577997ba968fab1255f731367003d8583c3ce6a333ff9d041ff4af04143ad61"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-8dc22798f002590c5261734c373900300f71dfae9a1a8bcbb8de5c2b3ab1ca313577997ba968fab1255f731367003d8583c3ce6a333ff9d041ff4af04143ad61"' :
                                            'id="xs-components-links-module-PagesModule-8dc22798f002590c5261734c373900300f71dfae9a1a8bcbb8de5c2b3ab1ca313577997ba968fab1255f731367003d8583c3ce6a333ff9d041ff4af04143ad61"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavoritesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoritesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link" >PagesRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PokemonService.html" data-type="entity-link" >PokemonService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});