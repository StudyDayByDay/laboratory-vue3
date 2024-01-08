import G6 from '@antv/g6';
import bbu from '@/assets/images/BBU.png';
import rru from '@/assets/images/RRU.png';
import antenna from '@/assets/images/antenna.png';
/**
 * 设置G6配置，返回G6实例
 * @param  {String} id 渲染节点
 * @param  {Ref} ref ref对象，获取其宽高
 * @param  {function} fn 外部调用fn
 * @return {Object} 返回一个G6实例
 */
export default function g6Config(id, ref, fn) {
  const imgData = {
    bbu,
    rru,
    antenna,
  };
  G6.registerNode('dom-node-1', {
    // options: {
    //   stateStyles: {
    //     click: {
    //       opacity: 0.1,
    //       fill: 'yellow',
    //       fontSize: 24,
    //     },
    //   },
    // },
    draw: (cfg, group) => {
      switch (cfg.nodeType) {
        case 'bbu':
          group.addShape('text', {
            attrs: {
              x: -10,
              y: 80,
              fontSize: 12,
              fontWeight: 'bold',
              fill: '#292d33',
              text: cfg[cfg.nodeType].enodebId ?? '--',
            },
          });
          break;
        case 'rru':
          group.addShape('text', {
            attrs: {
              x: -10,
              y: 80,
              fontSize: 12,
              fontWeight: 'bold',
              fill: '#292d33',
              text: cfg[cfg.nodeType].rruCode ?? '--',
            },
          });
          group.addShape('text', {
            attrs: {
              x: 20,
              y: -7,
              fontSize: 14,
              fontWeight: 'bold',
              fill: '#1a988e',
              text: cfg[cfg.nodeType].vendor ?? '--',
            },
          });
          break;
        case 'antenna':
          group.addShape('dom', {
            attrs: {
              x: 68,
              y: 13,
              width: 73,
              height: 50,
              html: `
                  <div style="width: 73px;height: 50px;display: grid;grid-template-columns: repeat(2, 1fr);grid-template-rows: repeat(2, 1fr);font-weight: bold;">
                    <div>e:${cfg.antenna.electronDowndip ?? '--'}</div>
                    <div style="text-align: right;">m:${cfg.antenna.mechanicalDowndip ?? '--'}</div>
                    <div>a:${cfg.antenna.azimuth ?? '--'}</div>
                    <div style="text-align: right;">h:${cfg.antenna.antennaHeight ?? '--'}</div>
                  </div>
                    `,
            },
            draggable: true,
          });
          break;
        default:
          break;
      }
      return group.addShape('image', {
        attrs: {
          x: 0,
          y: 0,
          width: 75,
          height: 65,
          img: imgData[cfg.nodeType],
        },
        name: 'image-shape',
      });
    },
    getAnchorPoints() {
      return [
        [0, 0.5], // 左侧中间
        [1, 0.5], // 右侧中间
      ];
    },
  });
  G6.registerEdge('lk-line-one', {
    draw(cfg, group) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      const shape = group.addShape('path', {
        attrs: {
          stroke: '#f7b551',
          path: [
            // ['M', endPoint.x / 4 + (2 / 3) * startPoint.x, startPoint.y],
            // ['L', endPoint.x / 4 + (2 / 3) * startPoint.x, startPoint.y], // 三分之一处
            // ['L', endPoint.x / 4 + (2 / 3) * startPoint.x, endPoint.y], // 三分之二处
            // ['L', endPoint.x, endPoint.y],
            ['M', endPoint.x / 4 + (2 / 3) * startPoint.x, startPoint.y],
            ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y], // 三分之一处
            ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y], // 三分之二处
            ['L', endPoint.x, endPoint.y],
          ],
          lineDash: [5],
          lineWidth: 2,
          startArrow: {
            fill: '#000',
            opacity: 0.5,
            // stroke: '#333',
            // path是svg里面的path，M是移动画笔，moveto的缩写，L是lineto的缩写，线移动
            path: 'M 0,0 a 2 2,0,1,1, 2 2 a 2 2, 0,1,1, 2, -2',
          },
          // endArrow: true
          endArrow: {
            // fill: '#000',
            // 自定义箭头指向(0, 0)，尾部朝向 x 轴正方向的 path
            path: 'M 0,0 l -3,3 l 0,0 l 3,-3 l -3,-3 l 0,0 l 3,3 Z',
            // 箭头的偏移量，负值代表向 x 轴正方向移动
            // d: -10,
          },
        },
        // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        name: 'edge-shape',
      });
      return shape;
    },
  });
  G6.registerEdge('lk-line-two', {
    draw(cfg, group) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      const shape = group.addShape('path', {
        attrs: {
          stroke: '#eb6877',
          path: [
            ['M', endPoint.x / 4 + (2 / 3) * startPoint.x, startPoint.y],
            ['L', endPoint.x / 4 + (2 / 3) * startPoint.x, startPoint.y], // 三分之一处
            ['L', endPoint.x / 4 + (2 / 3) * startPoint.x, endPoint.y], // 三分之二处
            ['L', endPoint.x, endPoint.y],
          ],
          lineDash: [5],
          lineWidth: 2,
          endArrow: {
            path: 'M 0,0 l -3,3 l 0,0 l 3,-3 l -3,-3 l 0,0 l 3,3 Z',
          },
        },
        // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        name: 'path-shape',
      });
      return shape;
    },
  });
  const tooltip = new G6.Tooltip({
    offsetX: 10,
    offsetY: 20,
    // 控制是否显示tooltip
    shouldBegin(e) {
      const {
        item: {
          _cfg: {
            model: {nodeType},
          },
        },
      } = e;
      const judgeAction = {
        bbu: false,
        rru: true,
        antenna: false,
      };
      return judgeAction[nodeType];
    },
    getContent(e) {
      const {
        item: {
          _cfg: {
            model: {nodeType},
          },
        },
      } = e;
      if (nodeType === 'rru') {
        const {
          item: {
            _cfg: {
              model: {
                rru: {cellList},
              },
            },
          },
        } = e;
        console.log(cellList, 'tooltip');
        const cellHtmlStr = cellList.map((item) => {
          return `<div class="rru-item">${item.cellkey}</div>`;
        });
        const outDiv = document.createElement('div');
        outDiv.className = 'rru-container';
        outDiv.innerHTML = cellHtmlStr.join('');

        setTimeout(() => {
          const cell = document.getElementsByClassName('rru-item');
          Array.from(cell, (item, ind) => {
            item.onclick = (e) => {
              console.log(e, cellList[ind], 'eeee123cellkey');
              fn(cellList[ind].cellName, cellList[ind].cellkey);
            };
          });
        }, 100);
        return outDiv;
      }
      return '';
    },
    trigger: 'click',
    itemTypes: ['node'],
  });
  return new G6.Graph({
    container: id,
    width: ref.clientWidth,
    height: ref.clientHeight,
    // 自适应画布
    fitView: true,
    // 自适应画布时四周留白像素值，fitView为true时生效
    fitViewPadding: [0, 20, 20, 10],
    layout: {
      // 布局类型
      type: 'dagre',
      /* 
      说明：布局的方向。T：top（上）；B：bottom（下）；L：left（左）；R：right（右）。
      'TB'：从上至下布局；
      'BT'：从下至上布局；
      'LR'：从左至右布局；
      'RL'：从右至左布局。
      */
      rankdir: 'LR',
      /* 
      说明：节点对齐方式。U：upper（上）；D：down（下）；L：left（左）；R：right（右）
      'UL'：对齐到左上角；
      'UR'：对齐到右上角；
      'DL'：对齐到左下角；
      'DR'：对齐到右下角；
      undefined：默认，中间对齐。
      */
      align: 'DL',
      // 是否保留布局连线的控制点
      controlPoints: true,
      // nodesep 竖直间距
      nodesepFunc: () => 20,
      // ranksep 水平方向层间距
      ranksepFunc: () => 34,
    },
    // 交互管理，一个mode是多种行为Behavior的组合
    modes: {
      // 缩放画布、拖拽画布
      default: ['zoom-canvas', 'drag-canvas'],
    },
    plugins: [tooltip],
    renderer: 'svg', // 使用 Dom node 的时候需要使用 svg 的渲染形势
    defaultNode: {
      type: 'dom-node-1',
    },
    fitCenter: true,
  });
}

export const imitateData = {
  // 点集
  nodes: [
    {
      id: 'node1',
      type: 'dom-node-1',
      nodeType: 'bbu',
      bbu: {enodebId: 'XX-679021'},
    },
    {
      id: 'node2',
      type: 'dom-node-1',
      nodeType: 'rru',
      rru: {rruCode: '210108434518', vendor: 'L1.8G', cellList: [{cellkey: '111'}, {cellkey: '222'}]},
    },
    {
      id: 'node3',
      type: 'dom-node-1',
      nodeType: 'antenna',
      antenna: {electronDowndip: '4', mechanicalDowndip: '3', azimuth: '85', antennaHeight: '23'},
    },
    {
      id: 'node4',
      type: 'dom-node-1',
      nodeType: 'rru',
      rru: {rruCode: '210108434530', vendor: 'L1.8G', cellList: [{cellkey: '111'}, {cellkey: '222'}]},
    },
    {
      id: 'node5',
      type: 'dom-node-1',
      nodeType: 'antenna',
      antenna: {electronDowndip: '4', mechanicalDowndip: '3', azimuth: '85', antennaHeight: '32'},
    },
    {
      id: 'node6',
      type: 'dom-node-1',
      nodeType: 'rru',
      rru: {rruCode: '210108434583', vendor: 'L1.8G', cellList: [{cellkey: '111'}, {cellkey: '222'}]},
    },
    {
      id: 'node7',
      type: 'dom-node-1',
      nodeType: 'antenna',
      antenna: {electronDowndip: '4', mechanicalDowndip: '3', azimuth: '85', antennaHeight: '55'},
    },
  ],
  // 边集
  edges: [
    {
      id: 'edge1',
      type: 'lk-line-one',
      source: 'node1',
      target: 'node2',
    },
    {
      id: 'edge2',
      type: 'lk-line-two',
      source: 'node2',
      target: 'node3',
    },
    {
      id: 'edge3',
      type: 'lk-line-one',
      source: 'node1',
      target: 'node4',
    },
    {
      id: 'edge4',
      type: 'lk-line-two',
      source: 'node4',
      target: 'node5',
    },
    {
      id: 'edge5',
      type: 'lk-line-one',
      source: 'node1',
      target: 'node6',
    },
    {
      id: 'edge6',
      type: 'lk-line-two',
      source: 'node6',
      target: 'node7',
    },
  ],
};
