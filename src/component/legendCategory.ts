import { Category } from '@antv/gui';
import { deepMix } from '@antv/util';
import {
  GuideComponentComponent as GCC,
  GuideComponentPosition,
} from '../runtime';

export type LegendCategoryOptions = {
  position?: GuideComponentPosition;
  formatter?: (d: any) => string;
};

const getMarker = (v: string) => {
  if (v === 'hollowPoint') return 'square';
  return v;
};

/**
 * Guide Component for ordinal color scale.
 * @todo Custom style.
 */
export const LegendCategory: GCC<LegendCategoryOptions> = (options) => {
  const { formatter = (d) => `${d}` } = options;
  return (scales, value, coordinate, theme) => {
    const { defaultColor } = theme;
    const { x, y, width, height } = value.bbox;

    const items: Map<string, any> = new Map();
    const { field } = scales[0].getOptions();
    scales.forEach((scale) => {
      const scaleOptions = scale.getOptions();
      const { domain, name } = scaleOptions;
      domain.forEach((d) => {
        let item = items.get(d);
        if (!item) item = { id: d, name: formatter(d), color: defaultColor };
        const key = name === 'shape' ? 'symbol' : name;
        item[key] = name === 'shape' ? getMarker(scale.map(d)) : scale.map(d);
        items.set(item.id, item);
      });
    });
    const { cols, autoWrap, ...guideCfg } = scales[0].getOptions().guide || {};
    const maxItemWidth = autoWrap && cols ? width / cols : undefined;
    const legendStyle = deepMix(
      {},
      {
        items: Array.from(items.values()),
        x,
        y,
        maxWidth: width,
        maxHeight: height,
        autoWrap,
        maxItemWidth,
        itemWidth: maxItemWidth,
        spacing: [8, 0],
        itemName: {
          style: {
            fontSize: 12,
          },
        },
        ...(field && {
          title: {
            content: Array.isArray(field) ? field[0] : field,
            style: {
              fontSize: 12,
              fontWeight: 'bold',
              fillOpacity: 1,
            },
          },
        }),
        itemMarker: {
          size: 8,
        },
      },
      guideCfg,
    );
    return new Category({ className: 'category-legend', style: legendStyle });
  };
};

LegendCategory.props = {
  defaultPosition: 'top',
  defaultOrder: 1,
  defaultSize: 40,
};
