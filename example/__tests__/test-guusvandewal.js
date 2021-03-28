describe("guusvandewal.nl", () => {
    async function dismissWelcomeNotice() {
        const button = await page.$("body > .cc-window > a.cc-allow");
        if (!button) { return; }
        await button.click();
        await page.waitFor(5000);
    }

   /* describe("/new", () => {
        it("looks as expected", async () => {
            await page.goto("https://guusvandewal.nl/");
            await dismissWelcomeNotice();
            expect(await page.screenshot()).toMatchImageSnapshot();
        });
    });*/


    describe("/guus", () => {
        it("looks the same or not", async () => {
            await page.goto("https://guusvandewal.nl/");
            await dismissWelcomeNotice();
            page.setViewport({ width: 1970, height: 1128 });
            expect(await page.screenshot()).toMatchImageSnapshot({ path: `${__dirname}/../guusvandewal.png` });
        });
    });
});
