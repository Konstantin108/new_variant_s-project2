<template>
    <div class="wrapper">
        <div class="top">
            <header class="header center">
                <div class="header__left">
                    <a class="logo" href="/"><img src="../assets/img/logo.png" alt="logo" class="logo__img"><span
                            class="bran_weight">BRAN</span><span class="special__color_logo">D</span></a>
                    <form class="header__form" action="#">
                        <details class="browse details_browse">
                            <summary class="summary_browse">Browse</summary>
                            <div class="drop_details drop__browse">
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__il">
                                        <li class="drop__list"><a href="/product" class="drop__link">Dresses</a></li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Tops</a></li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Sweaters/Knits</a>
                                        </li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Jackets/Coats</a>
                                        </li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Blazers</a></li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Denim</a></li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Leggings/Pants</a>
                                        </li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Skirts/Shorts</a>
                                        </li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Accessories</a>
                                        </li>
                                    </ul>
                                    <h3 class="drop__h3">Men</h3>
                                    <ul class="drop__il">
                                        <li class="drop__list"><a href="/product" class="drop__link">Tees/Tank tops</a>
                                        </li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Shirts/Polos</a>
                                        </li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Sweaters</a></li>
                                        <li class="drop__list"><a href="/product"
                                                                  class="drop__link">Sweatshirts/Hoodies</a>
                                        </li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Blazers</a></li>
                                        <li class="drop__list"><a href="/product" class="drop__link">Jackets/vests</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                        <filter-el></filter-el>
                    </form>
                </div>
                <div class="header__right">
                    <cart ref="cart"></cart>
                    <a href="#" class="button">My accaunt<img src="img/white_arrow.png" alt="white_arrow"
                                                              class="white_arrow"></a>
                </div>
            </header>

            <Navbar></Navbar>


            <router-view></router-view>
        </div>
            <footer class="footer">
                <div class="beach_color">
                    <div class="block_beach">
                        <figure class="left__block_beach">
                            <div class="photo_block"><img src="../assets/img/women_face.png" alt="women__face" class="women__face">
                            </div>
                            <div class="only__text_beach">
                                <p class="all__text">&laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi,
                                    a&nbsp;pulvinar purus condimentum&nbsp;a. Aliquam condimentum mattis neque sed
                                    pretium&raquo;</p>
                                <p class="name__text">Bin Burhan
                                    <br><span class="special__color_beach">Dhaka, Bd</span></p>
                                <div class="line__beach"></div>
                                <div class="line__beach"></div>
                                <div class="line__beach"></div>
                            </div>
                        </figure>
                        <div class="div right__block_beach">
                            <p class="right__block_beach">Subscribe
                                <br><span class="special__size">FOR OUR NEWLETTER AND PROMOTION</span></p>
                            <br>
                            <form action="#" class="subscribe__form">
                                <input type="email" class="beach__subscribe" placeholder="Enter Your Email">
                                <button
                                        class="beach_subscribe_button">Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="contacts_info center">
                    <div class="big__block">
                        <a class="logo1" href="index.html"><img src="../assets/img/logo.png" alt="logo" class="logo__img1"><span
                                class="bran_weight">BRAN</span><span class="special_color1">D</span></a>
                        <div class="info__text">Objectively transition extensive data rather than cross functional solutions.
                            Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits. Intrinsicly
                            syndicate an&nbsp;expanded array of&nbsp;processes and cross-unit partnerships.
                            <br>
                            <br>Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize
                            superior initiatives for wireless technologies. Dynamically optimize.
                        </div>
                    </div>
                    <nav class="new_menu_block">
                        <ul class="new_menu">
                            <li class="new_menu_list first_menu_link"><a href="#" class="new_menu_link first_item">COMPANY</a>
                            </li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">Home</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">Shop</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">About</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">How It Works</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">Contact</a></li>
                        </ul>
                    </nav>
                    <nav class="new_menu_block">
                        <ul class="new_menu">
                            <li class="new_menu_list first_menu_link"><a href="#"
                                                                         class="new_menu_link first_item">INFORMATION</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">Tearms & Condition</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">Privacy Policy</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">How to Buy</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">How to Sell</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">Promotion</a></li>
                        </ul>
                    </nav>
                    <nav class="new_menu_block">
                        <ul class="new_menu">
                            <li class="new_menu_list first_menu_link"><a href="#" class="new_menu_link first_item">SHOP
                                CATEGORY</a></li>
                            <li class="new_menu_list"><a href="/product" class="new_menu_link">Men</a></li>
                            <li class="new_menu_list"><a href="/singlepage" class="new_menu_link">Women</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">Child</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">Apparel</a></li>
                            <li class="new_menu_list"><a href="#" class="new_menu_link">Brows All</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="footer_end center">
                    <div class="copy_end">&copy; 2017 Brand All Rights Reserved.</div>
                    <div class="social_links_end"><a href="#" class="link_end"><i class="fab fa-facebook-f link__icon"></i></a>
                        <a href="#" class="link_end"><i class="fab fa-twitter link__icon"></i></a> <a href="#"
                                                                                                      class="link_end"><i
                                class="fab fa-linkedin-in link__icon"></i></a> <a href="#" class="link_end"><i
                                class="fab fa-pinterest-p link__icon"></i></a> <a href="#" class="link_end"><i
                                class="fab fa-google-plus-g link__icon"></i></a></div>
                </div>
            </footer>
        </div>
</template>

<script>
    import Navbar from '@/components/app/Navbar';
    import Cart from '../components/app/Cart';
    import FilterEl from '../components/app/Filter';

    export default {
        name: 'main-layout',
        components: {
            FilterEl,
            Navbar, Cart
        }
    }
</script>
