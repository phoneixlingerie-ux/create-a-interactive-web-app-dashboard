interface IDashboardWidget {
  id: number;
  title: string;
  type: 'chart' | 'table' | 'gauge';
  data: any[];
  config: {
    [key: string]: any;
  };
}

interface IDashboard {
  id: number;
  title: string;
  widgets: IDashboardWidget[];
}

interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface ITableData {
  headers: string[];
  rows: any[][];
}

interface IGaugeData {
  value: number;
  min: number;
  max: number;
  unit: string;
}

class Dashboard {
  private id: number;
  private title: string;
  private widgets: IDashboardWidget[];

  constructor(id: number, title: string, widgets: IDashboardWidget[]) {
    this.id = id;
    this.title = title;
    this.widgets = widgets;
  }

  public getWidget(id: number): IDashboardWidget | undefined {
    return this.widgets.find((widget) => widget.id === id);
  }
}

class ChartWidget implements IDashboardWidget {
  id: number;
  title: string;
  type: 'chart';
  data: IChartData;
  config: {
    chartType: 'line' | 'bar' | 'pie';
  };

  constructor(id: number, title: string, data: IChartData, config: { chartType: 'line' | 'bar' | 'pie' }) {
    this.id = id;
    this.title = title;
    this.type = 'chart';
    this.data = data;
    this.config = config;
  }
}

class TableWidget implements IDashboardWidget {
  id: number;
  title: string;
  type: 'table';
  data: ITableData;
  config: {
    tableName: string;
  };

  constructor(id: number, title: string, data: ITableData, config: { tableName: string }) {
    this.id = id;
    this.title = title;
    this.type = 'table';
    this.data = data;
    this.config = config;
  }
}

class GaugeWidget implements IDashboardWidget {
  id: number;
  title: string;
  type: 'gauge';
  data: IGaugeData;
  config: {
    gaugeType: 'radial' | 'semi';
  };

  constructor(id: number, title: string, data: IGaugeData, config: { gaugeType: 'radial' | 'semi' }) {
    this.id = id;
    this.title = title;
    this.type = 'gauge';
    this.data = data;
    this.config = config;
  }
}