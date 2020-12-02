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

export default () => {
  return '123';
};
