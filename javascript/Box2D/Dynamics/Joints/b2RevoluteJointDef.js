var b2RevoluteJointDef = function() {
b2JointDef.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2RevoluteJointDef.prototype, b2JointDef.prototype)
b2RevoluteJointDef.prototype._super = function(){ b2JointDef.prototype.__constructor.apply(this, arguments) }
b2RevoluteJointDef.prototype.__constructor = function () {
		this.type = b2Joint.e_revoluteJoint;
		this.localAnchorA.Set(0.0, 0.0);
		this.localAnchorB.Set(0.0, 0.0);
		this.referenceAngle = 0.0;
		this.lowerAngle = 0.0;
		this.upperAngle = 0.0;
		this.maxMotorTorque = 0.0;
		this.motorSpeed = 0.0;
		this.enableLimit = false;
		this.enableMotor = false;
	}
b2RevoluteJointDef.prototype.__varz = function(){
this.localAnchorA =  new b2Vec2();
this.localAnchorB =  new b2Vec2();
}
// static attributes
// static methods
// attributes
b2RevoluteJointDef.prototype.localAnchorA =  new b2Vec2();
b2RevoluteJointDef.prototype.localAnchorB =  new b2Vec2();
b2RevoluteJointDef.prototype.referenceAngle =  null;
b2RevoluteJointDef.prototype.enableLimit =  null;
b2RevoluteJointDef.prototype.lowerAngle =  null;
b2RevoluteJointDef.prototype.upperAngle =  null;
b2RevoluteJointDef.prototype.enableMotor =  null;
b2RevoluteJointDef.prototype.motorSpeed =  null;
b2RevoluteJointDef.prototype.maxMotorTorque =  null;
// methods
b2RevoluteJointDef.prototype.Initialize = function (bA, bB, anchor) {
		this.bodyA = bA;
		this.bodyB = bB;
		this.localAnchorA = this.bodyA.GetLocalPoint(anchor);
		this.localAnchorB = this.bodyB.GetLocalPoint(anchor);
		this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	}