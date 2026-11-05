import asyncio
from playwright.async_api import async_playwright
async def m():
  async with async_playwright() as p:
    b=await p.chromium.launch(headless=True);pg=await b.new_page(viewport={"width":1280,"height":1800})
    e=[];pg.on("pageerror",lambda x:e.append(str(x)))
    await pg.goto("http://localhost:8080");await pg.wait_for_timeout(2500)
    await pg.locator("#managers").scroll_into_view_if_needed();await pg.wait_for_timeout(1500)
    await pg.locator("#managers").screenshot(path="m.png")
    print(await pg.evaluate("[...document.querySelectorAll('#managers img')].map(i=>i.alt+':'+i.naturalWidth)"),e)
    await b.close()
asyncio.run(m())
