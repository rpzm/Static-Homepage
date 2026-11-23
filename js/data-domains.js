// 我的米表数据
const domainsData = {
    'zh-CN': {
        title: '我的米表',
        description: '以下是我持有的域名，包括在用及待售的域名。',
        categories: [
            {
                title: '主要在用域名',
                domains: [
                    { name: 'rpzm.com', status: '在用', description: '主域名，个人自用' },
                    { name: 'nnkin.com', status: '停用', description: '备域名，个人自用' },
                ]
            },
            {
                title: '待售/投资域名',
                domains: [
                    { name: '1145.net', status: '待售', description: '4位数字域名' },
                    { name: '8246.net', status: '待售', description: '4位数字域名' },
                    { name: 'chenyinuo.top', status: '待售', description: '三拼域名' },
                ]
            },
        ]
    },
    'zh-TW': {
        title: '我的米表',
        description: '以下是我持有的一些域名，包括在用的以及待售的域名。',
        categories: [
            {
                title: '主要在用域名',
                domains: [
                    { name: 'rpzm.com', status: '在用', description: '主域名，個人自用' },
                    { name: 'nnkin.com', status: '停用', description: '備用域名，個人自用' },
                ]
            },
            {
                title: '待售/投資域名',
                domains: [
                    { name: '1145.net', status: '待售', description: '4位數字域名' },
                    { name: '8246.net', status: '待售', description: '4位數字域名' },
                    { name: 'chenyinuo.top', status: '待售', description: '三拼域名' },
                ]
            },
        ]
    },
    'en': {
        title: 'My Domain Portfolio',
        description: 'Below are some domains I own, including those in use and for sale.',
        categories: [
            {
                title: 'Main Domains in Use',
                domains: [
                    { name: 'rpzm.com', status: 'In Use', description: 'Primary domain, personal use' },
                    { name: 'nnkin.com', status: 'Suspended', description: 'Backup domain, personal use' },
                ]
            },
            {
                title: 'For Sale/Investment Domains',
                domains: [
                    { name: '1145.net', status: 'For Sale', description: '4-digit number domain' },
                    { name: '8246.net', status: 'For Sale', description: '4-digit number domain' },
                    { name: 'chenyinuo.top', status: 'For Sale', description: 'Three Pinyin domain' },
                ]
            },
        ]
    },
    'ko': {
        title: '도메인 목록',
        description: '아래는 제가 소유한 도메인 목록입니다. 사용 중인 도메인과 판매 중인 도메인이 포함됩니다.',
        categories: [
            {
                title: '주요 사용 중인 도메인',
                domains: [
                    { name: 'rpzm.com', status: '사용 중', description: '메인 도메인, 개인용' },
                    { name: 'nnkin.com', status: '중단됨', description: '백업 도메인, 개인용' },
                ]
            },
            {
                title: '판매/투자 도메인',
                domains: [
                    { name: '1145.net', status: '판매 중', description: '4자리 숫자 도메인' },
                    { name: '8246.net', status: '판매 중', description: '4자리 숫자 도메인' },
                    { name: 'chenyinuo.top', status: '판매 중', description: '삼음절 도메인' },
                ]
            },
        ]
    },
    'ja': {
        title: 'ドメイン一覧',
        description: '以下は私が所有しているドメインの一覧です。使用中、販売中のドメインを含みます。',
        categories: [
            {
                title: '主要使用中ドメイン',
                domains: [
                    { name: 'rpzm.com', status: '使用中', description: 'メインドメイン、個人利用' },
                    { name: 'nnkin.com', status: '停止中', description: 'バックアップドメイン、個人利用' },
                ]
            },
            {
                title: '販売中/投資ドメイン',
                domains: [
                    { name: '1145.net', status: '販売中', description: '4桁数字ドメイン' },
                    { name: '8246.net', status: '販売中', description: '4桁数字ドメ인' },
                    { name: 'chenyinuo.top', status: '販売中', description: '三拼ドメイン' },
                ]
            },
        ]
    }
};