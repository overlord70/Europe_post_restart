import {MakeRequest} from "../modules/http";
import {create_header, auto_reload} from "../modules/ui"
import { Background_code } from "./types";

const http = new MakeRequest()

const flex_ads = document.querySelector('.flex_ads')as HTMLElement

create_header()

auto_reload(flex_ads, Background_code)

 http.getData('/users').then(result => {
     console.log(result);
 })