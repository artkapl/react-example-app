import puppeteer from "puppeteer";
// puppeteer is a headless browser
// can write E2E tests and web crawlers
// headless browser führt auch JS aus, macht ein GET Request zb nicht

describe("When a user navigates to '/' and changes the input and clicks the button", () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch();
        // await puppeteer.launch( { headless: false }) --> opens actual browser
        // launch({ executablePath: "path to browser executable on server"})
        page = await browser.newPage();
    })

    it("should render the page correctly and add a new item to the list", async () => {
    await page.goto("http://localhost:3000/");
    // only works if server runs on 3000
    await page.waitForSelector("input[id=fruitName]");
    await page.$eval("input[id=fruitName]", (el) => (el.value = "abc"));

  });
});

// smoke tests = run when a new version is pushed to prod 
    // --> if smoke, rollback to old version
    // can set page.goto("htt://actualproductionserver")
    // if test fails, CI/CD immediately rolls back version
