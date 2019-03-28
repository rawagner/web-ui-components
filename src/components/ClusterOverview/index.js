export { ClusterOverview } from './ClusterOverview';
export { ClusterOverviewContext } from './ClusterOverviewContext';
export { StorageOverview } from './StorageOverview';

// TODO move all these mocked data to component fixtures once they are not needed in web-ui
// we do not include fixture files in build so we cannot reuse their mocked data
export const complianceData = {
  data: {
    healthy: true,
    message: 'All nodes compliant',
  },
  loaded: true,
};

export const utilizationStats = {
  stats: {
    cpuStats: {
      title: 'CPU',
      unit: '%',
      data: [20, 50, 15, 70, 10],
    },
    ioStats: {
      title: 'I/O',
      unit: 'MBps',
      data: [12000, 10000, 5000, 20000],
    },
    latencyStats: {
      title: 'Latency',
      unit: 'ms',
      data: [2.5, 1, 20, 3.5],
    },
  },
  loaded: true,
};

export const StorageTopConsumersStats = {
  stats: {
      columns: [
        ['x', 30, 50, 100, 230, 300, 310],
        ['data1', 30, 20, 50, 40, 60, 50],
        ['data2', 200, 130, 90, 240, 130, 220],
        ['data3', 300, 200, 160, 400, 250, 250]
      ],
  },
  loaded: true,

};
