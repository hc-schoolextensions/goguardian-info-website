const ctxprops = {
    oi: "orgID",
    ou: "originalURL",
    st: "sourceType",
    rs: "reason",
    sci: "siteCategoryID",
    api: "adminPolicyID",
    afi: "adminFilterID",
    pfi: "parentFilterID",
    x3rpi: "x3ReportPublicID",
    tsi: "teacherSceneID",
    tsfi: "teacherSceneFilterID",
    tsans: "teacherSessionAdminNames",
    v: "v"
};
const rsprops = {
    BlockWebProxies: "BlockWebProxies",
    BLOCK_WEB_PROXIES: "BlockWebProxies",
    BLOCK_DIRECT_IP_ACCESS: "BlockDirectIPAccess",
    BLOCK_CONSUMER_ACCOUNTS: "BlockConsumerAccounts",
    ADMIN_SITE_FILTER: "AdminSiteFilter",
    ADMIN_SITE_CATEGORY_FILTER: "AdminSiteCategoryFilter",
    ADMIN_SAFE_MODE: "AdminSafeMode",
    PARENT_SITE_FILTER: "ParentSiteFilter",
    PARENT_PAUSE: "ParentPause",
    PARENT_SCHEDULED_PAUSE: "ParentScheduledPause",
    X3_REPORT: "X3Report",
    TEACHER_SCENE: "TeacherScene",
    UNKNOWN: "Unknown"
}
document.getElementById('closeicon').addEventListener('click', function () {window.location = `${location.protocol}//${location.host}`})
var ctx = new URLSearchParams(atob(decodeURI(new URLSearchParams(location.href.split('#')[1].split('?')[1]).get('ctx'))));
var tmpdata = '';
for (var pair of ctx.entries()) {
    tmpdata += `<strong>${ctxprops[pair[0]] ? ctxprops[pair[0]] : pair[0]}: </strong>${pair[0] == 'ou' ? decodeURI(pair[1]) : pair[0] == 'rs' ? rsprops[pair[1]] : pair[1]}<br>`;
}
data.innerHTML = `<p id="prefix" style="font-weight: 500;"><strong style="font-weight: bold;">GoGuardian Blocked Page Info</strong></p><div id="innerdatacontainer">${tmpdata}</div>`;