import sliders from "./modules/sliders";
import popular from "./modules/popular";
import Fancybox from "@fancyapps/ui";
import tabs from "./modules/tabs";
import hideShow from "./modules/hide-show";

sliders();
popular();

try {
    tabs('.vacs__tab', '.vacs__tabs-content', '.vacs__tabs', 'vacs__tab--active');
} catch {}


try {
    hideShow('.vacancy-one__descr-text__active', '.vacancy-one__descr-text__button');
} catch {}