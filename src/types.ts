import { getRGB } from "../modules/ui"

export type User = {
  email: string;
  password: string;
  name: string;
  surname: string;
  password_cheking: string;
  checkbox: boolean;
}

export const Background_code = `
<div class="broshure">
<div style="background:${getRGB()};" class="grey">
  <img  src="/public/img/image 9.png" alt="">
</div>
<h3>Amazon</h3>
<p>Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise, </p>
<div class="flex_9">
  <div class="zero">
    <p>Сроки доставки:    <span>до 7 дней</span></p>
    <p>Комиссия на доставку  <span>0,68%</span></p>
  </div>
  <img src="/public/img/arrow-down-right.png" alt="">
</div>
</div>
`