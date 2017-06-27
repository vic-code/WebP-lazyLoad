/*
* @Author: lenovo
* @Date:   2017-06-27 18:45:42
* @Last Modified by:   lenovo
* @Last Modified time: 2017-06-27 20:16:42
*/

'use strict';

function Supportwebp(opts){
	this.webpSrc='data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoBAAEAAAAMJaQAA3AA/v89WAAAAA=='; //1px webp占位图
	this.ele=opts.ele || $('.js-lazyWebp');  //图片元素，我们用了懒加载插件，所以图片绑定了.js-lazyWebp
	this.attr=opts.attr || 'data-original'; // 需要替换的图片属性
	this.suffix=opts.suffix || '.webp'; // 后缀名
	//回调
	this.yes=opts.yes || $.noop;	//支持
	this.no=opts.no || $.noop;	//不支持
	this.ok=opts.ok || $.noop;	//总是

	this.init();
}

Supportwebp.prototype={
	//检查
	check:function(options){
		var _this=this;
		var opts=options||{};
		var WebP=new Image();
		WebP.onload=function(){
			WebP.height==1?opts.yes():opts.no();
			opts.ok();
		};
		WebP.onerror=function(){
			opts.no();
            opts.ok();
		};
		WebP.src = this.webpSrc;
	},
	// 替换属性
	repeaceAttr:function(ele){
		if(ele && ele.getAttribute(this.attr)){
			ele.setAttribute(this.attr,ele.getAttribute(this.attr).replace(/(\.jpg|\.png|\.JPG|\.PNG)$/,'$1'+this.suffix));
		}
	},
	//初始化
	init:function(){
		var _this=this,
			eles=this.ele;
		this.check({
			yes:function(){
                if(eles && eles.length){
                    for(var i=0;i<eles.length;i++) {
                        _this.repeaceAttr(eles[i]);
                    }
                }
                _this.yes(eles);
            },
            no:function(){
                _this.no(eles);
            },
            ok:function(){
            	_this.ok(eles);
            }
		});
	}
};
