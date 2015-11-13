/**
 * Module objects.
 * @private
 */
var fs = require("fs");
var cp = require("child_process");

module.exports = function(cmd, options, callback) {
    // check built-in execSync()
    if (cp.execSync) {
        return cp.execSync(cmd, options || {});
    }

    // process files
    var outFile = __dirname +"/../tmp/out",
        doneFile = __dirname +"/../tmp/done";

    // remove if these files exists
    try {
        fs.unlinkSync(outFile);
        fs.unlinkSync(doneFile);
    } catch (e) {}

    // run the command in a subshell
    cp.exec(cmd +" 2>&1 1> '"+ outFile +"' && echo 'done!' > '"+ doneFile +"'");

    // deprecated
    // https://nodejs.org/api/fs.html#fs_fs_existssync_path
    var fn = (fs.accessSync && "accessSync") || "existsSync";

    // just block the event loop while command'ing
    while (!fs[fn](doneFile)) {}

    // add utf-8
    var output = fs.readFileSync(""+ outFile +"", "utf-8");

    // remove tmp files
    fs.unlinkSync(outFile);
    fs.unlinkSync(doneFile);

    // sync but as s shortcut
    if (callback) {
        return callback(output);
    }

    return output;
};