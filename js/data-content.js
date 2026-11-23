// 免责声明内容
const disclaimerContent = {
    'zh-CN': `
        <h4>网站内容免责声明</h4>
        <p>本网站（如品之茗的个人主页）为个人非商业性质网站，所有内容仅为个人分享、学习和交流使用。</p>
        <p>本站内容（包括但不限于文字、图片、代码、工具等）均为原创或经合法授权使用，如有侵权问题，请及时联系我处理。</p>
        
        <h4>链接免责声明</h4>
        <p>本站可能包含指向外部网站的链接，这些链接仅为提供更多信息，不代表本站认可其内容或对其负责。</p>
        <p>点击外部链接所产生的一切风险由用户自行承担，本站不承担任何责任。</p>
        
        <h4>技术免责声明</h4>
        <p>本站提供的工具和服务尽最大努力保证其可用性和安全性，但不提供任何形式的担保。</p>
        <p>因使用本站工具或服务导致的任何损失，本站不承担赔偿责任。</p>
        
        <h4>隐私声明</h4>
        <p>本站尊重用户隐私，不会主动收集用户个人信息。</p>
        <p>本站可能使用Cookies来改善用户体验，用户可以自行选择是否接受。</p>
        
        <h4>知识产权声明</h4>
        <p>本站原创内容（包括但不限于文字、图片、代码等）版权归如品之茗所有，未经许可不得转载。</p>
        <p>如需转载或引用，请注明出处并链接回原页面。</p>
        
        <h4>最终解释权</h4>
        <p>如品之茗保留对本免责声明的最终解释权。</p>
        <p>本声明可能会不定期更新，恕不另行通知。</p>
        
        <p style="margin-top: 20px; color: #666; font-style: italic;">
            最后更新：2024年11月
        </p>
    `,
    'zh-TW': `
        <h4>網站內容免責聲明</h4>
        <p>本網站（如品之茗的個人主頁）為個人非商業性質網站，所有內容僅為個人分享、學習和交流使用。</p>
        <p>本站內容（包括但不限於文字、圖片、代碼、工具等）均為原創或經合法授權使用，如有侵權問題，請及時聯繫我處理。</p>
        
        <h4>鏈接免責聲明</h4>
        <p>本站可能包含指向外部網站的鏈接，這些鏈接僅為提供更多信息，不代表本站認可其內容或對其負責。</p>
        <p>點擊外部鏈接所產生的一切風險由用戶自行承擔，本站不承擔任何責任。</p>
        
        <h4>技術免責聲明</h4>
        <p>本站提供的工具和服務盡最大努力保證其可用性和安全性，但不提供任何形式的擔保。</p>
        <p>因使用本站工具或服務導致的任何損失，本站不承擔賠償責任。</p>
        
        <h4>隱私聲明</h4>
        <p>本站尊重用戶隱私，不會主動收集用戶個人信息。</p>
        <p>本站可能使用Cookies來改善用戶體驗，用戶可以自行選擇是否接受。</p>
        
        <h4>知識產權聲明</h4>
        <p>本站原創內容（包括但不限於文字、圖片、代碼等）版權歸如品之茗所有，未經許可不得轉載。</p>
        <p>如需轉載或引用，請註明出處並鏈接回原頁面。</p>
        
        <h4>最終解釋權</h4>
        <p>如品之茗保留對本免責聲明的最終解釋權。</p>
        <p>本聲明可能會不定期更新，恕不另行通知。</p>
        
        <p style="margin-top: 20px; color: #666; font-style: italic;">
            最後更新：2024年11月
        </p>
    `,
    'en': `
        <h4>Website Content Disclaimer</h4>
        <p>This website (The homepage of Rupi Zhiming) is a personal non-commercial website, all content is for personal sharing, learning and communication only.</p>
        <p>The content of this site (including but not limited to text, images, code, tools, etc.) is either original or used with legal authorization. If there are any infringement issues, please contact me promptly.</p>
        
        <h4>Link Disclaimer</h4>
        <p>This site may contain links to external websites. These links are provided for additional information only and do not constitute endorsement or responsibility for their content.</p>
        <p>All risks arising from clicking on external links are borne by the user, and this site assumes no responsibility.</p>
        
        <h4>Technical Disclaimer</h4>
        <p>The tools and services provided by this site strive to ensure their availability and security, but provide no warranties of any kind.</p>
        <p>This site is not liable for any losses resulting from the use of its tools or services.</p>
        
        <h4>Privacy Statement</h4>
        <p>This site respects user privacy and does not actively collect personal information.</p>
        <p>This site may use cookies to improve user experience. Users can choose whether to accept them.</p>
        
        <h4>Intellectual Property Statement</h4>
        <p>Original content on this site (including but not limited to text, images, code, etc.) is copyrighted by Rupi Zhiming and may not be reproduced without permission.</p>
        <p>For reprinting or citation, please credit the source and link back to the original page.</p>
        
        <h4>Final Interpretation Rights</h4>
        <p>Rupi Zhiming reserves the right of final interpretation of this disclaimer.</p>
        <p>This statement may be updated periodically without notice.</p>
        
        <p style="margin-top: 20px; color: #666; font-style: italic;">
            Last Updated: November 2024
        </p>
    `,
    'ko': `
        <h4>웹사이트 콘텐츠 면책조항</h4>
        <p>이 웹사이트(如品之茗의 개인 홈페이지)는 개인의 비상업적 성격의 웹사이트이며, 모든 콘텐츠는 개인의 공유, 학습, 교류만을 위해 사용됩니다.</p>
        <p>본 사이트의 콘텐츠(문자, 이미지, 코드, 도구 등에 한정되지 않음)는 모두 원작 또는 합법적 인가를 받아 사용되고 있습니다. 저작권 침해 문제가 있으면 즉시 연락해 주십시오.</p>
        
        <h4>링크 면책조항</h4>
        <p>본 사이트에는 외부 웹사이트로의 링크가 포함될 수 있습니다. 이러한 링크는 추가 정보를 제공하기 위한 것이며, 그 콘텐츠를 승인하거나 책임을 지는 것을 의미하지 않습니다.</p>
        <p>외부 링크를 클릭함으로써 발생하는 모든 위험은 사용자 자신이 부담하며, 본 사이트는 어떠한 책임도 지지 않습니다.</p>
        
        <h4>기술 면책조항</h4>
        <p>본 사이트가 제공하는 도구와 서비스는 그 가용성과 안전성을 최대한 보장하도록 노력하지만, 어떠한 형태의 보증도 제공하지 않습니다.</p>
        <p>본 사이트의 도구나 서비스 사용으로 인해 발생한 손실에 대해서는 본 사이트는 배상 책임을 지지 않습니다.</p>
        
        <h4>개인정보 보호에 관한 성명</h4>
        <p>본 사이트는 사용자의 개인정보를 존중하며, 사용자의 개인정보를 적극적으로 수집하지 않습니다.</p>
        <p>본 사이트는 사용자 경험을 향상시키기 위해 쿠키를 사용할 수 있습니다. 사용자는 이를 수락할지 여부를 선택할 수 있습니다.</p>
        
        <h4>지적 재산권에 관한 성명</h4>
        <p>본 사이트의 원작 콘텐츠(문자, 이미지, 코드 등에 한정되지 않음)의 저작권은 如品之茗에 귀속되며, 허가 없이 전재할 수 없습니다.</p>
        <p>전재하거나 인용할 경우 출처를 명시하고 원래 페이지로 링크해 주십시오.</p>
        
        <h4>최종 해석권</h4>
        <p>如品之茗은 본 면책조항의 최종 해석권을 보유합니다.</p>
        <p>본 성명은 사전 통보 없이 정기적으로 업데이트될 수 있습니다.</p>
        
        <p style="margin-top: 20px; color: #666; font-style: italic;">
            최종 업데이트: 2024년 11월
        </p>
    `,
    'ja': `
        <h4>ウェブサイトコンテンツ免責事項</h4>
        <p>本ウェブサイト（如品之茗の個人ホームページ）は個人の非営利性質のウェブサイトであり、全てのコンテンツは個人の共有、学習、交流のみに使用されます。</p>
        <p>本サイトのコンテンツ（文章、画像、コード、ツールなどに限定されません）はすべてオリジナルまたは合法的な授権を受けて使用されています。著作権侵害の問題があれば、すぐにご連絡ください。</p>
        
        <h4>リンク免責事項</h4>
        <p>本サイトには外部ウェブサイトへのリンクが含まれる場合があります。これらのリンクは追加情報を提供するためのものであり、そのコンテンツを承認または責任を負うことを意味しません。</p>
        <p>外部リンクをクリックすることによって生じるすべてのリスクはユーザー自身が負担し、本サイトは一切の責任を負いません。</p>
        
        <h4>技術免責事項</h4>
        <p>本サイトが提供するツールやサービスは、その可用性と安全性を最大限に確保するよう努めていますが、いかなる形式の保証も提供しません。</p>
        <p>本サイトのツールやサービスの使用によって生じた損失については、本サイトは賠償責任を負いません。</p>
        
        <h4>プライバシーに関する声明</h4>
        <p>本サイトはユーザーのプライバシーを尊重し、ユーザーの個人情報を積極的に収集することはありません。</p>
        <p>本サイトはユーザーエクスペリエンスを向上させるためにCookiesを使用することがあります。ユーザーは受け入れるかどうかを選択できます。</p>
        
        <h4>知的財産権に関する声明</h4>
        <p>本サイトのオリジナルコンテンツ（文章、画像、コードなどに限定されません）の著作権は如品之茗に帰属し、許可なく転載することはできません。</p>
        <p>転載または引用する場合は、出典を明記し、元のページにリンクしてください。</p>
        
        <h4>最終解釈權</h4>
        <p>如品之茗は本免責事項の最終解釈權を留保します。</p>
        <p>本声明は予告なく随時更新される場合があります。</p>
        
        <p style="margin-top: 20px; color: #666; font-style: italic;">
            最終更新：2024年11月
        </p>
    `
};

// 建站历史内容
const historyContent = {
    'zh-CN': `
        <h4>博客概述</h4>
        <p>此博客是用于记录我日常工作中遇到的一些实际案例和我的生活笔记，我将用文字形式将其记录下来，并分享于互联网，希望部分博文内容可以对同行的你有所帮助。本人文字功底有限，文章可能会出现各种错别字、语法错误、逻辑错误、语句不通等现象，恳请谅解。</p>
        <p>欢迎您在本站留言、评论，与我互动交流。同时希望您在这里能找到感兴趣的内容，收获知识和乐趣。</p>
        
        <h4>建站经历</h4>
        <p><strong>2008年</strong> - 开始接触Web开发，当时正值WAP网站盛行，对创建属于自己的网站产生了浓厚兴趣。</p>
        <p><strong>2010年</strong> - 购买并注册了第一个"虚拟空间"和.com域名，托管于衡天主机。使用Discuz!创建了一个门户网站，当时的备案流程是从IDC服务商处邮寄幕布，采用手持身份证拍照的方式。后因无心经营，域名和空间到期后被强制回收。</p>
        <p><strong>2016年</strong> - 在阿里云注册域名并购买ECS服务器，域名为uulab.org。期间也注册了其他域名，并使用WordPress建站程序开始撰写技术内容博客。一直用心经营和写作，2021年由于工作繁忙及婚后生活较忙，无暇管理，导致ECS服务器到期被释放。</p>
        <p><strong>2023年</strong> - 孩子快两岁了，重新拾笔开始写博客。为避免再次发生因忙碌导致服务器被释放的情况，索性一次性购买了5年的服务器，同时注册了nnkin.com域名。</p>
        <p><strong>2024年</strong> - 注册了rpzm.com域名，并将网站迁移至此域名。</p>
        
        <h4>建站环境</h4>
        <div class="history-item">
            <strong>服务器：</strong>腾讯云CVM服务器 · 2C2G1M (5年期)
        </div>
        <div class="history-item">
            <strong>域名注册：</strong>腾讯云 (2年期)
        </div>
        <div class="history-item">
            <strong>PHP版本：</strong>8.2
        </div>
        <div class="history-item">
            <strong>MySQL版本：</strong>8.0
        </div>
        <div class="history-item">
            <strong>Web服务器：</strong>Nginx
        </div>
        
        <div class="history-timeline">
            <div class="timeline-item">
                <div class="timeline-year">2008</div>
                <div class="timeline-content">初识Web开发，对建站产生兴趣</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2010</div>
                <div class="timeline-content">第一个虚拟空间+Discuz!门户网站</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2016</div>
                <div class="timeline-content">阿里云ECS+WordPress技术博客</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2023</div>
                <div class="timeline-content">腾讯云5年服务器+nnkin.com域名</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2024</div>
                <div class="timeline-content">迁移至rpzm.com域名至今</div>
            </div>
        </div>
        
        <p class="history-note">
            <i class="fas fa-lightbulb"></i> 从2008年至今，从WAP时代到移动互联网时代，见证了Web技术的变迁与发展。每一次重启都是新的开始，不变的是一直保持记录和分享的初心。
        </p>
    `,
    'zh-TW': `
        <h4>博客概述</h4>
        <p>此博客用於記錄我日常工作中遇到的一些實際案例和我的生活筆記，我將用文字形式將其記錄下來，並分享於互聯網，希望部分博文內容可以對同行的你有所幫助。本人文字功底有限，文章可能會出現各種錯別字、語法錯誤、邏輯錯誤、語句不通等現象，懇請諒解。</p>
        <p>歡迎您在本站留言、評論，與我互動交流。同時希望您在這裡能找到感興趣的內容，收獲知識和樂趣。</p>
        
        <h4>建站經歷</h4>
        <p><strong>2008年</strong> - 開始接觸Web開發，當時正值WAP網站盛行，對創建屬於自己的網站產生了濃厚興趣。</p>
        <p><strong>2010年</strong> - 購買並註冊了第一個"虛擬空間"和.com域名，託管於衡天主機。使用Discuz!創建了一個門戶網站，當時的備案流程是從IDC服務商處郵寄幕布，採用手持身份證拍照的方式。後因無心經營，域名和空間到期後被強制回收。</p>
        <p><strong>2016年</strong> - 在阿里雲註冊域名並購買ECS服務器，域名為uulab.org。期間也註冊了其他域名，並使用WordPress建站程序開始撰寫技術內容博客。一直用心經營和寫作，2021年由於工作繁忙及婚後生活較忙，無暇管理，導致ECS服務器到期被釋放。</p>
        <p><strong>2023年</strong> - 孩子快兩歲了，重新拾筆開始寫博客。為避免再次發生因忙碌導致服務器被釋放的情況，索性一次性購買了5年的服務器，同時註冊了nnkin.com域名。</p>
        <p><strong>2024年</strong> - 註冊了rpzm.com域名，並將網站遷移至此域名。</p>
        
        <h4>建站環境</h4>
        <div class="history-item">
            <strong>服務器：</strong>騰訊雲CVM服務器 · 2C2G1M (5年期)
        </div>
        <div class="history-item">
            <strong>域名註冊：</strong>騰訊雲 (2年期)
        </div>
        <div class="history-item">
            <strong>PHP版本：</strong>8.2
        </div>
        <div class="history-item">
            <strong>MySQL版本：</strong>8.0
        </div>
        <div class="history-item">
            <strong>Web服務器：</strong>Nginx
        </div>
        
        <div class="history-timeline">
            <div class="timeline-item">
                <div class="timeline-year">2008</div>
                <div class="timeline-content">初識Web開發，對建站產生興趣</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2010</div>
                <div class="timeline-content">第一個虛擬空間+Discuz!門戶網站</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2016</div>
                <div class="timeline-content">阿里雲ECS+WordPress技術博客</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2023</div>
                <div class="timeline-content">騰訊雲5年服務器+nnkin.com域名</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2024</div>
                <div class="timeline-content">遷移至rpzm.com域名至今</div>
            </div>
        </div>
        
        <p class="history-note">
            <i class="fas fa-lightbulb"></i> 從2008年至今，從WAP時代到移動互聯網時代，見證了Web技術的變遷與發展。每一次重啟都是新的開始，不變的是一直保持記錄和分享的初心。
        </p>
    `,
    'en': `
        <h4>Blog Overview</h4>
        <p>This blog is used to record some practical cases I encounter in my daily work and my life notes. I document them in text form and share them on the internet, hoping that some blog content can be helpful to colleagues in the same field. My writing skills are limited, so articles may contain various typos, grammatical errors, logical errors, and incoherent sentences. Your understanding is appreciated.</p>
        <p>You are welcome to leave comments and interact with me on this site. I hope you can find interesting content here and gain knowledge and enjoyment.</p>
        
        <h4>Site Building Experience</h4>
        <p><strong>2008</strong> - Began learning web development during the WAP website boom, developing a strong interest in creating my own website.</p>
        <p><strong>2010</strong> - Purchased and registered the first "virtual space" and .com domain, hosted on Hengtian Hosting. Created a portal website using Discuz! The filing process involved receiving a backdrop from the IDC provider and taking photos with ID card in hand. Later, due to lack of management, the domain and space expired and were forcibly reclaimed.</p>
        <p><strong>2016</strong> - Registered a domain and purchased ECS server on Alibaba Cloud with the domain uulab.org. Also registered other domains and began writing technical content blogs using WordPress. Managed diligently until 2021 when busy work and post-marriage life left no time for management, causing the ECS server to expire and be released.</p>
        <p><strong>2023</strong> - With my child almost two years old, I started writing blogs again. To avoid server release due to busyness, I purchased a 5-year server upfront and registered the nnkin.com domain.</p>
        <p><strong>2024</strong> - Registered the rpzm.com domain and migrated the website to this domain.</p>
        
        <h4>Site Environment</h4>
        <div class="history-item">
            <strong>Server:</strong> Tencent Cloud CVM Server · 2C2G1M (5-year term)
        </div>
        <div class="history-item">
            <strong>Domain Registration:</strong> Tencent Cloud (2-year term)
        </div>
        <div class="history-item">
            <strong>PHP Version:</strong> 8.2
        </div>
        <div class="history-item">
            <strong>MySQL Version:</strong> 8.0
        </div>
        <div class="history-item">
            <strong>Web Server:</strong> Nginx
        </div>
        
        <div class="history-timeline">
            <div class="timeline-item">
                <div class="timeline-year">2008</div>
                <div class="timeline-content">First exposure to web development, interest in site building</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2010</div>
                <div class="timeline-content">First virtual space + Discuz! portal website</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2016</div>
                <div class="timeline-content">Alibaba Cloud ECS + WordPress technical blog</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2023</div>
                <div class="timeline-content">Tencent Cloud 5-year server + nnkin.com domain</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2024</div>
                <div class="timeline-content">Migrated to rpzm.com domain to present</div>
            </div>
        </div>
        
        <p class="history-note">
            <i class="fas fa-lightbulb"></i> From 2008 to present, from the WAP era to the mobile internet era, witnessing the evolution and development of web technology. Each restart is a new beginning, with the constant being the original intention of keeping records and sharing.
        </p>
    `,
    'ko': `
        <h4>블로그 개요</h4>
        <p>이 블로그는 제 일상 업무에서 접하는 실제 사례와 생활 기록을 기록하기 위해 사용됩니다. 저는 이를 문자 형태로 기록하여 인터넷에 공유하며, 일부 블로그 내용이 동업자 여러분께 도움이 되기를 바랍니다. 제 문장력은 제한적이므로, 글에는 다양한 오타, 문법 오류, 논리 오류, 문장의 불일치 등이 나타날 수 있습니다. 양해 부탁드립니다.</p>
        <p>이 사이트에 댓글을 남기고 저와 상호 작동하실 수 있습니다. 또한 여기서 흥미로운 내용을 찾고 지식과 즐거움을 얻으시길 바랍니다.</p>
        
        <h4>사이트 구축 경력</h4>
        <p><strong>2008년</strong> - Web 개발에 처음 접촉, 당시 WAP 웹사이트가 성행하며 자신만의 웹사이트 생성에 흥미를 느꼈습니다.</p>
        <p><strong>2010년</strong> - 첫 번째 "가상 공간"과 .com 도메인을 구매 등록하여 Hengtian 호스팅에 호스팅했습니다. Discuz!를 사용하여 포털 웹사이트를 만들었으며, 당시의 등록 절차는 IDC 서비스 제공업체로부터 배경 천을 우편으로 받아 신분증을 들고 사진을 찍는 방식이었습니다. 이후 운영을 하지 않아 도메인과 공간이 만료되어 강제 회수되었습니다.</p>
        <p><strong>2016년</strong> - Alibaba Cloud에서 도메인을 등록하고 ECS 서버를 구매했습니다(도메인: uulab.org). 그 기간 동안 다른 도메인도 등록하고 WordPress 사이트 구축 프로그램을 사용하여 기술 콘텐츠 블로그를 쓰기 시작했습니다. 2021년까지 성심껏 운영하고 글을 썼지만, 업무의 바쁨과 결혼 후 생활로 인해 관리할 시간이 없어 ECS 서버가 만료되어 해제되었습니다.</p>
        <p><strong>2023년</strong> - 아이가 거의 2살이 되자, 다시 펜을 들고 블로그를 쓰기 시작했습니다. 바쁨으로 인해 서버가 해제되는 상황을 피하기 위해 일부러 5년치 서버를 일괄 구매하고 nnkin.com 도메인을 등록했습니다.</p>
        <p><strong>2024년</strong> - rpzm.com 도메인을 등록하고 웹사이트를 이 도메인으로 이전했습니다.</p>
        
        <h4>사이트 환경</h4>
        <div class="history-item">
            <strong>서버:</strong> Tencent Cloud CVM 서버 · 2C2G1M (5년 계약)
        </div>
        <div class="history-item">
            <strong>도메인 등록:</strong> Tencent Cloud (2년 계약)
        </div>
        <div class="history-item">
            <strong>PHP 버전:</strong> 8.2
        </div>
        <div class="history-item">
            <strong>MySQL 버전:</strong> 8.0
        </div>
        <div class="history-item">
            <strong>Web 서버:</strong> Nginx
        </div>
        
        <div class="history-timeline">
            <div class="timeline-item">
                <div class="timeline-year">2008</div>
                <div class="timeline-content">Web 개발 처음 접촉, 사이트 구축에 흥미</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2010</div>
                <div class="timeline-content">첫 번째 가상 공간+Discuz! 포털 웹사이트</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2016</div>
                <div class="timeline-content">Alibaba Cloud ECS+WordPress 기술 블로그</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2023</div>
                <div class="timeline-content">Tencent Cloud 5년 서버+nnkin.com 도메인</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2024</div>
                <div class="timeline-content">rpzm.com 도메인으로 이전하여 현재까지</div>
            </div>
        </div>
        
        <p class="history-note">
            <i class="fas fa-lightbulb"></i> 2008년부터 현재까지, WAP 시대에서 모바일 인터넷 시대까지, Web 기술의 변화와 발전을 목격해 왔습니다. 매번의 재시작은 새로운 시작이며, 변하지 않는 것은 기록과 공유를 유지하는 초심입니다.
        </p>
    `,
    'ja': `
        <h4>ブログ概要</h4>
        <p>このブログは、私の日常業務で遭遇する実際の事例と生活記録を記録するために使用しています。テキスト形式で記録し、インターネット上で共有しています。一部のブログ記事が同業者の方々のお役に立てば幸いです。私の文章力は限られているため、記事には様々な誤字、文法ミス、論理エラー、文脈の不整合などが含まれる可能性があります。ご理解いただければ幸いです。</p>
        <p>当サイトでのコメントや相互交流を歓迎します。また、ここで興味深いコンテンツを見つけ、知識と楽しみを得ていただければと思います。</p>
        
        <h4>サイト構築の経歴</h4>
        <p><strong>2008年</strong> - WAPサイトが全盛期だった頃、Web開発を学び始め、自分のサイトを作ることに強い関心を持ちました。</p>
        <p><strong>2010年</strong> - 初めての「バーチャルスペース」と.comドメインを購入・登録し、衡天ホスティングにホスティングしました。Discuz!を使用してポータルサイトを作成しました。当時の登録プロセスは、IDCプロバイダーから背景幕を受け取り、身分証を持った写真撮影を行う方式でした。その後、管理不足によりドメインとスペースが期限切れになり、強制回収されました。</p>
        <p><strong>2016年</strong> - アリババクラウドでドメインを登録し、ECSサーバーを購入しました（ドメイン：uulab.org）。その間にも他のドメインを登録し、WordPressを使用して技術コンテンツのブログを書き始めました。2021年まで熱心に管理・執筆していましたが、仕事の多忙さと結婚後の生活で管理時間が取れなくなり、ECSサーバーが期限切れで解放されました。</p>
        <p><strong>2023年</strong> - 子供が2歳になる頃、再びブログを書き始めました。多忙によるサーバー解放を避けるため、5年分のサーバーを一括購入し、nnkin.comドメインを登録しました。</p>
        <p><strong>2024年</strong> - rpzm.comドメインを登録し、サイトをこのドメインに移行しました。</p>
        
        <h4>サイト環境</h4>
        <div class="history-item">
            <strong>サーバー：</strong>Tencent Cloud CVMサーバー · 2C2G1M (5年契約)
        </div>
        <div class="history-item">
            <strong>ドメイン登録：</strong>Tencent Cloud (2年契約)
        </div>
        <div class="history-item">
            <strong>PHPバージョン：</strong>8.2
        </div>
        <div class="history-item">
            <strong>MySQLバージョン：</strong>8.0
        </div>
        <div class="history-item">
            <strong>Webサーバー：</strong>Nginx
        </div>
        
        <div class="history-timeline">
            <div class="timeline-item">
                <div class="timeline-year">2008</div>
                <div class="timeline-content">Web開発に初めて触れ、サイト構築に興味を持つ</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2010</div>
                <div class="timeline-content">初めてのバーチャルスペース+Discuz!ポータルサイト</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2016</div>
                <div class="timeline-content">アリババクラウドECS+WordPress技術ブログ</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2023</div>
                <div class="timeline-content">Tencent Cloud 5年サーバー+nnkin.comドメイン</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-year">2024</div>
                <div class="timeline-content">rpzm.comドメインに移行し現在に至る</div>
            </div>
        </div>
        
        <p class="history-note">
            <i class="fas fa-lightbulb"></i> 2008年から現在まで、WAP時代からモバイルインターネット時代へ、Web技術の変遷と発展を目の当たりにしてきました。毎回の再始動は新たな出発であり、変わらないのは記録と共有を続けるという初心です。
        </p>
    `
};