/**
 * Copyright (c) 2015 Kerem Güneş
 *    <http://qeremy.com>
 *
 * The MIT License
 *    <http://opensource.org/licenses/MIT>
 */

/**
 * Module objects.
 * @private
 */
var fs = require("fs");
var cp = require("child_process");

/**
 * Sync'ed exec.
 * @public
 *
 * @link   http://uri.li/yKHV Original source.
 * @param  {String}   cmd
 * @param  {Object}   options Used only if built-in execSync() exists.
 * @param  {Function} callback
 * @return {String}
 */
function execSync(cmd, options, callback) {
    // check built-in execSync()
    if (cp.execSync) {
        return cp.execSync(cmd, options || {});
    }

    // tmp directory
    var tmpDir = __dirname +"/../tmp";

    // create tmp directory
    try {
        fs.mkdirSync(tmpDir);
    } catch (e) {}

    // process files
    var outFile = tmpDir +"/out",
        doneFile = tmpDir +"/done";

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

/**
 * Expose module.
 */
module.exports = execSync;
