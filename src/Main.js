function Main() {
    const today = Common.GetCurrentYmd();
    const query = `from:コストコ会員限定メールマガジン after:${today}`;
    const threads = GmailApp.search(query);
    threads.forEach(thread => {
        const gmails = thread.getMessages();
        gmails.forEach(gmail => {
            const bodylist = gmail.getPlainBody().split('\r\n').slice(0, 9);
            // ３行目と４行目の条件が一致したらリンクを送信する
            const findIndex = bodylist.indexOf('画像付ﾒﾙﾏｶﾞはこちらでご覧いただけます。');
            if (findIndex > -1) {
                const url = bodylist[findIndex + 1].replace(' (PC専用ｻｲﾄ)', '');
                SendNotify([gmail.getSubject(), url]);
                sheetAccessor.Send(today, gmail.getSubject(), url);
            }
        });
    });
}