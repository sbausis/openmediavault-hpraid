
// require("js/omv/WorkspaceManager.js")

OMV.WorkspaceManager.registerNodeOverride({
	newpath : "/storage/mdadm",
    id      : "hpraid",
    path    : "/storage",
    //text    : _("HP Raid"),
    //icon16  : "images/raid.png",
    //iconSvg : "images/raid.svg"
});

OMV.WorkspaceManager.registerPanelOverride({
	newpath   : "/storage/mdadm",
    id        : "output",
    path      : "/storage/hpraid",
    text    : _("HP Raid"),
    //position  : 10,
    //className : "OMV.module.admin.storage.hpraid.Output"
});
