/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/*
    import specific icons (Replace or add any other brand icons you need in here)
    Check out the official fontawesome page for all the available icons: https://fontawesome.com/search?o=r&m=free&f=brands
*/
/* import icons first */
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
    faXTwitter
)
