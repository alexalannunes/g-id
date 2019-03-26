function uuid (reg, base) {
    return reg.replace(/[x]/g, function(a) {
    	return a = (Math.random()*base|0).toString(base);
	})
}


uuid('xxx-xx', 16);
// 4de-da
