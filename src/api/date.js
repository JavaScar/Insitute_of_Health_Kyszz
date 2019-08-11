import axios from 'axios'

// dev地址
// export const ip = 'http://kyszz.51yyt.org'

// export const adminUrl = 'http://kyszz.51yyt.org/'

// export const MyUrl = 'http://192.168.54.103:8080/#/'

// build地址

export const ip = ''

export const adminUrl = 'http://kyszz.51yyt.org/'

export const MyUrl = 'http://kyszz.51yyt.org/Web/#/'

export const base = '/Api/WebApi'

export const upLoadSrc = ip + base

export const resNews = params => { return axios.post(`${ip}${base}/News.ashx`, params) }

export const resNewsDetail = params => { return axios.post(`${ip}${base}/NewsDetail.ashx`, params) }

export const resBanner = params => { return axios.post(`${ip}${base}/Banner.ashx`, params) }

export const resBannerDetail = params => { return axios.post(`${ip}${base}/BannerDetail.ashx`, params) }

export const resVideo = params => { return axios.post(`${ip}${base}/Video.ashx`, params) }

export const resLogin = params => { return axios.post(`${ip}${base}/Login.ashx`, params) }

export const resReport = params => { return axios.post(`${ip}${base}/Report.ashx`, params) }

export const resReportDetail = params => { return axios.post(`${ip}${base}/ReportDetail.ashx`, params) }
