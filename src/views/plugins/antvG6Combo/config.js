import G6 from '@antv/g6';
import oppositeE from '@/assets/images/oppositeE.png';
import oppositeR from '@/assets/images/oppositeR.png';
import fileE from '@/assets/images/fileE.png';
import fileR from '@/assets/images/fileR.png';
import taskE from '@/assets/images/taskE.png';
import taskR from '@/assets/images/taskR.png';
import programE from '@/assets/images/programE.png';
import programR from '@/assets/images/programR.png';
import entityE from '@/assets/images/entityE.png';
import entityR from '@/assets/images/entityR.png';
import kalfaE from '@/assets/images/kalfaE.png';
import kalfaR from '@/assets/images/kalfaR.png';

// 模拟数据
export const graphData = {
  nodes: [
    {id: '0', nodeType: 'opposite', label: '统一DPI'},
    {id: '1', nodeType: 'fileE', label: '4G XDR_S1MME', comboId: 'preNode'},
    {id: '2', nodeType: 'entityR', label: 'fact_pscp_s1mme_front', comboId: 'preNode'},
    {id: '3', nodeType: 'taskR', label: 'fact_pscp_s1mme_front_sync', comboId: 'coreNode'},
    {id: '4', nodeType: 'entityR', label: 'lte_cm_projdata', comboId: 'coreNode'},
    {id: '5', nodeType: 'entityR', label: 'cfg_prd_mdn_imsi', comboId: 'coreNode'},
    {id: '6', nodeType: 'entityR', label: 'fact_pscp_s1mme_front', comboId: 'coreNode'},
    {id: '7', nodeType: 'taskR', label: 'dm_usertrack_xdr_h', comboId: 'coreNode'},
    {id: '8', nodeType: 'entityR', label: 'dm_usertrack_xdr_h', comboId: 'coreNode'},
    {id: '9', nodeType: 'taskR', label: 'dm_usertrack_all_h_new', comboId: 'coreNode'},
    {id: '10', nodeType: 'entityR', label: 'dm_usertrack_all_h_new', comboId: 'coreNode'},
    {id: '11', nodeType: 'fileR', label: 'dm_usertrack_all_h_new', comboId: 'coreNode'},
    {id: '12', nodeType: 'opposite', label: '采集系统（内蒙A）'},
  ],
  edges: [
    {source: '0', target: '1'},
    {source: '1', target: '2'},
    {source: '2', target: '3'},
    {source: '3', target: '4'},
    {source: '6', target: '7'},
    {source: '5', target: '7'},
    {source: '4', target: '7'},
    {source: '7', target: '8'},
    {source: '8', target: '9'},
    {source: '9', target: '10'},
    {source: '10', target: '11'},
    {source: '11', target: '12'},
  ],
  combos: [
    // 前置节点
    {
      id: 'preNode',
      label: '前置节点',
      type: 'rect',
      size: 320,
      padding: 30,
      style: {
        stroke: '#4761f0',
        lineWidth: 1,
        lineDash: 5,
        fill: 0,
      },
      labelCfg: {
        style: {
          fill: '#4761f0',
          fontSize: 14,
        },
      },
    },
    // 核心节点
    {
      id: 'coreNode',
      label: '核心节点',
      type: 'rect',
      size: 320,
      padding: 30,
      style: {
        stroke: '#4761f0',
        lineWidth: 1,
        lineDash: 5,
        fill: 0,
      },
      labelCfg: {
        style: {
          fill: '#4761f0',
          fontSize: 14,
        },
      },
    },
  ],
};

/**
 * 设置G6配置，返回G6实例
 * @param  {String} id 渲染节点
 * @param  {Ref} ref ref对象，获取其宽高
 * @return {Object} 返回一个G6实例
 */
export default function g6Config(id, ref) {
  const imgData = {oppositeE, oppositeR, fileE, fileR, taskE, taskR, programE, programR, entityE, entityR, kalfaE, kalfaR};
  G6.registerNode(
    'lk-node-one',
    {
      options: {
        style: {
          cursor: 'pointer',
        },
        stateStyles: {
          click: {
            opacity: 0.1,
            fill: 'yellow',
            fontSize: 24,
          },
        },
      },
      afterDraw(cfg, group) {
        group.addShape('image', {
          attrs: {
            x: -10,
            y: -55,
            fill: '#fff',
            width: 40,
            height: 40,
            img: imgData[cfg.nodeType],
            cursor: 'pointer',
          },
          // must be assigned in G6 3.3 and later versions. it can be any value you want
          name: 'image-shape',
        });
      },
      getAnchorPoints() {
        return [
          [0, 0.5], // 左侧中间
          [1, 0.5], // 右侧中间
        ];
      },
    },
    'rect'
  );
  G6.registerEdge('lk-line-one', {
    draw(cfg, group) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      const shape = group.addShape('path', {
        attrs: {
          stroke: '#4e5568',
          path: [
            ['M', startPoint.x + 10, startPoint.y],
            ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y], // 三分之一处
            ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y], // 三分之二处
            ['L', endPoint.x, endPoint.y],
          ],
          // lineDash: [5],
          lineWidth: 1,
          startArrow: {
            // stroke: '#333',
            // path是svg里面的path，M是移动画笔，moveto的缩写，L是lineto的缩写，线移动
            path: 'M 0,0 a 4 4,0,1,1, 4 4 a 4 4, 0,1,1, 4, -4',
          },
          // endArrow: true
          endArrow: {
            fill: 'pink',
            stroke: '#fff',
            // 自定义箭头指向(0, 0)，尾部朝向 x 轴正方向的 path
            path: 'M 0,0 l -8,6 l 0,0 l 8,-6 l -8,-6 l 0,0 l 8,6 Z',
            // path: 'M 0,0 L -8, -6 L -8, 6 Z'
            // 箭头的偏移量，负值代表向 x 轴正方向移动
            // d: -10,
          },
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name: 'edge-shape',
      });
      return shape;
    },
  });
  return new G6.Graph({
    container: id,
    width: ref.clientWidth,
    height: ref.clientHeight,
    fitView: true,
    fitViewPadding: 40,
    layout: {
      type: 'dagre',
      rankdir: 'LR',
      // 对齐到右下角
      align: 'DR',
      controlPoints: true,
      // nodesep 竖直间距
      // ranksep 水平方向层间距
      nodesepFunc: () => 20,
      ranksepFunc: () => 20,
    },
    modes: {
      default: ['zoom-canvas', 'drag-canvas'],
    },
    renderer: 'svg', // 使用 Dom node 的时候需要使用 svg 的渲染形势
    defaultNode: {
      type: 'lk-node-one',
      size: [300, 50],
      style: {
        fill: '#ffffff',
        radius: 2,
      },
      // label: 'rru',
      labelCfg: {
        style: {
          fill: '#333333',
          fontSize: 18,
          cursor: 'pointer',
        },
        // position: 'bottom',
      },
    },
    defaultEdge: {
      type: 'lk-line-one',
    },
    fitCenter: true,
  });
}
