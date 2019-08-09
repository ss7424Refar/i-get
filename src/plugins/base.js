exports.install = function (Vue, options) {
    Vue.prototype.text1 = function (){//全局函数1
        alert('执行成功1');
    };
    Vue.prototype.text2 = function (){//全局函数2
        alert('执行成功2');
    };
};
