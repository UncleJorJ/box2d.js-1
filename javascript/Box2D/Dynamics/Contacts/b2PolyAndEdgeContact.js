var b2PolyAndEdgeContact = function() {
b2Contact.prototype.__varz.call(this)
this.__varz();
this.__constructor.apply(this, arguments);
}
extend(b2PolyAndEdgeContact.prototype, b2Contact.prototype)
b2PolyAndEdgeContact.prototype._super = function(){ b2Contact.prototype.__constructor.apply(this, arguments) }
b2PolyAndEdgeContact.prototype.__constructor = function(){}
b2PolyAndEdgeContact.prototype.__varz = function(){
}
// static attributes
// static methods
b2PolyAndEdgeContact.Create = function (allocator) {
		return new b2PolyAndEdgeContact();
	}
b2PolyAndEdgeContact.Destroy = function (contact, allocator) {
	}
// attributes
// methods
b2PolyAndEdgeContact.prototype.b2CollidePolyAndEdge = function (manifold,
	 polygon, 
	 xf1,
	 edge, 
	 xf2) {
		
		
	}
b2PolyAndEdgeContact.prototype.Reset = function (fixtureA, fixtureB) {
		this._super.Reset(fixtureA, fixtureB);
		b2Settings.b2Assert(fixtureA.GetType() == b2Shape.e_polygonShape);
		b2Settings.b2Assert(fixtureB.GetType() == b2Shape.e_edgeShape);
	}