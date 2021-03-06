
var ssh2 = require('ssh2');
var telnet = require('../lib/util-telnet');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var shell = function () {

}
util.inherits(shell, EventEmitter);
shell.prototype.connect = function (opts) {
    this._protocol = opts.protocol || 'telnet'; //ssh
    this._host = opts.host || 'localhost';
    this._port = opts.port || (this._protocol == 'telnet') ? 23 : 22;
    this._log = opts.log || false;
    this._username = opts.username;
    this._password = opts.password;
    this._enpassword = opts.enpassword;
    this._promt = false;
    this._en = false;
    this._authenticated = false;

    this._sock = (this._protocol == 'telnet') ? new telnet() : new ssh2();

    this._stream = {};

    var _self = this;
    this._sock.connect(opts);
    this._sock.on('connect', function () {
        _self.emit('connect');
    });
    this._sock.on('banner', function (message, language) {
        _self.emit('data', message);
    });
    this._sock.on('ready', function () {
        _self._sock.shell(function (err, stream) {
            if (err) { console.log(err); }
            _self._stream = stream;
            _self._stream.setWindow(64, 200, 600, 800);
            _self._stream.on('data', function (data, extended) {
                _self.processBuffer(data);
            });
            _self._stream.on('end', function () {
                _self.emit('end');
            });
            _self._stream.on('close', function (had_error) {
                //_self.emit('close', had_error);
            });
            _self._stream.on('error', function (Error) {
                _self.emit('error', Error);
            });
            _self._stream.on('exit', function (code, signal) {
                _self._sock.end();
            });
        });
    });
    this._sock.on('data', function (data) {
        _self.processBuffer(data);

    });
    this._sock.on('timeout', function () {
        _self.emit('timeout');
    });
    this._sock.on('error', function (Error) {
        _self.emit('error', Error);
    });
    this._sock.on('end', function () {
        _self.emit('end');

    });
    this._sock.on('close', function (had_error) {
        _self.emit('close', had_error);

    });
}
shell.prototype.processBuffer = function (data) {
    var _self = this;
    
    if (!_self._authenticated && _self._password.length > 0) {
        _self.login(data);
    }
    if (_self._log) { console.log("rx:", data.toString()); }
    _self.emit('data', data);
}
shell.prototype.login = function (data) {
	var _self = this;
	data = data.toString();
    if ((data.indexOf("Username:") > -1 || data.indexOf("login:") == data.length - 7) && !_self._promt) {
        _self._promt = true;
        _self.write(_self._username + "\r");
    }
    else if ((data.indexOf("Password:") > -1)) {
    	if (_self._en) {
        		_self.write(_self._enpassword + "\r");
    	} else {
    		_self.write(_self._password + "\r");
        }
    }
    else if ((data.indexOf(">") > -1) && !_self._en && _self._enpassword.length > 0) {
        _self._en = true;
        _self.write("en\r");
    }
    else if ((data.indexOf("#") > -1)) {
        _self._authenticated = true;
    }
}
shell.prototype.write = function (data) {
    var _self = this;
    if (_self._log) { console.log("tx:", data.toString()); }
    (_self._protocol == 'telnet') ? _self._sock.write(data) : _self._stream.write(data);

}




module.exports = exports = shell;
exports.shell = shell;
exports.native = undefined;