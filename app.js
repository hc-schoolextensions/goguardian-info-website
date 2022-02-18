var urldata = new URLSearchParams(location.search);
var ctxdataurl = window.location.href.split("#")[1];
var ctxdata = new URLSearchParams(ctxdataurl.split("?")[1]);
var ctxdataencoded = ctxdata.get('ctx');
var ctxdatadecoded = window.atob(ctxdataencoded);
var ctxdataurlsearchparams = new URLSearchParams(ctxdatadecoded);
var afitxt = ctxdataurlsearchparams.get('afi');
var afi = "";
if (afitxt != null) {
    afi = "<strong>Admin Filter ID:</strong> " + ctxdataurlsearchparams.get('afi') + '<br>';
}
var apitxt = ctxdataurlsearchparams.get('api');
var api = "";
if (apitxt != null) {
    api = "<strong>API ID:</strong> " + ctxdataurlsearchparams.get('api') + '<br>';
}
var organizationid = "<strong>Orgaization ID:</strong> " + ctxdataurlsearchparams.get('oi') + '<br>';
var blockedurl = "<strong>Blocked URL:</strong> " + decodeURI(ctxdataurlsearchparams.get('ou')) + '<br>';

var blockedreasonone = ctxdataurlsearchparams.get('rs');
var blockedreason;
var categoryid;
if (blockedreasonone == "ADMIN_SITE_CATEGORY_FILTER") {
    categoryid = "<strong>Category ID:</strong> " + ctxdataurlsearchparams.get('sci') + '<br>';
    blockedreason = "<strong>Blocked Reason:</strong> GoGuardian Admin Site Categoty Filter Lists<br>";
}
else if (blockedreasonone == "ADMIN_SITE_FILTER") {
    blockedreason = "<strong>Blocked Reason:</strong> GoGuardian Admin Custom Site Filter List<br>";
}
else if (blockedreasonone == "BLOCK_CONSUMER_ACCOUNTS") {
    blockedreason = "<strong>Blocked Reason:</strong> GoGuardian Admin Block Consumer Accounts<br>";
}
else {
    blockedreason = "<strong>Blocked Reason:</strong> " + blockedreasonone + "<br>";
}

var browser = "<strong>Browser:</strong> " + ctxdataurlsearchparams.get('st') + '<br>';
var priority = "<strong>Priority:</strong> " + ctxdataurlsearchparams.get('v');
var prefix = "<p id='prefix' style='font-weight: 500 bolder;'><strong style='font-weight: 500 bolder;'>GoGuardian Block Page Info</strong></p>"
var full;
if (categoryid == undefined) {
    full = prefix + afi + api + organizationid + blockedurl + blockedreason + browser + priority;
}
else {
    full = prefix + afi + api + organizationid + blockedurl + blockedreason + categoryid + browser + priority;
}
document.getElementById('data').innerHTML = full;

function back() {
    window.location = location.protocol + "//" + location.host;
}