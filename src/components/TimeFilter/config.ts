import dayjs from 'dayjs'

export interface TimeOffsetConfig {
  origin?: Date | string
  mode?: 'add' | 'subtract'
  offset?: number
  type?: 'day' | 'week' | 'month' | 'year'
}

export class TimeItem {
  label: string = ''
  tips?: string = ''
  format?: string = 'YYYY-MM-DD'
  componentType?: string = 'date'
  isComponents?: boolean = false
  timeOffset?: TimeOffsetConfig = {}
  timeLimit?: [string | null, string | null] = [null, null]
  index?: number = -Infinity

  constructor(config?: Partial<TimeItem>) {
    if (config) {
      Object.assign(this, config)
    }
  }

  beforeConfirme(value: any): boolean {
    return true
  }

  disabledDate(time: Date, calendarValue?: any): boolean {
    return false
  }
}

export const componentConfig: Array<TimeItem> = [
  new TimeItem({
    label: '日',
    tips: '按日统计数据',
    format: 'YYYY-MM-DD',
    componentType: 'date',
    isComponents: true
  }),
  new TimeItem({
    label: '周',
    tips: '按周统计数据（周一至周日）',
    format: 'YYYY-MM-DD',
    componentType: 'week',
    isComponents: true
  }),
  new TimeItem({
    label: '月',
    tips: '按月统计数据',
    format: 'YYYY-MM',
    componentType: 'month',
    isComponents: true
  }),
  new TimeItem({
    label: '年',
    tips: '按年统计数据',
    format: 'YYYY',
    componentType: 'year',
    isComponents: true
  }),
  new TimeItem({
    label: '自定义',
    tips: '自定义时间范围',
    format: 'YYYY-MM-DD',
    componentType: 'daterange',
    isComponents: true
  }),
  new TimeItem({
    label: '7天',
    tips: '最近7天数据',
    format: 'YYYY-MM-DD',
    isComponents: false,
    timeOffset: {
      mode: 'subtract',
      offset: 6,
      type: 'day'
    }
  }),
  new TimeItem({
    label: '30天',
    tips: '最近30天数据',
    format: 'YYYY-MM-DD',
    isComponents: false,
    timeOffset: {
      mode: 'subtract',
      offset: 29,
      type: 'day'
    }
  })
]

export const typeMapLabel = (label: string): 'day' | 'week' | 'month' | 'year' => {
  const map: Record<string, 'day' | 'week' | 'month' | 'year'> = {
    '日': 'day',
    '周': 'week',
    '月': 'month',
    '年': 'year'
  }
  return map[label] || 'day'
}
