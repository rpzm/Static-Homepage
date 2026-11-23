// ==================== 多语言数据定义 ====================

// 定义不同语言的文本
var translations = {
    'zh-CN': {
        title: '你好，我是陈阳！',
        intro: '很高兴你能找到这里！在这里，你可以查看我的博客及旅行相册或使用我的工具箱。<br>我将数据转化为温暖的电信号愉悦的与你共享。',
        catchMe: '找到我：',
        followMe: '或者，关注我：',
        blog: '博客',
        photos: '照片',
        tools: '工具',
        email: '邮件',
        moreContact: '更多联系方式',
        history: '建站历史',
        resume: '个人简历',
        friends: '我的朋友们',
        domains: '我的米表',
        disclaimer: '免责声明',
        copyright: '版权所有 2024 - CURRENTYEAR 如品之茗',
        domainAge: '域名年龄: DOMAINAGE 年',
        siteTime: '已稳定运行: DAYS 天 (YEARS 年 REMAININGDAYS 天)',
        domainsTitle: '我的米表',
        disclaimerTitle: '免责声明',
        friendsTitle: '我的朋友',
        historyTitle: '建站历史'
    },
    'zh-TW': {
        title: '你好，我是陳陽！',
        intro: '很高興你能找到這裡！在這裡，你可以查看我的部落格及旅行相冊或使用我的工具箱。<br>我將數據轉化為溫暖的電信號愉悅的與你共享。',
        catchMe: '找到我：',
        followMe: '或者，關注我：',
        blog: '部落格',
        photos: '照片',
        tools: '工具',
        email: '郵件',
        moreContact: '更多聯繫方式',
        history: '建站歷史',
        resume: '個人簡歷',
        friends: '我的朋友們',
        domains: '我的米表',
        disclaimer: '免責聲明',
        copyright: '版權所有 2024 - CURRENTYEAR 如品之茗',
        domainAge: '域名年齡: DOMAINAGE 年',
        siteTime: '網站運行時間: DAYS 天 (YEARS 年 REMAININGDAYS 天)',
        domainsTitle: '我的米表',
        disclaimerTitle: '免責聲明',
        friendsTitle: '我的朋友',
        historyTitle: '建站歷史'
    },
    'en': {
        title: 'Hello, I am Chen Yang!',
        intro: 'I\'m glad you found your way here! Here, you can view my blog and travel albums or use my toolbox.<br>I transform data into warm electrical signals to share with you joyfully.',
        catchMe: 'Find me:',
        followMe: 'Or, follow me:',
        blog: 'Blog',
        photos: 'Photos',
        tools: 'Tools',
        email: 'Email',
        moreContact: 'More contact options',
        history: 'Site History',
        resume: 'Resume',
        friends: 'My Friends',
        domains: 'My Domains',
        disclaimer: 'Disclaimer',
        copyright: 'Copyright 2024 - CURRENTYEAR Ru Pin Zhi Ming',
        domainAge: 'Domain age: DOMAINAGE years',
        siteTime: 'Site running time: DAYS days (YEARS years REMAININGDAYS days)',
        domainsTitle: 'My Domains',
        disclaimerTitle: 'Disclaimer',
        friendsTitle: 'My Friends',
        historyTitle: 'Site History'
    },
    'ko': {
        title: '안녕하세요, 저는 천양입니다!',
        intro: '여기까지 찾아주셔서 기쁩니다! 여기서 제 블로그와 여행 앨범을 보거나 제 도구 상자를 사용할 수 있습니다.<br>데이터를 따뜻한 전기 신호로 변환하여 즐겁게 공유합니다.',
        catchMe: '저를 찾아보세요:',
        followMe: '또는, 저를 팔로우하세요:',
        blog: '블로그',
        photos: '사진',
        tools: '도구',
        email: '이메일',
        moreContact: '기타 연락처',
        history: '사이트 역사',
        resume: '이력서',
        friends: '나의 친구들',
        domains: '도메인 목록',
        disclaimer: '면책조항',
        copyright: '저작권 2024 - CURRENTYEAR Ru Pin Zhi Ming',
        domainAge: '도메인 연령: DOMAINAGE년',
        siteTime: '사이트 운영 시간: DAYS일 (YEARS년 REMAININGDAYS일)',
        domainsTitle: '도메인 목록',
        disclaimerTitle: '면책조항',
        friendsTitle: '나의 친구',
        historyTitle: '사이트 역사'
    },
    'ja': {
        title: 'こんにちは、陳陽です！',
        intro: 'ここを見つけてくれて嬉しいです！ここでは、私のブログや旅行アルバムを閲覧し、私のツールボックスを使用することができます。<br>データを温かい電気信号に変換して喜んで共有します。',
        catchMe: '連絡先：',
        followMe: 'または、フォローしてください：',
        blog: 'ブログ',
        photos: '写真',
        tools: 'ツール',
        email: 'メール',
        moreContact: 'その他の連絡先',
        history: 'サイト構築の歴史',
        resume: '履歴書',
        friends: '私の友人たち',
        domains: 'ドメイン一覧',
        disclaimer: '免責事項',
        copyright: '著作権 2024 - CURRENTYEAR 如品之茗',
        domainAge: 'ドメイン年齢: DOMAINAGE 年',
        siteTime: 'サイト運営期間: DAYS 日 (YEARS 年 REMAININGDAYS 日)',
        domainsTitle: 'ドメイン一覧',
        disclaimerTitle: '免責事項',
        friendsTitle: '私の友達',
        historyTitle: 'サイト構築の歴史'
    }
};

// 温馨提示内容
const friendTipContent = {
    'zh-CN': {
        title: '即将离开本站',
        content: {
            intro: '您即将访问朋友网站：',
            url: '',
            notice: '请注意：',
            points: [
                '该链接将打开新的浏览器窗口',
                '请注意保护个人隐私信息',
                '访问内容由第三方网站负责',
                '请自行判断信息真实性和安全性'
            ]
        },
        cancel: '取消',
        confirm: '继续访问'
    },
    'zh-TW': {
        title: '即将离开本站',
        content: {
            intro: '您即将访问朋友网站：',
            url: '',
            notice: '请注意：',
            points: [
                '该链接将打开新的浏览器窗口',
                '请注意保护个人隐私信息',
                '访问内容由第三方网站负责',
                '请自行判断信息真实性和安全性'
            ]
        },
        cancel: '取消',
        confirm: '继续访问'
    },
    'en': {
        title: 'Leaving This Site',
        content: {
            intro: 'You are about to visit a friend\'s website:',
            url: '',
            notice: 'Please note:',
            points: [
                'This link will open in a new browser window',
                'Please protect your personal information',
                'Content is the responsibility of the third-party website',
                'Please judge the authenticity and security of information yourself'
            ]
        },
        cancel: 'Cancel',
        confirm: 'Continue'
    },
    'ko': {
        title: '사이트를 떠납니다',
        content: {
            intro: '친구의 웹사이트를 방문합니다:',
            url: '',
            notice: '주의:',
            points: [
                '이 링크는 새로운 브라우저 창에서 열립니다',
                '개인정보 보호에 주의하세요',
                '콘텐츠는 제3자 웹사이트의 책임입니다',
                '정보의 진실성과 안전성은 스스로 판단하세요'
            ]
        },
        cancel: '취소',
        confirm: '계속'
    },
    'ja': {
        title: 'サイトを離れます',
        content: {
            intro: '友人のウェブサイトにアクセスします：',
            url: '',
            notice: 'ご注意：',
            points: [
                'このリンクは新しいブラウザウィンドウで開きます',
                '個人情報の保護にご注意ください',
                'コンテンツは第三者サイトの責任です',
                '情報の信頼性と安全性はご自身で判斷してください'
            ]
        },
        cancel: 'キャンセル',
        confirm: '続行'
    }
};