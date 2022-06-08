import styles from "./style1.less";

// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from 'antd';
// import G6 from '@antv/g6';

// G6.registerNode(
//   'tree-node',
//   {
//     draw(cfg, group) {
//       const { name = '', lightColor = '#1890FF', label, rate, collapsed } = cfg;
//       // 逻辑不应该在这里判断
//       const rectConfig = {
//         width: 184,
//         height: 74,
//         lineWidth: 1,
//         fontSize: 12,
//         fill: '#fff',
//         radius: 4,
//         stroke: lightColor,
//         opacity: 1,
//       };

//       const textConfig = {
//         textAlign: 'left',
//         textBaseline: 'top',
//       };

//       const rect = group.addShape('rect', {
//         attrs: {
//           x: 0,
//           y: 0,
//           ...rectConfig,
//         },
//       });

//       // label title
//       group.addShape('text', {
//         attrs: {
//           ...textConfig,
//           x: 12,
//           y: 8,
//           text: name.length > 10 ? name.substr(0, 10) + '...' : name,
//           fontSize: 14,
//           fill: '#000',
//           cursor: 'pointer',
//           isTitleShape: true,
//         },
//       });

//       // label count
//       group.addShape('text', {
//         attrs: {
//           ...textConfig,
//           x: 12,
//           y: 34,
//           text: label,
//           fontSize: 20,
//           fill: '#000',
//         },
//       });

//       // label percentage
//       group.addShape('text', {
//         attrs: {
//           ...textConfig,
//           x: 178,
//           y: 37,
//           text: `${((rate || 0) * 100).toFixed(2)}%`,
//           fontSize: 14,
//           textAlign: 'right',
//           fill: lightColor,
//         },
//       });

//       // bottom line
//       group.addShape('rect', {
//         attrs: {
//           x: 0,
//           y: 70,
//           width: rectConfig.width,
//           height: 4,
//           radius: [0, 0, rectConfig.radius, rectConfig.radius],
//           fill: '#DCDFE5',
//         },
//       });

//       // bottom percent
//       group.addShape('rect', {
//         attrs: {
//           x: 0,
//           y: 70,
//           width: 100,
//           height: 4,
//           radius: [0, 0, 0, rectConfig.radius],
//           fill: lightColor,
//         },
//       });
//       const hasChildren = cfg.children && cfg.children.length > 0;
//       if (hasChildren) {
//         // collapse circle
//         group.addShape('circle', {
//           attrs: {
//             x: rectConfig.width,
//             y: rectConfig.height / 2,
//             r: 8,
//             stroke: lightColor,
//             fill: collapsed ? lightColor : '#fff',
//             isCollapseShape: true,
//           },
//         });

//         // collpase text
//         group.addShape('text', {
//           attrs: {
//             x: rectConfig.width,
//             y: rectConfig.height / 2,
//             width: 16,
//             height: 16,
//             textAlign: 'center',
//             textBaseline: 'middle',
//             text: collapsed ? '+' : '-',
//             fontSize: 16,
//             fill: collapsed ? '#fff' : lightColor,
//             cursor: 'pointer',
//             isCollapseShape: true,
//           },
//         });
//       }
//       // this.drawLinkPoints(cfg, group);
//       return rect;
//     },
//   },
//   'single-node'
// );

// const TreeGraphReact = () => {
//   const transformData = (data, parentIndex) => {
//     console.log(1231);

//     if (!data || !data.length) {
//       return;
//     }
//     const defaultLevel = 2;
//     data.forEach((item, index) => {
//       const recordIndex =
//         parentIndex !== undefined ? parentIndex + '-' + index : index + '';

//       const recordLength = recordIndex.split('-').length;
//       item = {
//         ...item,
//         // id: toString(item.id),
//         collapsed: recordLength >= defaultLevel,
//       };
//       data[index] = item;
//       if (item.children && item.children.length) {
//         transformData(item.children, recordIndex);
//       }
//     });
//     return data;
//   };
//   useEffect(() => {
//     const width = document.getElementById('container').scrollWidth;
//     const height = document.getElementById('container').scrollHeight || 600;
//     const graph = new G6.TreeGraph({
//       container: 'container',
//       width,
//       height,
//       modes: {
//         default: [
//           {
//             type: 'collapse-expand',
//           },
//           // {
//           //   type: 'tooltip',
//           //   formatText: function formatText(data, res) {
//           //     return data.name;
//           //   },
//           // },
//           'drag-canvas',
//           'zoom-canvas',
//         ],
//       },
//       minZoom: 0.5,
//       maxZoom: 3,
//       defaultNode: {
//         type: 'tree-node',
//         style: {
//           fill: '#C6E5FF',
//           stroke: '#5B8FF9',
//         },
//         anchorPoints: [
//           [0, 0.5],
//           [1, 0.5],
//         ],
//       },
//       defaultLevel: 2,
//       defaultEdge: {
//         type: 'cubic-horizontal',
//         style: {
//           stroke: 'red',
//         },
//       },
//       layout: {
//         type: 'compactBox',
//         direction: 'LR',
//         getId: function getId(d) {
//           return d.id;
//         },
//         getHeight: function getHeight() {
//           return 40;
//         },
//         getWidth: function getWidth() {
//           return 140;
//         },
//         getVGap: function getVGap() {
//           return 40;
//         },
//         getHGap: function getHGap() {
//           return 80;
//         },
//       },
//     });
//     fetch(
//       'https://gw.alipayobjects.com/os/antvdemo/assets/data/modeling-methods.json'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         G6.Util.traverseTree(data, function (item) {
//           item.id = item.name;
//           item.label = '12313';
//           item.rate = 0.1;
//         });
//         console.log(transformData([data]));
//         graph.data(data);
//         graph.render();
//         graph.fitView();
//         graph.setMaxZoom(5);
//       });
//   }, []);

//   return <div id="container"></div>;
// };

// export default TreeGraphReact;

// export default () => {
//   return <div className={styles.a}>'123'</div>;
// };
import React from "react";

export default class WaterScaner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // redraw = (options) => {
  //     const txtW = options.width || 0;
  //     const txtH = options.height|| 0;
  //     let canvas = document.createElement('canvas');
  //
  //     canvas.setAttribute('width', txtW+"px");
  //     canvas.setAttribute('height', txtW+"px");
  //     let ctx = canvas.getContext("2d");
  //
  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';
  //     ctx.font ='20px microsoft yahei';
  //
  //     ctx.fillText('xxx',x,y)
  //
  //     ctx.rotate(-(options.roate||0) * Math.PI / 180);
  //     ctx.fillText(options.txt,0,5);
  //     let imageUrl = canvas.toDataURL();
  // }
  componentDidMount() {
    var watermark = {};

    function setWatermark(args) {
      console.log(...arguments);
      //声明一个怪异一点的变量，确保id的唯一性
      var id = "111.222.333.456";
      var xIndex = 250 / 2; //绘制文本的 x 坐标位置
      var yIndex = 150 / 2; //绘制文本的 y 坐标位置
      var xInterval = 25; //有多个参数时的行间间隔
      if (document.getElementById(id) !== null) {
        document.body.removeChild(document.getElementById(id));
      }
      //利用canvas绘制水印信息
      var can = document.createElement("canvas");
      can.width = 250;
      can.height = 150;
      var cans = can.getContext("2d");

      cans.font = "17px Vedana";
      // ziti yanse
      cans.fillStyle = "rgba(200, 200, 200, 0.30)";
      cans.textAlign = "left";
      cans.textBaseline = "Middle";
      cans.translate(xIndex, yIndex);
      cans.rotate((270 * Math.PI) / 180);
      cans.translate(-xIndex, -yIndex);
      for (let i = 0; i < args.length; i++) {
        const textWidth = cans.measureText(args[i]).width;
        console.log(textWidth);
        cans.fillText(
          args[i],
          xIndex - textWidth / 2,
          yIndex - Math.floor(args.length / 2) * 17
        ); //绘制水印文案
        yIndex += xInterval; //设置每行间隔
      }
      // cans.translate(250 / 2, 150 / 2);
      //创建div用于显示
      var div = document.createElement("div");
      div.id = id;
      div.style.pointerEvents = "none";
      div.style.top = "70px";
      div.style.left = "90px";
      div.style.position = "fixed";
      div.style.zIndex = "100000";
      div.style.width = document.documentElement.clientWidth - 50 + "px";
      div.style.height = document.documentElement.clientHeight - 50 + "px";
      //div承载水印显示
      div.style.background =
        "url(" + can.toDataURL("image/png") + ") left top repeat";
      document.body.appendChild(div);
      return id;
    }

    function createObserver(id, args) {
      // 创建一个观察器实例并传入回调函数
      var observer = new MutationObserver(() => {
        if (document.getElementById(id) === null) {
          id = setWatermark(args);
        }
      });

      var option = {
        childList: true, //子元素的变动
        subtree: true, //所有下属节点（包括子节点和子节点的子节点）的变动
      };

      observer.observe(document.body, option); //观察body下节点的变化
    }

    watermark.set = function () {
      let args = Array.prototype.slice.apply(arguments);
      let id = setWatermark(args);

      // 创建观察器检测如果水印被去掉了，自动给加上
      createObserver(id, args);

      //在窗口大小改变之后,自动触发加水印事件
      window.onresize = function () {
        setWatermark(args);
      };
    };
    window.watermark = watermark;
    watermark.set("水印信息1", "我是水印信息2", "我是水印信息3");
  }
  render() {
    return (
      <div className="imp-gds-self-comp warterScan basic-control">
        <div style={{ width: "100%", height: "100%" }}>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </div>
    );
  }
}
