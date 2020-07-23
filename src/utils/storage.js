import Taro from '@tarojs/taro'

/**
 * 存储的
 */
export const Keys = {
  TokenKey: 'storeagetoken',
  UserKey: 'userkey',
  UserCardInfoKey: 'userCardInfoKey',
  SafeAreaTop: 'safeAreaTop',
  Platform: 'platform',
  SystemInfo: 'systeminfo',
  HistorywordKey: 'historywordKey',
  StatusBarHeight: 'statusBarHeight',
  RpxRate: 'RpxRate',
  /**分享人id */
  ShareuserId: 'shareuserId',
  /** 分享商品id */
  ShareGoodsId: 'shareGoodsId',
  /**渠道码 */
  Channel: 'Channel',
  WindowHeight: 'windowHeight',
  SceneOptions: 'SceneOptions',
  /**
   * 屏幕的screenHeight
   */
  ScreenHeight: 'ScreenHeight',
}


let TemptDate = {
}
/**
 *
 * @param {token 数据} token
 * @param
 */
export const saveToken = (token, sync = true) => {
  return set(Keys.TokenKey, token, sync)
}
/**
 * 获取token
 */
export const getToken = (sync = true) => {
  return get(Keys.TokenKey, sync)
}
/**
 * 注：RN 不支持同步
 * @param {*} key
 * @param {*} data
 * @param {是否同步 sync  默认同步， false 异步返回一个promise} sync
 */
export const set = (key, data, sync = true) => {
  if (sync) {
    return Taro.setStorageSync(key, data)
  }
  return Taro.setStorage({ key, data })
}
/**
 * 注：RN 不支持同步
 * @param {key} key
 * @param {是否同步} sync
 * readFromTemp 是否从缓存中读取
 */
export const get = (key, sync = true, readFromTemp = false) => {
  if (readFromTemp) {
    if (TemptDate[key] != null) {
      return TemptDate[key]
    }
  }
  if (sync) {
    const value = Taro.getStorageSync(key)
    TemptDate[key] = value
    return value
  } else {
    return Taro.getStorage({ key: key })
  }
}

export const SaveSystemInfo = () => {
  Taro.getSystemInfo({
    success: res => {
      TemptDate[Keys.SystemInfo] = res;
      set(Keys.SystemInfo, res)

      set(Keys.Platform, res.platform)

      let top = res.statusBarHeight ? res.statusBarHeight : 20
      top = res.safeArea ? res.safeArea.top : top
      set(Keys.SafeAreaTop, top)

      set(Keys.StatusBarHeight, res.statusBarHeight)
      set(Keys.WindowHeight, res.screenHeight)
      set(Keys.ScreenHeight, res.screenHeight)
      set(Keys.RpxRate, res.pixelRatio)
    }
  })
}
