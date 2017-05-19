app.provider("exprovider",function(){
	var CustDetails={};
	CustDetails.name="Savi Sharma";
	CustDetails.location="Bhopal"; 
	CustDetails.getName=function(){
		return this.name+""+this.location;
	}
	this.$get=function(){
		return CustDetails;
	}
})


