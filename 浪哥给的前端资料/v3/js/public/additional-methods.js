/* 价格验证 */
$.validator.addMethod( "currency", function( value, element, param ) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[ 0 ],
        soft = isParamString ? true : param[ 1 ],
        regex;

    symbol = symbol.replace( /,/g, "" );
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp( regex );
    return this.optional( element ) || regex.test( value );
	// new RegExp("^[]?([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$").test("0.04");

}, "请输入正确的金额" );
/* 手机验证 */
$.validator.addMethod( "mobile", function( value, element, param ) {    
    return this.optional( element ) || /^1[3|4|5|6|7|8|9]\d{9}$/.test( value );
}, "请输入正确的手机号码" );
/* 邮政编码验证 */
$.validator.addMethod( "zipcode", function( value, element, param ) {    
    return this.optional( element ) || /^[0-9]{6}$/.test( value );
}, "请输入正确的邮编" );
/* 身份证验证 */
/* 手机或者邮箱 */
$.validator.addMethod( "emailormobile", function( value, element, param ) {    
    return this.optional( element ) || /^1[3|4|5|6|7|8|9]\d{9}$|^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test( value );
}, "请输入正确的邮箱或者手机号码" );
/* 手机或者邮箱或者用户名 */
$.validator.addMethod( "username", function( value, element, param ) {    
    return this.optional( element ) || /^1[3|4|5|6|7|8|9]\d{9}$|^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$|^[_a-zA-Z0-9\-]{4,16}$/.test( value );
}, "请输入正确的邮箱或者手机号码或者用户名" );
/* 电话号码验证 */
$.validator.addMethod( "tel", function( value, element, param ) {    
    return this.optional( element ) || /^(\d{3,4}-)\d{7,8}$/.test( value );
}, "请输入正确的电话号码" );
/* QQ号码 */
$.validator.addMethod( "qq", function( value, element, param ) {    
    return this.optional( element ) || /^[0-9]{5,12}$/.test( value );
}, "请输入正确的QQ号码" );