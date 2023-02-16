import sliders from "./modules/sliders";
import popular from "./modules/popular";
import Fancybox from "@fancyapps/ui";
import tabs from "./modules/tabs";
import hideShow from "./modules/hide-show";
import accordions from "./modules/accordions";
import headerBtn from "./modules/header-btn";

sliders();
popular();
accordions();
headerBtn();

try {
    tabs('.vacs__tab', '.vacs__tabs-content', '.vacs__tabs', 'vacs__tab--active');
} catch {}

try {
    tabs('.tab', '.our-team .tabs__cont', '.our-team .tabs', 'tab--active');
} catch {}

try {
    hideShow('.vacancy-one__descr-text__active', '.vacancy-one__descr-text__button');
} catch {}