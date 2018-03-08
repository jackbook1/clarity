import { Component } from '@angular/core';


const ICONS_IMPORTS_ALL = `
<!--CLARITY ICONS STYLE-->
<link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css">

<!--CLARITY ICONS DEPENDENCY: CUSTOM ELEMENTS POLYFILL-->
<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>

<!--CLARITY ICONS API & ALL ICON SETS-->
<script src="path/to/node_modules/@clr/icons/clr-icons.min.js"></script>
`;

const ICONS_IMPORTS_SOME = `
<!--CLARITY ICONS STYLE-->
<link rel="stylesheet" href="path/to/node_modules/@clr/icons/clr-icons.min.css">

<!--CLARITY ICONS DEPENDENCY: CUSTOM ELEMENTS POLYFILL-->
<script src="path/to/node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>

<!--CLARITY ICONS API & CORE SHAPES SET-->
<script src="path/to/node_modules/@clr/icons/clr-icons-lite.min.js"></script>

<!--ICON SETS-->
<script src="path/to/node_modules/@clr/icons/shapes/social-shapes.min.js"></script>
<script src="path/to/node_modules/@clr/icons/shapes/travel-shapes.min.js"></script>
`;

const ICONS_IMPORTS_TS_CORE = `
import '@clr/icons';
`;

const ICONS_IMPORTS_TS_SOME = `
import '@clr/icons';
import '@clr/icons/shapes/essential-shapes';
import '@clr/icons/shapes/technology-shapes';
`;

const ICONS_IMPORTS_TS_ALL = `
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
`;

const ICONS_NODE_IMPORTS = `
"styles": [
    ...
    "../node_modules/@clr/icons/clr-icons.min.css",
    ...
],
"scripts": [
    ...
    "../node_modules/@webcomponents/custom-elements/custom-elements.min.js",
    "../node_modules/@clr/icons/clr-icons.min.js"
    ...
]`;

const ICONS_TS_IMPORTS = `
    import '@clr/icons';
import '@clr/icons/shapes/essential-shapes';
`;

const ICONS_OPTIMIZATION = `
import { ClarityIcons } from "@clr/icons";
import { ClrShapePin } from "@clr/icons/shapes/essential-shapes";
import { ClrShapeStar } from "@clr/icons/shapes/social-shapes";
import { ClrShapeCar } from "@clr/icons/shapes/travel-shapes";

ClarityIcons.add({
  pin: ClrShapePin,
  star: ClrShapeStar,
  car: ClrShapeCar
});`

@Component({
    selector: 'icons-get-started',
    templateUrl: './icons-get-started.component.html',
    styleUrls: ['./icons-get-started.component.scss']
})
export class IconsGetStartedComponent {

    public iconsImportsAllExample = ICONS_IMPORTS_ALL;
    public iconsImportsSomeExample = ICONS_IMPORTS_SOME;
    public iconsImportsTSCoreExample = ICONS_IMPORTS_TS_CORE;
    public iconsImportsTSSomeExample = ICONS_IMPORTS_TS_SOME;
    public iconsImportsTSAllExample = ICONS_IMPORTS_TS_ALL;
    public iconsOptimizationExample = ICONS_OPTIMIZATION;

}
