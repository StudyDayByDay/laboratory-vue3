const originData = [{
  id: '1',
  task: '12相交',
  planStart: '2021-09-01',
  planEnd: '2021-12-01',
  actualStart: '2021-10-01',
  actualEnd: '2022-02-01',
}, {
  id: '2',
  task: '21相交',
  planStart: '2021-10-01',
  planEnd: '2022-02-01',
  actualStart: '2021-09-01',
  actualEnd: '2021-12-01',
}, {
  id: '3',
  task: '1包含2',
  planStart: '2021-09-01',
  planEnd: '2022-05-01',
  actualStart: '2021-12-01',
  actualEnd: '2022-02-01',
}, {
  id: '4',
  task: '2包含1',
  planStart: '2021-12-01',
  planEnd: '2022-02-01',
  actualStart: '2021-09-01',
  actualEnd: '2022-05-01',
}, {
  id: '5',
  task: '12相离',
  planStart: '2021-09-01',
  planEnd: '2021-12-01',
  actualStart: '2022-02-01',
  actualEnd: '2022-05-01',
}, {
  id: '6',
  task: '21相离',
  planStart: '2022-02-01',
  planEnd: '2022-05-01',
  actualStart: '2021-09-01',
  actualEnd: '2021-12-01',
}, {
  id: '7',
  task: '1包含2',
  planStart: '2021-09-01',
  planEnd: '2022-05-01',
  actualStart: '2021-09-01',
  actualEnd: '2022-02-01',
}, {
  id: '8',
  task: '1包含2',
  planStart: '2021-09-01',
  planEnd: '2022-05-01',
  actualStart: '2021-12-01',
  actualEnd: '2022-05-01',
}, {
  id: '9',
  task: '2包含1',
  planStart: '2021-09-01',
  planEnd: '2022-02-01',
  actualStart: '2021-09-01',
  actualEnd: '2022-05-01',
}, {
  id: '10',
  task: '2包含1',
  planStart: '2021-12-01',
  planEnd: '2022-05-01',
  actualStart: '2021-09-01',
  actualEnd: '2022-05-01',
}, {
  id: '11',
  task: '12相等',
  planStart: '2021-09-01',
  planEnd: '2022-05-01',
  actualStart: '2021-09-01',
  actualEnd: '2022-05-01',
}];

const basicData = {
  // https://docs.dhtmlx.com/gantt/desktop__loading.html   gantt数据结构解析
  data: [
    // {id: 1, text: 'Project #2', start_date: '01-11-2022', duration: 18, progress: 0.4, open: true},
    // {id: 2, text: 'Task #1', start_date: '13-11-2022', duration: 8, progress: 0.6, parent: 1},
    // {id: 3, text: 'Task #2', start_date: '20-11-2022', duration: 8, progress: 0.6, parent: 1}
    // 使用结束时间，会自动计算duration
    // id可为string或者number，这个id就是links里面source和target使用的id
    {id: 1, text: 'Project #2', start_date: '01-11-2022', end_date: '03-11-2022', progress: 0.4, open: true},
    {id: 2, text: 'Task #1', start_date: '13-11-2022', end_date: '23-11-2022', progress: 0.6, parent: 1},
    {id: 3, text: 'Task #2', start_date: '20-11-2022', end_date: '25-11-2022', progress: 0.6, parent: 1}
  ],
  links: [
    // 这个id可为string或者number，跟data的id没关系。
    {id: 5, source: 1, target: 2, type: '1'},
    {id: 6, source: 2, target: 3, type: '0'}
  ]
};

export {originData, basicData};