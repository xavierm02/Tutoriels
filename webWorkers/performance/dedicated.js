postMessage(Date.now());
onmessage = function(event){
	var d=Date.now();
	if(typeof event.data === "string" && event.data[3]==","){
		var test=event.data.split(/,/g);
		d=Date.now();
		//postMessage(0);
	}else if(typeof event.data === "string" && event.data[0]=="{"){
		var test=JSON.parse(event.data);
		d=Date.now();
	}
	postMessage(d);
};
