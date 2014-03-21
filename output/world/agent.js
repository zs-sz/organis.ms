// Generated by CoffeeScript 1.3.3
var Agent,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Agent = (function(_super) {

  __extends(Agent, _super);

  function Agent(options) {
    Agent.__super__.constructor.call(this, 0.0, 0.0);
    core.extend(this, core.defaults(options || {}, {
      radius: 10,
      damping: 0.995,
      behaviors: [],
      maxSpeed: 1.0,
      maxForce: 1.0,
      vel: new Vector(),
      acc: new Vector()
    }));
  }

  Agent.prototype.update = function() {
    var behavior, _i, _len, _ref;
    _ref = this.behaviors;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      behavior = _ref[_i];
      behavior.apply(this);
    }
    this.vel.add(this.acc.limit(this.maxForce));
    this.add(this.vel.limit(this.maxSpeed));
    this.vel.scale(this.damping);
    return this.acc.clear();
  };

  return Agent;

})(Vector);