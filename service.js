app.service("servicer",function(){
	var productDetails={};
	productDetails.pname="LapTop";
	productDetails.brand="DELL";
	this.getPname=function(){
		return productDetails.pname;
	};
	this.getBrand=function(){
		return productDetails.brand;
	}
})