import insertCss from 'insert-css';

insertCss(`
  .custom-tooltip {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.96);
        color: #646464;
        width: 150px;
        height: auto;
        border-radius: 3px;
        font-size: 13px;
        background-size: 100% auto;
        background-repeat: no-repeat;
        box-shadow: 0px 0px 10px #aeaeae;
    }

    .custom-tooltip-title {
        margin: 72px 12px 0 12px;
        padding-bottom: 8px;
        font-size: 12px;
        border-bottom-style: solid;
        border-bottom-width: thin;
        border-bottom-color: #e9e9e9;
    }

    .custom-tooltip-value {
        display: flex;
        margin: 8px 12px 0 12px;
        padding-bottom: 8px;
        font-size: 40px;
        text-align: center;
        border-bottom-style: solid;
        border-bottom-width: thin;
        border-bottom-color: #e9e9e9
    }

    .custom-tooltip-value span {
        position: absolute;
        top: -10px;
        font-size: 10px
    }

    .custom-tooltip-temp {
        width: 50%;
        top: 10px;
        text-align: left;
        position: relative;
        color: rgba(0, 0, 0, 0.85)
    }

    .custom-tooltip-temp span {
        color: rgba(0, 0, 0, 0.45)
    }

    .custom-tooltip-wind {
        margin: 8px 12px 12px 12px;
        font-size: 10px;
        color: rgba(0, 0, 0, 0.45)
    }

    .rain {
        background-image: url(https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*sg5aT7dY36wAAAAAAAAAAABkARQnAQ);
    }

    .sun {
        background-image: url(https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*gE_hS5JVl5YAAAAAAAAAAABkARQnAQ);
    }

    .cloud {
        background-image: url(https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*BTw4R4O341AAAAAAAAAAAABkARQnAQ);
    }
`);

const data = [
  { data: '10月1日', maxTemp: 26, minTemp: 13, rain: false, sunny: false, windSpeed: 4, windDir: 'N' },
  { data: '10月2日', maxTemp: 18, minTemp: 9, rain: true, sunny: false, windSpeed: 2, windDir: 'EN' },
  { data: '10月3日', maxTemp: 20, minTemp: 9, rain: false, sunny: true, windSpeed: 2, windDir: 'WS' },
  { data: '10月4日', maxTemp: 22, minTemp: 10, rain: false, sunny: true, windSpeed: 4, windDir: 'WS' },
  { data: '10月5日', maxTemp: 21, minTemp: 11, rain: false, sunny: false, windSpeed: 2, windDir: 'S' },
  { data: '10月6日', maxTemp: 22, minTemp: 13, rain: false, sunny: false, windSpeed: 2, windDir: 'S' },
  { data: '10月7日', maxTemp: 20, minTemp: 13, rain: true, sunny: false, windSpeed: 2, windDir: 'EN' },
  { data: '10月8日', maxTemp: 18, minTemp: 13, rain: true, sunny: false, windSpeed: 2, windDir: 'EN' },
  { data: '10月9日', maxTemp: 15, minTemp: 9, rain: true, sunny: false, windSpeed: 4, windDir: 'N' },
  { data: '10月10日', maxTemp: 11, minTemp: 6, rain: true, sunny: false, windSpeed: 2, windDir: 'N' },
  { data: '10月11日', maxTemp: 16, minTemp: 6, rain: false, sunny: false, windSpeed: 2, windDir: 'W' },
  { data: '10月12日', maxTemp: 18, minTemp: 9, rain: true, sunny: false, windSpeed: 2, windDir: 'WS' },
  { data: '10月13日', maxTemp: 18, minTemp: 9, rain: false, sunny: false, windSpeed: 2, windDir: 'WS' },
  { data: '10月14日', maxTemp: 13, minTemp: 9, rain: true, sunny: false, windSpeed: 2, windDir: 'EN' },
  { data: '10月15日', maxTemp: 16, minTemp: 8, rain: false, sunny: false, windSpeed: 2, windDir: 'N' },
  { data: '10月16日', maxTemp: 18, minTemp: 7, rain: false, sunny: true, windSpeed: 2, windDir: 'EN' },
  { data: '10月17日', maxTemp: 16, minTemp: 11, rain: true, sunny: false, windSpeed: 1, windDir: 'S' },
  { data: '10月18日', maxTemp: 15, minTemp: 9, rain: true, sunny: false, windSpeed: 1, windDir: 'S' },
  { data: '10月19日', maxTemp: 18, minTemp: 9, rain: false, sunny: true, windSpeed: 1, windDir: 'S' },
  { data: '10月20日', maxTemp: 20, minTemp: 11, rain: false, sunny: true, windSpeed: 2, windDir: 'EN' },
  { data: '10月21日', maxTemp: 18, minTemp: 10, rain: true, sunny: false, windSpeed: 2, windDir: 'E' },
  { data: '10月22日', maxTemp: 13, minTemp: 7, rain: false, sunny: false, windSpeed: 2, windDir: 'WN' },
  { data: '10月23日', maxTemp: 16, minTemp: 5, rain: false, sunny: true, windSpeed: 2, windDir: 'W' },
  { data: '10月24日', maxTemp: 18, minTemp: 8, rain: false, sunny: true, windSpeed: 2, windDir: 'WS' },
  { data: '10月25日', maxTemp: 15, minTemp: 9, rain: false, sunny: false, windSpeed: 2, windDir: 'S' },
  { data: '10月26日', maxTemp: 17, minTemp: 9, rain: false, sunny: false, windSpeed: 2, windDir: 'N' },
  { data: '10月27日', maxTemp: 18, minTemp: 9, rain: false, sunny: false, windSpeed: 2, windDir: 'S' },
  { data: '10月28日', maxTemp: 16, minTemp: 5, rain: false, sunny: true, windSpeed: 4, windDir: 'N' },
  { data: '10月29日', maxTemp: 12, minTemp: 1, rain: false, sunny: true, windSpeed: 4, windDir: 'N' },
  { data: '10月30日', maxTemp: 14, minTemp: 2, rain: false, sunny: true, windSpeed: 2, windDir: 'WN' },
  { data: '10月31日', maxTemp: 16, minTemp: 4, rain: false, sunny: true, windSpeed: 2, windDir: 'WS' }
];
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'map',
  callback(row) {
    row.range = [ row.minTemp, row.maxTemp ];
    return row;
  }
});
const chart = new G2.Chart({
  container: 'container',
  forceFit: true,
  height: 500,
  padding: [ 50, 50, 50, 50 ]// 上右下左
});
chart.tooltip({
  htmlContent(title, items) {
    const data = items[0].point._origin;
    const titleDom = '<div class ="custom-tooltip-title">' + data.data + '</div>';
    const tempDom = '<div class = "custom-tooltip-value">'
      + '<div class = "custom-tooltip-temp"><span>低温</span>' + data.minTemp + '</div>'
      + '<div class = "custom-tooltip-temp"><span>高温</span>' + data.maxTemp + '</div>'
      + '</div>';
    const windDom = '<div class = "custom-tooltip-wind">风向:' + data.windDir + ',  风速:' + data.windSpeed + '</div>';
    let domClass;
    if (data.rain === true) {
      domClass = ' rain';
    } else if (data.sunny === true) {
      domClass = ' sun';
    } else {
      domClass = ' cloud';
    }
    return '<div class="custom-tooltip' + domClass + '">' + titleDom + tempDom + windDom + '</div>';
  }
});
chart.source(dv, {
  data: {
    tickCount: 10
  },
  minTemp: {
    max: 30,
    min: 0
  },
  maxTemp: {
    max: 30,
    min: 0
  }
});
chart.axis('minTemp', false);
chart.axis('maxTemp', false);
chart.legend(false);
chart.interval().position('data*range').size(4)
  .color('#EBEDF0');
chart.point().position('data*minTemp').size(5)
  .color('minTemp', [ '#6ab7da', '#806bd9', '#da6bcc' ])
  .shape('circle');
chart.point().position('data*maxTemp').size(5)
  .color('maxTemp', [ '#6ab7da', '#806bd9', '#da6bcc' ])
  .shape('circle');
chart.render();
