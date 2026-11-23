// 朋友数据
const friendsData = {
    'zh-CN': {
        title: '我的朋友',
        friends: [
            {
                name: 'Vind Log',
                website: 'https://vindlog.com',
                avatar: 'https://vindlog.com/images/icon.png',
                description: '摄影和音乐爱好分享'
            },
            {
                name: '鸢栀的仓库',
                website: 'https://yuazhi.cn',
                avatar: 'https://cdn.rjjr.cn/avatar/9EA646CB999802B8B43670CD841DB313.png',
                description: '每天写下自己的喜好'
            },
            {
                name: '严千屹',
                website: 'https://blog.qianyios.top',
                avatar: 'https://blog.qianyios.top/img/fluid.png',
                description: '一个简简单单的云计算运维博客'
            },
            {
                name: 'Wcowin\'s Blog',
                website: 'https://wcowin.work',
                avatar: 'https://s1.imagehub.cc/images/2025/12/06/28380affd86b014a6dcaf082fcc97064.png',
                description: '循此苦旅，以达星辰'
            },
            {
                name: '全局变量',
                website: 'https://ilogs.cn/',
                avatar: 'https://ilogs.cn/images/avatar.jpg',
                description: '记录生活中的平凡事'
            },
            {
                name: '品味苏州',
                website: 'https://pwsz.com/',
                avatar: 'https://pwsz.com/myimg/pwsz_logo.png',
                description: '吴侬软语、小桥流水，最美在苏州。'
            },
            {
                name: '威言威语',
                website: 'https://www.weisay.com/blog/',
                avatar: 'https://img.weisay.com/weiimg/article/3_01.jpg',
                description: '我愿像茶，苦涩留心，清香予人。'
            },
            {
                name: '飞絮落叶雪',
                website: 'https://www.mrhe.net/',
                avatar: 'https://media.rpzm.com/2026/01/me.jpg',
                description: '分享老何的故事'
            },
            {
                name: '老罗',
                website: 'https://www.luosir.cn/',
                avatar: 'https://q2.qlogo.cn/g?b=qq&nk=10936102&s=100',
                description: '生活就是折腾'
            }
        ]
    },
    'zh-TW': {
        title: '我的朋友',
        friends: [
            {
                name: 'Vind Log',
                website: 'https://vindlog.com',
                avatar: 'https://vindlog.com/images/icon.png',
                description: '攝影和音樂愛好分享'
            },
            {
                name: '鳶梔的倉庫',
                website: 'https://yuazhi.cn',
                avatar: 'https://cdn.rjjr.cn/avatar/9EA646CB999802B8B43670CD841DB313.png',
                description: '每天寫下自己的喜好'
            },
            {
                name: '嚴千屹',
                website: 'https://blog.qianyios.top',
                avatar: 'https://blog.qianyios.top/img/fluid.png',
                description: '一個簡簡單單的雲計算運維部落格'
            },
            {
                name: 'Wcowin\'s Blog',
                website: 'https://wcowin.work',
                avatar: 'https://s1.imagehub.cc/images/2025/12/06/28380affd86b014a6dcaf082fcc97064.png',
                description: '循此苦旅，以達星辰'
            },
            {
                name: '全局变量',
                website: 'https://ilogs.cn/',
                avatar: 'https://ilogs.cn/images/avatar.jpg',
                description: '記錄生活中的平凡事'
            },
            {
                name: '品味蘇州',
                website: 'https://pwsz.com/',
                avatar: 'https://pwsz.com/myimg/pwsz_logo.png',
                description: '吳儂軟語、小橋流水，最美在蘇州。'
            },
            {
                name: '威言威語',
                website: 'https://www.weisay.com/blog/',
                avatar: 'https://img.weisay.com/weiimg/article/3_01.jpg',
                description: '我願像茶，苦澀留心，清香予人。'
            },
            {
                name: '飛絮落葉雪',
                website: 'https://www.mrhe.net/',
                avatar: 'https://media.rpzm.com/2026/01/me.jpg',
                description: '分享老何的故事'
            },
            {
                name: '老羅',
                website: 'https://www.luosir.cn/',
                avatar: 'https://q2.qlogo.cn/g?b=qq&nk=10936102&s=100',
                description: '生活就是折騰'
            }
        ]
    },
    'en': {
        title: 'My Friends',
        friends: [
            {
                name: 'Vind Log',
                website: 'https://vindlog.com',
                avatar: 'https://vindlog.com/images/icon.png',
                description: 'Photography and music sharing'
            },
            {
                name: 'YuanZhi\'s Repository',
                website: 'https://yuazhi.cn',
                avatar: 'https://cdn.rjjr.cn/avatar/9EA646CB999802B8B43670CD841DB313.png',
                description: 'Write down your preferences every day'
            },
            {
                name: 'Yan Qianyi',
                website: 'https://blog.qianyios.top',
                avatar: 'https://blog.qianyios.top/img/fluid.png',
                description: 'A simple cloud computing operations blog'
            },
            {
                name: 'Wcowin\'s Blog',
                website: 'https://wcowin.work',
                avatar: 'https://s1.imagehub.cc/images/2025/12/06/28380affd86b014a6dcaf082fcc97064.png',
                description: 'Through this bitter journey to the stars'
            },
            {
                name: 'global variable',
                website: 'https://ilogs.cn/',
                avatar: 'https://ilogs.cn/images/avatar.jpg',
                description: 'Recording the ordinary things in life'
            },
            {
                name: 'Taste Suzhou',
                website: 'https://pwsz.com/',
                avatar: 'https://pwsz.com/myimg/pwsz_logo.png',
                description: 'Wu dialect, small bridges and flowing water, the most beautiful in Suzhou.'
            },
            {
                name: 'Wei\'s Words',
                website: 'https://www.weisay.com/blog/',
                avatar: 'https://img.weisay.com/weiimg/article/3_01.jpg',
                description: 'I wish to be like tea, bitter at heart, fragrant to others.'
            },
            {
                name: 'Flying Catkins Fallen Leaves Snow',
                website: 'https://www.mrhe.net/',
                avatar: 'https://media.rpzm.com/2026/01/me.jpg',
                description: 'Sharing Lao He\'s stories'
            },
            {
                name: 'Lao Luo',
                website: 'https://www.luosir.cn/',
                avatar: 'https://q2.qlogo.cn/g?b=qq&nk=10936102&s=100',
                description: 'Life is about tinkering'
            }
        ]
    },
    'ko': {
        title: '나의 친구들',
        friends: [
            {
                name: 'Vind Log',
                website: 'https://vindlog.com',
                avatar: 'https://vindlog.com/images/icon.png',
                description: '사진과 음악 취미 공유'
            },
            {
                name: 'YuanZhi\'s Repository',
                website: 'https://yuazhi.cn',
                avatar: 'https://cdn.rjjr.cn/avatar/9EA646CB999802B8B43670CD841DB313.png',
                description: '매일 자신의 취향을 기록'
            },
            {
                name: 'Yan Qianyi',
                website: 'https://blog.qianyios.top',
                avatar: 'https://blog.qianyios.top/img/fluid.png',
                description: '간단한 클라우드 컴퓨팅 운영 블로그'
            },
            {
                name: 'Wcowin\'s Blog',
                website: 'https://wcowin.work',
                avatar: 'https://s1.imagehub.cc/images/2025/12/06/28380affd86b014a6dcaf082fcc97064.png',
                description: '이 고된 여정을 통해 별들에 도달하다'
            },
            {
                name: '전역 변수',
                website: 'https://ilogs.cn/',
                avatar: 'https://ilogs.cn/images/avatar.jpg',
                description: '일상 생활의 평범한 일들을 기록'
            },
            {
                name: '수저우 맛보기',
                website: 'https://pwsz.com/',
                avatar: 'https://pwsz.com/myimg/pwsz_logo.png',
                description: '우녕 방언, 작은 다리와 흐르는 물, 가장 아름다운 수저우.'
            },
            {
                name: '웨이의 말',
                website: 'https://www.weisay.com/blog/',
                avatar: 'https://img.weisay.com/weiimg/article/3_01.jpg',
                description: '나는 차처럼 되고 싶다, 마음은 쓴맛이지만 다른 사람에게는 향긋함을 준다.'
            },
            {
                name: '날리는 버들솜 떨어진 나뭇잎 눈',
                website: 'https://www.mrhe.net/',
                avatar: 'https://media.rpzm.com/2026/01/me.jpg',
                description: '라오 허의 이야기를 공유'
            },
            {
                name: '라오 루오',
                website: 'https://www.luosir.cn/',
                avatar: 'https://q2.qlogo.cn/g?b=qq&nk=10936102&s=100',
                description: '인생은 꾸준히 노력하는 것'
            }
        ]
    },
    'ja': {
        title: '私の友達',
        friends: [
            {
                name: 'Vind Log',
                website: 'https://vindlog.com',
                avatar: 'https://vindlog.com/images/icon.png',
                description: '写真と音楽の趣味を共有'
            },
            {
                name: '鳶梔の倉庫',
                website: 'https://yuazhi.cn',
                avatar: 'https://cdn.rjjr.cn/avatar/9EA646CB999802B8B43670CD841DB313.png',
                description: '毎日自分の好みを書く'
            },
            {
                name: '厳千屹',
                website: 'https://blog.qianyios.top',
                avatar: 'https://blog.qianyios.top/img/fluid.png',
                description: 'シンプルなクラウドコンピューティング運用ブログ'
            },
            {
                name: 'Wcowin\'s Blog',
                website: 'https://wcowin.work',
                avatar: 'https://s1.imagehub.cc/images/2025/12/06/28380affd86b014a6dcaf082fcc97064.png',
                description: 'この苦しい旅を経て星々に至る'
            },
            {
                name: 'グローバル変数',
                website: 'https://ilogs.cn/',
                avatar: 'https://ilogs.cn/images/avatar.jpg',
                description: '生活の中の平凡なことを記録する'
            },
            {
                name: '蘇州の味',
                website: 'https://pwsz.com/',
                avatar: 'https://pwsz.com/myimg/pwsz_logo.png',
                description: '呉語、小橋流水、最も美しい蘇州。'
            },
            {
                name: '威の言葉',
                website: 'https://www.weisay.com/blog/',
                avatar: 'https://img.weisay.com/weiimg/article/3_01.jpg',
                description: '私は茶のように、苦みは心に留め、香りは人に与えたい。'
            },
            {
                name: '飛絮落葉雪',
                website: 'https://www.mrhe.net/',
                avatar: 'https://media.rpzm.com/2026/01/me.jpg',
                description: 'ラオ・ホーの物語を共有'
            },
            {
                name: 'ラオ・ルオ',
                website: 'https://www.luosir.cn/',
                avatar: 'https://q2.qlogo.cn/g?b=qq&nk=10936102&s=100',
                description: '人生は工夫すること'
            }
        ]
    }
};