const Util = {
  // 小数位数
  decimalDigits: (number, digts = 2, thousands = ',') => {
    if (typeof number !== 'number') return false;
    let result = Math.floor(Util.mul(number, Math.pow(10, digts))) / Math.pow(10, digts);
    const resultArray = result.toString().split('.');
    if (thousands) {
      let re = /(-?\d+)(\d{3})/;
      while (re.test(resultArray[0])) {
        resultArray[0] = resultArray[0].replace(re, '$1' + thousands + '$2');
      }
    }
    result = resultArray.join('.');
    return result;
  },
  // 分割更多数组
  toMoreArr(arr, key) {
    if (!Array.isArray(arr)) return false;
    let result = [];
    let length1 = arr.length;
    for (let i = 0, j = 0; i < length1; i += key, j++) {
      result[j] = arr.splice(-key, key);
    }
    return result;
  },

  // 把数字转换成中文
  toChineseNum(y) {
    const arr1 = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const arr2 = ['', '十', '百', '千'];
    const arr3 = ['', '万', '亿', '兆'];
    let str = '';
    let str3 = '';
    if (!y) return false;
    if (typeof y !== 'number') return false;
    const str1 = [...Array.from(String(y))];
    const str2 = Util.toMoreArr(str1, 4);
    str2.map((i, v) => {
      i.map((k, n) => {
        str = `${str}${arr1[Number(k)]}${arr2[Number(i.length - n - 1)]}`;
      });
      str3 = `${str}${arr3[v]}${str3}`;
      str = '';
    });

    str3 = str3
      .replace(/零[零十百千]+/g, '零')
      .replace(/零+$/g, '')
      .replace(/零万/g, '万');
    return str3;
  },
  //加法
  add(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var r1, r2, m, c;
    try {
      r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
      r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
      var cm = Math.pow(10, c);
      if (r1 > r2) {
        arg1 = Number(arg1.toString().replace('.', ''));
        arg2 = Number(arg2.toString().replace('.', '')) * cm;
      } else {
        arg1 = Number(arg1.toString().replace('.', '')) * cm;
        arg2 = Number(arg2.toString().replace('.', ''));
      }
    } else {
      arg1 = Number(arg1.toString().replace('.', ''));
      arg2 = Number(arg2.toString().replace('.', ''));
    }
    return (arg1 + arg2) / m;
  },
  //减法
  sub(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var r1, r2, m, n;
    try {
      r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = r1 >= r2 ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  },
  //乘法
  mul(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    try {
      m += s1.split('.')[1].length;
    } catch (e) {}
    try {
      m += s2.split('.')[1].length;
    } catch (e) {}
    return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
  },
  //除法
  div(arg1, arg2) {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    var t1 = 0,
      t2 = 0,
      r1,
      r2;
    try {
      t1 = arg1.toString().split('.')[1].length;
    } catch (e) {}
    try {
      t2 = arg2.toString().split('.')[1].length;
    } catch (e) {}
    r1 = Number(arg1.toString().replace('.', ''));
    r2 = Number(arg2.toString().replace('.', ''));
    return mul(r1 / r2, Math.pow(10, t2 - t1));
  },
  format({
    number = typeof arguments[0] === 'object' ? arguments[0].number : arguments[0],
    decimals = arguments[1] || 2,
    point = '.',
    thousands = '',
    math = Math.round,
    suffixZero = 2,
  }) {
    /*
     * 参数说明：
     * number：要格式化的数字
     * decimals：保留几位小数
     * point：小数点符号
     * thousands：千分位符号
     * math: 舍入方法，ceil(向上取),floor(向下取),round(四舍五入)
     * */
    if (isNaN(number)) {
      return '';
    }
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    let n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      s = '',
      toFixed = function(n, prec) {
        let s = n.toString();
        let sArr = s.split('.');
        let m = 0;
        try {
          m += sArr[1].length;
        } catch (e) {}

        if (prec > m) {
          return s;
          /*'' + Number(s.replace(".", "")) / Math.pow(10, m);*/
        } else {
          let sArr1 = sArr[1],
            diff;
          /*
						用例
						1.999
						0.001
						0.009
						0.095
						0.092
						0.099
						0.0000001
					*/
          // if (sArr1.indexOf("0") == 0) {
          // 	sArr1 = sArr1.replace("0", "1");
          // 	diff = 1;
          // }
          // sArr1 = String(math(Number(sArr1) / Math.pow(10, m - prec)));
          // if (diff) {
          // 	sArr1 = sArr1.replace("1", "0");
          // }
          if (sArr1.indexOf('0') == 0) {
            sArr1 = sArr1.replace('0', '1');
            diff = 1;
          }

          const isCarry = String(Number(sArr1.substr(0, decimals)) + 5).length > decimals;
          if (diff) {
            sArr1 = sArr1.replace('1', '0');
          }
          let zeroIndex = 0,
            isZero = true;
          sArr1.split('').forEach((i, index) => {
            if (i === '0' && isZero) {
              zeroIndex = index;
            } else {
              isZero = false;
            }
          });

          sArr1 = String(math(Number(sArr1) / Math.pow(10, m - prec)));
          if (diff && sArr1 < 10) {
            for (let i = 0; i <= zeroIndex; i++) {
              sArr1 = '0' + sArr1;
            }
          }
          if (
            isCarry &&
            sArr1.split('').every((item, index) => (index == 0 && item == 1) || item == 0)
          ) {
            return String(Number(sArr[0]) + 1);
          }
          sArr[1] = sArr1;
          return sArr.join('.');
        }
      };
    s = (prec ? toFixed(n, prec) : '' + Math.floor(n)).split('.');

    if (thousands) {
      let re = /(-?\d+)(\d{3})/;
      while (re.test(s[0])) {
        s[0] = s[0].replace(re, '$1' + thousands + '$2');
      }
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    if (!suffixZero || typeof suffixZero === 'number') {
      let zero = s[1].split(''),
        z = zero.length - 1;
      for (; z >= 0; z--) {
        if (zero[z] === '0') {
          if (typeof suffixZero === 'number') {
            if (z >= suffixZero) {
              zero.pop();
            } else {
              break;
            }
          } else {
            zero.pop();
          }
        } else {
          break;
        }
      }
      if (zero.length > 0) {
        s[1] = zero.join('');
      } else {
        s.pop();
      }
    }
    return s.join(point);
  },
  thousands(number, decimals = 2, thousands = ',') {
    return Util.format({
      number,
      decimals,
      thousands,
    });
  },
  isFunction(obj) {
    return obj && typeof obj === 'function';
  },
  isString(obj) {
    return typeof obj === 'string';
  },
  isObject(obj) {
    return typeof obj === 'object';
  },
};
export default Util;
