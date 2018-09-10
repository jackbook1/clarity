/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree-node [(clrSelected)]="selected">
    Permissions
    <ng-template [clrIfExpanded]="true">
        <clr-tree-node
                *ngFor="let permission of permissions"
                [(clrSelected)]="permission.selected">
            {{permission.type}}
            <ng-template [(clrIfExpanded)]="permission.expanded">
                <clr-tree-node *ngFor="let right of permission.rights" [(clrSelected)]="right.enable">
                    {{right.name}}
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
`

const EXAMPLE_TS = `
export class TreeViewPrepopulateDemo {
    selected: boolean = false;

    permissions: any = [
        {
            type: "Authenticated Users",
            selected: false,
            expanded: true,
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: false
                }
            ]
        },
        {
            type: "Owners",
            selected: false,
            expanded: true,
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: true
                }
            ]
        },
        {
            type: "Public",
            selected: false,
            expanded: true,
            rights: [
                {
                    name: "Read",
                    enable: false
                },
                {
                    name: "Modify",
                    enable: true
                }
            ]
        }
    ];
}
`

@Component({
    selector: "clr-tree-view-prepopulate-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "tree-view-prepopulate.html"
})
export class TreeViewPrepopulateDemo {
    example_html = EXAMPLE_HTML;
    example_ts = EXAMPLE_TS;

    @Input("clrDemoShowCode") showCode: boolean = false;

    selected: boolean = false;

    permissions: any = [
        {
            type: "Authenticated Users",
            selected: false,
            expanded: true,
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: false
                }
            ]
        },
        {
            type: "Owners",
            selected: false,
            expanded: true,
            rights: [
                {
                    name: "Read",
                    enable: true
                },
                {
                    name: "Modify",
                    enable: true
                }
            ]
        },
        {
            type: "Public",
            selected: false,
            expanded: true,
            rights: [
                {
                    name: "Read",
                    enable: false
                },
                {
                    name: "Modify",
                    enable: true
                }
            ]
        }
    ];
}