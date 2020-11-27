const echarts = require('echarts');

class PersonInfo extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getEchart();
   
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  getEchart = () => {
    const dom = document.getElementById('container');
    const myChart = echarts.init(dom);
    const data = [
      {
        name: '第一sdarfawfasf阿地方政府的阿萨德阿叔阿叔打算撒阿束大萨达撒多阿束打',
        children: [
          {
            name: 'cluster',
            children: [
              {
                name: 'cluster1',
                value: '1231313',
                children: [
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },

          {
            name: 'cluster',
            children: [
              {
                name: 'cluster1',
                children: [
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'cluster',
            children: [
              {
                name: 'cluster1',
                children: [
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'cluster',
            children: [
              {
                name: 'cluster1',
                children: [
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'cluster',
            children: [
              {
                name: 'cluster1',
                children: [
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'cluster',
            children: [
              {
                name: 'cluster1',
                children: [
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'cluster',
            children: [
              {
                name: 'cluster1',
                children: [
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'cluster2',
                    children: [
                      {
                        name: 'cluster22',
                        children: [
                          {
                            name: 'cluster22',
                            children: [
                              {
                                name: 'cluster22',
                                children: [
                                  {
                                    name: 'cluster22',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'tree',

          data,

          left: '2%',
          right: '2%',
          top: '8%',
          bottom: '20%',
          edgeShape: 'polyline',
          edgeForkPosition: '10%',
          symbolSize: 14,
          layerPadding: 10,
          symbol: 'diamond',
          roam: true,
          scaleLimit: {
            // 滚轮缩放的极限控制
            min: 0.5,
            max: 3,
          },
          orient: 'vertical',
          label: {
            position: 'top',
            verticalAlign: 'middle',
            align: 'center',
            fontSize: 18,
            color: '#fff',
            backgroundColor: '#7ec0f6',
            borderColor: '#7ec0f6',
            padding: [6, 8],
            distance: 14,
            width: '10px',
          },
          lineStyle: {
            width: 1,
            curveness: 12,
          },
          tooltip: {
            formatter: (params) => {
              const { name } = params;
              return name;
            },
          },
          leaves: {
            label: {
              position: 'top',
              verticalAlign: 'middle',
              align: 'center',
              fontSize: 12,
            },
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    });
    const height = dom.clientHeight;
    dom.style.height = `${height}px`;
    myChart.resize();
  };

  render() {
    return <div className="transfer-detail" id="container" />;
  }
}
export default PersonInfo;
