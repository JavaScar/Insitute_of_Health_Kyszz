import Vue from 'vue'
import Router from 'vue-router'

// 首页
import index from '@/views/index'
// 中心简介
import introductionToTheCentre from '@/views/introductionToTheCentre'
// 通知通告
import noticeAnnouncement from '@/views/noticeAnnouncement'
// 政策法规
import policiesAndRegulations from '@/views/policiesAndRegulations'
// 健康扶贫
import healthPovertyAlleviation from '@/views/healthPovertyAlleviation'
// 国际合作
import exchangeAndCoOperation from '@/views/exchangeAndCoOperation'
// 联系我们
import contactUs from '@/views/contactUs'
// 医研通入口
import yytbinessNtry from '@/views/yytbinessNtry'
// 医生工作站入口
import DocotorBinessNtry from '@/views/DocotorBinessNtry'
// 医研通入口
import newsInformation from '@/views/newsInformation'
// 新闻公共详情页
import publicDetail from '@/views/Child/publicDetail'
// 新闻公共详情页
import publicBannerDetail from '@/views/Child/publicBannerDetail'
// 人才资源服务中心
import resourcesOfTalents from '@/views/Child/resourcesOfTalents'
// 报告查询登录
import presentationLogin from '@/views/Child/presentationLogin'

// 报告查询
import allSearch from '@/views/Child/allSearch'

// 报告查询
import Presentation from '@/views/Child/presentation'

// 报告详情
import presentstionPublicDetail from '@/views/Child/presentstionPublicDetail'

// 报告查询
import LXDetail from '@/views/Child/LXDetail'
// 报告查询
import CSFDetail from '@/views/Child/CSFDetail'
// 报告查询
import HYDetail from '@/views/Child/HYDetail'
// 报告查询
import YJPDetail from '@/views/Child/YJPDetail'

// 404
import noPage from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/introductionToTheCentre',
      name: 'introductionToTheCentre',
      component: introductionToTheCentre
    },
    {
      path: '/noticeAnnouncement',
      name: 'noticeAnnouncement',
      component: noticeAnnouncement
    },
    {
      path: '/policiesAndRegulations',
      name: 'policiesAndRegulations',
      component: policiesAndRegulations
    },
    {
      path: '/healthPovertyAlleviation',
      name: 'healthPovertyAlleviation',
      component: healthPovertyAlleviation
    },
    {
      path: '/exchangeAndCoOperation',
      name: 'exchangeAndCoOperation',
      component: exchangeAndCoOperation
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/yytbinessNtry',
      name: 'yytbinessNtry',
      component: yytbinessNtry
    },
    {
      path: '/DocotorBinessNtry',
      name: 'DocotorBinessNtry',
      component: DocotorBinessNtry
    },
    {
      path: '/newsInformation',
      name: 'newsInformation',
      component: newsInformation
    },
    {
      path: '/publicDetail',
      name: 'publicDetail',
      component: publicDetail
    },
    {
      path: '/publicBannerDetail',
      name: 'publicBannerDetail',
      component: publicBannerDetail
    },
    {
      path: '/resourcesOfTalents',
      name: 'resourcesOfTalents',
      component: resourcesOfTalents
    },
    {
      path: '/presentationLogin',
      name: 'presentationLogin',
      component: presentationLogin
    },
    {
      path: '/Presentation',
      name: 'Presentation',
      component: Presentation
    },
    {
      path: '/presentstionPublicDetail',
      name: 'presentstionPublicDetail',
      component: presentstionPublicDetail
    },
    {
      path: '/allSearch',
      name: 'allSearch',
      component: allSearch
    },
    {
      path: '/LXDetail',
      name: 'LXDetail',
      component: LXDetail
    },
    {
      path: '/CSFDetail',
      name: 'CSFDetail',
      component: CSFDetail
    },
    {
      path: '/HYDetail',
      name: 'HYDetail',
      component: HYDetail
    },
    {
      path: '/YJPDetail',
      name: 'YJPDetail',
      component: YJPDetail
    },
    {
      path: '*',
      name: 'noPage',
      component: noPage

    }
  ]
})
